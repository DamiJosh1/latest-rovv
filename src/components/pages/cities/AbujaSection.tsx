'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Car, Navigation } from 'lucide-react'
import mapImg from '../../../assets/images/city1.png'

const stats = [
  { icon: MapPin, label: "Reliable pickups across major business and residential districts" },
  { icon: Car, label: "Low-emission EV & CNG cars helping keep Abuja cleaner" },
  { icon: Zap, label: "Reliable, comfortable rides for commuters and professionals" },
  { icon: Navigation, label: "Real-time tracking & verified drivers" },
]

export default function AbujaSection() {
  return (
    // Standardized section padding to match FutureSection and SafetySection
    <section className="py-12 lg:py-20 px-6 bg-bg overflow-hidden">
      
      {/* THE RULE: Same wrapper as your perfect pages to ensure header alignment */}
      <div className="max-w-7xl mx-auto">
        
        {/* Grid configuration: 
            - md:grid-cols-2: Forces side-by-side layout on iPad Pro
            - gap-12 lg:gap-24: Provides the 'Desktop' breathing room you need
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* IMAGE - Left Side (Aligned with Logo) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1"
          >
            {/* Soft Glow Effect matches Lagos style */}
            <div className="absolute inset-0 blur-3xl opacity-20 -z-10 bg-primary"></div>
            <img
              src={mapImg}
              alt="Abuja Operations Map"
              loading="lazy"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* CONTENT - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 space-y-6"
          >
            <h2 className="text-[22px] md:text-3xl lg:text-4xl font-bold font-sans text-dark leading-tight">
              Abuja – Comfort, Clean Mobility & Smooth Travel
            </h2>
            
            <p className="text-sm md:text-[16.5px] lg:text-[18px] text-medium font-normal font-sans leading-relaxed lg:max-w-[621px]">
              Abuja is known for its calm, well-structured road networks, making it an ideal city for efficient on-demand mobility. 
              Rovv enhances this by offering steady ride availability, premium service quality, and environmentally conscious vehicles.
            </p>
            
            <p className="text-sm md:text-[17px] lg:text-[18px] text-medium font-normal font-sans leading-relaxed lg:max-w-[621px]">
              Our EV and CNG fleet supports cleaner air, reduced noise, and better long-term affordability for both riders and drivers.
            </p>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-light rounded-2xl p-6 shadow-lg bg-white/50 h-full"
                >
                  <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center shrink-0 mb-4">
                    <item.icon className="w-6 h-6 text-medium" />
                  </div>
                  
                  <p className="text-medium text-[15px] lg:text-[16px] font-normal font-sans leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}