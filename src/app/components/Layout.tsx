import { Outlet, Link, useLocation } from "react-router";
import { Logo } from "./Logo";
import { Menu, X, Home, Briefcase, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="transition-transform group-hover:scale-110">
                <Logo size={40} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">UWe Service</span>
                <span className="text-xs text-orange-600">You + We = Done</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      isActive
                        ? "bg-orange-100 text-orange-600 font-medium"
                        : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+919109888774"
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-orange-100 text-orange-600 font-medium"
                        : "text-gray-600 hover:bg-orange-50"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+919109888774"
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg"
              >
                <Phone size={18} />
                Call Now: +91-9109888774
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="container mx-auto px-4">
          {/* Footer Top */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Logo size={32} />
                <div>
                  <div className="font-bold text-white">UWe Service</div>
                  <div className="text-xs text-orange-400">Professional Home Services</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Your trusted partner for all home service needs. Quality work, fair pricing, guaranteed satisfaction.
              </p>
              <p className="text-xs text-gray-500">
                Operated by Mayank Choudhary
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-orange-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-orange-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:text-orange-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:text-orange-400 transition-colors">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-orange-400 flex-shrink-0" />
                  <a href="mailto:support@uweservices.com" className="hover:text-orange-400 transition-colors">
                    support@uweservices.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-orange-400 flex-shrink-0" />
                  <a href="tel:+919109888774" className="hover:text-orange-400 transition-colors">
                    +91-9109888774
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    Makan No. 01, Ward No. 42,<br />
                    Post–New Yard, Sai Nagar,<br />
                    Meharagaon, Hoshangabad,<br />
                    MP – 461115, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Middle - Service Areas */}
          <div className="border-t border-gray-800 py-6 mb-6">
            <div className="text-center">
              <h4 className="text-sm font-medium text-white mb-3">Service Areas</h4>
              <p className="text-xs text-gray-500">
                Currently serving in Madhya Pradesh | Expanding to more cities soon
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 UWe Service. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:support@uweservices.com" 
                  className="text-gray-500 hover:text-orange-400 transition-colors"
                  title="Email Us"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="tel:+919109888774" 
                  className="text-gray-500 hover:text-orange-400 transition-colors"
                  title="Call Us"
                >
                  <Phone size={18} />
                </a>
              </div>
              <p className="text-xs text-gray-500">
                Trusted by thousands of homeowners across India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}