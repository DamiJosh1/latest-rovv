// src/components/sections/Footer.tsx

import Logo from '../../../assets/logo/rovv-orange.svg'
import AppStoreBadge from '../../../assets/images/new- (3).png'
import PlayStoreBadge from '../../../assets/images/new- (2).png'
import backImg from '../../../assets/images/car.png'
import toTop from '../../../assets/images/content.png'

import { useState } from 'react'


export default function Footer() {
  const [activeTab, setActiveTab] = useState('passengers')
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-cover bg-center text-white py-12" style={{ backgroundImage: `url(${backImg})` }}>
      <div className="absolute inset-0 bg-black opacity-95"></div>
      <div className="max-w-7xl mx-auto relative z-10 px-6">

        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <img src={Logo} alt="ROVV" className="h-12" />

          <div className="flex gap-4 mt-8 md:mt-0">
            {/* X (Twitter) SVG */}
            <a href="#" className="w-10 h-10 bg-light text-light rounded-lg flex items-center justify-center hover:opacity-80 transition">
              <svg viewBox="0 0 24 24" fill="#270F42" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a href="#" className="w-10 h-10 bg-light text-light rounded-lg flex items-center justify-center hover:opacity-80 transition">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.34164 19.9288H0.0711747V5.69395H4.34164V19.9288ZM20 19.9288H15.7295V12.3246C15.7295 10.3431 15.0235 9.35658 13.6242 9.35658C12.5153 9.35658 11.8121 9.9089 11.4591 11.0149C11.4591 12.8114 11.4591 19.9288 11.4591 19.9288H7.18861C7.18861 19.9288 7.24555 7.11744 7.18861 5.69395H10.5594L10.8199 8.54093H10.9082C11.7836 7.11744 13.1829 6.15231 15.1018 6.15231C16.5609 6.15231 17.7409 6.55801 18.642 7.57722C19.5488 8.59787 20 9.96726 20 11.8904V19.9288Z" fill="#341356"/>
<path d="M2.20641 4.27046C3.42497 4.27046 4.41281 3.31449 4.41281 2.13523C4.41281 0.955976 3.42497 0 2.20641 0C0.987842 0 0 0.955976 0 2.13523C0 3.31449 0.987842 4.27046 2.20641 4.27046Z" fill="#341356"/>
</svg>

            </a>

            {/* Facebook SVG */}
            <a href="#" className="w-10 h-10 bg-light text-light rounded-lg flex items-center justify-center hover:opacity-80 transition">
              <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 6.66667V4.68229C6.66667 3.78646 6.86458 3.33333 8.25521 3.33333H10V0H7.08854C3.52083 0 2.34375 1.63542 2.34375 4.44271V6.66667H0V10H2.34375V20H6.66667V10H9.60417L10 6.66667H6.66667Z" fill="#341356"/>
</svg>

            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-sm">
          <div>
            <h4 className="text-medium font-medium mb-6">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="/sustainability" className="hover:text-white transition">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-medium font-medium mb-6">Services</h4>
            <ul className="space-y-1">
              <li><a href="/fleet-management" className="hover:text-white transition">Fleet Management</a></li>
              <li><a href="/drive" className="hover:text-white transition">Drive with ROVV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-medium font-medium mb-6">Support & Partnerships</h4>
            <ul className="space-y-1">
              <li><a href="/faqs" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/partnership" className="hover:text-white transition">Partnership</a></li>
            </ul>
          </div>
        </div>

        {/* For Passengers | For Drivers */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-1 py-1 relative border rounded-sm border-light bg-light">
            <button
              onClick={() => setActiveTab('passenger')}
              className={`relative font-medium py-2 w-37 duration-75 ${
                activeTab === 'passenger'
                  ? 'text-bg font-bold font-sans bg-primary rounded-sm'
                  : 'text-medium font-bold font-sans'
              }`}
            >
              For Passengers
            </button>
            <button
              onClick={() => setActiveTab('driver')}
              className={`relative px-4 py-2 font-medium transition-colors duration-75 ${
                activeTab === 'driver'
                  ? 'text-bg font-bold font-sans bg-primary rounded-sm'
                  : 'text-purple font-bold font-sans'
              }`}
            >
              For Drivers
            </button>
          </div>

          {/* App Badges */}
          <div className="flex justify-center gap-5 mt-5">
            <a href="#"><img src={AppStoreBadge} alt="App Store" className="h-10" /></a>
            <a href="#"><img src={PlayStoreBadge} alt="Google Play" className="h-10" /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 border-t border-medium flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>Copyright © 2025. ROVV. All rights reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="/terms&condition" className="text-white transition">Terms & Conditions</a>
            <a href="/privacy-policy" className="text-white transition">Privacy policy</a>
          </div>
        </div>
      </div>

      {/* Custom Back to Top Button - matches Figma exactly */}
      <button
        onClick={scrollToTop}
        className="absolute scale-75 bottom-85 md:bottom-29 right-6 md:right-18 b text-primary px-1 py-0 rounded-sm shadow-lg transition group z-50 touch-manipulation"
      >
    <img 
        src={toTop}
        alt="Back to top"
        className="w-15 h-15"
      />
      </button>
    </footer>
  )
}