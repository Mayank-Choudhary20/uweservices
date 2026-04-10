// src/app/config/razorpay.ts

export const RAZORPAY_CONFIG = {
  key_id: "rzp_test_SbjEzYWKP4Ut2E",
  key_secret: "l4llvMdgBR9zfAqLD5aMiGMk", // Note: In production, never expose secret key in frontend
  currency: "INR",
  company_name: "UWe Service",
  company_logo: "https://uweservices.com/logo.png", // Replace with your logo URL
  theme_color: "#f97316",
  description: "Home Service Booking Payment",
};

// Payment method configuration
export const PAYMENT_CONFIG = {
  // Enable/disable payment methods
  methods: {
    upi: true,
    card: true,
    netbanking: true,
    wallet: true,
    emi: false,
    paylater: true,
  },
  // UPI specific config
  upi: {
    // UPI apps to show
    apps: ["google_pay", "phonepe", "paytm", "bhim", "amazon_pay"],
    // Show QR code option
    showQrCode: true,
    // UPI flow: 'collect' (VPA), 'intent' (app redirect), 'qr' (QR code)
    flow: "intent",
  },
  // Card specific config
  card: {
    enabled: true,
  },
  // Wallet config
  wallet: {
    enabled: true,
    apps: ["paytm", "phonepe", "amazon_pay", "mobikwik", "freecharge"],
  },
  // Net banking config
  netbanking: {
    enabled: true,
  },
};

// Company details for Razorpay
export const COMPANY_DETAILS = {
  name: "UWe Service",
  operator: "Mayank Choudhary",
  email: "support@uweservices.com",
  phone: "+919109888774",
  address: {
    line1: "Makan No. 01, Ward No. 42",
    line2: "Post–New Yard, Sai Nagar",
    city: "Meharagaon, Hoshangabad",
    state: "Madhya Pradesh",
    pincode: "461115",
    country: "India",
  },
};

// UPI Apps info for display
export const UPI_APPS = [
  {
    id: "google_pay",
    name: "Google Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    color: "#4285F4",
  },
  {
    id: "phonepe",
    name: "PhonePe",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/512px-PhonePe_Logo.svg.png",
    color: "#5F259F",
  },
  {
    id: "paytm",
    name: "Paytm",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png",
    color: "#00BAF2",
  },
  {
    id: "bhim",
    name: "BHIM",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png",
    color: "#00A884",
  },
  {
    id: "amazon_pay",
    name: "Amazon Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/512px-Amazon_Pay_logo.svg.png",
    color: "#FF9900",
  },
];