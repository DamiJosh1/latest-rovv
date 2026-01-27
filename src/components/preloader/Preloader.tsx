'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Make sure your video is in this folder or update the path
import carVideo from '../../assets/video/car-blink.mp4'

export default function Preloader() {
  const [showError, setShowError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // 1. Hidden 15-second timer for internet check
    const internetTimer = setTimeout(() => {
      setShowError(true)
    }, 15000)

    // 2. Performance: Ensure video plays immediately
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented, waiting for interaction", error)
      })
    }

    return () => clearTimeout(internetTimer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* FULLSCREEN VIDEO CONTAINER */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={carVideo}
          autoPlay

          muted
          playsInline
          className="w-full h-full object-cover md:object-contain"
        />
        
        {/* Dark overlay to make error text readable if it appears */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* HIDDEN ERROR MESSAGE (Appears after 15s) */}
      <AnimatePresence>
        {showError && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 mt-[30vh] text-center px-10"
          >
            <div className="bg-black/60 backdrop-blur-md p-8 rounded-[32px] border border-white/10 shadow-2xl">
              <h3 className="text-[#FFEFD6] font-nohemi text-xl md:text-2xl font-bold mb-2">
                Connection is slow
              </h3>
              <p className="text-gray-300 font-sans text-sm md:text-base max-w-[280px] mx-auto mb-6">
                Please check your internet connection or try refreshing the page.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-[#5E239D] text-white rounded-xl font-bold font-nohemi text-sm hover:bg-purple-700 transition-all active:scale-95"
              >
                Refresh Page
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MINIMAL BRANDING FOOTER */}
      {!showError && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#FFEFD6] font-nohemi font-bold text-2xl tracking-[0.2em]">ROVV</span>
            <div className="w-12 h-[2px] bg-[#5E239D] rounded-full" />
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}