
// src/components/sections/ServicesSection.tsx  

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

  const [selectedCard, setSelectedCard] = useState<null | { title: string; desc: string; learn: string; img: string }>(null);

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
    <section className="py-19 px-4 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 font-sans font-bold bg-dark text-bg px-4 py-2 rounded-[40px] text-sm">
            ROVV app
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-[23px] font-nohemi font-bold lg:text-5xl text-dark mb-16 leading-tight">
          Every journey, one ROVV app
        </h2>

        {/* Grid: mobile = 1, tablet = 2, desktop = 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
          {services.map((s, i) => (
            <article
              key={i}
              className="service-card group w-full bg-bg rounded-2xl border  border-light  shadow-xl overflow-hidden
                         flex flex-col transition-all duration-500 hover:shadow-2xl
                         opacity-0 translate-y-12"
            >
              {/* IMAGE */}
              <div className="w-full h-[350px]  overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="px-6 pt-6 pb-8 flex flex-col gap-3">
                <h3 className="text-2xl font-nohemi font-bold text-dark group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>

                <p className="text-base font-medium">{s.desc}</p>

                {/* UNDERLINE-LINE ANIMATED LINK */}
                <button
                  onClick={() => setSelectedCard(s)}
                  className="relative mt-4  w-fit text-medium font-bold text-sm
                             after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-500
                             hover:after:bg-medium after:transition-all after:duration-300
                             hover:after:w-full "
                >
                  Learn more
                </button>
              </div>
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
              className="absolute top-3 right-3 text-gray-700 text-xl"
            >
              ×
            </button>

            <h2 className="text-center text-2xl font-nohemi font-bold mb-6">
              {selectedCard.title}
            </h2>

            


            <p className="text-center text-medium font-bold font-sans text-sm mt-4">
              {selectedCard.learn}
            </p>
          </motion.div>
        </div>
      )}
      
    </section>
  )
}