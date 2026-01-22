'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import girlImg from '../../../assets/images/safety-full.png'

const safetyDetails = {
  title: "Safety, Every Step of the Way",
  content: "At ROVV, your safety is our top priority. Every ride is designed with protective measures that help you feel confident from pickup to drop-off. Our drivers are verified, trips are monitored in real time, and support is always within reach whenever you need it. Whether you’re commuting daily, traveling between cities, or sending a package, ROVV is committed to creating a secure, reliable experience you can trust, every single time."
}

export default function SafetySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-10 px-6 lg:px-8 md:py-0 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Scroll Animation: Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <span className="inline-block px-4 py-1 bg-[#FFF2DE] text-dark font-sans font-bold rounded-full mb-4 md:mb-1 lg:mb-4">
            Safety
          </span>
          <h2 className="text-[20px] md:text-2xl lg:text-[40px] font-bold font-nohemi text-dark">
            Your safety comes first
          </h2>
        </motion.div>

        <div className="overflow-hidden grid md:grid-cols-2 items-center">
          
          {/* Scroll Animation: Left Image (with Lazy Load) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative md:h-full"
          >
            <img 
              src={girlImg} 
              alt="Happy and safe passenger" 
              loading="lazy"
              className="w-[100%] md:w-[80%] md:translate-x-0 lg:translate-x-20"
            />
          </motion.div>

          {/* Scroll Animation: Right Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-2 md:p-0 lg:p-10 space-y-4 md:-ml-10"
          >
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl text-start md:text-left font-medium font-nohemi text-dark">
              Safety you can feel in every ride
            </h3>
            
            <div className="text-[18px] md:w-[424px] md:text-[18px] lg:text-[16px] text-medium md:text-left lg:text-left font-medium font-sans text-start leading-relaxed">
              <p>
                We're committed to protecting both passengers and drivers on every trip, with 
                safety features and standards that ensure everyone moves confidently and securely.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex px-15 py-3 md:px-7 md:py-3.5 bg-primary text-bg font-medium rounded-[8px] transition shadow-lg hover:shadow-xl"
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal logic with AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-[430px] rounded-3xl p-8 md:p-10 relative shadow-2xl flex flex-col justify-center"
            >
              <h2 className="text-xl md:text-2xl font-bold text-left mb-4 font-nohemi text-dark">
                {safetyDetails.title}
              </h2>
              <p className="text-[#4A4A4A] text-left leading-[22px] md:leading-[24px] font-normal font-sans text-[15px] md:text-[14.5px]">
                {safetyDetails.content}
              </p>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="mt-6 text-primary font-bold text-sm text-left hover:underline"
              >
                
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )

}
