// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import RovvLogo from '../../assets/logo/rovv.svg?react'
import passengerQR from '../../assets/qr/passenger.png'
import driverQR from '../../assets/qr/dr.png'


const navItems = [
  { name: 'Get to know ROVV', href: '/get-to-know-rovv' },
  { name: 'Cities', href: '/cities' },
  {
    name: 'More',
    items: [
      { name: 'Fleet management', href: '/fleet-management' },
      { name: 'Partnership', href: '/partnership' },
      { name: 'Drive', href: '/drive' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'How ROVV works', href: '/how-it-works' },
    ]
  }
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [qrType, setQrType] = useState<'for passenger' | 'for driver'>('for passenger')

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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* MAIN HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-bg backdrop-blur-md border-b border-bg gap-2.5">
        <div className="max-w-[410px] lg:max-w-[1308px] md:max-w-[704px] md:px-0 mx-auto lg:px-4 lg:py-5 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <RovvLogo className="h-9 lg:h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-#4A4A4A font-bold font-sans hover:text-primary transition"
                  >
                    <span className="nav-link-bounce" data-text={item.name}>
                      <span className="nav-link-text">{item.name}</span>
                    </span>
                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a href={item.href} className="text-#4A4A4A font-bold font-sans hover:text-primary transition">
                    <span className="nav-link-bounce" data-text={item.name}>
                      <span className="nav-link-text">{item.name}</span>
                    </span>
                  </a>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.items && dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/12 -translate-x-1/2 mt-4 w-55 font-bold font-sans bg-bg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.items.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-2 text-dark hover:bg-purple-50 hover:text-primary transition first:pt-5 last:pb-5"
                        >
                          <span className="nav-link-bounce" data-text={sub.name}>
                            <span className="nav-link-text">{sub.name}</span>
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Get the app button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary rounded-lg text-bg hover:bg-accent px-6 py-3 font-bold transition shadow-sm"
            >
              Get the app
            </button>
          </nav>

          {/* Mobile menu button - HIDDEN ON DESKTOP */}
          <button 
            aria-label='Menu btn'
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden hamburger-btn ${mobileOpen ? 'open' : ''}`}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU - DROPS FROM HEADER BOTTOM */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-20 left-0 right-0 w-full bg-white z-40 shadow-2xl"
            >
              <nav className="px-6 py-8 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.items ? (
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1 text-dark font-bold font-nohemi text-2xl transition"
                      >
                        <span className="nav-link-bounce" data-text={item.name}>
                          <span className="nav-link-text">{item.name}</span>
                        </span>
                        <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <a href={item.href} className="text-dark text-2xl font-bold font-nohemi transition">
                        <span className="nav-link-bounce" data-text={item.name}>
                          <span className="nav-link-text">{item.name}</span>
                        </span>
                      </a>
                    )}

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.items && dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-27 -translate-x-1/2 mt-4 w-55 font-bold font-sans bg-bg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.items.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="block px-6 py-2 text-dark transition first:pt-5 last:pb-5"
                            >
                              <span className="nav-link-bounce" data-text={sub.name}>
                                <span className="nav-link-text">{sub.name}</span>
                              </span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    setShowModal(true)
                    setMobileOpen(false)
                  }}
                  className="w-full mt-8 font-sans border-2 bg-purple text-bg py-4 rounded-xl font-bold transition"
                >
                  Get the app
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in-up"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
  Get the ROVV App
</h2>

{/* QR SWITCH */}
<div className="flex justify-center mb-6">
  <div className="inline-flex items-center justify-center gap-1 p-1 border rounded-sm border-light bg-light w-[300px] ">
    <button
      onClick={() => setQrType('for passenger')}
      className={`flex-1 py-2 rounded-sm font-bold text-sm transition-transform duration-200 active:scale-95 ${
        qrType === 'for passenger'
          ? 'bg-purple-600 text-white'
          : 'text-purple-600'
      }`}
    >
      For Passenger
    </button>

    <button
      onClick={() => setQrType('for driver')}
      className={`flex-1 py-2 rounded-sm font-bold text-sm transition-transform duration-200 active:scale-95 ${
        qrType === 'for driver'
          ? 'bg-purple-600 text-white'
          : 'text-purple-600'
      }`}
    >
      For Driver
    </button>
  </div>
</div>

{/* QR IMAGE */}
<div className="w-full flex justify-center mb-4">
  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
    <img
      src={qrType === 'for passenger' ? passengerQR : driverQR}
      alt="ROVV QR Code"
      className="w-full h-full object-contain"
    />
  </div>
</div>

{/* QR TEXT */}
<p className="text-center text-gray-600 font-medium text-sm sm:text-base max-w-md mx-auto px-4">
  {qrType === 'for passenger'
    ? 'Scan the QR Code with your mobile device to download the ROVV app for passengers'
    : 'Scan the QR Code with your mobile device to download the ROVV app for drivers'}
</p>

          </div>
        </div>
      )}
    </>
  )

}
