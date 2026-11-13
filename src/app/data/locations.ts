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
    description: "Reliable on-demand home maintenance services delivered to your doorstep across Bhopal. Book background-verified electricians, plumbers, AC technicians, and cleaning professionals through the UWe Service platform.",
    metaTitle: "Home Services in Bhopal | Electrician, Plumber & AC Repair Near Me | UWe Service",
    metaDescription: "Book doorstep home services in Bhopal, MP. Find verified electricians, plumbers, AC repair technicians, and house cleaning professionals. Check availability and book online.",
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
        answer: "UWe Service offers a range of home services in Bhopal including electrical work, plumbing repairs, house cleaning, AC servicing, house painting, carpentry, landscaping, and pest control. Check the app or contact us to confirm availability for your specific area and service.",
      },
      {
        question: "Are your technicians in Bhopal verified?",
        answer: "Yes, every professional on the UWe Service platform undergoes background and identity verification along with a practical skills evaluation before being listed.",
      },
      {
        question: "How do I book a home service in Bhopal?",
        answer: "You can book through the UWe Service website by selecting your required service and entering your location details. Our team will confirm technician availability and scheduling for your area.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    description: "UWe Service is expanding its verified home service network to Pune and the Pimpri-Chinchwad region. Explore available service categories, check if your area is covered, and book trusted technicians for plumbing, electrical, cleaning, AC repair, and more.",
    metaTitle: "Home Services in Pune | Book Trusted Professionals – UWe Services",
    metaDescription: "Explore available home services in Pune with UWe Services. Find plumbing, electrical, cleaning and other services, check availability and book online.",
    addressSnippet: "Expanding to Pune & Pimpri-Chinchwad, Maharashtra",
    localities: [
      "Pimpri",
      "Pimple Saudagar",
      "Chinchwad",
      "Wakad",
      "Hinjawadi",
      "Baner",
    ],
    responseTime: "Subject to availability in your area",
    geo: {
      latitude: 18.5204,
      longitude: 73.8567,
    },
    faqs: [
      {
        question: "Is UWe Service available in my area of Pune?",
        answer: "UWe Service is currently expanding its network in Pune and Pimpri-Chinchwad. We are actively onboarding verified technicians across localities including Pimpri, Pimple Saudagar, Chinchwad, Wakad, Hinjawadi, and Baner. Use the booking form or call us to confirm availability for your specific pincode.",
      },
      {
        question: "What home services can I book in Pune?",
        answer: "UWe Service offers plumbing, electrical work, house cleaning, AC repair and servicing, painting, carpentry, landscaping, and pest control. Service availability may vary by locality during our expansion phase — please confirm when booking.",
      },
      {
        question: "How do I book a home service in Pune?",
        answer: "Select your required service on the UWe Service website, enter your Pune area or PIN code during booking, and our team will confirm technician availability and scheduling. You can also call +91-9109888774 directly.",
      },
      {
        question: "What is the typical response time for Pune bookings?",
        answer: "Response and arrival times in Pune depend on current technician availability in your area. Our team will confirm estimated arrival time at the time of booking confirmation.",
      },
    ],
  },
];
