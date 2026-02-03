'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import missionImg from '../../../assets/images/boy.png'

const passengerFeatures = [
  { title: "Affordable Pricing", desc: "Enjoy comfortable rides at fair, everyday prices built for everyone" },
  { title: "Safe Drivers", desc: "Ride confidently with trained, verified, and safety-focused drivers" },
  { title: "Real-time Tracking", desc: "Track your driver’s route live from pickup to drop-off" },
  { title: "Instant Wallet Refunds", desc: "Get quick, automatic refunds straight to your ROVV Wallet" },
  { title: "Scheduled & Multi-Stop Rides", desc: "Plan ahead or add extra stops to complete your trip your way" },
]

const driverFeatures = [
  { title: "Zero-Commission Model", desc: "Keep 100% of your earnings with ROVV’s driver-first system" },
  { title: "Daily/Weekly Cashouts", desc: "Withdraw your money anytime with flexible daily and weekly cashouts" },
  { title: "Lease-to-Own Vehicles", desc: "Get a car, drive it, and own it over time with our flexible lease plans" },
  { title: "Insurance & Health Support", desc: "Stay protected with insurance coverage and wellness support for drivers" },
  { title: "Loyalty & Reward Points", desc: "Earn points on every trip and unlock exclusive driver rewards" },
  { title: "24/7 Support & Free Training", desc: "Access round-the-clock support and free training to help you grow" },
]

export default function DriverRiderFeatures() {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver'>('passenger')

  return (
    <section className="py-5 md:py-15 px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER: Individual entrance for Badge and Title */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#FFF2DE] text-dark md:text[14px] font-nohemi font-medium rounded-full mb-4">
              Features
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl lg:text-5xl md:text-2xl font-nohemi font-bold text-dark"
          >
            Driver & Rider Features
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">

          {/* LEFT: Featured Image with Scroll Animation & Lazy Load */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1 mb-5"
          >
            <div className="w-full">
              <img
                src={missionImg}
                alt="ROVV Features Illustration"
                loading="lazy"
                className="w-full lg:w-[80%] md:w-[95%] transition-all duration-900 ease-in-out hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT: Interactive Tabs and Staggered Feature Cards */}
          <div className="order-1 lg:order-2 md:order-2">
            
            {/* Scroll Animation: Tabs Wrapper */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center mb-5"
            >
              <button
                onClick={() => setActiveTab('passenger')}
                className={`relative pb-2 px-2 font-medium transition-colors duration-75 ${
                  activeTab === 'passenger' ? ' text-medium w-40 lg:w-50 md:w-40 ' : 'text-medium w-40 md:w-40 lg:w-50 '
                }`}
              >
                For Passengers
                <span className={`absolute bottom-0 right-0 w-full h-0.5 transition-colors duration-75 ${activeTab === 'passenger' ? ' bg-primary ' : 'bg-medium '}`} />
              </button>

              <button
                onClick={() => setActiveTab('driver')}
                className={`relative pb-2 px-2 font-medium transition-colors duration-75 ${
                  activeTab === 'driver' ? ' text-medium w-40 md:w-30 lg:w-50' : 'text-medium w-40 md:w-30 lg:w-50'
                }`}
              >
                For Drivers
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-75 ${activeTab === 'driver' ? ' bg-primary' : 'bg-medium '}`} />
              </button>
            </motion.div>

            {/* FEATURES LIST: Animates when tab switches OR on first scroll */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {(activeTab === 'passenger' ? passengerFeatures : driverFeatures).map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-bg backdrop-blur-sm rounded-2xl mr-0 p-5 shadow-lg border border-light hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                >
                  <h3 className="text-[24px] md:text-[18px] font-medium leading-6 text-dark mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-medium font-normal md:text-[16px] font-sans leading-5.5">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}