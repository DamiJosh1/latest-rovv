'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Background Images
import bgImage from '../../../assets/images/new-4.jpg'
import bgImage2 from '../../../assets/images/new-5.jpg'
import bgImage3 from '../../../assets/images/new-2.jpg'
import bgImage4 from '../../../assets/images/new-71.jpg'

// Card Images
import ridesImg from '../../../assets/images/new- (8).jpg'
import intercityImg from '../../../assets/images/new- (3).jpg'
import deliveryImg from '../../../assets/images/new- (9).jpg'
import rentalImg from '../../../assets/images/new- (6).jpg'

export default function SustainabilitySection() {
  const [selectedCard, setSelectedCard] = useState<null | { title: string; desc: string; learn: string; img: string }>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const cards = [
    { title: "Green Mobility", desc: "Encouraging hybrid & EV adoption in fleet programs", learn: "ROVV is committed to building a cleaner and more sustainable transport ecosystem...", img: ridesImg },
    { title: "Community Support", desc: "Free driver training, mental health programs, and charity drives", learn: "At ROVV, we believe mobility should uplift people, not just move them...", img: deliveryImg },
    { title: "Women in Mobility", desc: "Empowering more female drivers and fleet owners", learn: "ROVV is dedicated to creating more opportunities for women in the mobility space...", img: intercityImg },
    { title: "Future Commitment", desc: "Planning for 95% of our fleet to run on electric or hybrid power by 2028", learn: "Looking ahead, ROVV is planning for a cleaner and smarter fleet...", img: rentalImg },
  ]

  const backgroundImages = [bgImage, bgImage2, bgImage3, bgImage4]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  return (
    <section className="py-20 bg-bg overflow-hidden">
      {/* Hero Background Slider with Scroll In/Out */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative inset-0 z-0 w-full h-[300px] lg:h-screen md:h-[400px] shadow-2xl"
      >
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-dark opacity-50" />
            <h2 className="absolute inset-0 font-nohemi font-bold flex items-center justify-center text-[22px] md:text-5xl text-bg text-center px-4">
              Our Commitment to Sustainability
            </h2>
          </div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto mt-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-9"
        >
          <span className="inline-flex items-center mb-5 text-bg gap-2 px-6 py-2 bg-dark sm:text-sm font-bold rounded-full">
            Sustainability
          </span>
          <h2 className="text-2xl md:text-5xl font-nohemi font-bold text-dark">
            Driving a Cleaner, Smarter, <br /> and More Inclusive Future
          </h2>
        </motion.div>

        {/* Staggered Cards with Scroll Animation */}
        <div className="flex justify-center px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white flex flex-col rounded-2xl shadow-xl border border-light overflow-hidden hover:shadow-2xl w-full md:w-[380px]"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  loading="lazy" 
                  className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-medium font-bold mb-4">{card.desc}</p>
                  <button
                    onClick={() => setSelectedCard(card)}
                    className="relative text-gray-600 font-bold text-sm after:absolute after:left-0 after:top-5 after:h-0.5 after:w-full after:bg-gray-500 hover:after:bg-medium after:transition-all after:duration-300"
                  >
                    Learn more
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with Animation In and Out */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl p-6 relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
              <h2 className="text-center text-2xl font-nohemi font-bold mb-6">
                {selectedCard.title}
              </h2>
              <p className="text-center text-medium font-bold font-sans text-sm mt-4 leading-relaxed">
                {selectedCard.learn}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}