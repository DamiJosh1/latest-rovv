'use client'

import Image from '../../../assets/images/ima (2) (1).png'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPinned, BarChart3, LineChart, BellRing, CarFront, ShieldCheck, FileText } from 'lucide-react'

const features = [
  { icon: MapPinned, title: "Real-time GPS Tracking", desc: "See every vehicle’s live location and movement at a glance" },
  { icon: BarChart3, title: "Driver Performance Dashboard", desc: "Monitor driving behavior and performance in one smart dashboard" },
  { icon: LineChart, title: "Income & Trip Analytics", desc: "Track earnings and trip insights to improve daily operations" },
  { icon: BellRing, title: "Maintenance Alerts", desc: "Get instant notifications when a vehicle needs service or attention" },
  { icon: CarFront, title: "Multi-Vehicle Management", desc: "Control and oversee all your vehicles from a single platform" },
  { icon: ShieldCheck, title: "Access Control", desc: "Assign roles and manage who can access your fleet tools" },
  { icon: FileText, title: "Automated Reports", desc: "Receive scheduled reports that keep you updated effortlessly" },
]

export default function FleetSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="py-10 mt-11 md:mt-0 md:py-20 px-4 md:px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Scroll up/down animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3 mb-12"
        >
          <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-full text-[13px] md:text-[14px] lg:text-base font-medium font-nohemi">
            Smart Fleet
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <h2 className="text-[18px] md:text-[32px] lg:text-[40px] leading-tight font-bold font-nohemi text-[#141414] text-center">
              Manage Your Fleet Smarter with ROVV
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] font-medium font-nohemi text-[#4A4A4A] text-center max-w-2xl">
              Track, manage, and optimize your fleet with ease
            </p>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* PHONE IMAGE: "Mad Pro" Floating & Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Continuous Floating Effect */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <img
                src={Image}
                alt="ROVV Fleet Dashboard"
                loading="lazy"
                className="w-full max-w-[500px] h-auto object-contain transition-all duration-700 hover:drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Background Glow for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          </motion.div>

          {/* FEATURES: Staggered Scroll up/down */}
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 bg-light rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-medium" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1 font-nohemi">{feature.title}</h3>
                  <p className="font-sans text-medium text-sm leading-relaxed max-w-md">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA: Scroll up/down animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold font-nohemi text-gray-900 mb-2"> Partner with ROVV Fleet </h3>
          <p className="text-lg font-medium font-nohemi mb-6"> Partner with ROVV Fleet for seamless control </p>
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-lg hover:bg-primary/90 transition-all active:scale-95 font-nohemi"
          >
            Sign Up
          </button>
        </motion.div>
      </div>

      {/* MODAL: Strict to your design */}
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
                <a href="onelink.to/p95t3a" className="flex-1 py-3 px-4 bg-primary text-white text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:opacity-90 active:scale-95">For Passenger</a>
                <a href="https://onelink.to/dzak96" className="flex-1 py-3 px-4 text-primary text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:bg-gray-100 active:scale-95">For Driver</a>
              </div>
              <button onClick={() => setShowModal(false)} className="mt-10 w-full text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors font-nohemi">ROVV</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}