// src/app/pages/BookingPage.tsx

import { useState } from "react";
import { useParams, Link } from "react-router";
import { services } from "../data/services";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  CheckCircle,
  CreditCard,
  Shield,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  IndianRupee,
  FileText,
  Loader2,
  XCircle,
  RefreshCw,
  Smartphone,
  QrCode,
  Wallet,
  Building2,
} from "lucide-react";
import {
  useRazorpay,
  PaymentResponse,
  PaymentError,
  PaymentDetails,
} from "../hooks/useRazorpay";
import { COMPANY_DETAILS, UPI_APPS } from "../config/razorpay";

type BookingStep = "form" | "checkout" | "processing" | "success" | "failed";
type PaymentMethod = "all" | "upi" | "card" | "netbanking" | "wallet";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  date: string;
  time: string;
  notes: string;
}

export function BookingPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);
  const [step, setStep] = useState<BookingStep>("form");
  const [paymentId, setPaymentId] = useState<string>("");
  const [paymentErrorMessage, setPaymentErrorMessage] = useState<string>("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>("all");

  const { initiatePayment, initiateUPIPayment, isProcessing } = useRazorpay();

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    time: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({});

  // Get service price as number
  const getServicePrice = (): number => {
    if (!service) return 0;
    const priceMatch = service.price.match(/₹(\d+)/);
    return priceMatch ? parseInt(priceMatch[1], 10) : 299;
  };

  const servicePrice = getServicePrice();
  const platformFee = 49;
  const gst = Math.round((servicePrice + platformFee) * 0.18);
  const totalAmount = servicePrice + platformFee + gst;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <XCircle className="text-red-600" size={40} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service not found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all"
          >
            <ArrowLeft size={18} />
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const errors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Invalid pincode";
    }
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep("checkout");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name as keyof BookingFormData]) {
      setFormErrors({ ...formErrors, [name]: undefined });
    }
  };

  const handlePayment = (method: PaymentMethod = "all") => {
    setStep("processing");

    const paymentDetails: PaymentDetails = {
      amount: totalAmount,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone.replace(/\D/g, ""),
      serviceName: service.name,
      serviceId: service.id,
      bookingDate: formData.date,
      bookingTime: formData.time,
      address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
      notes: formData.notes,
      preferredMethod: method === "all" ? undefined : method,
    };

    const onSuccess = (response: PaymentResponse) => {
      setPaymentId(response.razorpay_payment_id);
      setStep("success");
    };

    const onFailure = (error: PaymentError) => {
      setPaymentErrorMessage(error.description);
      if (error.code !== "PAYMENT_CANCELLED") {
        setStep("failed");
      } else {
        setStep("checkout");
      }
    };

    if (method === "upi") {
      initiateUPIPayment(paymentDetails, onSuccess, onFailure);
    } else {
      initiatePayment(paymentDetails, onSuccess, onFailure);
    }
  };

  const handleRetryPayment = () => {
    setPaymentErrorMessage("");
    setStep("checkout");
  };

  const Icon = service.icon;

  // Success Screen
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600">Your booking has been confirmed</p>
          </div>

          {/* Payment Details */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Payment ID</span>
              <span className="text-sm font-mono text-green-700">
                {paymentId}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Amount Paid</span>
              <span className="text-lg font-bold text-green-700">
                ₹{totalAmount}
              </span>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="bg-orange-50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 rounded-full p-2">
                <Icon className="text-orange-600" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">{service.name}</div>
                <div className="text-sm text-orange-600">{service.price}</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={16} className="text-orange-500" />
                <span>
                  {new Date(formData.date).toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock size={16} className="text-orange-500" />
                <span>{formData.time}</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin size={16} className="text-orange-500 mt-0.5" />
                <span>
                  {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <User size={16} className="text-orange-500" />
                <span>{formData.name}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={16} className="text-orange-500" />
                <span>{formData.phone}</span>
              </div>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Mail className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Confirmation sent!</p>
                <p>
                  We've sent booking details to{" "}
                  <strong>{formData.email}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-orange-600 border-2 border-orange-500 rounded-full font-semibold hover:bg-orange-50 transition-all"
            >
              Book Another Service
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Need help with your booking?
            </p>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="text-orange-600 font-medium hover:text-orange-700"
            >
              Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Failed Screen
  if (step === "failed") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <XCircle className="text-red-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            {paymentErrorMessage || "Something went wrong with your payment"}
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-red-800">
              Don't worry! No amount has been deducted from your account. You
              can try again or choose a different payment method.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleRetryPayment}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <RefreshCw size={18} />
              Try Again
            </button>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-gray-600 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              Cancel Booking
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Need assistance?</p>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="text-orange-600 font-medium hover:text-orange-700"
            >
              Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Processing Screen
  if (step === "processing") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Loader2 className="text-orange-600 animate-spin" size={40} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Processing Payment
          </h1>
          <p className="text-gray-600 mb-6">
            Please complete the payment in the popup window
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle
                className="text-yellow-600 flex-shrink-0 mt-0.5"
                size={18}
              />
              <p className="text-sm text-yellow-800 text-left">
                Do not close this page or refresh while payment is in progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Checkout Screen with Payment Options
  if (step === "checkout") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setStep("form")}
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to booking details
          </button>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Summary - Left Side */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6">
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                      <CreditCard size={24} />
                      Checkout
                    </h1>
                    <p className="text-orange-100">
                      Choose your preferred payment method
                    </p>
                  </div>

                  <div className="p-6">
                    {/* Service & Customer Summary */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Service Details */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Icon size={18} className="text-orange-500" />
                          Service Details
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="font-medium text-gray-900">
                            {service.name}
                          </p>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={14} />
                            {new Date(formData.date).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={14} />
                            {formData.time}
                          </div>
                        </div>
                      </div>

                      {/* Customer Details */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <User size={18} className="text-orange-500" />
                          Customer Details
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="font-medium text-gray-900">
                            {formData.name}
                          </p>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone size={14} />
                            +91 {formData.phone}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={14} />
                            {formData.city}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods Section */}
                    <div className="mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Select Payment Method
                      </h2>

                      <div className="space-y-4">
                        {/* UPI Payment - Recommended */}
                        <div
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === "upi"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                          onClick={() => setSelectedPaymentMethod("upi")}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="bg-green-100 rounded-lg p-2">
                                <Smartphone
                                  className="text-green-600"
                                  size={24}
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  UPI Payment
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Pay using any UPI app
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                Recommended
                              </span>
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  selectedPaymentMethod === "upi"
                                    ? "border-orange-500 bg-orange-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {selectedPaymentMethod === "upi" && (
                                  <CheckCircle
                                    className="text-white"
                                    size={14}
                                  />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* UPI Apps */}
                          <div className="flex flex-wrap gap-3 mt-3">
                            {UPI_APPS.map((app) => (
                              <div
                                key={app.id}
                                className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200"
                              >
                                <img
                                  src={app.icon}
                                  alt={app.name}
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                  }}
                                />
                                <span className="text-sm text-gray-700">
                                  {app.name}
                                </span>
                              </div>
                            ))}
                            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                              <QrCode size={16} className="text-gray-600" />
                              <span className="text-sm text-gray-700">
                                QR Code
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card Payment */}
                        <div
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === "card"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                          onClick={() => setSelectedPaymentMethod("card")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 rounded-lg p-2">
                                <CreditCard
                                  className="text-blue-600"
                                  size={24}
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  Credit / Debit Card
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Visa, Mastercard, RuPay
                                </p>
                              </div>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedPaymentMethod === "card"
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedPaymentMethod === "card" && (
                                <CheckCircle className="text-white" size={14} />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Net Banking */}
                        <div
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === "netbanking"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                          onClick={() => setSelectedPaymentMethod("netbanking")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-purple-100 rounded-lg p-2">
                                <Building2
                                  className="text-purple-600"
                                  size={24}
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  Net Banking
                                </h3>
                                <p className="text-sm text-gray-500">
                                  All major banks supported
                                </p>
                              </div>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedPaymentMethod === "netbanking"
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedPaymentMethod === "netbanking" && (
                                <CheckCircle className="text-white" size={14} />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Wallet */}
                        <div
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === "wallet"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                          onClick={() => setSelectedPaymentMethod("wallet")}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-yellow-100 rounded-lg p-2">
                                <Wallet className="text-yellow-600" size={24} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  Wallets
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Paytm, PhonePe, Amazon Pay
                                </p>
                              </div>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedPaymentMethod === "wallet"
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedPaymentMethod === "wallet" && (
                                <CheckCircle className="text-white" size={14} />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Summary - Right Side */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Payment Summary
                  </h2>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Service Charge</span>
                      <span>₹{servicePrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Platform Fee</span>
                      <span>₹{platformFee}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>GST (18%)</span>
                      <span>₹{gst}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">₹{totalAmount}</span>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <button
                    onClick={() => handlePayment(selectedPaymentMethod)}
                    disabled={isProcessing}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        {selectedPaymentMethod === "upi" && (
                          <Smartphone size={20} />
                        )}
                        {selectedPaymentMethod === "card" && (
                          <CreditCard size={20} />
                        )}
                        {selectedPaymentMethod === "netbanking" && (
                          <Building2 size={20} />
                        )}
                        {selectedPaymentMethod === "wallet" && (
                          <Wallet size={20} />
                        )}
                        {selectedPaymentMethod === "all" && (
                          <IndianRupee size={20} />
                        )}
                        Pay ₹{totalAmount}
                      </>
                    )}
                  </button>

                  {/* Quick UPI Pay Button */}
                  {selectedPaymentMethod !== "upi" && (
                    <button
                      onClick={() => handlePayment("upi")}
                      className="w-full mt-3 flex items-center justify-center gap-2 px-6 py-3 bg-green-50 text-green-700 border border-green-200 rounded-xl font-medium hover:bg-green-100 transition-all"
                    >
                      <Smartphone size={18} />
                      Quick Pay with UPI
                    </button>
                  )}

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield size={16} className="text-green-500" />
                        <span>Secure Payment via Razorpay</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>256-bit SSL Encryption</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <RefreshCw size={16} className="text-green-500" />
                        <span>Easy Refund Policy</span>
                      </div>
                    </div>
                  </div>

                  {/* Accepted Payment Methods */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center mb-2">
                      Accepted Payment Methods
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        UPI
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        Cards
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        Net Banking
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        Wallets
                      </span>
                    </div>
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By proceeding, you agree to our{" "}
                    <Link
                      to="/terms-and-conditions"
                      className="text-orange-600 hover:underline"
                    >
                      Terms
                    </Link>{" "}
                    &{" "}
                    <Link
                      to="/refund-policy"
                      className="text-orange-600 hover:underline"
                    >
                      Refund Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Form Screen (Default)
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to service details
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Icon size={32} />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Book {service.name}
                  </h1>
                  <p className="text-orange-100">
                    Fill in the details to schedule your service
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Details
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-sm text-gray-500">Payment</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-sm text-gray-500">Confirm</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <User size={20} className="text-orange-500" />
                    Personal Information
                  </h3>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl text-gray-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-r-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          formErrors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="9876543210"
                        maxLength={10}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Address */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-orange-500" />
                    Service Address
                  </h3>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        formErrors.address ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="House/Flat No., Street, Area"
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          formErrors.city ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="City"
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                          formErrors.pincode
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="461115"
                        maxLength={6}
                      />
                      {formErrors.pincode && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.pincode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Section */}
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <Calendar size={20} className="text-orange-500" />
                  Schedule Service
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all ${
                        formErrors.date ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white ${
                        formErrors.time ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a time slot</option>
                      <option value="9:00 AM - 11:00 AM">
                        9:00 AM - 11:00 AM
                      </option>
                      <option value="11:00 AM - 1:00 PM">
                        11:00 AM - 1:00 PM
                      </option>
                      <option value="2:00 PM - 4:00 PM">
                        2:00 PM - 4:00 PM
                      </option>
                      <option value="4:00 PM - 6:00 PM">
                        4:00 PM - 6:00 PM
                      </option>
                      <option value="6:00 PM - 8:00 PM">
                        6:00 PM - 8:00 PM
                      </option>
                    </select>
                    {formErrors.time && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.time}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FileText size={16} />
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Any specific requirements or instructions..."
                />
              </div>

              {/* Service Summary */}
              <div className="mt-6 p-6 bg-orange-50 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="text-orange-600" size={24} />
                    <div>
                      <div className="font-bold text-gray-900">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {service.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">
                      {service.price}
                    </div>
                    <div className="text-xs text-gray-500">Starting price</div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 border-t border-orange-200 pt-3 mt-3">
                  * Additional charges may apply based on specific requirements.
                  Final price will be confirmed before payment.
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  By proceeding, you agree to our{" "}
                  <Link
                    to="/terms-and-conditions"
                    className="text-orange-600 hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-orange-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}