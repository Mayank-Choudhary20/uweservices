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
    slug: "hoshangabad",
    name: "Hoshangabad",
    state: "Madhya Pradesh",
    description: "UWe Service provides reliable doorstep home repairs and maintenance across Hoshangabad. From electrical wiring and plumbing to AC repair and deep cleaning, our verified technicians arrive on time with fair, upfront pricing.",
    metaTitle: "Home Services in Hoshangabad | Electrician, Plumber, AC Repair | UWe Service",
    metaDescription: "Book verified home services in Hoshangabad (Narmadapuram). Trusted local electricians, plumbers, AC repair technicians, and house cleaning. Call +91-9109888774.",
    addressSnippet: "Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar, Meharagaon, Hoshangabad, MP – 461115",
    localities: [
      "Meharagaon",
      "Sai Nagar",
      "New Yard",
      "Rasuliya",
      "Itarsi Road",
      "Narmadapuram Central",
    ],
    responseTime: "45 - 90 minutes",
    geo: {
      latitude: 22.7543889,
      longitude: 77.6556563,
    },
    faqs: [
      {
        question: "Which localities in Hoshangabad does UWe Service cover?",
        answer: "We cover all major residential and commercial localities across Hoshangabad and Itarsi corridor, including Meharagaon, Sai Nagar, New Yard, Rasuliya, and surrounding areas.",
      },
      {
        question: "How fast can a technician reach my home in Hoshangabad?",
        answer: "For confirmed bookings, our technicians typically arrive within 45 to 90 minutes, with priority scheduling available for emergency plumbing or electrical issues.",
      },
      {
        question: "How do I make payment for home services in Hoshangabad?",
        answer: "You can pay easily and securely after service completion via UPI (Google Pay, PhonePe, Paytm), credit/debit card, or cash.",
      },
    ],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    description: "Trusted on-demand home maintenance services delivered directly to your doorstep across Bhopal. Book certified electricians, plumbers, AC technicians, and cleaning specialists with guaranteed workmanship.",
    metaTitle: "Home Services in Bhopal | Electrician, Plumber & AC Repair Near Me | UWe Service",
    metaDescription: "Professional doorstep home services in Bhopal, MP. Book licensed electricians, skilled plumbers, AC service technicians, and deep cleaning experts. Call +91-9109888774.",
    addressSnippet: "Serving Bhopal & surrounding capital region, Madhya Pradesh",
    localities: [
      "MP Nagar",
      "Arera Colony",
      "Kolar Road",
      "Hoshangabad Road",
      "Habibganj",
      "Indrapuri",
      "Bawadiya Kalan",
    ],
    responseTime: "60 - 90 minutes",
    geo: {
      latitude: 23.2599333,
      longitude: 77.412615,
    },
    faqs: [
      {
        question: "What home services are available in Bhopal?",
        answer: "All 8 core services are available in Bhopal: Electrical work, Plumbing repairs, House cleaning, AC repair & servicing, House painting, Carpentry, Landscaping, and Pest control.",
      },
      {
        question: "Are your technicians in Bhopal verified?",
        answer: "Yes, every professional on the UWe Service platform undergoes thorough background and identity verification and practical skills evaluation.",
      },
      {
        question: "Is there a service guarantee for bookings in Bhopal?",
        answer: "Yes, we offer a 30-day workmanship guarantee on our home repair services to ensure complete peace of mind.",
      },
    ],
  },
];
