import { useState } from "react";
import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { services } from "../data/services";
import { locations } from "../data/locations";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Smartphone, 
  Briefcase, 
  MapPin, 
  HelpCircle,
  Search
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEOHead } from "../components/SEOHead";

export function HomePage() {
  const popularServices = services.filter((s) => s.popular);
  const puneLocation = locations.find((l) => l.slug === "pune");
  const [selectedLocality, setSelectedLocality] = useState<string>("");
  const [pincodeInput, setPincodeInput] = useState<string>("");
  const [coverageStatus, setCoverageStatus] = useState<string | null>(null);

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLocality || pincodeInput.trim()) {
      setCoverageStatus(
        `Service is available in ${selectedLocality || `PIN ${pincodeInput}`}! Select your service to schedule a technician.`
      );
    } else {
      setCoverageStatus("Please select a Pune locality or enter a 6-digit PIN code.");
    }
  };

  const homeFaqs = [
    {
      question: "What home services does UWE Services offer in Pune?",
      answer: "UWE Services offers professional doorstep plumbing, electrical repair and installation, house deep cleaning, AC repair and jet servicing, interior/exterior house painting, carpentry and furniture assembly, lawn and landscaping maintenance, and certified pest control across Pune and PCMC."
    },
    {
      question: "How can customers book a plumber or electrician in Pune?",
      answer: "Customers can browse our services on uweservices.com, select their required repair (e.g. plumbing or electrical), pick a convenient date and time, and confirm their booking. Alternatively, bookings can be made directly via our customer Android app or by calling +91-9617671251."
    },
    {
      question: "How can customers check service availability in their Pune locality?",
      answer: "You can select your Pune locality (such as Hinjawadi, Wakad, Baner, Kothrud, Kharadi, or Pimple Saudagar) or enter your 6-digit PIN code on our website or mobile app to view immediate technician availability and scheduling."
    },
    {
      question: "How does UWE Services work?",
      answer: "1) Choose your required home service. 2) Enter your Pune location and pick a schedule. 3) A background-verified professional arrives at your doorstep with necessary tools. 4) Inspect the completed work and pay securely via UPI, cards, net banking, or cash."
    },
    {
      question: "How can a service professional join UWE Services as a partner?",
      answer: "Qualified service technicians and tradespeople in Pune can download the official 'UWE Partner' Android app from Google Play Store or contact support@uweservices.com to complete verification, skill assessment, and onboarding."
    },
    {
      question: "Where can customers download the UWE Services customer app?",
      answer: "The official customer app 'UWE Home Services' is available for download on the Google Play Store (package: com.uwe.homeservices) for on-demand booking, appointment tracking, and real-time support."
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://uweservices.com/#organization",
        "name": "UWE Services",
        "alternateName": ["UWe Service", "UWE Home Services"],
        "url": "https://uweservices.com/",
        "telephone": "+91-9617671251",
        "email": "support@uweservices.com",
        "logo": "https://uweservices.com/favicon.svg",
        "priceRange": "₹₹",
        "founder": {
          "@type": "Person",
          "name": "Mayank Choudhary"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar",
          "addressLocality": "Meharagaon, Hoshangabad",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "461115",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Pune",
            "sameAs": "https://en.wikipedia.org/wiki/Pune"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Pimpri-Chinchwad",
            "sameAs": "https://en.wikipedia.org/wiki/Pimpri-Chinchwad"
          },
          {
            "@type": "State",
            "name": "Maharashtra"
          }
        ],
        "sameAs": [
          "https://play.google.com/store/apps/details?id=com.uwe.homeservices",
          "https://play.google.com/store/apps/details?id=com.uweservices.partner",
          "https://www.facebook.com/uweservice",
          "https://www.instagram.com/uweservice",
          "https://twitter.com/uweservice"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://uweservices.com/#faqs",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full">
      <SEOHead
        title="UWE Services - Professional Home Services in Pune | Doorstep Repair & Maintenance"
        description="Book trusted electricians, plumbers, house cleaners & AC repair in Pune & PCMC. Background-verified professionals, fair pricing, guaranteed doorstep service."
        canonicalUrl="https://uweservices.com/"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo size={56} />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">UWE Services</h1>
                  <p className="text-xl text-orange-100">You + We = Done Right</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                Doorstep Home Services Across Pune &amp; PCMC
              </h2>
              <p className="text-lg text-orange-50">
                Book verified plumbers, electricians, house cleaning, and AC repair technicians in Pune. Transparent pricing, on-time arrivals, and quality satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Browse Services
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/locations/pune"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all"
                >
                  <MapPin size={18} />
                  Pune Service Areas
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767082090928-f2eeef2270f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG1vZGVybiUyMGhvbWV8ZW58MXx8fHwxNzc1NTk3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="UWE Services home services in Pune"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Verified Pros", value: "500+" },
              { icon: Star, label: "Customer Rating", value: "4.9/5" },
              { icon: CheckCircle, label: "Doorstep Services", value: "Pune & PCMC" },
              { icon: Clock, label: "Average Arrival", value: "45-90 Mins" },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="mx-auto mb-2 text-orange-500" size={32} />
                  <div className="font-bold text-2xl text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Service Coverage Check */}
      <section className="py-10 bg-orange-50/60 border-b border-orange-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-orange-500" size={28} />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Check Pune Service Coverage</h3>
                <p className="text-sm text-gray-600">Select your locality or enter your PIN code to check technician availability</p>
              </div>
            </div>
            <form onSubmit={handleCheckCoverage} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Select Pune Locality</label>
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                >
                  <option value="">Choose Locality</option>
                  {puneLocation?.localities.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Or Enter Pune PIN Code</label>
                <input
                  type="text"
                  maxLength={6}
                  value={pincodeInput}
                  onChange={(e) => setPincodeInput(e.target.value)}
                  placeholder="e.g. 411057"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  <Search size={16} />
                  Check Coverage
                </button>
              </div>
            </form>
            {coverageStatus && (
              <div className="mt-4 p-3 rounded-xl bg-orange-100 text-orange-900 text-sm flex items-center justify-between">
                <span>{coverageStatus}</span>
                <Link to="/services" className="font-semibold text-orange-700 hover:underline ml-2">Book Now →</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Verified Home Services in Pune
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by Pune homeowners for upfront rates, verified technicians, and dependable craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {popularServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 hover:border-orange-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={`${service.name} in Pune`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-600 font-semibold">{service.price}</span>
                      <span className="text-orange-500 group-hover:translate-x-1 transition-transform">
                        Book Now →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              View All 8 Home Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How UWE Services Works
            </h2>
            <p className="text-lg text-gray-600">Doorstep home maintenance made simple and dependable</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description: "Browse plumbing, electrical, cleaning, AC servicing, carpentry, painting, or pest control",
              },
              {
                step: "2",
                title: "Schedule Your Slot",
                description: "Enter your Pune address, select a convenient date and time, and confirm your booking",
              },
              {
                step: "3",
                title: "Doorstep Completion",
                description: "A verified professional arrives on time, completes the job, and you pay after satisfaction",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Android Apps Section (ASO & Web-to-App) */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white border-y border-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Mobile Discoverability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Get UWE Services on Android
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our official apps on the Google Play Store for seamless booking and service management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Customer App */}
            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">UWE Home Services App</h3>
                <p className="text-sm font-medium text-orange-600 mb-3">For Homeowners &amp; Customers</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Book verified plumbers, electricians, cleaners, and AC mechanics in seconds. Track job status, review upfront quotes, and enjoy secure digital payments.
                </p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.uwe.homeservices"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-colors"
              >
                <span>Download on Google Play</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Partner App */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">UWE Partner App</h3>
                <p className="text-sm font-medium text-amber-700 mb-3">For Skilled Service Professionals</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Are you a skilled plumber, electrician, AC technician, or cleaner in Pune? Join the UWE Partner network to receive verified customer requests and grow your business.
                </p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.uweservices.partner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
              >
                <span>Join as a Partner</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer Engine & AI Search Section (AEO/GEO FAQs) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Answers to Common Questions
            </h2>
            <p className="text-gray-600">
              Clear, verified information regarding UWE Services home maintenance in Pune
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 bg-gray-50/50 hover:bg-white transition-all shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="text-orange-500 font-bold">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Home Service Technician in Pune Today?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Book professional plumbing, electrical, cleaning, or AC repair services online in under 2 minutes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Book a Service Now
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+919617671251"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all"
            >
              Call +91-9617671251
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
