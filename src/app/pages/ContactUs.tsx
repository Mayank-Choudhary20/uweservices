// ContactUs.tsx
import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  CheckCircle,
  ArrowRight,
  User,
  FileText,
  Building,
} from "lucide-react";
import { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Headphones className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-orange-100">
              We're here to help! Reach out to us for any questions, concerns,
              or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-orange-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">
                Send us an email anytime
              </p>
              <a
                href="mailto:support@uweservices.com"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                support@uweservices.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Sat, 9 AM - 8 PM</p>
              <a
                href="tel:+919109888774"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +91-9109888774
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">Our registered office</p>
              <p className="text-blue-600 font-medium text-sm">
                Meharagaon, Hoshangabad,
                <br />
                Madhya Pradesh – 461115
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 rounded-full p-3">
                  <MessageCircle className="text-orange-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 text-sm">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <p className="text-green-800 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-sm">
                      We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <span className="flex items-center gap-2">
                        <User size={16} />
                        Full Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <span className="flex items-center gap-2">
                        <Mail size={16} />
                        Email Address *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <span className="flex items-center gap-2">
                        <Phone size={16} />
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <span className="flex items-center gap-2">
                        <FileText size={16} />
                        Subject *
                      </span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Issue</option>
                      <option value="service">Service Related</option>
                      <option value="payment">Payment Issue</option>
                      <option value="refund">Refund Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      Your Message *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Company Info Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 rounded-full p-3">
                    <Building className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      UWe Service
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Operated by Mayank Choudhary
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                      <Mail className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:support@uweservices.com"
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        support@uweservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+919109888774"
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        +91-9109888774
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Registered Address
                      </h3>
                      <p className="text-gray-600">
                        Makan No. 01, Ward No. 42,
                        <br />
                        Post–New Yard, Sai Nagar,
                        <br />
                        VTC: Meharagaon, District: Hoshangabad,
                        <br />
                        Madhya Pradesh – 461115, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      <Clock className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 8:00 PM
                        <br />
                        Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-orange-100 mb-6">
                  Find quick answers to common questions about our services.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-orange-200" />
                    <span className="text-sm">How do I book a service?</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-orange-200" />
                    <span className="text-sm">
                      What is your cancellation policy?
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-orange-200" />
                    <span className="text-sm">
                      Are your professionals verified?
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-orange-200" />
                    <span className="text-sm">
                      What payment methods do you accept?
                    </span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Browse Services
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">🚨</span>
                  Emergency Service?
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  For urgent service requests, call us directly for immediate
                  assistance.
                </p>
                <a
                  href="tel:+919109888774"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  <Phone size={18} />
                  Call Now: +91-9109888774
                </a>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    → Privacy Policy
                  </Link>
                  <Link
                    to="/terms-and-conditions"
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    → Terms & Conditions
                  </Link>
                  <Link
                    to="/refund-policy"
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    → Refund Policy
                  </Link>
                  <Link
                    to="/services"
                    className="text-sm text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                  >
                    → Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Our Location
              </h2>
              <p className="text-gray-600">
                Hoshangabad District, Madhya Pradesh, India
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 relative">
              {/* Google Maps embed for Hoshangabad/Narmadapuram area */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117579.04625030095!2d77.6556563!3d22.7543889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963d7e5b0a3c0c1%3A0xdd8d8e06e93b0b7b!2sHoshangabad%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UWe Service Location - Hoshangabad, Madhya Pradesh"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                <MapPin className="inline-block mr-1" size={14} />
                Makan No. 01, Ward No. 42, Post–New Yard, Sai Nagar, Meharagaon,
                Hoshangabad, MP – 461115
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Right Away?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Our customer support team is ready to assist you with any questions
            or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919109888774"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone size={20} />
              +91-9109888774
            </a>
            <a
              href="mailto:support@uweservices.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-800 transition-all"
            >
              <Mail size={20} />
              support@uweservices.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}