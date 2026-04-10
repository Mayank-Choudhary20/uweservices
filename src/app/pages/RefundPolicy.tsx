import { Link } from "react-router";
import {
  RefreshCw,
  Clock,
  UserX,
  AlertTriangle,
  XCircle,
  CreditCard,
  Shield,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function RefundPolicy() {
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
              <RefreshCw className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Refund Policy
              </h1>
              <p className="text-gray-600">Last updated: April 10, 2026</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed">
                At UWe Service, we aim to provide a smooth and reliable service
                experience. This Refund Policy outlines the conditions under
                which refunds may be issued.
              </p>
            </section>

            {/* 1. General Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. General Policy
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-blue-900">
                    Refunds are subject to verification and approval. All refund 
                    requests will be reviewed on a case-by-case basis.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Cancellation by User */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  2. Cancellation by User
                </h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-green-800">More than 24 hours before service</p>
                    <p className="text-green-700 text-sm mt-1">→ Full refund</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-yellow-800">Within 24 hours of service</p>
                    <p className="text-yellow-700 text-sm mt-1">→ Partial refund or cancellation fee depending on service preparation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Cancellation by Provider */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserX className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  3. Cancellation by Provider
                </h2>
              </div>
              <p className="text-gray-700 mb-3">
                If a service provider cancels a booking, you will receive:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-blue-800 font-medium">Replacement service</span>
                </div>
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-green-800 font-medium">OR Full refund</span>
                </div>
              </div>
            </section>

            {/* 4. Service Issues */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  4. Service Issues
                </h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Clock className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-orange-900">
                    <strong>Important:</strong> Report any issues within <strong>48 hours</strong> of service completion.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-3">Possible outcomes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Partial refund</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Service correction / revisit</span>
                </li>
              </ul>
            </section>

            {/* 5. Non-Refundable Cases */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  5. Non-Refundable Cases
                </h2>
              </div>
              <p className="text-gray-700 mb-3">
                No refund will be provided if:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Service has been completed successfully</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Incorrect or incomplete information provided by user</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>Change of mind after service delivery</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. Refund Processing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  6. Refund Processing
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Processed to <strong>original payment method</strong></span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Clock className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Takes <strong>5–7 business days</strong> depending on payment provider</span>
                </div>
              </div>
            </section>

            {/* 7. Payment Handling */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  7. Payment Handling
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-3 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">Processed via secure third-party gateways</span>
                </div>
                <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 p-3 rounded-lg">
                  <Shield className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">No sensitive payment data stored</span>
                </div>
                <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 p-3 rounded-lg">
                  <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">No wallet functionality – we do not hold user funds</span>
                </div>
              </div>
            </section>

            {/* 8. Contact for Refunds */}
            <section className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-orange-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  8. Contact for Refunds
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                For refund-related queries, contact us:
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

            {/* Policy Update Notice */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-yellow-900">
                  <strong>Notice:</strong> UWe Service reserves the right to modify this Refund Policy at
                  any time without prior notice. Changes will be posted with an updated date.
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-sm text-blue-900 text-center">
                <strong>
                  By using UWe Service, you acknowledge that you have read and
                  agreed to this Refund Policy.
                </strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}