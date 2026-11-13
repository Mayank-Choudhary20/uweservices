import { Wrench, Zap, Sparkles, Wind, Paintbrush, Hammer, Trees, Bug } from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: any;
  image: string;
  features: string[];
  popular?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  schemaType?: string;
  capabilities?: string[];
  faqs?: ServiceFAQ[];
  estimatedTime?: string;
}

export const services: Service[] = [
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Expert plumbing repairs, leak fixes, fixture installations, and 24/7 emergency maintenance for your home",
    price: "₹599 - ₹2,999",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1613839397604-65fffe7fc3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyJTIwZml4aW5nJTIwc2lua3xlbnwxfHx8fDE3NzU2MzU2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Leak repairs", "Pipe installation", "Drain cleaning", "24/7 emergency service"],
    popular: true,
    metaTitle: "Plumbing Services & Plumber Near Me | UWe Service",
    metaDescription: "Book verified plumbers for pipe leak repairs, tap fitting, drain unblocking, and water heater installation. Fast doorstep service in Hoshangabad, Bhopal & Pune.",
    schemaType: "Plumber",
    estimatedTime: "45 - 90 mins",
    capabilities: [
      "Water pipe leak detection and emergency joint sealing",
      "Tap, mixer, and shower fixture installation & repair",
      "Clogged drain, sink, and sewer blockage unclogging",
      "Toilet flush valve, commode, and cistern fitting",
      "Overhead water tank cleaning and pipeline maintenance",
      "Geyser and water heater inlet/outlet connection",
    ],
    faqs: [
      {
        question: "How fast can a plumber arrive at my location?",
        answer: "In our core service areas of Hoshangabad and Bhopal, verified plumbers typically arrive within 60 to 90 minutes from confirmed booking time, with priority scheduling available for emergency leaks.",
      },
      {
        question: "Are spare parts and materials included in the service cost?",
        answer: "The listed rate covers expert inspection and labor. If replacement pipes, valves, or fixtures are necessary, our technician provides a clear, itemized quote prior to purchasing with genuine receipts.",
      },
      {
        question: "Do you offer a satisfaction guarantee on plumbing work?",
        answer: "Yes, every plumbing job by UWe Service comes with a 30-day workmanship guarantee. If the same issue recurs within 30 days, we revisit and rectify it without additional labor fees.",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Work",
    description: "Certified and licensed electricians for safe wiring, appliance installation, and urgent electrical repairs",
    price: "₹799 - ₹4,999",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjByZXNpZGVudGlhbCUyMGhvbWV8ZW58MXx8fHwxNzc1NjIyMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Wiring & rewiring", "Lighting installation", "Circuit breaker repair", "Safety inspections"],
    popular: true,
    metaTitle: "Licensed Electrician Near Me | Home Wiring Services | UWe Service",
    metaDescription: "Hire verified local electricians for home wiring, switchboard replacement, MCB tripping troubleshooting, and fan fitting in Hoshangabad, Bhopal & Pune.",
    schemaType: "Electrician",
    estimatedTime: "45 - 120 mins",
    capabilities: [
      "Switchboard installation, modular socket replacement & earthing checks",
      "Short circuit diagnosis and MCB / fuse trip troubleshooting",
      "Ceiling fan, exhaust fan, decorative lighting, and chandelier fitting",
      "Inverter, UPS, and battery backup setup and wiring",
      "Major home appliance electrical connections and load balancing",
      "Complete home electrical rewiring and safety audits",
    ],
    faqs: [
      {
        question: "Are your electricians licensed and safety-trained?",
        answer: "Yes. All UWe Service electricians are background-verified and experienced in residential electrical safety regulations to guarantee hazard-free repairs.",
      },
      {
        question: "What should I do if a switchboard or wire starts sparking?",
        answer: "Please immediately turn off your home's main MCB breaker on the distribution board to isolate the power, then book our emergency electrical visit or call our helpline directly.",
      },
      {
        question: "Can an electrician install appliances bought separately?",
        answer: "Yes, our electricians handle installation and testing for all third-party appliances including TVs, water purifiers, exhaust fans, and decorative fixtures.",
      },
    ],
  },
  {
    id: "cleaning",
    name: "House Cleaning",
    description: "Comprehensive home deep cleaning, regular maid services, kitchen sanitization, bathroom scrubbing, and sofa care by trained professionals",
    price: "₹499 - ₹1,999",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1758273238594-9a9d6c20eaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzU2MzM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Eco-friendly products"],
    popular: true,
    metaTitle: "House Cleaning & Maid Services Near Me | UWe Service",
    metaDescription: "Professional home deep cleaning, maid services, kitchen degreasing, bathroom scrubbing, and sofa shampooing in Hoshangabad, Bhopal & Pune. Eco-friendly products used.",
    schemaType: "HouseCleaning",
    estimatedTime: "2 - 5 hours",
    capabilities: [
      "Full apartment and villa deep sanitization and dusting",
      "Intensive kitchen degreasing, chimney exterior, and slab cleaning",
      "Bathroom tile descaling, stain removal, and germ-free disinfection",
      "Sofa, carpet, and mattress vacuuming and spot shampooing",
      "Balcony, window track, and glass pane cleaning",
      "Move-in and move-out deep cleaning for vacant homes",
    ],
    faqs: [
      {
        question: "Do I need to arrange cleaning supplies or equipment?",
        answer: "No. Our cleaning teams arrive with high-suction vacuum cleaners, specialized scrubbing pads, microfibers, and eco-friendly cleaning detergents.",
      },
      {
        question: "How long does a full home deep cleaning take?",
        answer: "For a standard 2 BHK or 3 BHK apartment, deep cleaning generally takes between 3 to 5 hours depending on surface requirements and team size.",
      },
    ],
  },
  {
    id: "hvac",
    name: "HVAC & AC Services",
    description: "Air conditioner servicing, jet wash cleaning, gas leakage refill, and cooling troubleshooting by AC specialists",
    price: "₹999 - ₹6,999",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1630481721508-5d37097dd8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodmFjJTIwdGVjaG5pY2lhbiUyMGFpciUyMGNvbmRpdGlvbmluZ3xlbnwxfHx8fDE3NzU1Nzg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["AC repair & installation", "Furnace maintenance", "Duct cleaning", "Thermostat setup"],
    popular: true,
    metaTitle: "AC Repair & Servicing Near Me | Gas Refill | UWe Service",
    metaDescription: "Expert split and window AC repair, deep jet wash servicing, cooling diagnostics, and refrigerant gas refill in Hoshangabad, Bhopal & Pune by verified technicians.",
    schemaType: "HVACBusiness",
    estimatedTime: "60 - 90 mins",
    capabilities: [
      "Split & window AC power foam jet wash and filter disinfection",
      "Cooling diagnostics and cooling coil inspection",
      "Refrigerant gas leak testing and precision gas charging",
      "Indoor/outdoor unit mounting, uninstallation, and copper piping",
      "Water leakage fixing and drain tray clearance",
      "Capacitor, sensor, and PCB circuit repair",
    ],
    faqs: [
      {
        question: "Why is my AC running but not cooling the room?",
        answer: "The most common causes are clogged dust filters restricting airflow, low refrigerant gas due to piping leaks, or a weak outdoor compressor capacitor. Our technician pinpoints the exact cause on arrival.",
      },
      {
        question: "What is included in an AC jet service?",
        answer: "An AC jet service includes deep indoor coil cleaning using high-pressure water jacket equipment, outdoor condenser fin cleaning, blower wheel wash, drain pipe clearing, and overall cooling performance checks.",
      },
    ],
  },
  {
    id: "painting",
    name: "Painting Services",
    description: "Interior and exterior wall painting, waterproof coating, and color finishing by skilled professional painters",
    price: "₹1,499 - ₹9,999",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1752649937956-f2c09651bf7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwcGFpbnRpbmclMjB3YWxsfGVufDF8fHx8MTc3NTY0MjY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Interior painting", "Exterior painting", "Cabinet refinishing", "Color consultation"],
    metaTitle: "House Painting & Waterproofing Services | UWe Service",
    metaDescription: "Professional interior and exterior house painting, wall putty, primer, and damp-proofing in Hoshangabad, Bhopal & Pune. Flawless finish by skilled painters.",
    schemaType: "HousePainter",
    estimatedTime: "1 - 3 days",
    capabilities: [
      "Interior wall emulsion, distemper, and luxury paint application",
      "Exterior weather-proof protective wall coating",
      "Wall crack filling, putty smoothening, and primer preparation",
      "Waterproofing and dampness treatment for ceilings and bathrooms",
      "Door, window frame, and grill enamel painting",
      "Free shade consultation and surface area measurement",
    ],
    faqs: [
      {
        question: "Do painters cover furniture and floors during painting?",
        answer: "Yes, our team masks and covers floors, furniture, switchboards, and fixtures with protective drop sheets to prevent paint splatters.",
      },
    ],
  },
  {
    id: "carpentry",
    name: "Carpentry & Woodwork",
    description: "Custom woodwork, door and lock repairs, furniture assembly, and hinge adjustments",
    price: "₹799 - ₹4,499",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1728633826211-4e04854e344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZyUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzU1Nzg4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Custom furniture", "Door & window repair", "Deck building", "Furniture assembly"],
    metaTitle: "Carpentry Services & Furniture Repair Near Me | UWe Service",
    metaDescription: "Book experienced carpenters for door lock repair, modular furniture assembly, wardrobe hinge fixes, and custom woodwork in Hoshangabad, Bhopal & Pune.",
    schemaType: "HomeAndConstructionBusiness",
    estimatedTime: "1 - 3 hours",
    capabilities: [
      "Door lock installation, replacement, and handle alignment",
      "Bed, wardrobe, and desk assembly / disassembly",
      "Cabinet hinge adjustment and drawer channel repair",
      "Custom wooden shelving and bracket mounting",
      "Wooden door trimming and latch alignment",
    ],
    faqs: [
      {
        question: "Can your carpenters assemble flat-pack furniture?",
        answer: "Yes, our carpenters are equipped with precision power tools to quickly and properly assemble modular furniture from any brand.",
      },
    ],
  },
  {
    id: "landscaping",
    name: "Landscaping & Lawn Care",
    description: "Professional lawn mowing, garden cleanup, shrub trimming, and seasonal soil maintenance",
    price: "₹599 - ₹2,999",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1721318308400-fd8da6c51efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGVyJTIwZ2FyZGVuJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc1NjQyNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Lawn mowing", "Garden design", "Tree trimming", "Seasonal cleanup"],
    metaTitle: "Landscaping & Garden Maintenance Services | UWe Service",
    metaDescription: "Keep your garden lush with lawn mowing, hedge trimming, weed removal, and soil nourishment by UWe Service gardeners in Hoshangabad, Bhopal & Pune.",
    schemaType: "HomeAndConstructionBusiness",
    estimatedTime: "2 - 4 hours",
    capabilities: [
      "Lawn mowing and turf edging",
      "Shrub, hedge, and ornamental plant pruning",
      "Weed eradication and flower bed grooming",
      "Organic fertilizer and compost application",
      "Seasonal dead foliage and dry branch cleanup",
    ],
    faqs: [
      {
        question: "Do you supply organic fertilizers and potting soil?",
        answer: "Yes, our gardening specialists can provide high-grade organic vermicompost, fertilizers, and plant care nutrients upon request.",
      },
    ],
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Safe, odorless, and government-approved pest control treatments for termites, cockroaches, and bedbugs",
    price: "₹499 - ₹2,499",
    icon: Bug,
    image: "https://images.unsplash.com/photo-1687840936382-7333b7d26fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHByb2Zlc3Npb25hbCUyMGhvbWV8ZW58MXx8fHwxNzc1NjQyNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Insect removal", "Rodent control", "Preventive treatments", "Eco-friendly options"],
    metaTitle: "Pest Control & Termite Treatment Near Me | UWe Service",
    metaDescription: "Protect your home with certified, odorless cockroach, termite, and bed bug pest control treatments in Hoshangabad, Bhopal & Pune.",
    schemaType: "HomeAndConstructionBusiness",
    estimatedTime: "60 - 90 mins",
    capabilities: [
      "Cockroach herbal gel and odorless spray treatment",
      "Anti-termite drilling and chemical barrier protection",
      "Bed bug eradication with two-stage heat and spray process",
      "Rodent control and entry-point bait placement",
      "Mosquito and seasonal fly residual treatment",
    ],
    faqs: [
      {
        question: "Is your pest control safe for children and pets?",
        answer: "Yes, we prioritize odorless, low-toxicity, and government-approved formulations that do not require you to vacate your home for standard cockroach gel treatments.",
      },
    ],
  },
];
