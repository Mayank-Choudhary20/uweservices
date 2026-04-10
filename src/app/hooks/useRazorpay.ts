// src/app/hooks/useRazorpay.ts

import { useState, useCallback } from "react";
import { RAZORPAY_CONFIG, PAYMENT_CONFIG } from "../config/razorpay";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface PaymentDetails {
  amount: number;
  currency?: string;
  receipt?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceName: string;
  serviceId: string;
  bookingDate: string;
  bookingTime: string;
  address: string;
  notes?: string;
  // Optional: Preferred payment method
  preferredMethod?: "upi" | "card" | "netbanking" | "wallet";
}

export interface PaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface PaymentError {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
}

export function useRazorpay() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<PaymentError | null>(null);

  const initiatePayment = useCallback(
    (
      paymentDetails: PaymentDetails,
      onSuccess: (response: PaymentResponse, details: PaymentDetails) => void,
      onFailure: (error: PaymentError) => void
    ) => {
      setIsProcessing(true);
      setPaymentError(null);

      // Check if Razorpay is loaded
      if (typeof window.Razorpay === "undefined") {
        const error: PaymentError = {
          code: "RAZORPAY_NOT_LOADED",
          description: "Payment gateway not loaded. Please refresh the page.",
          source: "client",
          step: "initialization",
          reason: "script_not_loaded",
        };
        setPaymentError(error);
        setIsProcessing(false);
        onFailure(error);
        return;
      }

      const amountInPaise = Math.round(paymentDetails.amount * 100);

      const options: any = {
        key: RAZORPAY_CONFIG.key_id,
        amount: amountInPaise,
        currency: paymentDetails.currency || RAZORPAY_CONFIG.currency,
        name: RAZORPAY_CONFIG.company_name,
        description: `${paymentDetails.serviceName} - ${paymentDetails.bookingDate}`,
        image: RAZORPAY_CONFIG.company_logo,
        handler: function (response: PaymentResponse) {
          setIsProcessing(false);
          onSuccess(response, paymentDetails);
        },
        prefill: {
          name: paymentDetails.customerName,
          email: paymentDetails.customerEmail,
          contact: paymentDetails.customerPhone,
          // Pre-fill UPI VPA if customer has one saved (optional)
          // "method": "upi",
          // "vpa": "customer@upi"
        },
        notes: {
          service_id: paymentDetails.serviceId,
          service_name: paymentDetails.serviceName,
          booking_date: paymentDetails.bookingDate,
          booking_time: paymentDetails.bookingTime,
          address: paymentDetails.address,
          additional_notes: paymentDetails.notes || "",
        },
        theme: {
          color: RAZORPAY_CONFIG.theme_color,
          backdrop_color: "rgba(0, 0, 0, 0.7)",
        },
        // Payment method configuration
        config: {
          display: {
            // Show UPI apps in specific order
            blocks: {
              upi: {
                name: "Pay using UPI",
                instruments: [
                  {
                    method: "upi",
                    flows: ["qrcode", "collect", "intent"],
                    apps: ["google_pay", "phonepe", "paytm", "bhim"],
                  },
                ],
              },
              other: {
                name: "Other Payment Methods",
                instruments: [
                  { method: "card" },
                  { method: "netbanking" },
                  { method: "wallet" },
                ],
              },
            },
            // Order of payment blocks
            sequence: ["block.upi", "block.other"],
            // Preferences
            preferences: {
              show_default_blocks: true,
            },
          },
        },
        // Enable/disable methods
        method: {
          upi: PAYMENT_CONFIG.methods.upi,
          card: PAYMENT_CONFIG.methods.card,
          netbanking: PAYMENT_CONFIG.methods.netbanking,
          wallet: PAYMENT_CONFIG.methods.wallet,
          emi: PAYMENT_CONFIG.methods.emi,
          paylater: PAYMENT_CONFIG.methods.paylater,
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            const error: PaymentError = {
              code: "PAYMENT_CANCELLED",
              description: "Payment was cancelled by user",
              source: "customer",
              step: "payment_authentication",
              reason: "user_cancelled",
            };
            setPaymentError(error);
            onFailure(error);
          },
          confirm_close: true,
          escape: true,
          animation: true,
          backdropclose: false,
        },
        retry: {
          enabled: true,
          max_count: 3,
        },
        timeout: 300, // 5 minutes timeout
        send_sms_hash: true,
        allow_rotation: true,
        remember_customer: true,
      };

      // If preferred method is specified, open with that method
      if (paymentDetails.preferredMethod) {
        options.prefill.method = paymentDetails.preferredMethod;
      }

      try {
        const razorpay = new window.Razorpay(options);

        razorpay.on("payment.failed", function (response: any) {
          setIsProcessing(false);
          const error: PaymentError = {
            code: response.error.code || "PAYMENT_FAILED",
            description: response.error.description || "Payment failed",
            source: response.error.source || "unknown",
            step: response.error.step || "unknown",
            reason: response.error.reason || "unknown",
          };
          setPaymentError(error);
          onFailure(error);
        });

        razorpay.open();
      } catch (err) {
        setIsProcessing(false);
        const error: PaymentError = {
          code: "INITIALIZATION_ERROR",
          description: "Failed to initialize payment gateway",
          source: "client",
          step: "initialization",
          reason: "unknown_error",
        };
        setPaymentError(error);
        onFailure(error);
      }
    },
    []
  );

  // Direct UPI payment (opens with UPI selected)
  const initiateUPIPayment = useCallback(
    (
      paymentDetails: PaymentDetails,
      onSuccess: (response: PaymentResponse, details: PaymentDetails) => void,
      onFailure: (error: PaymentError) => void
    ) => {
      initiatePayment(
        { ...paymentDetails, preferredMethod: "upi" },
        onSuccess,
        onFailure
      );
    },
    [initiatePayment]
  );

  // Direct Card payment (opens with Card selected)
  const initiateCardPayment = useCallback(
    (
      paymentDetails: PaymentDetails,
      onSuccess: (response: PaymentResponse, details: PaymentDetails) => void,
      onFailure: (error: PaymentError) => void
    ) => {
      initiatePayment(
        { ...paymentDetails, preferredMethod: "card" },
        onSuccess,
        onFailure
      );
    },
    [initiatePayment]
  );

  return {
    initiatePayment,
    initiateUPIPayment,
    initiateCardPayment,
    isProcessing,
    paymentError,
    setPaymentError,
  };
}