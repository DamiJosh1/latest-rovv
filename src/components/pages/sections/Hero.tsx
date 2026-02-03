'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Hero images
import rideImg from '../../../assets/images/pic-4.jpg'
import deliveryImg from '../../../assets/images/pics1.png'
import earnImg from '../../../assets/images/pics-2.png'
import badgeIcon from '../../../assets/images/journ.png'
import passengerQR from '../../../assets/qr/passenger.png'
import driverQR from '../../../assets/qr/dr.png'

// Constants 
const IMAGES = [rideImg, deliveryImg, earnImg]
const TABS = ['Ride', 'Delivery', 'Earn']
const WORDS = ['Mobility', 'E-Hailing', 'Delivery', 'Car Rental', 'City to City Ride']

export default function Hero() {
  // --- State Management ---
  const [showModal, setShowModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [qrType, setQrType] = useState<'passenger' | 'driver'>('passenger')

  // --- Animation: Rides Counter ---
  useEffect(() => {
    const target = 16087
    const duration = 2000
    const steps = 60
    const increment = target / steps
    
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev + increment >= target) {
          clearInterval(timer)
          return target
        }
        return Math.floor(prev + increment)
      })
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [])

  // --- Animation: Typewriter Effect ---
  useEffect(() => {
    const currentWord = WORDS[typewriterIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTypewriterIndex((prev) => (prev + 1) % WORDS.length)
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        )
      }
    }, typingSpeed)
    
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, typewriterIndex])

  // --- Animation: Auto-switching Tabs ---
  useEffect(() => {
    const duration = 5000
    const intervalTime = 50
    const increment = (100 / duration) * intervalTime

    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + increment))
    }, intervalTime)

    const tabTimer = setInterval(() => {
      setCurrentTab((prev) => (prev + 1) % TABS.length)
      setProgress(0)
    }, duration)

    return () => {
      clearInterval(progressTimer)
      clearInterval(tabTimer)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setCurrentTab(index)
    setProgress(0)
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
        
        .levitate-letter {
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .levitate-letter:hover { transform: translateY(-8px); }
      `}</style>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-bg overflow-hidden"
      >
        {/* RULE: Standardized Container Alignment (Matches Header/Footer) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Copy and CTA */}
          <div 
            className="text-center lg:text-left animate-fade-in-up opacity-0" 
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="font-bold text-5xl leading-[50px] md:text-6xl lg:text-[64px] lg:leading-[60px] text-gray-900">
              {["T","h","e","\u00A0","F","u","t","u","r","e","\u00A0","o","f"].map((char, i) => (
                <span key={i} className="levitate-letter">{char}</span>
              ))}
            </h1>

            <div
              className="font-bold text-[40px] text-accent leading-[40px] mt-2 md:text-[64px] md:leading-tight lg:text-[64px] lg:mt-0"
            >
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </div>

            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg font-normal text-gray-700">
              Experience seamless, affordable, and innovative mobility solutions designed to keep you moving forward.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#5E239D] px-10 py-4 rounded-xl font-bold text-[#FFEFD6] hover:bg-purple-700 transition-all shadow-lg active:scale-95"
              >
                Download the app
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-2">
              <div className="w-6 h-6 border border-[#CDBBE1] rounded-full overflow-hidden">
                <img src={badgeIcon} alt="Badge" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm lg:text-base font-normal">
                <span className="text-[#FF6A00] font-bold">{counter.toLocaleString()}+</span>{' '}
                <span className="text-gray-900">Rides Completed</span>
              </p>
            </div>
          </div>

          {/* Right Column: Original Image Display */}
          <div className="relative animate-fade-in-right opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-[26px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <img
                src={IMAGES[currentTab]}
                alt={TABS[currentTab]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-[64px] lg:gap-[120px] md:gap-[175px] items-center w-full justify-center px-4">
                {TABS.map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(index)}
                    className="relative text-white text-[14px] font-medium select-none"
                  >
                    {tab}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[65px] md:w-[80px] h-0.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-white transition-all duration-100 ease-linear"
                        style={{ width: currentTab === index ? `${progress}%` : '0%' }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Overlay (Fixed QR Image Swap) */}
        <AnimatePresence>
          {showModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
              onClick={() => setShowModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[32px] p-8 max-w-md w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-center mb-1 lg:mb-5 font-nohemi text-[#141414]">Get the ROVV App</h2>
                <p className="lg:hidden text-sm font-normal text-center mb-7 text-gray-500">Tap to Download</p>
              

                {/* MOBILE VIEW */}
                <div className="lg:hidden flex flex-col gap-4">
                  <div className="flex items-center gap-2 p-1.5 border border-gray-100 bg-[#FAFAFA] rounded-2xl">
                    <a href="https://onelink.to/p95t3a" className="flex-1 py-3 px-4 bg-[#5E239D] text-white text-center rounded-xl font-bold text-sm">
                      For Passenger
                    </a>
                    <a href="https://onelink.to/dzak96" className="flex-1 py-3 px-4 text-[#5E239D] text-center rounded-xl font-bold text-sm hover:bg-gray-100">
                      For Driver
                    </a>
                  </div>
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden lg:block">
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex p-1 bg-gray-100 rounded-lg w-full">
                      <button onClick={() => setQrType('passenger')} className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${qrType === 'passenger' ? 'bg-[#5E239D] text-white shadow-md' : 'text-gray-500'}`}>Passenger</button>
                      <button onClick={() => setQrType('driver')} className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${qrType === 'driver' ? 'bg-[#5E239D] text-white shadow-md' : 'text-gray-500'}`}>Driver</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-4 border-2 border-gray-100 rounded-2xl mb-6">
                      {/* FIXED: QR Image now switches correctly based on state */}
                      <img src={qrType === 'passenger' ? passengerQR : driverQR} alt="QR" className="w-48 h-48 object-contain" />
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-500 text-sm px-4">
                  Scan the QR Code with your mobile device to download the ROVV app.
                </p>

                <div className="mt-10 flex justify-center">
                  <button onClick={() => setShowModal(false)} className="text-gray-300 text-xs font-bold tracking-[0.3em] uppercase">ROVV</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  )
}