import { Link } from "react-router";
import { SEOHead } from "../components/SEOHead";
import { 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Smartphone, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  Award,
  Users
} from "lucide-react";

export function AboutPage() {
  const canonicalUrl = "https://uweservices.com/about";

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": "About UWE Services - Doorstep Home Services in Pune",
        "description": "Learn about UWE Services, Pune's reliable doorstep home maintenance and repair platform connecting homeowners with background-verified tradespeople.",
        "url": canonicalUrl
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://uweservices.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
      <SEOHead
        title="About UWE Services | Trusted Home Services in Pune & PCMC"
        description="Learn about UWE Services: our mission, verified technicians, 30-day guarantee, and on-demand home maintenance services across Pune and Pimpri-Chinchwad."
        canonicalUrl={canonicalUrl}
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-orange-100">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-white">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider mb-4">
              <Award size={14} />
              About UWE Services
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Reliable Doorstep Home Services in Pune
            </h1>
            <p className="text-lg text-orange-100 leading-relaxed mb-8">
              UWE Services ("You + We = Done Right") is on a mission to simplify home maintenance across Pune and Pimpri-Chinchwad. We connect homeowners with skilled, background-verified technicians for plumbing, electrical work, deep cleaning, AC servicing, carpentry, painting, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-md"
              >
                Browse Services
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+919617671251"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all"
              >
                <Phone size={18} />
                Call +91-9617671251
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-orange-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Professionals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every technician on our platform undergoes rigorous identity verification, criminal background checks, and trade skill evaluations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-orange-100 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We stand behind our work. If an issue recurs within 30 days of service, our technician will revisit and resolve it at no extra labor cost.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-orange-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Punctual & Upfront</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transparent, upfront rate cards with no hidden fees. Doorstep arrival within 45 to 90 minutes for confirmed bookings across Pune.
            </p>
          </div>
        </div>

        {/* Operational Scope */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-orange-100 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-orange-500" size={28} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Pune Service Area & Coverage</h2>
              <p className="text-sm text-gray-600">Active doorstep coverage across Pune & Pimpri-Chinchwad</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            UWE Services operates throughout the Pune Metropolitan Region. Key residential and commercial zones served include:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {[
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
              "Chinchwad"
            ].map((locality) => (
              <div key={locality} className="p-3 bg-orange-50/60 rounded-xl border border-orange-100 text-sm font-semibold text-gray-800 text-center">
                {locality}
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-gray-600">Need service in your area today?</span>
            <Link
              to="/locations/pune"
              className="text-orange-600 font-semibold hover:underline flex items-center gap-1 text-sm"
            >
              Explore Pune Hub Details →
            </Link>
          </div>
        </div>

        {/* Company Identity & Operator */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Company & Leadership</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>UWE Services</strong> is operated by <strong>Mayank Choudhary</strong>. We are committed to transparency, customer satisfaction, and safe, reliable in-home service delivery.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200 text-sm">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Operational Service Hub:</span>
              <span className="text-gray-600">Pune & Pimpri-Chinchwad, Maharashtra, India</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Registered Corporate Address:</span>
              <span className="text-gray-600">
                Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar, Meharagaon, Hoshangabad, MP – 461115
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Download UWE Services Apps</h2>
          <p className="text-orange-100 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Whether you are a homeowner booking doorstep repairs or a skilled professional seeking verified customer jobs, get started on Android today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.uwe.homeservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl transition-all shadow-md text-sm"
            >
              <Smartphone size={18} />
              Customer App (Google Play)
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.uweservices.partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-orange-600 hover:bg-orange-50 font-semibold rounded-xl transition-all shadow-md text-sm"
            >
              <Briefcase size={18} />
              Partner App (Google Play)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
