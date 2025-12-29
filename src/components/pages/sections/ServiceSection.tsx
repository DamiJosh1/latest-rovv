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
    learn:
      "Move around the city with ease using ROVV's on-demand city rides. Whether it's a quick errand, daily commute, or last-minute outing, our drivers are always nearby to get you where you're going without stress. Enjoy reliable pickups, fair pricing, and a smooth ride experience designed for busy urban life. Every trip is supported by real-time tracking and verified drivers, so you can ride with confidence at any time of day.",
    img: ridesImg,
  },
  {
    title: 'Inter-city Rides',
    desc: 'Smooth trips between cities',
    learn:
      'ROVV makes traveling between cities simple and comfortable. Our inter-city rides are designed for longer journeys, offering dependable vehicles, experienced drivers, and flexible scheduling that fits your plans. Skip the hassle of bus terminals or rigid timetables and enjoy a door-to-door travel experience that prioritizes comfort, safety, and peace of mind throughout your trip.',
    img: intercityImg,
  },
  {
    title: 'Delivery',
    desc: 'Send packages quickly and securely',
    learn:
      "Send packages quickly and securely with ROVV's delivery service. From documents to everyday items, we connect you with trusted drivers who handle your deliveries with care. Track your package in real time from pickup to drop-off, ensuring transparency and reliability every step of the way. Whether it's urgent or scheduled, ROVV helps you deliver without worry.",
    img: deliveryImg,
  },
  {
    title: 'Car rental',
    desc: 'Rent a car easily for your journey',
    learn:
      'ROVV car rentals give you the freedom to move on your own terms. Choose from a range of well-maintained vehicles suitable for business, personal use, or special occasions. With flexible rental periods and a straightforward process, you get access to a reliable car without the long-term commitment or complexity of traditional rentals.',
    img: rentalImg,
  },
  {
    title: 'Fleet management',
    desc: 'Smart car control for your fleet',
    learn:
      "ROVV's fleet management solution helps vehicle owners and businesses operate smarter. Monitor vehicles in real time, track performance, and manage drivers more efficiently from one platform. Designed to reduce operational stress and improve visibility, our tools give you better control over costs, usage, and overall fleet productivity.",
    img: fleetImg,
  },
  {
    title: 'Airport Transfer',
    desc: 'On-time pickups and drop-offs for travelers',
    learn:
      "Take the stress out of airport travel with ROVV's airport transfer service. Enjoy timely pickups and drop-offs aligned with your flight schedule, ensuring you arrive relaxed and on time. Our drivers are familiar with airport routes and traffic patterns, making your journey smooth whether you're heading out or coming home.",
    img: airportImg,
  },
];


export default function ServicesSection() {
  const [selectedCard, setSelectedCard] = useState<null | { title: string; desc: string; learn: string; img: string }>(null)

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
    <section className="bg-[#FFFAF2] px-4 md:px-8 lg:px-[79px] py-10 md:py-[39px] lg:py-20">
      <div className="max-w-[343px] md:max-w-[704px] lg:max-w-[1282px] mx-auto flex flex-col items-center gap-[23px] md:gap-[26px] lg:gap-6">
        
        {/* Top Badge */}
        <div className="text-center">
          <span className="inline-flex items-center justify-center font-medium bg-[#FFF2DE] text-[#141414] px-4 md:px-5 lg:px-6 py-1 md:py-[5px] lg:py-[6px] rounded-[34.463px] md:rounded-[40px] lg:rounded-[40px] text-[13px] md:text-[14px] lg:text-[16px] leading-[13px] md:leading-[14px] lg:leading-[16px]">
            ROVV app
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-[24px] md:text-[35px] lg:text-[40px] font-bold leading-[24px] md:leading-[40px] lg:leading-[48px] text-[#141414] max-w-[332px] md:max-w-[483px] lg:max-w-[803px]">
          Every journey, one ROVV app
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[38.21px] md:gap-y-[29.15px] lg:gap-x-6 lg:gap-y-8 w-full max-w-[343px] md:max-w-[703px] lg:max-w-[1282px] mt-0 md:mt-0 lg:mt-0">
          {services.map((s, i) => (
            <article
              key={i}
              className="service-card group w-full md:w-[344.79px] lg:w-[411px] bg-white rounded-[20.0169px] md:rounded-[20.1336px] lg:rounded-[24px] border-[0.834px] md:border-[0.839px] lg:border border-[#CDBBE1] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl opacity-0 translate-y-12"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[215.18px] md:h-[216.44px] lg:h-[258px] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center pt-[20.02px] md:pt-[20.13px] lg:pt-6 pb-0 px-0">
                <div className="w-[302.76px] md:w-[304.52px] lg:w-[363px] flex flex-col gap-1 md:gap-2 lg:gap-2">
                  {/* Text content wrapper */}
                  <div className="flex flex-col gap-[2px] md:gap-0 lg:gap-0">
                    <h3 className="text-[18px] md:text-[18px] lg:text-[24px] font-bold md:font-bold lg:font-medium leading-[25px] md:leading-[25px] lg:leading-[30px] text-[#141414]">
                      {s.title}
                    </h3>

                    <p className="text-[14px] md:text-[14px] lg:text-[18px] leading-[20px] md:leading-[20px] lg:leading-[24px] font-bold md:font-bold lg:font-normal text-[#4A4A4A]">
                      {s.desc}
                    </p>
                  </div>

                  {/* Learn more link */}
                  <button
                    onClick={() => setSelectedCard(s)}
                    className="flex flex-col items-start gap-[3.34px] md:gap-[3.36px] lg:gap-1 mt-0"
                  >
                    <span className="text-[13.3446px] md:text-[13.4224px] lg:text-[16px] leading-[16px] md:leading-[16px] lg:leading-[22px] font-normal text-[#666666] text-center">
                      Learn more
                    </span>
                    <div className="w-[66px] md:w-[67px] lg:w-20 h-[1.67px] md:h-[1.68px] lg:h-[2px] bg-[#A7A7A7] rounded-[8.34px] md:rounded-[8.39px] lg:rounded-[10px] transition-all duration-300 group-hover:bg-[#666666]"></div>
                  </button>
                </div>
              </div>

              {/* Bottom padding spacer */}
              <div className="h-[20.02px] md:h-[20.13px] lg:h-6"></div>
            </article>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl p-6 relative"
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-700 text-xl hover:text-gray-900"
            >
              ×
            </button>

            <h2 className="text-center text-2xl font-bold mb-6">
              {selectedCard.title}
            </h2>

            <p className="text-center text-[#4A4A4A] font-normal text-sm">
              {selectedCard.learn}
            </p>
          </motion.div>
        </div>
      )}

      
    </section>
  )
}
