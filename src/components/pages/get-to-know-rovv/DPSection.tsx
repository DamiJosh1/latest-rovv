// src/pages/get-to-know-rovv/DriverRiderFeatures.tsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import missionImg from '../../../assets/images/why-1.png'

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
    <section className="py-20 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-2xl lg:text-5xl md:text-6xl font-nohemi font-bold text-dark">
            Driver & Rider Features
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2">

          {/* Left: Image */}
          <div className="order-1 lg:order-1 mb-5">
            <div className="w-full">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full lg:w-[80%] md:w-[95%] transition-all duration-900 ease-in-out hover:scale-80"
              />
            </div>
          </div>

          {/* Right: Tabs + Features */}
          <div className="order-1 lg:order-2 md:order-2">
            {/* Tabs */}
            <div className="flex justify-center mb-5">
              <button
                onClick={() => setActiveTab('passenger')}
                className={`relative pb-2 px-2 font-medium transition-colors duration-75 ${
                  activeTab === 'passenger'
                    ?  ' text-medium w-40 lg:w-50 md:w-50 '
                    : 'text-medium w-40 md:w-50 lg:w-50 '
                }`}
              >
                For Passengers
                <span
                  className={`absolute bottom-0 right-0 w-full lg:w-full md:w-full h-0.5 transition-colors duration-75 ${
                  activeTab === 'passenger'
                    ?  ' bg-primary '
                    : 'bg-medium '
                }`}
                />

              </button>
              <button
                onClick={() => setActiveTab('driver')}
                 className={`relative pb-2 px-2  font-medium transition-colors duration-75 ${
                  activeTab === 'driver'
                    ?  ' text-medium w-40 md:50 lg:w-50'
                    : 'text-medium w-40 md:w-50 lg:w-50'
                }`}
              >
                For Drivers
                 <span
                  className={`absolute bottom-0 left-0 md:left-0 w-39 lg:w-full md:w-full h-0.5 transition-colors duration-75 ${
                  activeTab === 'driver'
                    ?  ' bg-primary'
                    : 'bg-medium '
                }`}
                />
              </button>
            </div>

            {/* Features List */}
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
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg backdrop-blur-sm rounded-2xl mr-0 p-6 shadow-lg border border-light hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                >
                  <h3 className="text-[24px] font-bold  text-dark">
                    {feature.title}
                  </h3>
                  <p className="text-medium font-bold font-sans leading-relaxed">
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