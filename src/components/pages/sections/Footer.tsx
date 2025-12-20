// src/components/sections/Footer.tsx


import Logo from '../../../assets/logo/rovv-orange.svg'
import AppStoreBadge from '../../../assets/images/new- (3).png'
import PlayStoreBadge from '../../../assets/images/new- (2).png'
import backImg from '../../../assets/images/car.png'

import { X }from 'lucide-react'
import { Linkedin, Facebook , ArrowUp} from 'lucide-react'
import {useState} from 'react';


export default function Footer() {
  const [activeTab, setActiveTab] = useState('passengers');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="relative bg-cover bg-center text-white py-12 " style={{ backgroundImage: `url(${backImg})`}}>
      <div className='absolute inset-0 bg-black opacity-95'></div>
      <div className="max-w-7xl mx-auto relative z-10 px-6 ">

        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <img src={Logo} alt="ROVV" className="h-12" />

          <div className="flex gap-4 mt-8 md:mt-0">
            <a href="#" className="w-10 h-10 bg-light text-purple rounded-lg flex items-center justify-center">
              <X className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-light rounded-lg text-purple flex items-center justify-center">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10  bg-light rounded-lg text-purple  flex items-center justify-center">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-sm">
          <div>
            <h4 className="text-medium font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="/sustainability" className="hover:text-white transition">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-medium font-medium mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="/fleet-management" className="hover:text-white transition">Fleet Management</a></li>
              <li><a href="/drive" className="hover:text-white transition">Drive with ROVV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-medium font-medium mb-6">Support & Partnerships</h4>
            <ul className="space-y-4">
              <li><a href="/faqs" className="hover:text-white transition">FAQs</a></li>
              <li><a href="/partnership" className="hover:text-white transition">Partnership</a></li>
            </ul>
          </div>
        </div>

        {/* For Passengers | For Drivers with split underline */}
        <div className="text-center mb-12 ">
          <div className="inline-flex  items-center px-1 py-1 relative border rounded-sm border-light bg-light ">
            <button
            onClick={() => setActiveTab('passenger')}
                className={`relative font-medium  py-2 w-37 transition-colors duration-75 ${
                  activeTab === 'passenger'
                    ?  ' text-bg  font-bold font-sans bg-primary rounded-sm  '
                    : 'text-medium font-bold font-sans transparent '
                }`}
            >
              For Passengers
              </button>
            <button 
              onClick={() => setActiveTab('driver')}
                 className={`relative px-4 py-2  font-medium transition-colors duration-75 ${
                  activeTab === 'driver'
                    ?  ' text-bg font-bold font-sans bg-primary rounded-sm'
                    : 'text-purple font-bold font-sans transparent'
                }`}
            >
              For Drivers

            </button>

            {/* One continuous line: left purple, right grey */}
            
          </div>

          {/* App Badges */}
          <div className="flex justify-center gap-5 mt-5">
            <a href="#">
              <img src={AppStoreBadge} alt="App Store" className="h-10" />
            </a>
            <a href="#">
              <img src={PlayStoreBadge} alt="Google Play" className="h-10" />
            </a>
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

      <button
        onClick={scrollToTop}
        className="absolute scale-75 bottom-85 md:bottom-29 right-6 md:right-18 bg-bg text-primary px-1 py-0 rounded-sm shadow-lg transition group z-50 touch-manipulation"
      >
        <ArrowUp className="font-bold ml-1 " strokeWidth={5} />
        <span className="text-primary  font-sans font-bold " >TOP</span>
      </button>
    </footer>
  );
 }