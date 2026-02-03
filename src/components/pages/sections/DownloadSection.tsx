'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'

// Asset imports
import lightPng from '../../../assets/images/light.png'
import lightMode from '../../../assets/images/light-1.png'
import light from '../../../assets/images/light-2.png'
import passengerQR from '../../../assets/qr/passenger.png'
import driverQR from '../../../assets/qr/dr.png'

type QrType = 'for passenger' | 'for driver'

// --- SCROLL VARIANTS ---
// These trigger every time the element enters/leaves the viewport
const containerVariants: Variants = {
  offscreen: { 
    opacity: 0, 
    y: 60 
  },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      bounce: 0.2,
      duration: 0.8 
    }
  }
}

const contentFade: Variants = {
  offscreen: { opacity: 0, x: -20 },
  onscreen: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, delay: 0.3 } 
  }
}

export default function DownloadSection() {
  const [showModal, setShowModal] = useState(false)
  const [qrType, setQrType] = useState<QrType>('for passenger')

  return (
    <>
      <section className="md:py-20 px-6 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* 1. Header Section - Animates Up/Down */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <h3 className="text-2xl md:text-[40px] lg:text-[40px] font-nohemi font-bold text-dark">
              Download our app
            </h3>
            <p className="text-[16px] text-medium mb-3 font-medium font-Nohemi md:text-[24px] md:mb-2 lg:text-[24px] lg:leading-8.5 lg:mb-5">
              Available for iOS and Android devices.
            </p>
          </motion.div>

          <div className="relative max-w-[343px] md:max-w-[462px] lg:max-w-[1049px] mx-auto">
            
            {/* 2. Main Card - Animates Up/Down */}
            <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
              className="relative bg-primary rounded-xl shadow-2xl overflow-hidden h-[398px] p-1 md:h-[466px] md:py-0 lg:h-[454px] lg:p-20 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-12"
            >
              <div className="relative z-10 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center lg:items-start pt-4 md:pt-6 lg:pt-0 max-w-[311px] md:max-w-[524px] lg:max-w-[456px] mx-auto lg:mx-0">
                
                {/* 3. Inner Text - Animates with Delay */}
                <motion.div 
                  variants={contentFade}
                  className="flex flex-col gap-2 md:gap-0 lg:gap-3 items-center lg:items-start"
                >
                  <h4 className="font-nohemi font-normal text-white text-center lg:text-left text-2xl leading-7 md:text-[24px] md:w-[236px] md:leading-[34px] md:font-medium lg:text-2xl lg:leading-[30px] lg:w-[440px]">
                    Experience Smarter Mobility on the Go
                  </h4>
                  <p className="font-sans text-[#f5f5f5] text-center lg:text-left text-[18px] leading-[22px] font-normal md:text-[18px] md:leading-6 md:w-[360px] lg:text-[18px] lg:leading-6 lg:w-[456px]">
                    ROVV gives you control, comfort, and choice, all from one app. Book rides, bid your price, track drivers in real time, and enjoy safe, fair, and flexible mobility wherever you are.
                  </p>
                </motion.div>

                {/* 4. Button Animation */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(true)}
                  aria-label="Download the ROVV App"
                  className="bg-accent hover:bg-orange-600 text-dark font-sans font-bold rounded-sm shadow-xl w-[184px] h-[39px] text-[14px] py-2.5 px-6 md:w-[217px] md:h-[52px] md:text-[18px] lg:text-[18px] transition-colors duration-300"
                >
                  Download the App
                </motion.button>
              </div>

              {/* Desktop Image - Sliding in */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block relative lg:-mr-[85px] lg:-mb-[20px] shrink-0"
              >
                <img src={lightPng} alt="" loading="lazy" className="w-full h-[500px] object-contain pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Background images for tablets/mobile */}
            <div className="hidden md:block lg:hidden absolute left-0 right-0 -bottom-[200px] h-[583px] pointer-events-none">
              <img src={light} alt="" loading="lazy" className="w-full h-full object-contain" />
            </div>
            <div className="block md:hidden absolute left-0 right-0 -bottom-[119px] h-[357px] pointer-events-none">
              <img src={lightMode} alt="" loading="lazy" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="h-[200px] md:h-[300px] lg:h-0" />
        </div>
      </section>

      {/* MODAL WITH HYBRID CONTENT */}
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
              className="bg-white rounded-[32px] p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
<h2 className="text-2xl font-bold text-center mb-0 lg:mb-5 font-nohemi text-[#141414]">Get the ROVV App</h2>
              <p className="lg:hidden text-sm font-normal text-center mb-7 font-sans text-medium">Tap to Download</p>              

              {/* MOBILE/TABLET VIEW: DIRECT LINKS */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="flex items-center gap-2 p-1.5 border border-gray-100 bg-[#FAFAFA] rounded-2xl">
                  <a 
                    href="https://onelink.to/p95t3a" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-primary text-white text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:opacity-90"
                  >
                    For Passenger
                  </a>
                  <a 
                    href="https://onelink.to/dzak96" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 text-primary text-center rounded-xl font-bold font-nohemi text-sm transition-all hover:bg-gray-100/50"
                  >
                    For Driver
                  </a>
                </div>
              </div>

              {/* DESKTOP VIEW: QR CODES */}
              <div className="hidden lg:block">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center gap-1 p-1 border rounded-sm border-light bg-light w-[300px]">
                    <button
                      onClick={() => setQrType('for passenger')}
                      className={`flex-1 py-2 rounded-sm font-bold text-sm transition-all duration-300 ${
                        qrType === 'for passenger' ? 'bg-purple-600 text-white' : 'text-purple-600'
                      }`}
                    >
                      For Passenger
                    </button>
                    <button
                      onClick={() => setQrType('for driver')}
                      className={`flex-1 py-2 rounded-sm font-bold text-sm transition-all duration-300 ${
                        qrType === 'for driver' ? 'bg-purple-600 text-white' : 'text-purple-600'
                      }`}
                    >
                      For Driver
                    </button>
                  </div>
                </div>

                <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={qrType}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      src={qrType === 'for passenger' ? passengerQR : driverQR}
                      alt="ROVV QR Code"
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </div>
                <p className="text-center text-gray-500 font-medium text-sm px-4">
                  Scan the QR Code with your mobile device to download the ROVV app.
                </p>
              </div>

              {/* CLOSE BRAND FOOTER */}
              <div className="mt-10 flex justify-center">
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-300 text-sm font-bold tracking-widest font-nohemi hover:text-primary transition-colors uppercase"
                >
                  ROVV
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}