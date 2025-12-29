'use client'

import { useState, useEffect } from 'react'

// YOUR REAL ROVV IMAGES
import rideImg from '../../../assets/images/pic-4.jpg'
import deliveryImg from '../../../assets/images/pics-2.png'
import earnImg from '../../../assets/images/pics1.png'
import badgeIcon from '../../../assets/images/journ.png'

// QR IMAGES
import passengerQR from '../../../assets/qr/passenger-qr.png'
import driverQR from '../../../assets/qr/driver-qr.png'

const images = [rideImg, deliveryImg, earnImg]
const tabNames = ['Ride', 'Delivery', 'Earn']

// Typewriter words
const typewriterWords = ['Mobility', 'E-Hailing', 'Delivery', 'Car Rental', 'Outstation']

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)
  const [qrType, setQrType] = useState<'for passenger' | 'for driver'>('for passenger')

  // Typewriter state
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Counter animation
  useEffect(() => {
    const target = 16087
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCounter(target)
        clearInterval(timer)
      } else {
        setCounter(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  // Typewriter animation
  useEffect(() => {
    const currentWord = typewriterWords[typewriterIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTypewriterIndex((prev) => (prev + 1) % typewriterWords.length)
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

  // Tab auto-rotation with progress bar
  useEffect(() => {
    const duration = 5000
    const intervalTime = 50
    const increment = (100 / duration) * intervalTime

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          return 100
        }
        return newProgress
      })
    }, intervalTime)

    const tabTimer = setInterval(() => {
      setCurrentTab((prev) => (prev + 1) % 3)
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
    <section className="bg-[#FFFAF2] px-4 py-20 md:px-2 md:py-10 md:mt-20 lg:px-20 lg:py-10 lg:mt-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center lg:gap-x-[206px] gap-y-2">
          
          {/* LEFT TEXT */}
          <div className="w-full lg:w-auto lg:min-w-[355px] lg:max-w-[446px] flex flex-col items-center lg:items-start gap-7 md:gap-10 lg:gap-20">
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-9 lg:gap-9 w-full">
              <div className="flex flex-col items-start gap-2 lg:gap-1 w-full">
                {/* Title with typewriter */}
                <h1 className="font-nohemi font-bold text-[45px] leading-[40px] md:text-[64px] md:leading-[60px] lg:text-[64px] lg:leading-[60px] text-[#141414] text-center md:text-left lg:text-left w-full">
                  The Future of
                </h1>
                
                {/* Typewriter text */}
                <div 
                  className="font-nohemi font-bold text-[45px] leading-[40px] md:text-[64px] md:leading-[64px] lg:text-[64px] lg:leading-[64px] w-full text-center md:text-left lg:text-left text-accent"
                  style={{
                    background: '',
                    WebkitBackgroundClip: '',
                    WebkitTextFillColor: '',
                    backgroundClip: '',
                    minHeight: '64px'
                  }}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>

                {/* Description */}
                <p className="font-normal text-base leading-5 md:text-[23px] md:leading-[30px] md:font-bold lg:text-lg lg:leading-6 text-[#4A4A4A] text-center lg:text-left md:text-left w-full mt-2 lg:mt-4">
                  A mobility platform made for people. Because every ride should be safe, affordable, and fair, for riders and drivers
                </p>
              </div>

              {/* Button */}
              <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-primary text-bg lg:w-[246px] px-10 py-5 rounded-lg font-bold text-lg hover:bg-pup transition-all duration-200 shadow-lg"
          >
            
                Download the app
              </button>
            </div>

            {/* Counter badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 w-full">
              <div className="w-8 h-8 border border-[#CDBBE1] rounded-full flex items-center justify-center overflow-hidden">
                <img src={badgeIcon} alt="ROVV" className="w-16 h-[35px] object-cover" />
              </div>
              <p className="font-normal md:font-bold text-sm md:text-lg lg:text-base text-center">
                <span className="text-[#FF6A00]">{counter.toLocaleString()}+</span>{' '}
                <span className="text-[#141414]">Rides Completed</span>
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE + TABS */}
          <div className="relative w-full lg:w-auto mt-0">
            <div className="relative w-full lg:w-[628px] h-[312.41px] md:h-[641.22px] lg:h-[572px] rounded-[13.11px] md:rounded-[26.9px] lg:rounded-3xl overflow-hidden bg-[#BABABA]">
              <img
                src={images[currentTab]}
                alt={tabNames[currentTab]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-48 rounded-[13.11px] md:rounded-[26.9px] lg:rounded-3xl" 
                     style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 60.8%, #000000 71.91%)'}} />
              </div>
            </div>

            {/* Tabs */}
            <div className="absolute bottom-[14px] md:bottom-[53.8px] lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-[43.69px] md:gap-[89.68px] lg:gap-20">
              {tabNames.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(index)}
                  className="relative flex flex-col items-start gap-[1.09px] md:gap-[2.24px] lg:gap-0.5 w-[65.54px] md:w-[134.52px] lg:w-[120px]"
                >
                  <span className={`font-bold text-[9.83px] leading-[15px] md:text-[20.18px] md:leading-[30px] lg:text-base lg:leading-[22px] text-center w-full transition-opacity ${
                    currentTab === index ? 'text-white' : 'text-[#CCCCCC]'
                  }`}>
                    {tab}
                  </span>
                  
                  {/* Progress track */}
                  <div className="w-full h-[1.09px] md:h-[2.24px] lg:h-0.5 bg-[#A7A7A7] rounded-full overflow-hidden relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-100 ease-linear"
                      style={{ width: currentTab === index ? `${progress}%` : '0%' }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 leading-none"
            >
              ×
            </button>

            <h2 className="text-2xl font-nohemi font-bold text-center mb-6">
              Get the ROVV App
            </h2>

            {/* QR SWITCH */}
            <div className="flex items-center justify-center gap-1 p-1 bg-[#F5F5F5] border border-[#E0E0E0] rounded-sm mb-4">
              <button
                onClick={() => setQrType('for passenger')}
                className={`px-4 py-2 rounded-sm font-bold text-sm transition-colors ${
                  qrType === 'for passenger'
                    ? 'bg-[#5E239D] text-white'
                    : 'text-[#5E239D]'
                }`}
              >
                For Passenger
              </button>

              <button
                onClick={() => setQrType('for driver')}
                className={`px-4 py-2 rounded-sm font-bold text-sm transition-colors ${
                  qrType === 'for driver'
                    ? 'bg-[#5E239D] text-white'
                    : 'text-[#5E239D]'
                }`}
              >
                For Driver
              </button>
            </div>

            {/* QR IMAGE */}
            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
              <img
                src={qrType === 'for passenger' ? passengerQR : driverQR}
                alt="ROVV QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            {/* QR TEXT */}
            <p className="text-center text-gray-600 font-medium">
              {qrType === 'for passenger'
                ? 'Scan the QR Code with your mobile device to download the ROVV app for passengers'
                : 'Scan the QR Code with your mobile device to download the ROVV app for drivers'}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
