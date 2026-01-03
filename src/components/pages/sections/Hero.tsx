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
const typewriterWords = ['Mobility', 'E-Hailing', 'Delivery', 'Car Rental', 'Outstation']

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)
  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [qrType, setQrType] = useState('for passenger')

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
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .levitate-letter {
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .levitate-letter:hover {
          transform: translateY(-8px);
        }
        /* Nest Hub Max fixes */
        @media (min-width: 1024px) and (max-width: 1280px) {
          .hero-container {
            max-width: 1024px !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
         
          .hero-text-container {
            max-width: 380px !important;
          }
         
          .hero-image {
            width: 550px !important;
            height: 500px !important;
          }
        }
      `}</style>
      <section className="lg:pt-10 lg:pb-10 lg:mt-20 md:mt-10 lg:pr-20 lg:pl-20 sm:px-6 md:px-8 bg-bg gap-2.5">
        <div className="hero-container max-w-[414px] md:max-w-[704px] md:h-[1049.22px] lg:max-w-[1276px] lg:h-[572px] justify-between mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT TEXT */}
          <div className="hero-text-container max-w-[443px] lg:max-w-[443px] md:max-w-[704px] gap-20 md:text-left mt-20 lg:mt-0 px-4 lg:px-0 text-center lg:text-left animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-bold text-5xl leading-[50px] md:text-6xl lg:text-[64px] lg:leading-[60px] text-gray-900">
              <span className="levitate-letter">T</span>
              <span className="levitate-letter">h</span>
              <span className="levitate-letter">e</span>
              <span className="levitate-letter">&nbsp;</span>
              <span className="levitate-letter">F</span>
              <span className="levitate-letter">u</span>
              <span className="levitate-letter">t</span>
              <span className="levitate-letter">u</span>
              <span className="levitate-letter">r</span>
              <span className="levitate-letter">e</span>
              <span className="levitate-letter">&nbsp; </span>
              <span className="levitate-letter">o</span>
              <span className="levitate-letter">f</span>
            </h1>
            {/* Typewriter text */}
            <div
              className="font-bold text-[40px] leading-[40px] mt-2 md:text-[64px] md:leading-tight lg:text-[64px] lg:mt-0 animate-fade-in-up opacity-0"
              style={{
                background: 'accent',
                WebkitBackgroundClip: '',
                WebkitTextFillColor: '',
                backgroundClip: '',
                animationDelay: '0.4s'
              }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="mt-4 max-w-[343px] mx-auto text-[18px] leading-[20px] text-center lg:text-left lg:mx-0 lg:max-w-none lg:w-[414px] md:w-[275px] md:ml-0 md:text-lg md:text-left md:leading-6 lg:leading-6 font-normal text-gray-700 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
              Experience seamless, affordable, and innovative mobility solutions...
            </p>
            <div className="mt-6 flex justify-center md:justify-start lg:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#5E239D] w-[247px] px-6 py-3 rounded-lg font-bold text-[16px] text-[#FFEFD6]  md:w-[246px] md:px-10 md:py-5 hover:bg-purple-700 transition-all duration-200 shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: '0.8s' }}
              >
                Download the app
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:mt-20 flex lg:w-[329px] md:w-[329px] md:gap-0.5 md:mt-10 md:justify-start lg:gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '1s' }}>
              <div className="w-6 h-6 border border-[#CDBBE1] rounded-full flex items-center justify-center overflow-hidden">
                <img src={badgeIcon} alt="ROVV" className="w-6 h-6 md:w-8 md:h-8 border border-gray-300 rounded-full object-cover" />
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-sm lg:text-[16px] md:text-[16px]">
                <span className="text-[#FF6A00]">{counter.toLocaleString()}+</span>{' '}
                <span className="text-gray-900">Rides Completed</span>
              </p>
            </div>
          </div>
          {/* RIGHT IMAGE + TABS */}
          <div className="relative mt-12 md:mt-3 lg:mt-0 px-4 lg:px-0 animate-fade-in-right opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-[343px] md:max-w-[704px] lg:max-w-[635px] mx-auto relative">
              <img
                src={images[currentTab]}
                alt={tabNames[currentTab]}
                className="w-full h-auto rounded-[13px] md:rounded-[26.9px] lg:rounded-6 object-cover"
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/70 to-transparent rounded-b-[13px]" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-[64px] lg:gap-[140px] md:gap-[175px] items-center">
                {tabNames.map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(index)}
                    className="relative text-white text-[14px] font-normal select-none"
                  >
                    {tab}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[65px] md:w-[90px] lg:w-[90px] h-0.5 bg-white/30 rounded-full overflow-hidden">
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 transition-all duration-500 ease-in-out">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-fade-in-up">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-900 leading-none"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold text-center mb-6">
                Get the ROVV App
              </h2>
              {/* QR SWITCH */}
              <div className="inline-flex items-center justify-center px-1 py-1 ml-11 md:ml-20 relative border rounded-sm border-gray-300 bg-gray-100">
                <button
                  onClick={() => setQrType('for passenger')}
                  className={`py-2 w-30 rounded-sm font-bold text-sm ${
                    qrType === 'for passenger'
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-600'
                  }`}
                >
                  For Passenger
                </button>
                <button
                  onClick={() => setQrType('for driver')}
                  className={`px-4 py-2 rounded-sm font-bold text-sm ${
                    qrType === 'for driver'
                      ? 'bg-purple-600 text-white'
                      : 'text-purple-600'
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
    </>
  )
}