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
    learn: "Move around the city with ease using ROVV’s on-demand city rides. Whether it’s a quick errand, daily commute, or last-minute outing, our drivers are always nearby to get you where you’re going without stress. Enjoy reliable pickups, fair pricing, and a smooth ride experience designed for busy urban life. Every trip is supported by real-time tracking and verified drivers, so you can ride with confidence at any time of day.",
    img: ridesImg,
  },
  {
    title: 'Inter-city Rides',
    desc: 'Smooth trips between cities',
    learn: 'ROVV makes traveling between cities simple and comfortable. Our inter-city rides are designed for longer journeys, offering dependable vehicles, experienced drivers, and flexible scheduling that fits your plans. Skip the hassle of bus terminals or rigid timetables and enjoy a door-to-door travel experience that prioritizes comfort, safety, and peace of mind throughout your trip.',
    img: intercityImg,
  },
  {
    title: 'Delivery',
    desc: 'Fast, reliable deliveries right to your doorstep',
    learn: "Send packages quickly and securely with ROVV’s delivery service. From documents to everyday items, we connect you with trusted drivers who handle your deliveries with care. Track your package in real time from pickup to drop-off, ensuring transparency and reliability every step of the way. Whether it’s urgent or scheduled, ROVV helps you deliver without worry.",
    img: deliveryImg,
  },
  {
    title: 'Car Rental',
    desc: 'Easy rentals, anytime you need',
    learn: 'ROVV car rentals give you the freedom to move on your own terms. Choose from a range of well-maintained vehicles suitable for business, personal use, or special occasions. With flexible rental periods and a straightforward process, you get access to a reliable car without the long-term commitment or complexity of traditional rentals.',
    img: rentalImg,
  },
  {
    title: 'Fleet Management',
    desc: 'Smarter control for your fleet',
    learn: "ROVV’s fleet management solution helps vehicle owners and businesses operate smarter. Monitor vehicles in real time, track performance, and manage drivers more efficiently from one platform. Designed to reduce operational stress and improve visibility, our tools give you better control over costs, usage, and overall fleet productivity.",
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Carousel scroll logic
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const cardWidth = 253 + 16 
    const index = Math.round(container.scrollLeft / cardWidth)
    setCurrentSlide(index)
  }

  return (
    <section className="bg-[#FFFAF2] px-0 py-10 md:px-8 md:py-20 lg:px-[79px] lg:py-20">
      <div className="max-w-[343px] md:max-w-[704px] lg:max-w-[1282px] mx-auto flex flex-col items-center gap-3 md:gap-4">
        
        {/* Header content */}
        <div className="flex flex-col items-center gap-1">
          <span className="inline-flex items-center justify-center px-4 py-1 bg-[#FFF2DE] text-[#141414] font-nohemi -mb-1 md:-mb-3 font-medium text-[16px] rounded-[34px]">
            ROVV app
          </span>
          <h2 className="text-[16px] md:text-[24px] lg:text-[40px] font-bold text-center text-[#141414] max-w-[332px] -mb-2 md:-mb-12 md:max-w-none">
            Every journey, one ROVV app
          </h2>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="w-full md:hidden flex flex-col items-center gap-4 pt-5">
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scrollbar-hide pl-6 pr-6"
            onScroll={handleScroll}
          >
            <div className="inline-flex gap-4">
              {services.map((s, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} // Added scroll up/down
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mobile-service-card service-card flex-none w-[280px] h-[335px] bg-white border border-[#CDBBE1] rounded-3xl overflow-hidden flex flex-col "
                >
                  <div className="w-full h-[215px] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
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
                      <span className="text-[13px] text-[#666666]">
                        Learn more
                      </span>
                      <div className="w-[66px] h-[1.67px] bg-[#A7A7A7] rounded-full transition-colors group-hover:bg-[#666666]" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {services.map((_, i) => (
              <button
              aria-label="scroll" 
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-8 bg-[#141414]' : 'w-2 bg-[#D9D9D9]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Grid (RESTORED translate-y-12) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-[10px] md:gap-y-[29px] lg:gap-x-6 lg:gap-y-8 w-full">
          {services.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }} // Re-animates when scrolling back up
              transition={{ duration: 0.6, delay: i * 0.1 }}
              // RESTORED translate-y-12 class exactly as you had it
              className="service-card group w-full md:w-[344.79px] lg:w-[411px] bg-white rounded-[20px] md:rounded-[20px] lg:rounded-[24px] border border-[#CDBBE1] overflow-hidden translate-y-12 flex flex-col transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative w-full h-[215px] md:h-[216px] lg:h-[258px] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
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
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal with In and Out Animations */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
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
      </AnimatePresence>
    </section>
  )
}