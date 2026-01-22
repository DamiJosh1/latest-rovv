'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Car, Building2, Handshake, X, 
  Facebook, Mail, Instagram, Linkedin, MessageCircle 
} from 'lucide-react'
import mapImg from '../../../assets/images/new- (6).png'

/**
 * Custom X (Twitter) Icon Component
 */
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
)

export default function PartnershipSection() {
  const [isOpen, setIsOpen] = useState(false)

  const partnerships = [
    { icon: Car, title: "Vehicle Leasing Partnership", desc: "Earn monthly returns through car ownership programs" },
    { icon: Building2, title: "Corporate Transport Solutions", desc: "Custom fleet & employee mobility management" },
    { icon: Handshake, title: "Investment Collaboration", desc: "Partner to scale ROVV into new cities" },
  ]

  const socials = [
    { icon: <Facebook className="w-6 h-6" />, label: "Facebook", href: "#", color: "hover:text-blue-600" },
    { icon: <XIcon />, label: "X", href: "https://x.com/rovvafrica", color: "hover:text-black" },
    { icon: <Mail className="w-6 h-6" />, label: "Gmail", href: "hi@getrovv.com", color: "hover:text-red-500" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", href: "#", color: "hover:text-green-500" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", href: "hhtps://www.instagram.com/rovvafrica?ighs=MTh3eY3M0Mg", color: "hover:text-pink-600" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linnkedin.com/company/getrovv/", color: "hover:text-blue-700" },
  ]

  return (
    <section className="relative py-20 md:py-24 lg:py-26 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Scroll Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-1 md:gap-2 lg:gap-2 mb-8 md:mb-12"
        >
          <span className="inline-flex items-center justify-center px-4 py-1 bg-[#FFF2DE] text-[#141414] rounded-full text-[13px] md:text-[14px] lg:text-base font-medium font-nohemi">
            ROVV app
          </span>
          <div className="flex flex-col items-center">
            <h2 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold font-nohemi text-[#141414] text-center">
              Partner With ROVV
            </h2>
            <p className="text-base md:text-base lg:text-2xl font-medium font-nohemi text-[#4A4A4A] text-center max-w-[333px] lg:max-w-[884px]">
              Join ROVV through simple partnership models built to help you grow and scale
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-20 mb-16">
          
          {/* Left Side: Map Image with Scroll & Lazy Load */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-auto flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[628px] h-[337px] md:h-[414px] lg:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl">
              <img 
                src={mapImg} 
                alt="Partnership Illustration" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </motion.div>

          {/* Right Side: Partnership Detail Cards (Staggered Scroll) */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[434px]">
            {partnerships.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 md:gap-5"
              >
                <div className="w-10 h-10 bg-[#CDBBE1] rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#4A4A4A]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-2xl font-medium font-nohemi text-[#141414]">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg font-normal font-sans text-[#4A4A4A]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col items-center gap-4"
        >
          <h3 className="text-lg md:text-2xl font-medium font-nohemi text-[#141414] text-center">
            Let's Build Africa's Mobility Future Together
          </h3>
          <p className="text-sm md:text-base lg:text-lg font-normal font-sans text-[#4A4A4A] text-center">
            Be part of the movement shaping Africa's mobility future
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-[#5E239D] rounded-lg text-white text-base md:text-xl font-medium font-sans hover:bg-purple-700 shadow-lg transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* MODAL: Animation In and Out */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative z-10"
            >
              <button 
                aria-label="Close Modal"
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <h2 className="text-2xl font-bold font-nohemi text-center text-[#141414] mb-8">Contact Us</h2>
              
              <div className="grid grid-cols-3 gap-6">
                {socials.map((social, idx) => (
                  <motion.a 
                    key={idx}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    className={`flex flex-col items-center gap-2 transition-colors ${social.color}`}
                  >
                    <div className="p-4 bg-light rounded-2xl">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium font-sans">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}