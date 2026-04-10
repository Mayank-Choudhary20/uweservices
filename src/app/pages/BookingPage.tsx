import { useState } from "react";
import { useParams, Link } from "react-router";
import { services } from "../data/services";
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle } from "lucide-react";

export function BookingPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);
  const [step, setStep] = useState<"form" | "success">("form");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
        <Link to="/services" className="text-orange-600 hover:text-orange-700">
          ← Back to services
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (step === "success") {
    const Icon = service.icon;
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your {service.name.toLowerCase()} has been successfully scheduled.
          </p>
          
          <div className="bg-orange-50 rounded-xl p-6 mb-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="text-orange-500" size={24} />
              <div>
                <div className="font-bold text-gray-900">{service.name}</div>
                <div className="text-sm text-orange-600">{service.price}</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-orange-500" />
                <span>{formData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-orange-500" />
                <span>{formData.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span>{formData.address}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            We've sent a confirmation to <strong>{formData.email}</strong>. Our professional will arrive at the scheduled time.
          </p>

          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="block w-full px-6 py-3 bg-white text-orange-600 border border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all"
            >
              Book Another Service
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
        >
          ← Back to service details
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
                  <h1 className="text-2xl md:text-3xl font-bold">Book {service.name}</h1>
                  <p className="text-orange-100">Fill in the details to schedule your service</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Personal Information</h3>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Service Details</h3>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} />
                      Service Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="123 Main St, City, State"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar size={16} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Clock size={16} />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                      <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Any specific details or requirements for the service..."
                />
              </div>

              {/* Service Summary */}
              <div className="mt-6 p-6 bg-orange-50 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-bold text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">{service.price}</div>
                    <div className="text-xs text-gray-600">Starting price</div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  Final price will be confirmed by the professional based on the specific job requirements.
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  Confirm Booking
                </button>
                <p className="text-center text-sm text-gray-600 mt-4">
                  By booking, you agree to our{" "}
                  <Link to="/terms-and-conditions" className="text-orange-600 hover:text-orange-700">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-orange-600 hover:text-orange-700">
                    privacy policy
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