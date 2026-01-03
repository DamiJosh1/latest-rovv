'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import ridesImg from '../../../assets/images/pic (1).png'
import intercityImg from '../../../assets/images/pictures (1).jpg'
import deliveryImg from '../../../assets/images/me.png'
import rentalImg from '../../../assets/images/pic (3).jpg'
import fleetImg from '../../../assets/images/pic (2).jpg'
import airportImg from '../../../assets/images/pictures (2).jpg'

const services = [
  {
    title: 'City Rides',
    desc: 'Quick, comfortable rides across the city',
    learn: "Move around the city with ease using ROVV's on-demand city rides...",
    img: ridesImg,
  },
  {
    title: 'Inter-city Rides',
    desc: 'Smooth trips between cities',
    learn: 'ROVV makes traveling between cities simple and comfortable...',
    img: intercityImg,
  },
  {
    title: 'Delivery',
    desc: 'Fast, reliable deliveries right to your doorstep',
    learn: "Send packages quickly and securely with ROVV's delivery service...",
    img: deliveryImg,
  },
  {
    title: 'Car Rental',
    desc: 'Easy rentals, anytime you need',
    learn: 'ROVV car rentals give you the freedom to move on your own terms...',
    img: rentalImg,
  },
  {
    title: 'Fleet Management',
    desc: 'Smarter control for your fleet',
    learn: "ROVV's fleet management solution helps vehicle owners...",
    img: fleetImg,
  },
  {
    title: 'Airport Transfer',
    desc: 'On-time pickups and drop-offs for travelers',
    learn: "Take the stress out of airport travel with ROVV's airport transfer...",
    img: airportImg,
  },
]

export default function ServicesSection() {
  const [selectedCard, setSelectedCard] = useState<null | typeof services[0]>(null)

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((card) => {
      if (card.getBoundingClientRect().top < window.innerHeight) {
        card.classList.add('animate-in')
      }
      observer.observe(card)
    })
    return () => cards.forEach((card) => observer.unobserve(card))
  }, [])

  return (
    <section className="bg-[#FFFAF2] px-0 py-10 md:px-8 md:py-20 lg:px-[79px] lg:py-20">
      <div className="max-w-[343px] md:max-w-[704px] lg:max-w-[1282px] mx-auto flex flex-col items-center gap-3 md:gap-4">
        {/* Eyebrow + Title */}
        <div className="flex flex-col items-center gap-1">
          <span className="inline-flex items-center justify-center px-4 py-1 bg-[#FFF2DE] text-[#141414] font-nohemi -mb-1 md:-mb-3 font-medium text-[16px] rounded-[34px]">
            ROVV app
          </span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-center text-[#141414] max-w-[332px] -mb-2 md:-mb-12 md:max-w-none">
            Every journey, one ROVV app
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="w-full md:hidden overflow-x-auto scrollbar-hide ml-0 pt-5-mx-4 px-4">
          <div className="inline-flex gap-4">
            {services.map((s, i) => (
              <article
                key={i}
                className="service-card flex-none w-[253px] h-[335px] bg-white border border-[#CDBBE1] rounded-3xl overflow-hidden flex flex-col opacity-0 translate-y-12"
              >
                <div className="w-full h-[215px] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between px-4 pt-2 pb-5 gap-2 h-[155.18px]">
                  <div className="w-[221px] flex flex-col gap-2 text-left">
                    <h3 className="text-[20px] font-medium font-nohemi text-[#141414]">
                      {s.title}
                    </h3>
                    <p className="text-[16px] leading-[18px] text-[#4A4A4A] font-product-sans">
                      {s.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCard(s)}
                    className="mt-2 flex flex-col text-left gap-1"
                  >
            <span className="text-[13px] md:text-[13px] lg:text-[16px] text-[#666666]">
                      Learn more
                    </span>
                    <div className="w-[66px] md:w-[67px] lg:w-20 h-[1.67px] md:h-[1.68px] lg:h-0.5 bg-[#A7A7A7] rounded-full transition-colors group-hover:bg-[#666666]" />
 
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Original Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[10px] md:gap-y-[29px] lg:gap-x-6 lg:gap-y-8 w-full">
          {services.map((s, i) => (
            <article
              key={i}
              className="service-card group w-full md:w-[344.79px] lg:w-[411px] bg-white rounded-[20px] md:rounded-[20px] lg:rounded-[24px] border border-[#CDBBE1] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl opacity-0 translate-y-12"
            >
              <div className="relative w-full h-[215px] md:h-[216px] lg:h-[258px] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center pt-5 lg:pt-6 pb-5 px-4 gap-2">
                <div className="w-[302px] md:w-[304px] lg:w-[363px] flex flex-col gap-2">
                  <h3 className="text-[18px] md:text-[18px] lg:text-[24px] font-bold md:font-bold lg:font-medium text-[#141414]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[14px] lg:text-[18px] leading-[20px] md:leading-[20px] lg:leading-[24px] font-bold md:font-bold lg:font-normal text-[#4A4A4A]">
                    {s.desc}
                  </p>
                  <button
                    onClick={() => setSelectedCard(s)}
                    className="flex flex-col items-start gap-1 mt-2"
                  >
                    <span className="text-[13px] md:text-[13px] lg:text-[16px] text-[#666666]">
                      Learn more
                    </span>
                    <div className="w-[66px] md:w-[67px] lg:w-20 h-[1.67px] md:h-[1.68px] lg:h-0.5 bg-[#A7A7A7] rounded-full transition-colors group-hover:bg-[#666666]" />
                  </button>
                </div>
              </div>
            </article>
          ))}
          
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl p-6 relative"
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-2xl text-gray-700"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">{selectedCard.title}</h2>
            <p className="text-[#4A4A4A] text-center">{selectedCard.learn}</p>
          </motion.div>
        </div>
      )}
    </section>
  )
}