'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import missionImg from '../../../assets/images/ima.jpg'

const passengerFeatures = [
  { title: "Download the ROVV App", desc: "Get the app to start booking rides instantly." },
  { title: "Register or Sign In", desc: "Create an account or log in to continue." },
  { title: "Pick Your Ride Option", desc: "Choose Ride, Delivery, or Intercity—whatever you need." },
  { title: "Confirm Your Trip", desc: "Set your pickup and destination in seconds." },
  { title: "Track & Pay Easily", desc: "Follow your trip live and pay with wallet or cash." },
]

const driverFeatures = [
  { title: "Register on ROVV Drive", desc: "Sign up in minutes to join our driver community" },
  { title: "Get Verified & Start Trips", desc: "Complete verification and begin receiving ride requests" },
  { title: "Drive, Earn & Withdraw", desc: "Accept trips, earn steadily, and cash out anytime" },
]

export default function HowItWork() {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver'>('passenger')

  return (
    <section className="py-20 lg:py-25 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <span className="inline-flex items-center gap-2 font-sans font-bold bg-back text-dark px-4 py-2 rounded-[40px] text-sm">
            How It Works
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl lg:text-5xl md:text-6xl font-nohemi font-bold text-dark">
            Getting Started Is Easy
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 items-center">

          {/* Left: Phone Image with CLASSIC FLOATING ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-1 flex justify-center"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0], // Smooth vertical floating
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full flex justify-center"
            >
              <img
                src={missionImg}
                alt="ROVV App Interface"
                loading="lazy"
                className="w-full lg:w-[85%]  md:w-[95%] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Right: Tabs + Features */}
          <div className="order-1 lg:order-2 md:order-2">
            
            {/* Tab Toggles */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab('passenger')}
                className={`relative pb-2 px-2 font-medium transition-colors duration-300 ${
                  activeTab === 'passenger' ? 'text-primary w-40 lg:w-50 md:w-50' : 'text-medium w-40 md:w-50 lg:w-50'
                }`}
              >
                For Passengers
                {activeTab === 'passenger' && (
                  <motion.span 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" 
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('driver')}
                className={`relative pb-2 px-2 font-medium transition-colors duration-300 ${
                  activeTab === 'driver' ? 'text-primary w-40 md:50 lg:w-50' : 'text-medium w-40 md:w-50 lg:w-50'
                }`}
              >
                For Drivers
                {activeTab === 'driver' && (
                  <motion.span 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" 
                  />
                )}
              </button>
            </div>

            {/* Feature List: Staggered Fade-in */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {(activeTab === 'passenger' ? passengerFeatures : driverFeatures).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 border border-light rounded-2xl px-5 py-4 shadow-md bg-white hover:shadow-lg transition-shadow"
                  >
                    <div className="text-2xl font-black w-12 h-12 bg-light items-center justify-center flex rounded-xl text-medium shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-medium font-nohemi text-dark mb-1">{feature.title}</h3>
                      <p className="font-sans font-medium text-xs md:text-sm text-medium leading-snug">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}