'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import bgImg from '../../../assets/images/journey-5.png'
import heroImg from '../../../assets/images/why-1.png'
import passengerQR from '../../../assets/qr/passenger.png'
import driverQR from '../../../assets/qr/dr.png'

export default function AboutSection() {
  const [showModal, setShowModal] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver'>('passenger')

  // Device detection to swap between Link design and QR design
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <section className="relative py-25 px-6 overflow-hidden">
      {/* Background with opacity */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-[14px] font-medium font-nohemi">
            About Us
          </span>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col gap-9 text-center md:text-left">
            <div className="flex flex-col gap-4 items-center md:items-start md:justify-start">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="xl:text-[40px] md:text-[32px] text-[16px] lg:w-[590px] font-bold font-nohemi leading-tight text-[#141414]"
              >
                Building the Future of Seamless Transportation
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[18px] leading-6 text-[#4A4A4A] max-w-[411px]"
              >
                ROVV is a modern mobility platform built to make movement simple,
                safe and accessible for everyone.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <button 
                onClick={() => setShowModal(true)}
                className="flex justify-center items-center w-[246px] h-[60px] bg-[#5E239D] rounded-lg text-[#FFEFD6] text-xl font-bold hover:bg-purple-700 transition shadow-lg"
              >
                Download the app
              </button>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full mx-auto overflow-hidden rounded-2xl"
          >
            <img
              src={heroImg}
              alt="Passenger"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-center mb-0 lg:mb-5 font-nohemi text-[#141414]">Get the ROVV App</h2>
              <p className="lg:hidden text-sm font-normal text-center mb-7 font-sans text-medium">Tap to Download</p>

              {isMobile ? (
                /* MOBILE VIEW: DIRECT LINKS */
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 p-1.5 border border-gray-100 bg-[#FAFAFA] rounded-2xl">
                    <a 
                      href="https://onelink.to/p95t3a" 
                      className="flex-1 py-3 px-4 bg-primary text-white text-center rounded-xl font-bold font-nohemi text-sm transition-all active:scale-95"
                    >
                      For Passenger
                    </a>
                    <a 
                      href="https://onelink.to/dzak96" 
                      className="flex-1 py-3 px-4 text-primary text-center rounded-xl font-bold font-nohemi text-sm transition-all active:scale-95"
                    >
                      For Driver
                    </a>
                  </div>
                </div>
              ) : (
                /* DESKTOP VIEW: MAIN DESIGN (TOGGLE + QR) */
                <div className="hidden lg:block">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-1 p-1 border rounded-sm border-light bg-light w-[300px]">
                      <button
                        onClick={() => setActiveTab('passenger')}
                        className={`flex-1 py-2 rounded-sm font-bold text-sm transition-all ${activeTab === 'passenger' ? 'bg-primary text-white' : 'text-primary'}`}
                      >
                        For Passenger
                      </button>
                      <button
                        onClick={() => setActiveTab('driver')}
                        className={`flex-1 py-2 rounded-sm font-bold text-sm transition-all ${activeTab === 'driver' ? 'bg-primary text-white' : 'text-primary'}`}
                      >
                        For Driver
                      </button>
                    </div>
                  </div>
                  <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={activeTab === 'passenger' ? passengerQR : driverQR}
                      alt="ROVV QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-500 font-medium text-sm px-4 font-sans">
                    Scan to download the {activeTab} app
                  </p>
                </div>
              )}

              <button 
                onClick={() => setShowModal(false)}
                className="mt-10 w-full text-gray-300 text-sm font-bold tracking-[0.2em] hover:text-primary transition-colors font-nohemi uppercase"
              >
                ROVV
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}