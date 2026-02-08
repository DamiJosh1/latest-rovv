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
  const extralink= "https://book.getrovv.com";
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-bg backdrop-blur-md border-b border-bg">
        {/* STANDARDIZED CONTAINER: Aligns perfectly with Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
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
                    className="flex items-center gap-1 text-[#4A4A4A] font-bold font-sans hover:text-primary transition"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a href={item.href} className="text-[#4A4A4A] font-bold font-sans hover:text-primary transition">
                    {item.name}
                  </a>
                )}

                <AnimatePresence>
                  {item.items && dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-4 w-55 font-bold font-sans bg-bg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.items.map((sub) => (
                        <a key={sub.name} href={sub.href} className="block px-6 py-2 text-dark hover:bg-purple-50 hover:text-primary transition first:pt-5 last:pb-5">
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={() => setShowModal(true)}
              className="bg-primary rounded-lg text-bg hover:bg-accent px-6 py-3 font-bold transition shadow-sm"
            >
              Get the app
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
          
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8`}
          >
            <span className={`h-0.5 w-6 bg-dark transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-dark ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-dark transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/50 z-40" />
            <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} className="fixed top-20 left-0 right-0 w-full bg-white z-40 shadow-2xl">
              <nav className="px-6 py-8 space-y-4">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href || '#'} className="block text-dark text-2xl font-bold font-nohemi">
                    {item.name}
                  </a>
                ))}
                <button onClick={() => { setShowModal(true); setMobileOpen(false); }} className="w-full mt-4 bg-primary text-white py-4 rounded-xl font-bold">
                  Get the app
                </button>
                  
                 <div className="flex justify-center w-full">
  <a 
    href="https://book.getrovv.com" 
    className="w-full mt-2 bg-accent text-white py-4 rounded-xl font-bold text-center inline-block"
  >
    Web Booking
  </a>
</div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HEADER MODAL (Shared Logic with Footer) */}
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
                            <button onClick={() => setQrType('for passenger')} className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${qrType === 'for passenger' ? 'bg-[#5E239D] text-white shadow-md' : 'text-gray-500'}`}>Passenger</button>
                            <button onClick={() => setQrType('for driver')} className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${qrType === 'for driver' ? 'bg-[#5E239D] text-white shadow-md' : 'text-gray-500'}`}>Driver</button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-white p-4 border-2 border-gray-100 rounded-2xl mb-6">
                            {/* FIXED: QR Image now switches correctly based on state */}
                            <img src={qrType === 'for passenger' ? passengerQR : driverQR} alt="QR" className="w-48 h-48 object-contain" />
                          </div>
                        </div>
                      </div>
      
                      <p className="hidden lg:text-center lg:text-gray-500 lg:text-sm lg:px-4">
                        Scan the QR Code with your mobile device to download the ROVV app.
                      </p>
      
                      <div className="mt-10 flex justify-center">
                        <button onClick={() => setShowModal(false)} className="text-gray-300 text-xs font-bold tracking-[0.3em] uppercase">ROVV</button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
    </>
  )
}