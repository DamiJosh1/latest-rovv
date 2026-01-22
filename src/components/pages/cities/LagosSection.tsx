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
    <section className="px-4 lg:py-20 lg:px-6 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1 items-center">

        {/* CONTENT - Right (Animated with scroll up/down effect) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          {/* Header Animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-3xl lg:text-2xl font-medium font-sans text-dark mb-6"
          >
            Lagos – Rovv Headquarters
          </motion.h2>

          {/* Description Paragraphs */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-sm lg:text-[18px] lg:w-[621px] text-medium font-normal font-sans leading-relaxed mb-10"
          >
            Lagos is the heart of Rovv. As our headquaters, the city represents everything 
            we stand for—speed, reliability, innovation, and scale with millions moving 
            across the city daily. Lagos allow Rovv to deliver fast pickups, transparent 
            pricing, and a consistanly safe ride experience.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-sm lg:text-[18px] lg:w-[621px] text-medium font-normal font-sans leading-relaxed mb-12"
          >
            We are also pioneering sustainable mobility here. Our growing fleet of EV 
            and CNG-powered vehicles reduces emissions, lowers fuel dependencies, 
            and offers passengers smoother, quicker rides.
          </motion.p>

          {/* Staggered Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border border-light rounded-2xl p-6 shadow-lg bg-white/50"
              >
                <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-medium" />
                </div>
                <p className="text-medium text-[16px] lg:w-[254px] mt-6 flex font-normal font-sans">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* IMAGE - Left (Animated with scroll up/down effect + Lazy Load) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-1"
        >
          <div className="absolute inset-0 blur-3xl opacity-40 -z-10"></div>
          <div className="absolute inset-0 opacity-40 -z-10"></div>
          <img
            src={mapImg}
            alt="Lagos Operations Map"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  )
}