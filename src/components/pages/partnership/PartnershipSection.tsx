'use client'

import { useState } from 'react'
import { 
  Car, Building2, Handshake, X, 
  Facebook, Mail, Instagram, Linkedin, MessageCircle 
} from 'lucide-react'
import mapImg from '../../../assets/images/new- (6).png'

/**
 * Custom X (Twitter) Icon Component
 */
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
)

export default function PartnershipSection() {
  // Modal State Management
  const [isOpen, setIsOpen] = useState(false)

  // Configuration: Partnership Models
  const partnerships = [
    { icon: Car, title: "Vehicle Leasing Partnership", desc: "Earn monthly returns through car ownership programs" },
    { icon: Building2, title: "Corporate Transport Solutions", desc: "Custom fleet & employee mobility management" },
    { icon: Handshake, title: "Investment Collaboration", desc: "Partner to scale ROVV into new cities" },
  ]

  // Configuration: Social Contact Links
  const socials = [
    { icon: <Facebook className="w-6 h-6" />, label: "Facebook", href: "#", color: "hover:text-blue-600" },
    { icon: <XIcon />, label: "X", href: "#", color: "hover:text-black" },
    { icon: <Mail className="w-6 h-6" />, label: "Gmail", href: "mailto:hello@rovv.com", color: "hover:text-red-500" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "WhatsApp", href: "#", color: "hover:text-green-500" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", href: "#", color: "hover:text-pink-600" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#", color: "hover:text-blue-700" },
  ]

  return (
    <section className="relative py-20 md:py-24 lg:py-26 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Title & Badge */}
        <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-2 mb-4 md:mb-5 lg:mb-6">
          <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-[34.463px] md:rounded-[40px] text-[13px] md:text-[14px] lg:text-base leading-[13px] md:leading-[14px] lg:leading-4 font-medium font-nohemi">
            ROVV app
          </span>
          <div className="flex flex-col items-center">
            <h2 className="text-[30px] md:text-[35px] lg:text-[40px] leading-[40px] md:leading-[40px] lg:leading-[48px] font-bold font-nohemi text-[#141414] text-center mb-0">
              Partner With ROVV
            </h2>
            <p className="text-base md:text-base lg:text-2xl leading-5 md:leading-[22px] lg:leading-[34px] font-medium font-nohemi text-[#4A4A4A] text-center max-w-[333px] md:max-w-[333px] lg:max-w-[884px]">
              Join ROVV through simple partnership models built to help you grow and scale
            </p>
          </div>
        </div>

        {/* Main Content: Showcase Image and Features Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 md:gap-5 lg:gap-20 mb-6 md:mb-10 lg:mb-10">
          
          {/* Left Side: Illustration/Map */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:order-first">
            <div className="relative w-[343px] h-[337px] md:w-[434px] md:h-[414.65px] lg:w-[628px] lg:h-[600px] rounded-[32.07px] md:rounded-[27.64px] lg:rounded-[40px] overflow-hidden">
              <img src={mapImg} alt="Partnership Illustration" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side: Partnership Detail Cards */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:w-auto lg:max-w-[434px]">
            {partnerships.map((item, i) => (
              <div key={i} className="flex gap-3 md:gap-5 lg:gap-5">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-[#CDBBE1] rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-[#4A4A4A]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base md:text-2xl lg:text-2xl leading-6 md:leading-[34px] lg:leading-[34px] font-medium font-nohemi text-[#141414]">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-lg leading-5 md:leading-6 lg:leading-6 font-normal font-sans text-[#4A4A4A]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section: Bottom Trigger */}
        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-3">
          <h3 className="text-base md:text-lg lg:text-2xl leading-4 md:leading-[18px] lg:leading-[34px] font-medium font-nohemi text-[#141414] text-center">
            Let's Build Africa's Mobility Future Together
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-5 md:leading-[22px] lg:leading-6 font-normal font-sans text-[#4A4A4A] text-center">
            Be part of the movement shaping Africa's mobility future
          </p>
          <button 
            onClick={() => setIsOpen(true)}
            className="flex justify-center items-center px-6 py-[10px] bg-[#5E239D] rounded-lg text-white text-base md:text-xl font-medium font-sans hover:bg-purple-700 transition-all active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* MODAL POPUP: Social Contact Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Interaction */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <h2 className="text-2xl font-bold font-nohemi text-center text-[#141414] mb-8">Contact Us</h2>
            
            {/* Social Icons Grid */}
            <div className="grid grid-cols-3 gap-6">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className={`flex flex-col items-center gap-2 text-purple transition-colors ${social.color}`}
                >
                  <div className="p-3 bg-light rounded-2xl">
                    {social.icon}
                  </div>
                  <span className="text-xs font-medium font-sans">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Overlay: Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsOpen(false)}></div>
        </div>
      )}
    </section>
  )
}