// src/pages/how-it-works/HowItWorks.tsx
import { motion } from 'framer-motion'
import { useState } from 'react'
import missionImg from '../../../assets/images/new- (4).png'

const passengerFeatures = [
  { 
    title: "Download the ROVV App", 
    desc: "Get the app to start booking rides instantly." 
  },
  { 
    title: "Register or Sign In", 
    desc: "Create an account or log in to continue." 
  },
  { 
    title: "Pick Your Ride Option", 
    desc: "Choose Ride, Delivery, or Intercity—whatever you need." 
  },
  { 
    title: "Confirm Your Trip", 
    desc: "Set your pickup and destination in seconds." 
  },
  { 
    title: "Track & Pay Easily", 
    desc: "Follow your trip live and pay with wallet or cash." 
  },
]
const driverFeatures = [
  { 
    title: "Register on ROVV Drive", 
    desc: "Sign up in minutes to join our driver community"
  },
  { 
    title: "Get Verified & Start Trips", 
    desc: "Complete verification and begin receiving ride requests"
  },
  { 
    title: "Drive, Earn & Withdraw", 
    desc: "Accept trips, earn steadily, and cash out anytime"
  },
]


export default function HowItWork() {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver'>('passenger')

  return (
    <section className="py-20 lg:py-25 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-2 font-sans font-bold bg-dark text-bg px-4 py-2 rounded-[40px] text-sm">
            How It Works
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-2xl lg:text-5xl md:text-6xl font-nohemi font-bold text-dark">
            Getting Started Is Easy
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
                  className="flex w-full xl:w-full md:flex-row gap-4 md:w-full lg:translate-x-0 border border-light rounded-2xl px-5 py-4 shadow-md"
                >
                <div className="text-3xl font-black w-15 h-15 sm:w-15 sm:h-15 bg-light items-center justify-center flex rounded-xl text-medium">0{i + 1}</div>
                    <div>
                      <h3 className="text-[16px] md:text-xl font-bold  text-dark mb-1">{feature.title}</h3>
                      <p className="font-sans font-bold text-[10px] md:text-sm text-medium w-full xl:w-90 leading-snug">{feature.desc}</p>
                    </div>
                
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}