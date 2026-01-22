'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import sideImg from '../../../assets/images/new--1.png'

const faqs = [
  { q: "How does ROVV work?", a: "ROVV connects riders and drivers seamlessly through a simple mobile app..." },
  { q: "How do I become a ROVV driver?", a: "Sign up online, submit documents..." },
  { q: "Can I schedule a ride ahead of time?", a: "Yes! You can book rides in advance..." },
  { q: "How are fares calculated on ROVV?", a: "Fares are transparent and based on..." },
  { q: "What safety measures does ROVV provide?", a: "We have ride OTP, SOS button, 24/7 support..." },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-27 px-6 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section: Scroll Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-5"
        >
          <span className="inline-flex items-center gap-2 font-nohemi font-medium bg-back text-dark px-4 py-2 rounded-[40px] text-sm">
            FAQ
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-4xl font-nohemi text-center font-bold md:mb-10 lg:mb-10 text-dark"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className='flex flex-col md:flex-row gap-8 items-start'>
          
          {/* FAQ Accordion List: Staggered Scroll In */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-sm overflow-hidden transition-all duration-300 ${
                  openIndex === i 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-purple border border-gray-100 text-bg'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center transition-colors"
                >
                  <span className="text-[14px] md:text-xl font-bold pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === i ? (
                      <X className="w-6 h-6 shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-bg" />
                    )}
                  </motion.div>
                </button>

                {/* Animated Expand/Collapse */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-sm md:text-base font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Side Image: CLASSIC FLOATING ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 order-first md:order-last mt-10 md:mt-0 flex justify-center"
          >
            <motion.img 
              src={sideImg} 
              alt="FAQ Illustration" 
              loading="lazy"
              animate={{ 
                y: [0, -15, 0], // Smooth vertical floating
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-auto object-contain drop-shadow-2xl" 
            />
          </motion.div>
        </div>

        {/* Bottom CTA: Scroll Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <p className="text-xl font-bold font-nohemi mb-2 text-dark">Still have questions?</p>
          <p className="text-lg text-gray-600 font-sans mb-8">Please contact our support team, we’re happy to help!</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary rounded-xl font-bold text-white hover:opacity-90 shadow-md transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}