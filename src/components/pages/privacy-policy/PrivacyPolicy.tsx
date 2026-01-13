'use client';


export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light"> {/* Main page background: bg-bg (light color) */}

      {/* Hero Section - Full-width solid purple background */}
      <div className="bg-purple py-46 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
        <p className="text-purple bg-light inline-block font-bold font-sans px-6 py-2 rounded-full text-sm md:text-base">
            Effective From 1 March 2025
          </p>
        </div>
      </div>

      {/* Main Content Card - White/light background on top of bg-bg */}
      <div className="max-w-4xl lg:max-w-[1310px] mx-auto -mt-25 px-4 pb-2"> {/* Negative margin to slightly overlap hero */}
        <div className="bg-bg rounded-lg shadow-2xl p-8 md:p-12">
          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark  mb-4">
              1. Information We Collect
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                <span>
                  <strong>Personal Info:</strong> Name, email, phone, profile photo, ID (for drivers), payment data.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                <span>
                  <strong>Location:</strong> GPS data, pickup/drop-off points.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                <span>
                  <strong>Device Data:</strong> Device ID, OS version, crash logs, and app usage.
                </span>
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Connect riders with drivers efficiently
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Process payments and ride history
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Enhance performance and safety
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Prevent fraud and misuse
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Send important updates or offers
              </li>
            </ul>
          </section>

          {/* 3. Sharing & Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              3. Sharing & Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We never sell your data. We may share it with:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Drivers/riders for ride coordination
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Secure payment processors
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Regulatory authorities when legally required
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Verified third-party service providers under strict agreements.
              </li>
            </ul>
          </section>

          {/* 4. Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              4. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain data as needed for service delivery, legal compliance, and analytics. Once deleted, data is anonymized or permanently erased.
            </p>
          </section>

          {/* 5. Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              5. Security
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                End-to-end encryption
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Secure payment processors
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Secure servers and encrypted payment gateways
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Access restricted to authorized personnel only
              </li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              6. Your Rights
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Access and update your data anytime
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Delete your account and request data removal
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Manage marketing preferences
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Email hi@getrovv.com for concerns
              </li>
            </ul>
          </section>

          {/* 7. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700">
              We do not collect data from users under 13. Contact us to remove such data if collected unknowingly.
            </p>
          </section>

          {/* 8. Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              8. Updates to Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy. Users will be notified of significant changes via the app or email.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <p className="text-gray-700 font-medium mb-3">Contact ROVV Technologies Ltd:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Email: privacy@getrovv.com
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">▶</span>
                Website: www.getrovv.com
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 