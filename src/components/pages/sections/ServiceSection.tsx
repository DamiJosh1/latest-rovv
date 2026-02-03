'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    img: ridesImg, 
    learn: "Move around the city with ease using ROVV’s on-demand city rides. Whether it’s a quick errand, daily commute, or last-minute outing, our drivers are always nearby to get you where you’re going without stress. Enjoy reliable pickups, fair pricing, and a smooth ride experience designed for busy urban life. Every trip is supported by real-time tracking and verified drivers, so you can ride with confidence at any time of day." 
  },
  { 
    title: 'Inter-city Rides', 
    desc: 'Smooth trips between cities', 
    img: intercityImg, 
    learn: "ROVV makes traveling between cities simple and comfortable. Our inter-city rides are designed for longer journeys, offering dependable vehicles, experienced drivers, and flexible scheduling that fits your plans. Skip the hassle of bus terminals or rigid timetables and enjoy a door-to-door travel experience that prioritizes comfort, safety, and peace of mind throughout your trip." 
  },
  { 
    title: 'Delivery', 
    desc: 'Fast, reliable deliveries', 
    img: deliveryImg, 
    learn: "Send packages quickly and securely with ROVV’s delivery service. From documents to everyday items, we connect you with trusted drivers who handle your deliveries with care. Track your package in real time from pickup to drop-off, ensuring transparency and reliability every step of the way. Whether it’s urgent or scheduled, ROVV helps you deliver without worry." 
  },
  { 
    title: 'Car Rental', 
    desc: 'Easy rentals, anytime', 
    img: rentalImg, 
    learn: "ROVV car rentals give you the freedom to move on your own terms. Choose from a range of well-maintained vehicles suitable for business, personal use, or special occasions. With flexible rental periods and a straightforward process, you get access to a reliable car without the long-term commitment or complexity of traditional rentals." 
  },
  { 
    title: 'Fleet Management', 
    desc: 'Smarter control for your fleet', 
    img: fleetImg, 
    learn: "ROVV’s fleet management solution helps vehicle owners and businesses operate smarter. Monitor vehicles in real time, track performance, and manage drivers more efficiently from one platform. Designed to reduce operational stress and improve visibility, our tools give you better control over costs, usage, and overall fleet productivity." 
  },
  { 
    title: 'Airport Transfer', 
    desc: 'On-time pickups and drop-offs', 
    img: airportImg, 
    learn: "Take the stress out of airport travel with ROVV's airport transfer service. We provide punctual, stress-free pickups and drop-offs at major airports. Monitor your flight status in-app so your driver is always there when you land. Avoid long queues and ride in comfort directly to your destination." 
  },
]

export default function ServicesSection() {
  const [selectedCard, setSelectedCard] = useState<null | typeof services[0]>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const index = Math.round(container.scrollLeft / (280 + 16))
    setCurrentSlide(index)
  }

  return (
    <section className="bg-[#FFFAF2] py-16 md:py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header content */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="px-4 py-1 bg-[#FFF2DE] text-[#141414] font-medium text-sm rounded-full mb-4">
            ROVV app
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#141414]">
            Every journey, one ROVV app
          </h2>
        </div>

        {/* Mobile View */}
        <div className="w-full md:hidden flex flex-col items-center gap-6">
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scrollbar-hide px-4"
            onScroll={handleScroll}
          >
            <div className="inline-flex gap-4">
              {services.map((s, i) => (
                <article key={i} className="flex-none w-[280px] bg-white border border-[#CDBBE1] rounded-3xl overflow-hidden shadow-sm">
                  <img src={s.img} className="w-full h-48 object-cover" alt={s.title} />
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                    <button onClick={() => setSelectedCard(s)} className="text-xs font-bold mt-2 border-b-2 border-gray-300 w-fit">Learn more</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {services.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
        </div>

        {/* Grid View (iPad & Desktop) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-[#CDBBE1] overflow-hidden flex flex-col transition-all hover:shadow-xl"
            >
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow gap-3">
                <h3 className="text-xl lg:text-2xl font-bold text-[#141414]">{s.title}</h3>
                <p className="text-sm lg:text-base text-[#4A4A4A] leading-relaxed">{s.desc}</p>
                <button
                  onClick={() => setSelectedCard(s)}
                  className="mt-auto flex flex-col items-start gap-1 group/btn"
                >
                  <span className="text-sm font-medium text-gray-500 group-hover/btn:text-black transition-colors">Learn more</span>
                  <div className="w-12 h-0.5 bg-gray-300 group-hover/btn:bg-black group-hover/btn:w-16 transition-all" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Simplified Modal Design: Title & Text Only */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6" 
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[24px] p-8 md:p-10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Icon */}
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors text-2xl"
              >
                ✕
              </button>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
                  {selectedCard.title}
                </h2>
                <div className="w-12 h-1 bg-[#5E239D] rounded-full" />
                <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mt-2">
                  {selectedCard.learn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}