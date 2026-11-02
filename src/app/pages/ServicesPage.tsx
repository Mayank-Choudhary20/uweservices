import { Link, useParams } from "react-router";
import { services } from "../data/services";
import { ArrowRight, CheckCircle, Clock, ShieldCheck, Phone, ChevronRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEOHead } from "../components/SEOHead";

export function ServicesPage() {
  const { serviceId } = useParams();
  const selectedService = serviceId ? services.find((s) => s.id === serviceId) : null;

  if (selectedService) {
    // Service Detail View
    const Icon = selectedService.icon;
    const canonicalUrl = `https://uweservices.com/services/${selectedService.id}`;
    const pageTitle = selectedService.metaTitle || `${selectedService.name} - Professional Home Services | UWe Service`;
    const pageDesc = selectedService.metaDescription || selectedService.description;

    // Structured Data: Service + Specific Subtype LocalBusiness + Breadcrumb + FAQ
    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": selectedService.schemaType || "HomeAndConstructionBusiness",
          "@id": `https://uweservices.com/#${selectedService.id}`,
          "name": `UWe Service - ${selectedService.name}`,
          "url": canonicalUrl,
          "telephone": "+91-9109888774",
          "priceRange": selectedService.price,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar",
            "addressLocality": "Meharagaon, Hoshangabad",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "461115",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Hoshangabad" },
            { "@type": "City", "name": "Bhopal" },
            { "@type": "State", "name": "Madhya Pradesh" }
          ]
        },
        {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": selectedService.name,
          "serviceType": selectedService.name,
          "description": selectedService.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "UWe Service",
            "url": "https://uweservices.com"
          },
          "areaServed": {
            "@type": "State",
            "name": "Madhya Pradesh"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": selectedService.price
            }
          }
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
              "name": selectedService.name,
              "item": canonicalUrl
            }
          ]
        },
        ...(selectedService.faqs && selectedService.faqs.length > 0
          ? [
              {
                "@type": "FAQPage",
                "mainEntity": selectedService.faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          : [])
      ]
    };

    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
        <SEOHead
          title={pageTitle}
          description={pageDesc}
          canonicalUrl={canonicalUrl}
          ogImage={selectedService.image}
          schema={schemaGraph}
        />

        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-orange-600 transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium">{selectedService.name}</span>
          </nav>

          {/* Hero / Main Service Box */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100 mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-full min-h-[320px]">
                <ImageWithFallback
                  src={selectedService.image}
                  alt={`${selectedService.name} professional service in Madhya Pradesh`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white rounded-full p-4 shadow-lg border border-orange-100">
                  <Icon className="text-orange-500" size={32} />
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                      {selectedService.price}
                    </span>
                    {selectedService.estimatedTime && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        <Clock size={14} />
                        {selectedService.estimatedTime}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedService.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Key Highlights:</h2>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Link
                      to={`/book/${selectedService.id}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                    >
                      Book This Service
                      <ArrowRight size={18} />
                    </Link>
                    <a
                      href="tel:+919109888774"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all"
                    >
                      <Phone size={18} />
                      Call +91-9109888774
                    </a>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="text-orange-500" size={18} />
                      Verified Professionals
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      30-Day Workmanship Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Capabilities Section */}
          {selectedService.capabilities && selectedService.capabilities.length > 0 && (
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                What We Handle in {selectedService.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Our technicians are equipped with modern diagnostic tools and genuine spares for reliable doorstep solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-100/60">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-800 text-sm font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How It Works Section */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How UWe Service Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  1
                </div>
                <h3 className="font-semibold text-gray-900">Choose Service & Time</h3>
                <p className="text-sm text-gray-600">Select your required service, date, and preferred time slot.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  2
                </div>
                <h3 className="font-semibold text-gray-900">Verified Pro Arrives</h3>
                <p className="text-sm text-gray-600">A verified, equipped technician arrives right at your doorstep.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  3
                </div>
                <h3 className="font-semibold text-gray-900">Work Done & Secure Pay</h3>
                <p className="text-sm text-gray-600">Inspect the completed job and pay securely via UPI, Card, or Cash.</p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          {selectedService.faqs && selectedService.faqs.length > 0 && (
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-orange-100 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="text-orange-500" size={26} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {selectedService.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-orange-50/40 border border-orange-100">
                    <h3 className="font-semibold text-gray-900 text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation between services */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Need help with something else?</h3>
              <p className="text-orange-100 text-sm">Explore our other home maintenance and repair services across MP.</p>
            </div>
            <Link
              to="/services"
              className="px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all text-sm whitespace-nowrap"
            >
              View All 8 Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Services Directory View (/services)
  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UWe Service - Home Services Directory",
    "description": "Directory of professional home maintenance and repair services available in Madhya Pradesh.",
    "itemListElement": services.map((s, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": s.name,
      "url": `https://uweservices.com/services/${s.id}`
    }))
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
      <SEOHead
        title="Professional Home Services & Doorstep Repairs in MP | UWe Service"
        description="Book verified plumbers, electricians, AC repair, house cleaning, and carpenters in Bhopal & Hoshangabad. Fast, transparent pricing and doorstep delivery."
        canonicalUrl="https://uweservices.com/services"
        schema={directorySchema}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            All Our Home Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional home maintenance and repairs delivered by verified experts in Madhya Pradesh
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group border border-orange-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.name} in Madhya Pradesh`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      Popular
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="text-green-500" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-lg font-bold text-orange-600 mb-4">
                      {service.price}
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 text-center py-2.5 px-3 border border-orange-500 text-orange-600 rounded-full text-xs font-semibold hover:bg-orange-50 transition-colors"
                      >
                        Details
                      </Link>
                      <Link
                        to={`/book/${service.id}`}
                        className="flex-1 text-center py-2.5 px-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs font-semibold hover:shadow-md transition-all"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
