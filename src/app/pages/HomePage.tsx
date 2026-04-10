import { Link } from "react-router";
import { Logo } from "../components/Logo";
import { services } from "../data/services";
import { ArrowRight, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const popularServices = services.filter((s) => s.popular);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo size={56} />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">UWe Service</h1>
                  <p className="text-xl text-orange-100">You + We = Done Right</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                Professional Home Services at Your Doorstep
              </h2>
              <p className="text-lg text-orange-50">
                Book trusted professionals for all your home service needs. Quality work, fair pricing, and guaranteed satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Browse Services
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+91 9109888774"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767082090928-f2eeef2270f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG1vZGVybiUyMGhvbWV8ZW58MXx8fHwxNzc1NTk3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy family at home"
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
              { icon: Star, label: "Avg Rating", value: "4.9/5" },
              { icon: CheckCircle, label: "Jobs Done", value: "50K+" },
              { icon: Clock, label: "Same Day", value: "Available" },
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

      {/* Popular Services */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of homeowners for reliable, professional service
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
                      alt={service.name}
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
              View All Services
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
              How UWe Service Works
            </h2>
            <p className="text-lg text-gray-600">Simple, fast, and reliable</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Your Service",
                description: "Browse our services and select what you need for your home",
              },
              {
                step: "2",
                title: "Book & Schedule",
                description: "Pick a convenient time and provide your details",
              },
              {
                step: "3",
                title: "Get It Done",
                description: "Our verified professional arrives and completes the job",
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who trust UWe Service for all their home needs
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Book a Service Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
