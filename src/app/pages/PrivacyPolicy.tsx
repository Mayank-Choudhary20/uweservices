import { Link } from "react-router";
import { 
  Shield, 
  CreditCard, 
  Database, 
  Users, 
  Lock, 
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  User
} from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Shield className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: April 10, 2026</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed">
                UWe Service ("we", "our", or "us") is operated by{" "}
                <strong>Mayank Choudhary</strong>, located at:
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded mt-3">
                <p className="text-gray-700">
                  Makan No. 01, Ward No. 42,<br />
                  Post–New Yard, Sai Nagar,<br />
                  VTC: Meharagaon, District: Hoshangabad,<br />
                  State: Madhya Pradesh, India – 461115
                </p>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We are committed to protecting your privacy and ensuring transparency in how your information is handled.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="text-orange-500" size={20} />
                    <h3 className="text-lg font-semibold text-gray-900">a) Personal Information</h3>
                  </div>
                  <p className="text-gray-700 mb-3">We may collect:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Full name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Service address</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    This is required to process bookings and deliver services.
                  </p>
                </div>

                {/* Payment Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="text-blue-600" size={20} />
                    <h3 className="text-lg font-semibold text-blue-900">b) Payment Information</h3>
                  </div>
                  <p className="text-blue-900 mb-3">
                    <strong>We do not store or process sensitive payment details</strong> such as:
                  </p>
                  <ul className="space-y-2 text-blue-800 ml-4 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✕</span>
                      <span>Card numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✕</span>
                      <span>CVV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✕</span>
                      <span>UPI PIN</span>
                    </li>
                  </ul>
                  <p className="text-blue-900">
                    All payments are securely processed through authorized third-party payment gateways. We only receive limited details such as transaction ID, amount, and status.
                  </p>
                </div>

                {/* Usage Information */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="text-orange-500" size={20} />
                    <h3 className="text-lg font-semibold text-gray-900">c) Usage Information</h3>
                  </div>
                  <p className="text-gray-700 mb-3">We may collect:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>IP address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Device type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Browser type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Pages visited</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    This helps improve performance and user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
              <p className="text-gray-700 mb-3">We use data to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Operate the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Connect users with service providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Process bookings and payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Send confirmations and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Improve services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Prevent fraud and ensure safety</span>
                </li>
              </ul>
            </section>

            {/* 3. Nature of Platform */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Nature of Platform</h2>
              <p className="text-gray-700 mb-4">
                UWe Service is a <strong>service facilitation platform</strong>.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-800 font-medium mb-2">We:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Do NOT act as a financial institution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Do NOT store money</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Do NOT operate as a wallet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                Payments are processed via secure third-party gateways.
              </p>
            </section>

            {/* 4. Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">a) Service Providers</h3>
                  <p className="text-gray-700">
                    We share necessary details (name, phone, address) with service providers to complete bookings.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">b) Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose data if required by law.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">c) Business Transfers</h3>
                  <p className="text-gray-700">
                    Data may be transferred in case of business restructuring.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Data Security</h2>
              </div>
              <p className="text-gray-700">
                We implement reasonable safeguards, but no system is 100% secure.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Data Retention</h2>
              </div>
              <p className="text-gray-700">
                Data is retained only as long as necessary for services and legal compliance.
              </p>
            </section>

            {/* 7. User Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. User Rights</h2>
              </div>
              <p className="text-gray-700 mb-3">You may:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Request access to your data</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Request corrections</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Request deletion</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Withdraw consent</span>
                </div>
              </div>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p className="text-gray-700">
                We may use cookies to improve experience and analyze usage.
              </p>
            </section>

            {/* 9. Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
              <p className="text-gray-700">
                We are not responsible for third-party privacy practices.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700">
                Our platform is intended for users above 18 years.
              </p>
            </section>

            {/* 11. Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Updates</h2>
              <p className="text-gray-700">
                Policy may be updated periodically. Updates will be posted with a revised "Last updated" date.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section className="bg-orange-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions regarding this Privacy Policy, contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <Mail className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href="mailto:support@uweservices.com" 
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      support@uweservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <Phone className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href="tel:+919109888774" 
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      +91-9109888774
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <MapPin className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-700">
                      Makan No. 01, Ward No. 42,<br />
                      Post–New Yard, Sai Nagar,<br />
                      Meharagaon, Hoshangabad,<br />
                      Madhya Pradesh – 461115, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-sm text-blue-900 text-center">
                <strong>By using UWe Service, you acknowledge that you have read and understood this Privacy Policy.</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}