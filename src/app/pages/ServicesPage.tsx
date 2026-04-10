import { Link, useParams } from "react-router";
import { services } from "../data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ServicesPage() {
  const { serviceId } = useParams();
  const selectedService = serviceId ? services.find((s) => s.id === serviceId) : null;

  if (selectedService) {
    // Service Detail View
    const Icon = selectedService.icon;
    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 py-12">
          <Link
            to="/services"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            ← Back to all services
          </Link>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <ImageWithFallback
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white rounded-full p-4 shadow-lg">
                  <Icon className="text-orange-500" size={32} />
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {selectedService.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">{selectedService.description}</p>
                  <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold">
                    {selectedService.price}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/book/${selectedService.id}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Book This Service
                  <ArrowRight size={20} />
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Verified Professionals
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Money-Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Services List View
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional home services delivered by verified experts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 hover:border-orange-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-lg">
                    <Icon className="text-orange-500" size={20} />
                  </div>
                  {service.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold text-sm">
                      {service.price}
                    </span>
                    <span className="text-orange-500 text-sm group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
