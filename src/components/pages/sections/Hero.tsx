'use client'

import React, { useState, useEffect } from 'react'

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

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)

  // QR TYPE STATE
  const [qrType, setQrType] = useState<'for passenger' | 'for driver'>('for passenger')

  // Counter animation — untouched
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

  // Tab auto-rotation with progress bar — untouched
  useEffect(() => {
    const duration = 5000
    const intervalTime = 50
    const increment = (100 / duration) * intervalTime

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          return 0
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
    <section className="pt-30 pb-30 px-4 sm:px-6 md:px-10 lg:px-16 bg-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left md:text-left">
          <h1 className="font-nohemi font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight text-dark">
            Your Ride <br />
            Starts Here
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl font-bold text-dark/80 leading-relaxed">
            A mobility platform made for people.<br className="hidden sm:block" />
            Because every ride should be safe,<br className="hidden sm:block" />
            affordable, and fair, for riders and drivers
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-8 bg-primary text-bg px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all duration-200 shadow-lg"
          >
            Download the app
          </button>

          <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start gap-4">
            <img src={badgeIcon} alt="ROVV" className="w-10 h-10 rounded-full object-cover" />
            <p className="font-bold text-xl lg:text-lg">
              <span className="text-accent">{counter.toLocaleString()}+</span>{' '}
              <span className="text-dark">Rides Completed</span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE + TABS */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentTab]}
              alt={tabNames[currentTab]}
              className="w-full h-[330px] sm:h-[380px] md:h-[430px] lg:h-[550px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8 sm:gap-12">
            {tabNames.map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleTabClick(index)}
                className="relative px-4 sm:px-6 py-4 text-white font-bold text-sm sm:text-base select-none transition-opacity hover:opacity-80"
              >
                {tab}
                <div className="absolute bottom-3 left-0 w-full h-0.5 bg-white/30 rounded-full" />
                <div
                  className="absolute bottom-3 left-0 h-0.5 bg-white rounded-full transition-all duration-100 ease-linear"
                  style={{ width: currentTab === index ? `${progress}%` : '0%' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 transition-all duration-500 ease-in-out">
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
            <div className="inline-flex items-center justify-center px-1 py-1 ml-11 md:ml-20 relative border rounded-sm border-light bg-light">
              <button
                onClick={() => setQrType('for passenger')}
                className={`py-2 w-30 rounded-sm font-bold text-sm ${
                  qrType === 'for passenger'
                    ? 'bg-primary text-white'
                    : ' text-purple'
                }`}
              >
               For  Passenger
              </button>

              <button
                onClick={() => setQrType('for driver')}
                className={`px-4 py-2 rounded-sm font-bold text-sm ${
                  qrType === 'for driver'
                    ? 'bg-primary text-white'
                    : ' text-purple'
                }`}
              >
               For  Driver
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