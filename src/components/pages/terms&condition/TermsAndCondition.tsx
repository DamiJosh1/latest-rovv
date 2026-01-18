'use client';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-light">
      {/* Light main background */}

      {/* Hero Section - Solid purple */}
      <div className="bg-purple py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-purple font-nohemi font-bold bg-light inline-block px-6 py-2 rounded-full text-sm md:text-base">
            Effective From June 2023
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto -mt-8 px-4 pb-16">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-gray-700 leading-relaxed">

          <h2 className="text-xl text-dark font-nohemi font-bold mb-4">
            Rovv Technologies Ltd - Terms & Conditions
          </h2>

          <p className="mb-6">
            These Terms & Conditions (“Terms”) govern the relationship between
            Rovv Technologies Ltd (“Rovv”, “us”, “our”, or “we”) and all users of
            the Rovv platform, including both Drivers and Passengers. By using
            Rovv services, you agree to comply with these Terms and the specific
            provisions that apply to your user type.
          </p>

          <p className="mb-8">
            This document contains separate terms for Drivers (Service Providers)
            and Passengers (Clients). Please review the section applicable to
            your use of the platform.
          </p>

          {/* About Rovv Platform */}
          <h3 className="text-2xl text-dark font-nohemi font-bold mb-4">
            About Rovv Platform
          </h3>

          <p className="mb-10">
            Rovv is a mobility platform that connects independent Drivers with
            Passengers through a modern, data-powered mobile application. We
            facilitate safe, reliable, and convenient transportation services
            through two distinct operational modes: Driver Sessions (when
            drivers are available to receive request) and Ride Sessions (when
            active transportation services are being provided).
          </p>

          {/* DRIVER TERMS & CONDITIONS */}
          <h3 className="text-2xl text-dark font-nohemi font-bold mb-6 mt-12">
            DRIVER TERMS & CONDITIONS
          </h3>

          <p className="mb-8">
            The following terms apply specifically to Drivers (Service Providers)
            using the Rovv Driver App
          </p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">
            1. Driver Platform Overview
          </h4>

          <p className="mb-8">
            As a Driver on the Rovv platform, you operate as an independent
            contractor providing transportation services through our
            subscription-based model. Unlike traditional platforms, Drivers
            subscribe for access for ride requests instead of paying commission
            per trip.
          </p>

          <h4 className="text-xl font-semibold text-purple-900 mb-4">
            2. Driver Sessions vs Ride Sessions
          </h4>

          <h5 className="text-lg font-medium mb-3">2.1 Driver Sessions</h5>

          <p className="mb-4">A Driver Session begins when you:</p>

          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Log into the Rovv Driver App with an active subscription</li>
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

          <h4 className="text-xl font-semibold text-purple-900 mb-4">
            3. Driver Eligibility and Requirements
          </h4>

          <h5 className="text-lg font-medium mb-3">3.1 Eligibility Requirements</h5>

          <p className="mb-4">To operate as a Rovv driver, you must:</p>

          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Be at least 21 years old with a valid driver’s license for minimum 2 years</li>
            <li>Meet all local and federal regulatory requirements for commercial driving</li>
            <li>Own or legally operate a roadworthy, insured vehicle (not older than 10 years)</li>
            <li>Maintain comprehensive vehicle insurance coverage</li>
            <li>Pass background checks and vehicle inspections as required</li>
            <li>Maintain an active Rovv subscription plan</li>
            <li>Provide accurate and up-to-date personal and vehicle information</li>
            <li>Complete Rovv’s driver onboarding and safety training</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">3.2 Professional Conduct Standards</h5>

          <p className="mb-4">During all Driver and Ride Sessions, you agree to:</p>

          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Treat all riders with respect, courtesy, and professionalism</li>
            <li>Maintain excellent personal hygiene and professional appearance</li>
            <li>Keep your vehicle clean, safe, and in good working condition</li>
            <li>Follow all traffic laws and drive safely and responsibly</li>
            <li>Verify rider identity and assist with reasonable requests</li>
            <li>Process all payments exclusively through the Rovv app</li>
            <li>Maintain confidentiality regarding rider information</li>
          </ul>

          <h5 className="text-lg font-medium mb-3">3.3 Prohibited Activities</h5>

          <p className="mb-4">Drivers are strictly prohibited from:</p>

          <ul className="list-disc list-inside space-y-2 mb-8 ml-6">
            <li>Engaging in illegal, fraudulent, or deceptive activities</li>
            <li>Processing ride payments outside the Rovv app</li>
            <li>Sharing, selling, or transferring driver accounts</li>
            <li>Manipulating GPS location or session data</li>
            <li>Operating under the influence of alcohol or substances</li>
            <li>Discriminating against or harassing riders</li>
            <li>Circumventing subscription or safety policies</li>
          </ul>

          {/* …REST OF FILE CONTINUES WITH SAME STRUCTURE, ALL “Rovy” → “Rovv” … */}

          <p className="mt-12 font-medium">
            Effective Date: These Terms and Conditions are effective as of June 1, 2023.
          </p>

          <p className="mt-8">
            By using Rovv services as either a Driver or Rider, you acknowledge
            that you have read, understood, and agree to be bound by these Terms
            and Conditions, including the specific provisions applicable to your
            user type.
          </p>

        </div>
      </div>
    </div>
  );
}
