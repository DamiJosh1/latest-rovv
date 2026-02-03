'use client'

import { motion } from 'framer-motion'
import { MapPin, Zap, Car, Navigation } from 'lucide-react'
import mapImg from '../../../assets/images/city2.png'

const stats = [
  { icon: MapPin, label: "1.8 millions+ rides completed in Lagos in the last year" },
  { icon: Car, label: "74% of surveyed riders agree that ride-hailing is safer" },
  { icon: Navigation, label: "EV & CNG cars lower operating costs" },
  { icon: Zap, label: "Real-time tracking & verified drivers" },
]

export default function LagosSection() {
  return (
    <section className="py-12 lg:py-20 px-6 bg-bg overflow-hidden">
      {/* Standardized Container - Matches Header and FutureSection */}
      <div className="max-w-7xl mx-auto">
        
        {/* Grid: md:grid-cols-2 ensures iPad Pro stays in 2-column mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* CONTENT - Left (order-2 on mobile, md:order-1 for side-by-side) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 space-y-6"
          >
            <motion.h2 className="text-[22px] md:text-3xl lg:text-4xl font-bold font-sans text-dark">
              Lagos – Rovv Headquarters
            </motion.h2>

            <motion.p className="text-sm lg:text-[18px] lg:max-w-[621px] text-medium font-normal font-sans leading-relaxed">
              Lagos is the heart of Rovv. As our headquarters, the city represents everything 
              we stand for—speed, reliability, innovation, and scale with millions moving 
              across the city daily.
            </motion.p>

            <motion.p className="text-sm lg:text-[18px] lg:max-w-[621px] text-medium font-normal font-sans leading-relaxed mb-8">
              We are also pioneering sustainable mobility here. Our growing fleet of EV 
              and CNG-powered vehicles reduces emissions and offers passengers smoother rides.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="border border-light rounded-2xl p-6 shadow-lg bg-white/50"
                >
                  <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center shrink-0 mb-4">
                    <item.icon className="w-6 h-6 text-medium" />
                  </div>
                  <p className="text-medium text-[15px] lg:text-[16px] font-normal font-sans">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* IMAGE - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 blur-3xl opacity-20 -z-10 bg-primary"></div>
            <img
              src={mapImg}
              alt="Lagos Operations Map"
              loading="lazy"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}