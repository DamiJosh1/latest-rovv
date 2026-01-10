// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import RovvLogo from '../../assets/logo/rovv.svg?react'
import passengerQR from '../../assets/qr/passenger-qr.png'
import driverQR from '../../assets/qr/driver-qr.png'




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
 
    // QR TYPE STATE
  const [qrType, setQrType] = useState<'for passenger' | 'for driver'>('for passenger')
  

  return (
    <>
      {/* MAIN HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-bg backdrop-blur-md border-b border-bg gap-2.5 ">
        <div className="max-w-[410px] lg:max-w-[1308px] md:max-w-[704px] md:px-0 mx-auto lg:px-4  lg:py-5 flex items-center justify-between h-20 ">
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
                    {item.name} <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a href={item.href} className="text-#4A4A4A font-bold font-sans hover:text-primary transition">
                    {item.name}
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
                          {sub.name}
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
              className="bg-primary rounded-lg  text-bg  hover:bg-accent px-6 py-3  font-bold transition shadow-sm"
            >
              Get the app
            </button>
          </nav>

          {/* Mobile menu button */}
          <button aria-label='Menu btn'
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 md:p-0"
          >
            <Menu size={28} className="text-purple leading-2 font-bold w-[44px] h-[44px] " />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-white "
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed right-0 top-0 bottom-0 w-full h-165 bg-white z-50 "
            >
              <div className="flex bg-bg justify-between w-[343px] h-[44px] ">
                <RovvLogo className="h-10" />
                <button aria-label='X'
                onClick={() => setMobileOpen(false)} className="">
                  <X size={27} />
                </button>
              </div>

              <nav className="px-6 py-8 space-y-2" >
                {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-dark font-bold font-nohemi text-2xl transition"
                  >
                    {item.name} <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a href={item.href} className="text-dark text-2xl font-bold font-nohemi transition">
                    {item.name}
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
                          {sub.name}
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
                  className="w-full mt-8 font-sans border-2 bg-purple text-bg py-4 rounded-xl font-bold   transition"
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
      )}     </>
  )
}