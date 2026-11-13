import { Link } from "react-router";
import { locations } from "../data/locations";
import { services } from "../data/services";
import { SEOHead } from "../components/SEOHead";
import { MapPin, ArrowRight, Phone, ChevronRight } from "lucide-react";

export function LocationsHubPage() {
  const canonicalUrl = "https://uweservices.com/locations";

  const hubSchema = {
    "@context": "https://schema.org",
    "@graph": [
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
            "name": "Service Areas",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "WebPage",
        "name": "Home Service Areas | UWe Service",
        "description": "Find UWe Service home service coverage in Hoshangabad, Bhopal and Pune. Book verified electricians, plumbers, cleaning professionals, AC technicians and more.",
        "url": canonicalUrl
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
      <SEOHead
        title="Home Service Areas | Hoshangabad, Bhopal & Pune | UWe Service"
        description="Find UWe Service home service coverage in Hoshangabad, Bhopal and Pune. Book verified electricians, plumbers, cleaning professionals, AC technicians and more."
        canonicalUrl={canonicalUrl}
        schema={hubSchema}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-orange-100">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-white">Service Areas</span>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium mb-4">
              <MapPin size={14} />
              Verified Service Locations
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              UWe Service Coverage Areas
            </h1>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Browse our verified service areas and book trusted home professionals — electricians, plumbers, cleaners, AC technicians, and more — directly to your doorstep.
            </p>
            <a
              href="tel:+919109888774"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-md"
            >
              <Phone size={18} />
              Call +91-9109888774
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* City Cards */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Our Service Locations
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Select your city to see available services and book directly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border border-orange-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                      <MapPin className="text-orange-500" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{loc.name}</h3>
                      <p className="text-xs text-gray-500">{loc.state}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {loc.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {loc.localities.slice(0, 4).map((locality) => (
                      <span
                        key={locality}
                        className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-medium border border-orange-100"
                      >
                        {locality}
                      </span>
                    ))}
                    {loc.localities.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-medium border border-gray-100">
                        +{loc.localities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    Avg. response: {loc.responseTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-orange-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Services <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Available Services */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Services Available Across All Locations
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-lg mx-auto text-sm">
            Our 8 core home service categories — book any service in your covered area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-orange-50/40 border border-orange-100 hover:bg-orange-50 hover:border-orange-200 transition-all text-center"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className="text-orange-500" size={20} />
                  </div>
                  <span className="text-xs font-semibold text-gray-800 leading-tight">{service.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Can't Find Your City?</h2>
          <p className="text-orange-100 mb-6 max-w-md mx-auto">
            UWe Service is expanding to new cities. Call us to check whether we can help in your area, or use the booking form to submit a service request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919109888774"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-md"
            >
              <Phone size={18} />
              Call +91-9109888774
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Browse All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
