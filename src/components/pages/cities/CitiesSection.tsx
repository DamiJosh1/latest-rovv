'use client'

import mapImg from '../../../assets/images/city3.png'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = [
  { icon: MapPin, label: "Lagos" },
  { icon: MapPin, label: "Abuja" },
  { icon: MapPin, label: "Ibadan" },
  { icon: MapPin, label: "Benin City " },
  { icon: MapPin, label: "Port Harcourt" },
]

export default function CitiesSection() {
  return (
    // Added px-6 to match your header/hero padding
    <section className="py-20 bg-bg overflow-hidden px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Changed md:grid-cols-2 so iPad Pro shows desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Map image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <img
              src={mapImg}
              alt="Nigeria Map"
              loading="lazy"
              // Removed complex mx-auto logic, let the grid handle it
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Text and cities list */}
          <div className="text-center md:text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[28px] md:text-[35px] lg:text-[40px] font-bold font-nohemi text-dark leading-tight">
                Cities We Operate In
              </h3>
            </motion.div>

            {/* Fixed the City Badges: Removed translates and scales that cause overflow */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {cities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center px-4 py-2 gap-2 border border-light rounded-3xl whitespace-nowrap"
                >
                  <item.icon className="w-5 h-5 text-bg fill-light" />
                  <p className="text-medium text-[16px] font-normal font-sans">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[16px] lg:text-[20px] font-normal font-nohemi text-medium"
            >
              We’re expanding fast, more cities launching soon!
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  )
}