export interface LocationInfo {
  slug: string;
  name: string;
  state: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  addressSnippet: string;
  localities: string[];
  responseTime: string;
  faqs: Array<{ question: string; answer: string }>;
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export const locations: LocationInfo[] = [
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    description: "UWE Services provides on-demand doorstep home maintenance and repair services across Pune and Pimpri-Chinchwad. Connect with verified local professionals for plumbing, electrical work, deep house cleaning, AC repair and servicing, painting, carpentry, landscaping, and pest control with upfront pricing and service guarantees.",
    metaTitle: "Home Services in Pune | Book Online with UWE Services",
    metaDescription: "Find available home services in Pune with UWE Services. Explore plumbing, electrical, cleaning and other services, check availability and book online.",
    addressSnippet: "Serving Pune & Pimpri-Chinchwad Metropolitan Region, Maharashtra",
    localities: [
      "Hinjawadi",
      "Wakad",
      "Baner",
      "Aundh",
      "Kothrud",
      "Hadapsar",
      "Kharadi",
      "Viman Nagar",
      "Wagholi",
      "Pimple Saudagar",
      "Pimpri",
      "Chinchwad",
    ],
    responseTime: "45 - 90 minutes (subject to locality availability)",
    geo: {
      latitude: 18.5204,
      longitude: 73.8567,
    },
    faqs: [
      {
        question: "What home services does UWE Services offer in Pune?",
        answer: "UWE Services offers professional doorstep plumbing, electrical repair and installation, full house deep cleaning, AC repair and jet servicing, painting and waterproofing, carpentry and furniture assembly, garden maintenance, and certified pest control across Pune.",
      },
      {
        question: "Which localities in Pune does UWE Services cover?",
        answer: "We serve key residential and commercial hubs across Pune and PCMC including Hinjawadi, Wakad, Baner, Aundh, Kothrud, Hadapsar, Kharadi, Viman Nagar, Wagholi, Pimple Saudagar, Pimpri, and Chinchwad. Enter your area or PIN code during booking to confirm real-time technician coverage.",
      },
      {
        question: "How do customers check service availability and book online in Pune?",
        answer: "Browse our services online, select your required service (e.g., plumbing or AC repair), enter your Pune address or PIN code, choose a convenient date and time slot, and confirm. You can also call +91-9617671251 or use our official Android customer app.",
      },
      {
        question: "Are UWE Services technicians in Pune background verified?",
        answer: "Yes. Every service professional listed on the UWE Services platform undergoes identity verification, criminal background screening, and skill assessment before taking customer jobs.",
      },
      {
        question: "How fast can a technician reach my home in Pune?",
        answer: "For standard confirmed bookings, technicians arrive within 45 to 90 minutes. Scheduled slots are also available for dates and times that best fit your schedule.",
      },
      {
        question: "How does payment work for home services in Pune?",
        answer: "Customers enjoy transparent, upfront pricing with no hidden charges. Payment can be made securely online via UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, or cash after service satisfaction.",
      },
      {
        question: "Where can I download the UWE Services apps in Pune?",
        answer: "Customers can download the UWE Home Services app from the Google Play Store (ID: com.uwe.homeservices). Service partners can download the UWE Partner app (ID: com.uweservices.partner) to register and receive customer service requests in Pune.",
      },
    ],
  },
];
