'use client';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-light"> {/* Light main background */}

      {/* Hero Section - Solid purple */}
      <div className="bg-purple py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-purple font-nohemi font-bold  bg-light inline-block px-6 py-2 rounded-full text-sm md:text-base">
            Effective From June 2023
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto -mt-8 px-4 pb-16">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-gray-700 leading-relaxed">

          <h2 className="text-xl text-dark font-nohemi font-bold  mb-4">Rovy Technologies Ltd - Terms & Conditions</h2>

          <p className="mb-6">
            These Terms & Conditions (“Terms”) govern the relationship between Rovy Technologies Ltd (“Rovy”, “us”, “our”, or “we”) and all users of the Rovy platform, including both Drivers and Passengers. By using Rovy services, you agree to comply with these Terms and the specific provisions that apply to your user type.
          </p>

          <p className="mb-8">
            This document contains separate terms for Drivers (Service Providers) and Passengers (Clients). Please review the section applicable to your use of the platform.
          </p>

          {/* About Rovy Platform */}
          <h3 className="text-2xl text-dark font-nohemi font-bold  mb-4">About Rovy Platform</h3>
          <p className="mb-10">
            Rovy is a mobility platform that connects independent Drivers with Passengers through a modern, data-powered mobile application. We facilitate safe, reliable, and convenient transportation services through two distinct operational modes: Driver Sessions (when drivers are available to receive request) and Ride Sessions (when active transportation services are being provided).
          </p>

          {/* DRIVER TERMS & CONDITIONS */}
          <h3 className="text-2xl  text-dark font-nohemi font-bold mb-6 mt-12">DRIVER TERMS & CONDITIONS</h3>
          <p className="mb-8">The following terms apply specifically to Drivers (Service Providers) using the Rovy Driver App</p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">1. Driver Platform Overview</h4>
          <p className="mb-8">
            As a Driver on the Rovy platform, you operate as an independent contractor providing transportation services through our subscription-based model. Unlike traditional platforms, Drivers subscribe for access for ride requests instead of paying commission per trip.
          </p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">2. Driver Sessions vs Ride Sessions</h4>

          <h5 className="text-lg font-medium mb-3">2.1 Driver Sessions</h5>
          <p className="mb-4">A Driver Session begins when you:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Log into the Rovy Driver App with an active subscription</li>
            <li>Set your status to “Available” or “Online”</li>
            <li>Position yourself within your designated service area</li>
            <li>Have your vehicle ready and legally compliant for service</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">2.2 Ride Sessions</h5>
          <p className="mb-4">A Ride Session begins when you:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Accept a ride request from a rider</li>
            <li>Navigate to pickup location and confirm rider pickup</li>
            <li>Transport the rider safely to their destination</li>
            <li>Complete trip and process payment through the app</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">3. Driver Eligibility and Requirements</h4>

          <h5 className="text-lg font-medium mb-3">3.1 Eligibility Requirements</h5>
          <p className="mb-4">To operate as a Rovy driver, you must:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Be at least 21 years old with a valid driver’s license for minimum 2 years</li>
            <li>Meet all local and federal regulatory requirements for commercial driving</li>
            <li>Own or legally operate a roadworthy, insured vehicle (not older than 10 years)</li>
            <li>Maintain comprehensive vehicle insurance coverage</li>
            <li>Pass background checks and vehicle inspections as required</li>
            <li>Maintain an active Rovy subscription plan</li>
            <li>Provide accurate and up-to-date personal and vehicle information</li>
            <li>Complete Rovy’s driver onboarding and safety training</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">3.2 Professional Conduct Standards</h5>
          <p className="mb-4">During all Driver and Ride Sessions, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Treat all riders with respect, courtesy, and professionalism</li>
            <li>Maintain excellent personal hygiene and professional appearance</li>
            <li>Keep your vehicle clean, safe, and in good working condition</li>
            <li>Follow all traffic laws and drive safely and responsibly</li>
            <li>Verify rider identity and assist with reasonable requests</li>
            <li>Process all payments exclusively through the Rovy app</li>
            <li>Maintain confidentiality regarding rider information</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">3.3 Prohibited Activities</h5>
          <p className="mb-4">Drivers are strictly prohibited from:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Engaging in illegal, fraudulent, or deceptive activities</li>
            <li>Processing ride payments outside the Rovy app</li>
            <li>Sharing, selling, or transferring driver accounts</li>
            <li>Manipulating GPS location or session data</li>
            <li>Operating under the influence of alcohol or substances</li>
            <li>Discriminating against or harassing riders</li>
            <li>Circumventing subscription or safety policies</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">4. Driver Subscription Model</h4>

          <h5 className="text-lg font-medium mb-3">4.1 Subscription Benefits</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Unlimited access to ride requests within service area</li>
            <li>Join driver support and emergency assistance</li>
            <li>Real-time performance analytics and earnings tracking</li>
            <li>Access to driver incentive and bonus programs</li>
            <li>No commission deducted from individual ride earnings</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">4.2 Payment Terms</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Subscription fixed billed monthly or weekly as selected</li>
            <li>Failed payments result in immediate suspension of access</li>
            <li>Earnings from completed rides processed weekly</li>
            <li>No refunds for unused subscription periods</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">5. Driver Safety and Performance</h4>

          <h5 className="text-lg font-medium mb-3">5.1 Safety Protocols and Insurance Protection</h5>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-6">
            <li>Verify rider identity before beginning any Ride Session</li>
            <li>Use Rovy’s safety features and emergency protocols</li>
            <li>Report suspicious behavior or safety concerns immediately</li>
            <li>Maintain vehicle safety standards and regular inspections</li>
            <li>Follow emergency procedures and cooperate with authorities</li>
            <li>Personal Accident Cover (PAC): Rovy provides Personal Accident Cover up to $50C for drivers during active ride sessions only</li>
          </ul>
          <p className="mb-4 italic">Coverage Limitations: PAC covers personal injury and medical expenses but does not cover vehicle damage or property to damage</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Active Session Coverage: Insurance protection applies only during active ride sessions from pickup to drop off</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">5.2 Performance Standards</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Maintain minimum acceptance rates during driver sessions</li>
            <li>Complete at least 70% of accepted ride sessions</li>
            <li>Achieve satisfactory rider ratings and feedback</li>
            <li>Respond to support requests promptly</li>
            <li>Poor performance may result in account review or suspension</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">6. Driver Account Management</h4>
          <p className="mb-4">Driver accounts may be suspended or terminated for:</p>
          <ul className="list-disc list-inside space-y-2 mb-12 ml-6">
            <li>Breach of these Terms and Conditions</li>
            <li>Subscription payment failures or inactive accounts</li>
            <li>Safety violations or fraudulent activities</li>
            <li>Multiple rider complaints or poor performance</li>
            <li>Violation of local laws or regulations</li>
          </ul>

          {/* PASSENGER TERMS & CONDITIONS */}
          <h3 className="text-2xl font-bold text-purple-900 mb-6 mt-12">PASSENGER TERMS & CONDITIONS</h3>
          <p className="mb-8">The following terms apply specifically to Passengers (Clients) using the Rovy mobile app</p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">1. Rider Platform Overview</h4>
          <p className="mb-8">
            As a passenger, you use the Rovy platform to request transportation services from independent drivers. The platform facilitates safe, reliable connections between you and qualified drivers in your area through our mobile application.
          </p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">2. Understanding Ride Sessions</h4>

          <h5 className="text-lg font-medium mb-3">2.1 Ride Session Phases</h5>
          <p className="mb-4">A complete Ride Session includes:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Booking Phase: Request ride, receive driver match, track approach</li>
            <li>Pickup Phase: Meet driver, verify identity, confirm trip details</li>
            <li>Transport Phase: Travel to destination with safety protocols active</li>
            <li>Completion Phase: Arrive at destination, process payment, rate experience</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">2.2 App Usage vs Ride Sessions</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>General App Usage: Account management, fare estimates, trip history</li>
            <li>Active Ride Sessions: Real-time transportation with specific safety obligations</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">3. Rider Eligibility and Account Requirements</h4>

          <h5 className="text-lg font-medium mb-3">3.1 Account Requirements</h5>
          <p className="mb-4">To use Rovy services, you must:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Be at least 18 years old or have parental/guardian consent</li>
            <li>Provide accurate and truthful personal information</li>
            <li>Maintain valid mobile phone number and email address</li>
            <li>Add valid payment methods for ride transactions</li>
            <li>Keep account credentials secure and confidential</li>
            <li>Create only one account per person</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">3.2 Account Security</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Verify phone number and email upon registration</li>
            <li>Update information promptly when changes occur</li>
            <li>Report compromised accounts immediately</li>
            <li>Take responsibility for all account activity</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">4. Ride Booking and Conduct</h4>

          <h5 className="text-lg font-medium mb-3">4.1 Booking Rides</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Request rides only when genuinely needed</li>
            <li>Provide accurate pickup and destination locations</li>
            <li>Be available at pickup location when driver arrives</li>
            <li>Cancel rides early if plans change</li>
            <li>Communicate delays or changes promptly</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">4.2 Conduct During Ride Sessions</h5>
          <p className="mb-4">To use Rovy services, you must:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Treat drivers with respect, courtesy, and professionalism</li>
            <li>Follow driver instructions regarding vehicle rules</li>
            <li>Wear seatbelts and comply with vehicle protocols</li>
            <li>Keep vehicles clean and avoid damaging contents</li>
            <li>Maintain appropriate behavior and language</li>
            <li>Respect driver privacy and personal boundaries</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">4.3 Prohibited Activities</h5>
          <p className="mb-4">Passengers are strictly prohibited from:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Engaging in illegal activities or transporting illegal substances</li>
            <li>Harassing, threatening, or discriminating against drivers</li>
            <li>Recording drivers without explicit consent</li>
            <li>Attempting to pay drivers outside the app</li>
            <li>Bringing weapons, dangerous items, or prohibited substances</li>
            <li>Exceeding vehicle capacity or bringing unauthorized passengers</li>
            <li>Vandalizing or damaging vehicle property</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">5. Passenger Payments and Pricing</h4>

          <h5 className="text-lg font-medium mb-3">5.1 Fare Structure and Options</h5>
          <p className="mb-4">Rovy offers passengers flexible pricing options:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Standard/Fare Calculation: Fares calculated based on distance, time, and demand</li>
            <li>Rider Bidding/Offers: Riders can choose to bid their preferred fare amount for the trip</li>
            <li>Dynamic Pricing: Pricing during peak hours or high-demand periods</li>
            <li>Upfront Fare Estimates: Provided before confirmation for both standard and bid options</li>
            <li>Drivers can accept or decline rider bids based on their preference</li>
            <li>Additional fees may apply for tolls, airports, or waiting time</li>
            <li>All payments processed exclusively through the app, regardless of pricing method</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">5.2 Payment Processing</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Automatic payment upon ride completion</li>
            <li>Accepted methods: cards, mobile money, digital wallets</li>
            <li>Payment receipt sent via email and available in app</li>
            <li>Failed payments may receive future bookings</li>
            <li>Refunds processed for legitimate service issues</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">5.3 Cancellation Policies</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Free cancellation within 2 minutes of booking</li>
            <li>Cancellation fees apply after driver dispatch</li>
            <li>No show fees for failing to appear at pickup</li>
            <li>Repeated cancellations may result in account restrictions</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">6. Passenger Safety and Security</h4>

          <h5 className="text-lg font-medium mb-3">6.1 Safety Features and Insurance</h5>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-6">
            <li>Real-time GPS tracking throughout ride sessions</li>
            <li>Driver verification and background checks</li>
            <li>In-app emergency button for immediate assistance</li>
            <li>Trip sharing features for trusted contacts</li>
            <li>24/7 safety support team availability</li>
            <li>Personal Accident Cover (PAC): Rovy provides Personal Accident Cover up to $50C for riders during active ride sessions only</li>
          </ul>
          <p className="mb-4 italic">Coverage Limitations: PAC covers personal injury and medical expenses but does not cover vehicle damage or property to damage</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Active Session Coverage: Insurance protection applies only during active ride sessions from pickup to drop off</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">6.2 Personal Safety Guidelines</h5>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Verify driver and vehicle details before entering</li>
            <li>Share trip details with trusted contacts</li>
            <li>Sit in back seat when riding alone</li>
            <li>Trust instincts and exit if feeling unsafe</li>
            <li>Stay alert and avoid excessive alcohol before rides</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">6.3 Reporting Safety Issues</h5>
          <p className="mb-4">Immediately report:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Unsafe driving behavior or vehicle conditions</li>
            <li>Inappropriate conduct or harassment by drivers</li>
            <li>Accidents, emergencies, or security incidents</li>
            <li>Route deviations or GPS direction violations</li>
            <li>Technical issues affecting safety features</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">7. Rider Account Management</h4>

          <h5 className="text-lg font-medium mb-3">7.1 Account Suspension</h5>
          <p className="mb-4">Rider accounts may be suspended for:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Violation of conduct rules during ride sessions</li>
            <li>Fraudulent payment activities or repeated failures</li>
            <li>Safety violations or inappropriate behavior</li>
            <li>Multiple complaints from drivers</li>
            <li>Providing false information or multiple accounts</li>
            <li>Repeated cancellations affecting driver earnings</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">7.2 Account Restoration</h5>
          <ul className="list-disc list-inside space-y-2 mb-12 ml-6">
            <li>Suspended accounts may be restored after resolution</li>
            <li>Payment issues resolved through billing support</li>
            <li>Safety violations require review process</li>
            <li>Appeal process available through customer support</li>
          </ul>

          {/* SHARED LEGAL PROVISIONS */}
          <h3 className="text-2xl font-bold text-purple-900 mb-6 mt-12">SHARED LEGAL PROVISIONS</h3>
          <p className="mb-8">The following terms apply to all users of the Rovy platform</p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Data Privacy and Protection</h4>
          <h5 className="text-lg font-medium mb-3">Information Collection and Usage</h5>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Personal information collected during registration and platform usage</li>
            <li>Location data used for ride matching, navigation, and safety monitoring</li>
            <li>Trip history and usage patterns for service improvement</li>
            <li>Communication logs for support and safety purposes</li>
            <li>Payment information for transaction processing</li>
            <li>Data protected according to our Privacy Policy</li>
            <li>Anonymous data may be used for analytics and research</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Platform Liability Limitations</h4>
          <p className="mb-4 font-medium">ROVY IS NOT LIABLE FOR:</p>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Actions, conduct, or negligence of drivers or riders</li>
            <li>Accidents, injuries, or incidents during transportation</li>
            <li>Loss, theft, or damage to personal property</li>
            <li>Service interruptions due to technical or external factors</li>
            <li>Consequences of providing inaccurate information</li>
            <li>Third-party interference or unauthorized access</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Indemnification</h4>
          <p className="mb-8">
            All users agree to indemnify Rovy from third-party claims arising from:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Breach of these Terms and Conditions</li>
            <li>Violation of laws or regulations during platform use</li>
            <li>Fraudulent or unauthorized activities</li>
            <li>Providing false or inaccurate information</li>
            <li>Conduct during platform usage or transportation sessions</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Intellectual Property</h4>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Rovy app, brand, logos, and intellectual property belong to Rovy Technologies Ltd</li>
            <li>Users granted limited license for personal transportation purposes only</li>
            <li>Prohibited from copying, modifying, or reverse engineering the app</li>
            <li>Cannot use Rovy trademarks without written permission</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Legal Framework</h4>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Governing Law: These Terms are governed by the laws of the Federal Republic of Nigeria</li>
            <li>Jurisdiction: Disputes resolved in Nigerian courts with competent jurisdiction</li>
            <li>Independent Contractor: Drivers operate as independent contractors, not employees</li>
            <li>Severability: Invalid provisions do not affect remaining terms</li>
            <li>Force Majeure: Rovy not liable for circumstances beyond reasonable control</li>
            <li>Amendments: Terms may be updated with advance notice</li>
            <li>Language: English version prevails in case of translation discrepancies</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Dispute Resolution</h4>
          <ul className="list-disc list-inside space-y-2 mb-10 ml-6">
            <li>Contact Rovy Support for complaints, disputes, or issues</li>
            <li>24/7 customer support available through app and email</li>
            <li>Report issues within 24 hours for fastest resolution</li>
            <li>Mediation preferred before formal legal proceedings</li>
            <li>Escalation process available for unresolved matters</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">Contact Information</h4>
          <p className="mb-4">Contact Rovy Technologies Ltd:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start">
              <span className="text-purple-600 mr-3">▶</span>
              <span className="font-medium">Support Email:</span>
              <a href="mailto:support@getrovy.com" className="text-purple-600 hover:underline ml-2">support@getrovy.com</a>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3">▶</span>
              <span className="font-medium">Official Website:</span>
              <a href="https://www.getrovy.com" className="text-purple-600 hover:underline ml-2">www.getrovy.com</a>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3">▶</span>
              In-App Support: Available 24/7 through in-app center
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3">▶</span>
              Emergency Support: Use in-app emergency features during rides
            </li>
          </ul>

          <p className="mt-12 font-medium">
            Effective Date: These Terms and Conditions are effective as of June 1, 2023.
          </p>

          <p className="mt-8">
            By using Rovy services as either a Driver or Rider, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, including the specific provisions applicable to your user type.
          </p>

        </div>
      </div>
    </div>
  );
}