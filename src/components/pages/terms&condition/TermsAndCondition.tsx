'use client';

import { motion, type Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-light overflow-hidden font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-purple py-25 md:py-28 lg:py-44 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-nohemi"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-purple font-bold bg-light inline-block px-3 py-1 rounded-full text-base shadow-lg"
          >
            Effective Date: June 1, 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl lg:max-w-[1250px] mx-auto -mt-16 px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-6 md:p-12 lg:p-16 text-[#333333] leading-relaxed border border-gray-100"
        >
          {/* Introduction */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-sm md:text-xl text-[#1A1A1A] font-bold font-nohemi mb-4">
              Rovv Technologies Ltd – Terms & Conditions
            </h2>
            <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-4">
              These Terms & Conditions (“Terms”) govern the relationship between Rovv Technologies Ltd (“Rovv”, “we”, “our”, or “us”) and all users of the Rovv platform, including both Drivers and Passengers. By using Rovv services, you agree to comply with these Terms and the specific provisions applicable to your user type.
            </p>
            <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-6">
              This document contains separate terms for <strong>Drivers (Service Providers)</strong> and <strong>Passengers (Users)</strong>. Please review the section applicable to your use of the platform.
            </p>

            <h3 className="text-sm md:text-xl font-bold font-nohemi text-[#1A1A1A] mb-3">
              About Rovv Platform
            </h3>
            <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-12">
              Rovv is a mobility platform that connects independent Drivers with Passengers through a modern, data-powered mobile application. We facilitate safe, reliable, and convenient transportation services through two distinct operational modes: <strong>Driver Sessions</strong> (when drivers are available to receive requests) and <strong>Ride Sessions</strong> (when active transportation services are being provided).
            </p>
          </motion.section>

          {/* DRIVER TERMS & CONDITIONS */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 md:mt-7 pt-10 md:pt-8 border-t-2 border-primary">
            <div className="text-center mb-10">
              <h3 className="text-xl md:text-2xl text-[#62259E] font-bold uppercase tracking-wider font-nohemi">
                DRIVER TERMS & CONDITIONS
              </h3>
              <p className="text-[14px] md:text-[16px] text-dark mt-2 italic">
                The following terms apply specifically to Drivers (Service Providers) using the Rovv Driver App
              </p>
            </div>

            <div className="space-y-14">
              {/* 1. Overview */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  1. Driver Platform Overview
                </h4>
                <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-4">
                  As a Driver on the Rovv platform, you operate as an independent contractor providing transportation services through our subscription-based model. Unlike traditional platforms, Drivers subscribe for access to ride requests instead of paying commission per trip.
                </p>
              </div>

              {/* 2. Sessions */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  2. Driver Sessions vs Ride Sessions
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[#62259E] mb-2 text-base">2.1 Driver Sessions vs Ride Sessions</p>
                    <p className="text-[14px] md:text-[16px] text-dark italic mb-2">
                      A Driver Session begins when you:
                    </p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Log into the Rovv Driver App with an active subscription
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Set your status to “Available” or “Online”
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Position yourself within your designated service area
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Have your vehicle ready and legally compliant for service
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-[#62259E] mb-2 text-base">2.2 Driver Sessions vs Ride Sessions</p>
                    <p className="text-[14px] md:text-[16px] text-dark italic mb-2">
                      A Ride Session begins when you:
                    </p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Accept a ride request from a rider
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Navigate to pickup location and confirm rider pickup
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Transport the rider safely to their destination
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#62259E] text-lg">➤</span> Complete trip and process payment through the app
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Driver Eligibility and Requirements */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
            <h4 className="text-[18px] md:text-xl font-bold text-[#1A1A1A] mb-4 font-nohemi">
              3. Driver Eligibility and Requirements
            </h4>
            
            <div className="space-y-10">
              {/* 3.1 Eligibility Requirements */}
              <div>
                <p className="font-bold text-[#62259E] mb-3 text-sm uppercase">3.1 Eligibility Requirements</p>
                <p className="text-sm mb-3 text-gray-700">To operate as a Rovv driver, you must:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Be at least 21 years old with a valid driver’s license for minimum 2 years",
                    "Meet all local and federal regulatory requirements for commercial driving",
                    "Own or legally operate a roadworthy, insured vehicle (not older than 10 years)",
                    "Maintain comprehensive vehicle insurance coverage",
                    "Pass background checks and vehicle inspections as required",
                    "Maintain an active Rovv subscription plan",
                    "Provide accurate and up-to-date personal and vehicle information",
                    "Complete Rovv’s driver onboarding and safety training"
                  ].map((text, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#62259E] mt-1">➤</span>
                      <span className="text-sm md:text-base text-[#333333]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.2 Professional Conduct Standards */}
              <div>
                <p className="font-bold text-[#62259E] mb-3 text-sm uppercase">3.2 Professional Conduct Standards</p>
                <p className="text-sm mb-3 text-gray-700">During all Driver and Ride Sessions, you agree to:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Treat all riders with respect, courtesy, and professionalism",
                    "Maintain excellent personal hygiene and professional appearance",
                    "Keep your vehicle clean, safe, and in good working condition",
                    "Follow all traffic laws and drive safely and responsibly",
                    "Verify rider identity and assist with reasonable requests",
                    "Process all payments exclusively through the Rovv app",
                    "Maintain confidentiality regarding rider information"
                  ].map((text, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#62259E] mt-1">➤</span>
                      <span className="text-sm md:text-base text-[#333333]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3.3 Prohibited Activities */}
              <div>
                <p className="font-bold text-primary mb-3 text-sm uppercase">3.3 Prohibited Activities</p>
                <p className="text-sm mb-3 text-dark">Drivers are strictly prohibited from:</p>
                <ul className="space-y-2 ml-4">
                  {[
                    "Engaging in illegal, fraudulent, or deceptive activities",
                    "Processing ride payments outside the Rovv app",
                    "Sharing, selling, or transferring driver accounts",
                    "Manipulating GPS location or session data",
                    "Operating under the influence of alcohol or substances",
                    "Discriminating against or harassing riders",
                    "Circumventing subscription or safety policies"
                  ].map((text, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-primary mt-1">➤</span>
                      <span className="text-sm md:text-base text-[#333333]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

              {/* 4. Subscription Model */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  4. Driver Subscription Model
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[#62259E] mb-3 text-base">4.1 Subscription Benefits</p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Unlimited access to ride requests within service area</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> 24/7 driver support and emergency assistance</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Real-time performance analytics and earnings tracking</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Access to driver incentive and bonus programs</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> No commission deducted from individual ride earnings</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-[#62259E] mb-3 text-base">4.2 Payment Terms</p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Subscription fees billed monthly or weekly as selected</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Failed payments result in immediate suspension of access</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Earnings from completed rides processed weekly</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> No refunds for unused subscription periods</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Safety & Performance */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  5. Driver Safety and Performance
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-[#62259E] mb-3 text-base">5.1 Safety Protocols and Insurance Protection</p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Verify rider identity before beginning any ride session</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Use Rovv’s safety features and emergency protocols</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Report suspicious behavior or safety concerns immediately</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Personal Accident Cover (PAC):</strong> Rovv provides Personal Accident Cover up to $50 for drivers during active ride sessions only</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-[#62259E] mb-3 text-base">5.2 Performance Standards</p>
                    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Maintain minimum acceptance rates during driver sessions</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Complete at least 90% of accepted ride sessions</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Achieve satisfactory rider ratings and feedback</li>
                      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Poor performance may result in account review or suspension</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PASSENGER TERMS & CONDITIONS */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 md:mt-7 pt-10 md:pt-8 border-t-2 border-primary">
            <div className="text-center mb-10">
              <h3 className="text-[18px] md:text-2xl text-[#62259E] font-bold uppercase tracking-wider font-nohemi">
                PASSENGER TERMS & CONDITIONS
              </h3>
              <p className="text-[14px] md:text-[16px] text-dark mt-2 italic">
                The following terms apply specifically to Passengers (Users) using the Rovv mobile app
              </p>
            </div>

            <div className="space-y-14">
              {/* 1. Overview */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  1. Rider Platform Overview
                </h4>
                <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-4">
                  As a passenger, you use the Rovv platform to request transportation services from independent drivers. The platform facilitates safe, reliable connections between you and qualified drivers in your area through our mobile application.
                </p>
              </div>

              {/* 2. Ride Sessions */}
              <div>
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  2. Understanding Ride Sessions
                </h4>
                <p className="font-bold text-[#62259E] mb-3 text-base">2.1 Ride Session Phases</p>
                <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>Booking Phase:</strong> Request ride, receive driver match, track approach
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>Pickup Phase:</strong> Meet driver, verify identity, confirm trip details
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>Transport Phase:</strong> Travel to destination with safety protocols active
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>Completion Phase:</strong> Arrive at destination, process payment, rate experience
                  </li>
                </ul>
              </div>
              {/* 2.2 App Usage vs Ride Sessions */}
              <div className="mt-6">
                <p className="font-bold text-[#62259E] mb-3 text-base">2.2 App Usage vs Ride Sessions</p>
                <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>General App Usage:</strong> Account management, fare estimates, trip history
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#62259E] text-lg">➤</span> <strong>Active Ride Sessions:</strong> Real-time transportation with specific safety obligations
                  </li>
                </ul>
              </div>

              {/* 3. Rider Eligibility and Account Requirements */}
              <div className="mt-8">
                <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
                  3. Rider Eligibility and Account Requirements
                </h4>
                
                <p className="font-bold text-[#62259E] mb-3 text-base">3.1 Account Requirements</p>
                <p className="text-dark mb-3">To use Rovv services, you must:</p>
                <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Be at least 18 years old or have parental/guardian consent</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Provide accurate and truthful personal information</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Maintain valid mobile phone number and email address</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Add valid payment methods for ride transactions</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Keep account credentials secure and confidential</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Create only one account per person</li>
                </ul>

                <p className="font-bold text-[#62259E] mt-6 mb-3 text-base">3.2 Account Security</p>
                <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Verify phone number and email upon registration</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Update information promptly when changes occur</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Report compromised accounts immediately</li>
                  <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Take responsibility for all account activity</li>
                </ul>
              </div>

             {/* 4. Ride Booking and Conduct */}
<div>
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    4. Ride Booking and Conduct
  </h4>
  <div className="space-y-6">
    {/* 4.1 Booking Rides */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">4.1 Booking Rides</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Request rides only when genuinely needed</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Provide accurate pickup and destination locations</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Be available at pickup location when driver arrives</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Cancel rides early if plans change</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Communicate delays or changes promptly</li>
      </ul>
    </div>

    {/* 4.2 Conduct During Ride Sessions */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">4.2 Conduct During Ride Sessions</p>
      <p className="text-[14px] md:text-[16px] text-dark mb-2">To use Rovv services, you must:</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Treat drivers with respect, courtesy, and professionalism</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Follow driver instructions regarding vehicle rules</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Wear seatbelts and comply with safety protocols</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Keep vehicles clean and avoid damaging property</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Maintain appropriate behavior and language</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Respect driver privacy and personal boundaries</li>
      </ul>
    </div>

    {/* 4.3 Prohibited Activities */}
    <div>
      <p className="font-bold text-primary mb-3 text-base">4.3 Prohibited Activities</p>
      <p className="text-[14px] md:text-[16px] text-dark mb-2">Passengers are strictly prohibited from:</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Engaging in illegal activities or transporting illegal substances</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Harassing, threatening, or discriminating against drivers</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Recording drivers without explicit consent</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Attempting to pay drivers outside the app</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Bringing weapons, dangerous items, or prohibited substances</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Exceeding vehicle capacity or bringing unauthorized passengers</li>
        <li className="flex gap-3 items-start"><span className="text-primary text-lg">➤</span> Vandalizing or damaging vehicle property</li>
      </ul>
    </div>
  </div>
</div>

              {/* 5. Passenger Payments and Pricing */}
<div>
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    5. Passenger Payments and Pricing
  </h4>
  <div className="space-y-6">
    {/* 5.1 Fare Structure and Options */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">5.1 Fare Structure and Options</p>
      <p className="text-[14px] md:text-[16px] text-dark mb-2">Rovv offers passengers flexible pricing options:</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Standard Fare Calculation: Fares calculated based on distance, time, and demand</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Rider Bidding Option: Riders can choose to bid their preferred fare amount for the trip</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Dynamic pricing during peak hours or high-demand periods</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Upfront fare estimates provided before confirmation for both standard and bid options</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Drivers can accept or decline rider bids based on their preference</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Additional fees may apply for tolls, airports, or waiting time</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> All payments processed exclusively through the app regardless of pricing method</li>
      </ul>
    </div>

    {/* 5.2 Payment Processing */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">5.2 Payment Processing</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Automatic payment upon ride completion</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Accepted methods: cards, mobile money, digital wallets</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Payment receipts sent via email and available in-app</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Failed payments may restrict future bookings</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Refunds processed for legitimate service issues</li>
      </ul>
    </div>

    {/* 5.3 Cancellation Policies */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">5.3 Cancellation Policies</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Free cancellation within 2 minutes of booking</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Cancellation fees apply after driver dispatch</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> No-show fees for failing to appear at pickup</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Repeated cancellations may result in account restrictions</li>
      </ul>
    </div>
  </div>
</div>
              {/* 6. Passenger Safety and Security */}
<div>
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    6. Passenger Safety and Security
  </h4>
  <div className="space-y-6">
    {/* 6.1 Safety Features and Insurance */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">6.1 Safety Features and Insurance</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Real-time GPS tracking throughout ride sessions</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Driver verification and background checks</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> In-app emergency button for immediate assistance</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Trip sharing features for trusted contacts</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> 24/7 safety support team availability</li>
        <li className="flex gap-3 items-start">
          <span className="text-[#62259E] text-lg">➤</span> 
          <span><strong>Personal Accident Cover (PAC):</strong> Rovv provides Personal Accident Cover up to $50 for riders during active ride sessions only</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-[#62259E] text-lg">➤</span> 
          <span><strong>Coverage Limitations:</strong> PAC covers personal injury and medical expenses but does not cover vehicle damage or property damage</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="text-[#62259E] text-lg">➤</span> 
          <span><strong>Active Session Coverage:</strong> Insurance protection applies only during active ride sessions from pickup to drop-off</span>
        </li>
      </ul>
    </div>

    {/* 6.2 Personal Safety Guidelines */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">6.2 Personal Safety Guidelines</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Verify driver and vehicle details before entering</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Share trip details with trusted contacts</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Sit in back seat when riding alone</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Trust instincts and exit if feeling unsafe</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Stay alert and avoid excessive alcohol before rides</li>
      </ul>
    </div>

    {/* 6.3 Reporting Safety Issues */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">6.3 Reporting Safety Issues</p>
      <p className="text-[14px] md:text-[16px] text-dark mb-2">Immediately report:</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Unsafe driving behavior or vehicle conditions</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Inappropriate conduct or harassment by drivers</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Accidents, emergencies, or security incidents</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Route deviations or GPS direction violations</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Technical issues affecting safety features</li>
      </ul>
    </div>
  </div>
</div>


                  {/* 7. Rider Account Management */}
<div>
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    7. Rider Account Management
  </h4>
  <div className="space-y-6">
    {/* 7.1 Account Suspension */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">7.1 Account Suspension</p>
      <p className="text-[14px] md:text-[16px] text-dark mb-2">
        Rider accounts may be suspended for:
      </p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Violation of conduct rules during ride sessions</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Fraudulent payment activities or repeated failures</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Safety violations or inappropriate behavior</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Multiple complaints from drivers</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Providing false information or multiple accounts</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Repeated cancellations affecting driver earnings</li>
      </ul>
    </div>

    {/* 7.2 Account Restoration */}
    <div>
      <p className="font-bold text-[#62259E] mb-3 text-base">7.2 Account Restoration</p>
      <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Suspended accounts may be restored after resolution</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Payment issues resolved through billing support</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Safety violations require review process</li>
        <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Appeal process available through customer support</li>
      </ul>
    </div>
  </div>
</div>
</div>
          </motion.section>

          {/* SHARED LEGAL PROVISIONS */}
<motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-24 pt-16 border-t-2 border-gray-200">
  <h2 className="text-sm md:text-xl text-[#1A1A1A] font-bold font-nohemi mb-6">
    Shared Legal Provisions
  </h2>
  <p className="text-[14px] md:text-[16px] text-dark leading-relaxed mb-6">
    The following terms apply to all users of the Rovv platform
  </p>

  {/* Data Privacy and Protection */}
  <div className="mb-10">
    <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
      Data Privacy and Protection
    </h4>
    <p className="font-bold text-[#62259E] mb-3 text-base">Information Collection and Usage</p>
    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Personal information collected during registration and platform usage</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Location data used for ride matching, navigation, and safety monitoring</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Trip history and usage patterns for service improvement</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Communication logs for support and safety purposes</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Payment information for transaction processing</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Data protected according to our Privacy Policy</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Anonymous data may be used for analytics and research</li>
    </ul>
  </div>

  {/* Platform Liability Limitations */}
  <div className="mb-10">
    <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
      Platform Liability Limitations
    </h4>
    <p className="text-[14px] md:text-[16px] text-dark mb-3">Rovv is not liable for:</p>
    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Actions, conduct, or negligence of drivers or riders</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Accidents, injuries, or incidents during transportation</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Loss, theft, or damage to personal property</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Service interruptions due to technical or external factors</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Consequences of providing inaccurate information</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Third-party interference or unauthorized access</li>
    </ul>
  </div>

  {/* Indemnification */}
  <div className="mb-10">
    <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
      Indemnification
    </h4>
    <p className="text-[14px] md:text-[16px] text-dark mb-3">All users agree to indemnify Rovv from third-party claims arising from:</p>
    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Breach of these Terms and Conditions</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Violation of laws or regulations during platform use</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Fraudulent or unauthorized activities</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Providing false or inaccurate information</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Conduct during platform usage or transportation sessions</li>
    </ul>
  </div>

  {/* Intellectual Property */}
  <div className="mb-10">
    <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
      Intellectual Property
    </h4>
    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Rovv app, brand, logos, and intellectual property belong to Rovv Technologies Ltd</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Users granted limited license for personal transportation purposes only</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Prohibited from copying, modifying, or reverse engineering the app</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Cannot use Rovv trademarks without written permission</li>
    </ul>
  </div>

  {/* Legal Framework */}
  <div className="mb-10">
    <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
      Legal Framework
    </h4>
    <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Governing Law:</strong> These Terms are governed by the laws of the Federal Republic of Nigeria</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Jurisdiction:</strong> Disputes resolved in Nigerian courts with competent jurisdiction</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Independent Contractor:</strong> Drivers operate as independent contractors, not employees</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Severability:</strong> Invalid provisions do not affect remaining terms</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Force Majeure:</strong> Rovv not liable for circumstances beyond reasonable control</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Amendments:</strong> Terms may be updated with advance notice</li>
      <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> <strong>Language:</strong> English version prevails in case of translation discrepancies</li>
    </ul>
  </div>
           {/* Dispute Resolution */}
<div className="mb-10">
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    Dispute Resolution
  </h4>
  <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Contact Rovv Support for complaints, disputes, or issues</li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> 24/7 customer support available through app and email</li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Report issues within 24 hours for fastest resolution</li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Mediation preferred before formal legal proceedings</li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Escalation process available for unresolved matters</li>
  </ul>
</div>

{/* Contact Information Section */}
<div className="mb-10">
  <h4 className="text-sm md:text-xl font-bold font-nohemi text-dark mb-3">
    Contact Information
  </h4>
  <p className="text-[14px] md:text-[16px] text-dark mb-3">Contact Rovv Technologies Ltd:</p>
  <ul className="space-y-2 ml-4 text-[14px] md:text-[16px] text-dark">
    <li className="flex gap-3 items-start">
      <span className="text-[#62259E] text-lg">➤</span> 
      <span>Support Email: <a href="mailto:support@getrovv.com" className="text-[#62259E] font-medium">support@getrovv.com</a></span>
    </li>
    <li className="flex gap-3 items-start">
      <span className="text-[#62259E] text-lg">➤</span> 
      <span>Official Website: <a href="https://www.getrovv.com" target="_blank" rel="noopener noreferrer" className="text-[#62259E] font-medium">www.getrovv.com</a></span>
    </li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> In-App Support: Available 24/7 through help center</li>
    <li className="flex gap-3 items-start"><span className="text-[#62259E] text-lg">➤</span> Emergency Support: Use in-app emergency features during rides</li>
  </ul>
</div>

{/* Effective Date and Acknowledgement Box */}
<div className="bg-[#F9F5FF] p-6 md:p-10 rounded-2xl border border-[#D6BCFA] mt-16">
  <p className="text-dark font-bold text-[14px] md:text-[16px] mb-4">
    Effective Date: <span className="text-dark font-normal">These Terms and Conditions are effective as of June 1, 2025.</span>
  </p>
  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
    By using Rovv services as either a Driver or Rider, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, including the specific provisions applicable to your user type.
  </p>
</div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
