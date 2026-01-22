'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import arrow from '../../../assets/images/arrow.png'
import Image from '../../../assets/images/new- (5).png'

export default function DriveSection() {
  const [showModal, setShowModal] = useState(false)

  const steps = [
    { title: "Sign Up Online ", desc: " Fill out the registration form" },
    { title: "Verification & Training", desc: " Submit documents and attend a short onboarding" },
    { title: "Activate Your Account", desc: "Get approved and start receiving trips" },
    { title: "Start Earning", desc: "Drive on your own schedule and keep 100% of your income" },
  ]

  const requirements = ["Valid Driver's License", "Vehicle Inspection", "Proof of Insurance", "Background Check"]

  return (
    <section className="py-20 md:py-16 lg:py-20 px-4 md:px-6 bg-[#FFFAF2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-1 md:gap-2 lg:gap-2 mb-6 md:mb-5 lg:mb-6"
        >
          <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-[34.463px] md:rounded-[40px] text-[13px] md:text-[14px] lg:text-base font-medium font-nohemi">
            ROVV app
          </span>
          <h2 className="text-xl md:text-[35px] lg:text-[40px] leading-tight font-bold font-nohemi text-[#141414] text-center">
            Become a ROVV Driver
          </h2>
        </motion.div>

        {/* Main Content: Image and Features */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 md:gap-6 lg:gap-20 mb-6 md:mb-10 lg:mb-10">
          
          {/* Driver Image: Scroll Animation & Lazy Load */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-auto flex justify-center lg:justify-start"
          >
            <div className="relative w-[343px] h-[329px] md:w-[519px] md:h-[495.86px] lg:w-[628px] lg:h-[600px] rounded-[33.06px] lg:rounded-[40px] overflow-hidden">
              <img src={Image} alt="ROVV Driver" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Steps List: Staggered Scroll Animation */}
          <div className="flex flex-col gap-4 w-full max-w-[343px] md:max-w-[519px] lg:max-w-[519px] mx-auto lg:mx-0">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 md:gap-6 p-3 md:p-6 border-2 border-[#CDBBE1] rounded-[24px] md:rounded-[40px]"
              >
                <div className="w-10 h-10 md:w-[78px] md:h-[70px] bg-[#CDBBE1] rounded-[8.21px] md:rounded-[16px] flex items-center justify-center shrink-0">
                  <span className="text-lg md:text-[35px] font-bold font-nohemi text-[#4A4A4A]">0{i + 1}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-2xl font-medium font-nohemi text-[#141414]">{step.title}</h3>
                  <p className="text-base md:text-lg font-sans text-[#4A4A4A]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements & CTA: Scroll Animation */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-6 lg:gap-[132px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex flex-col gap-3 lg:gap-4 w-full lg:w-auto"
          >
            <h3 className="text-xl md:text-[32px] font-semibold font-nohemi text-[#141414] text-center lg:text-left">Requirements</h3>
            <div className="flex flex-col gap-3 w-full lg:max-w-[628px]">
              {requirements.map((req, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 px-10 py-6 bg-[#5E239D] rounded-[4px]"
                >
                  <img src={arrow} alt="arrow" loading="lazy" className="w-8 h-8 shrink-0" />
                  <span className="text-xl md:text-2xl font-medium font-nohemi text-white">{req}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="flex flex-col gap-[14px] p-7 md:p-10 w-full max-w-[388px] md:max-w-[519px] lg:max-w-[775px] mx-auto lg:mx-0 bg-[#FFEFD6] rounded-[4px]"
          >
            <div className="flex flex-col gap-4 lg:gap-5 text-center">
              <div>
                <h4 className="text-lg md:text-2xl font-medium font-nohemi text-[#141414]">Join The Community</h4>
                <p className="text-base md:text-lg font-sans text-[#4A4A4A]">Drive with freedom. Earn on your terms</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="flex justify-center items-center px-7 py-[14px] w-full lg:w-[350px] lg:mx-auto h-[52px] bg-[#5E239D] rounded-lg text-white text-xl font-bold hover:bg-purple-700 transition active:scale-95"
              >
                 Tap to Download
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MODAL: Animation In and Out */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-center mb-10 font-nohemi text-gray-900">Sign Up</h2>
              <div className="flex items-center gap-2 p-1.5 border border-gray-100 bg-light rounded-2xl">
                <a href="https://onelink.to/p95t3a" className="flex-1 py-3 px-4 bg-primary text-white text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:opacity-90">For Passenger</a>
                <a href="https://onelink.to/dzak96" className="flex-1 py-3 px-4 text-primary text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:bg-gray-100/50">For Driver</a>
              </div>
              <button onClick={() => setShowModal(false)} className="mt-10 w-full text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors font-nohemi">ROVV</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )

}
