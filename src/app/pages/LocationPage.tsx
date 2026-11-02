import { Link, useParams } from "react-router";
import { locations } from "../data/locations";
import { services } from "../data/services";
import { SEOHead } from "../components/SEOHead";
import { 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  CheckCircle, 
  ChevronRight, 
  ArrowRight,
  HelpCircle,
  Building
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LocationPage() {
  const { citySlug } = useParams();
  const location = locations.find((l) => l.slug === citySlug);

  if (!location) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-orange-100">
          <Building className="mx-auto text-orange-500 mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">City Not Found</h1>
          <p className="text-gray-600 mb-6">
            We currently provide verified services in Hoshangabad and Bhopal, Madhya Pradesh.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/locations/hoshangabad"
              className="px-6 py-2.5 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-colors"
            >
              View Hoshangabad Services
            </Link>
            <Link
              to="/locations/bhopal"
              className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View Bhopal Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://uweservices.com/locations/${location.slug}`;

  // Structured Data: LocalBusiness + BreadcrumbList + FAQPage
  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${canonicalUrl}#localbusiness`,
        "name": `UWe Service - ${location.name}`,
        "url": canonicalUrl,
        "telephone": "+91-9109888774",
        "email": "support@uweservices.com",
        "description": location.description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.addressSnippet,
          "addressLocality": location.name,
          "addressRegion": location.state,
          "addressCountry": "IN"
        },
        ...(location.geo
          ? {
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": location.geo.latitude,
                "longitude": location.geo.longitude
              }
            }
          : {}),
        "areaServed": {
          "@type": "City",
          "name": location.name
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "18:00"
          }
        ]
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
              "name": "Services",
              "item": "https://uweservices.com/services"
            },
          {
            "@type": "ListItem",
            "position": 3,
            "name": location.name,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
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
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalUrl={canonicalUrl}
        schema={locationSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-orange-100">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:underline">Services</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-white">{location.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium mb-4">
              <MapPin size={14} />
              Verified Service Area: {location.name}, {location.state}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Doorstep Home Services in {location.name}
            </h1>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              {location.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+919109888774"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-md"
              >
                <Phone size={18} />
                Call +91-9109888774
              </a>
              <div className="inline-flex items-center gap-2 text-sm text-orange-100">
                <Clock size={16} />
                Avg Response: {location.responseTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Localities Badge Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-orange-100 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="text-orange-500" size={20} />
            <h2 className="text-xl font-bold text-gray-900">
              Localities Served in {location.name}
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Our background-verified home service professionals are dispatched across the following localities:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {location.localities.map((loc, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-800 text-xs font-semibold border border-orange-200"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Available Services Grid */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Available Home Services in {location.name}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose your required service for quick doorstep delivery by verified technicians.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border border-orange-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="text-sm font-bold text-orange-600 mb-4">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 text-center py-2 px-3 border border-orange-500 text-orange-600 rounded-full text-xs font-semibold hover:bg-orange-50 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      to={`/book/${service.id}`}
                      className="flex-1 text-center py-2 px-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-semibold hover:shadow-md transition-all"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose UWe Service */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why {location.name} Residents Trust UWe Service
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-100">
              <ShieldCheck className="text-orange-500 mb-3" size={28} />
              <h3 className="font-semibold text-gray-900 mb-1">Verified Technicians</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Background-checked, skill-evaluated local professionals with proper tools.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-100">
              <CheckCircle className="text-green-500 mb-3" size={28} />
              <h3 className="font-semibold text-gray-900 mb-1">30-Day Guarantee</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Workmanship guarantee on all repairs. If an issue recurs, we fix it at no labor charge.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-orange-50/50 border border-orange-100">
              <Clock className="text-orange-500 mb-3" size={28} />
              <h3 className="font-semibold text-gray-900 mb-1">Punctual & Fast</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Doorstep arrival within {location.responseTime} with real-time customer updates.
              </p>
            </div>
          </div>
        </div>

        {/* Local FAQs */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-orange-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions in {location.name}
            </h2>
          </div>
          <div className="space-y-4">
            {location.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-orange-50/40 border border-orange-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">
                  {faq.question}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
