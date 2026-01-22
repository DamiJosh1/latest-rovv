'use client';

import { motion, type Variants } from 'framer-motion';

/**
 * Section Variants: Explicitly typed to solve TypeScript errors
 * and provide full autocomplete for Framer Motion properties.
 */
const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light overflow-hidden"> 
      
      {/* Hero Section: Smooth Fade Entry */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-purple py-46 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-purple bg-light inline-block font-bold font-sans px-6 py-2 rounded-full text-sm md:text-base"
          >
            Effective From 1 March 2025
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Card: Overlaps Hero slightly */}
      <div className="max-w-4xl lg:max-w-[1310px] mx-auto -mt-25 px-4 pb-20"> 
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-bg rounded-lg shadow-2xl p-8 md:p-12 border border-gray-100"
        >
          
          {/* 1. Information We Collect */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              1. Information We Collect
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                { label: "Personal Info", val: "Name, email, phone, profile photo, ID (for drivers), payment data." },
                { label: "Location", val: "GPS data, pickup/drop-off points." },
                { label: "Device Data", val: "Device ID, OS version, crash logs, and app usage." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▶</span>
                  <span><strong>{item.label}:</strong> {item.val}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 2. How We Use Information */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Connect riders with drivers efficiently", 
                "Process payments and ride history", 
                "Enhance performance and safety", 
                "Prevent fraud and misuse", 
                "Send important updates or offers"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▶</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 3. Sharing & Disclosure */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              3. Sharing & Disclosure
            </h2>
            <p className="text-gray-700 mb-4">We never sell your data. We may share it with:</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Drivers/riders for ride coordination", 
                "Secure payment processors", 
                "Regulatory authorities when legally required", 
                "Verified third-party service providers"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▶</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 4. Data Retention */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              4. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain data as needed for service delivery, legal compliance, and analytics. Once deleted, data is anonymized or permanently erased.
            </p>
          </motion.section>

          {/* 5. Security */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              5. Security
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "End-to-end encryption", 
                "Secure payment processors", 
                "Secure servers and encrypted payment gateways", 
                "Access restricted to authorized personnel"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▶</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 6. Your Rights */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              6. Your Rights
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Access and update your data anytime", 
                "Delete your account and request data removal", 
                "Manage marketing preferences", 
                "Email hi@getrovv.com for concerns"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">▶</span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 7. Children's Privacy */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700">
              We do not collect data from users under 13. Contact us to remove such data if collected unknowingly.
            </p>
          </motion.section>

          {/* 8. Updates to Policy */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-nohemi text-dark mb-4">
              8. Updates to Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy. Users will be notified of significant changes via the app or email.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}