import { Link } from "react-router";
import { 
  FileText, 
  AlertCircle, 
  CreditCard, 
  Users, 
  XCircle, 
  Shield,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  DollarSign,
  Calendar,
  RefreshCw
} from "lucide-react";

export function TermsAndConditions() {
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
              <FileText className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms and Conditions</h1>
              <p className="text-gray-600">Last updated: April 10, 2026</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed">
                Welcome to UWe Service. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
              </p>
            </section>

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By using UWe Service, you agree to these Terms. If you do not agree, please do not use the platform.
              </p>
            </section>

            {/* 2. Nature of Platform */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature of Platform</h2>
              <p className="text-gray-700 mb-3">
                UWe Service connects users with independent service providers.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-blue-900">
                    We act only as a facilitator and do not directly provide services. All services are performed by independent professionals.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">a) Accurate Information</h3>
                  <p className="text-gray-700">
                    Users must provide correct details while using the platform.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">b) Lawful Use</h3>
                  <p className="text-gray-700">
                    Platform must not be misused or used for any unlawful purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Pricing Transparency */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Pricing Transparency</h2>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-green-900">
                    All service charges will be clearly displayed before booking confirmation. There are no hidden fees.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Payments */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Payments</h2>
              </div>
              <div className="space-y-3">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Payments are processed via secure third-party gateways</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>We do <strong>NOT</strong> store card or banking details</span>
                  </li>
                  <li className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>We do <strong>NOT</strong> hold user funds</span>
                  </li>
                </ul>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mt-4">
                  <p className="text-gray-700">
                    <strong>Important:</strong> UWe Service does not operate as a wallet or financial institution.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Booking */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Booking</h2>
              </div>
              <p className="text-gray-700">
                Bookings represent a service request placed through the platform. You will receive confirmation details once a booking is made.
              </p>
            </section>

            {/* 7. Cancellation & Refund */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. Cancellation & Refund</h2>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-green-800">Cancellation &gt; 24 hours before service</p>
                    <p className="text-green-700 text-sm">Full refund</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                  <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-yellow-800">Cancellation &lt; 24 hours before service</p>
                    <p className="text-yellow-700 text-sm">Cancellation fee may apply depending on service preparation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <Users className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-blue-800">If provider cancels</p>
                    <p className="text-blue-700 text-sm">Replacement or full refund will be offered</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Refunds are processed via the original payment method within 5-7 business days.
                </p>
              </div>
            </section>

            {/* 8. Service Provider Responsibility */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">8. Service Provider Responsibility</h2>
              </div>
              <p className="text-gray-700 mb-3">
                Service providers are independent entities responsible for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Service delivery as agreed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Legal compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Quality standards</span>
                </li>
              </ul>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">9. Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 mb-3">
                UWe Service:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Does not guarantee service quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Is not responsible for provider actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>Is not liable for indirect damages</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 10. Platform Role */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">10. Platform Role</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-900">
                  We are <strong>not a party</strong> to the contract between user and service provider. UWe Service acts only as a technology platform to facilitate connections and payments.
                </p>
              </div>
            </section>

            {/* 11. Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Prohibited Activities</h2>
              <p className="text-gray-700 mb-3">Users must not:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-lg">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span className="text-gray-700">Use platform illegally</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-lg">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span className="text-gray-700">Provide false info</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-lg">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span className="text-gray-700">Attempt unauthorized access</span>
                </div>
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-lg">
                  <span className="text-red-500 mt-0.5">✕</span>
                  <span className="text-gray-700">Disrupt services</span>
                </div>
              </div>
            </section>

            {/* 12. Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-700">
                We may suspend or terminate accounts for violations of these Terms.
              </p>
            </section>

            {/* 13. Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Privacy</h2>
              <p className="text-gray-700">
                Your use of the platform is also governed by our{" "}
                <Link to="/privacy-policy" className="text-orange-600 hover:text-orange-700 font-medium underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* 14. Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.
              </p>
            </section>

            {/* 15. Contact */}
            <section className="bg-orange-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact</h2>
              <p className="text-gray-700 mb-4">
                For any questions regarding these Terms, contact us:
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
                <strong>By using UWe Service, you acknowledge that you have read and agreed to these Terms and Conditions.</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}