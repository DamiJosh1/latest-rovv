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
    <section className="py-20 lg:py-20 md:py-20 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center justify-center lg:justify-between">
          {/* Map image with scroll animation and lazy load */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={mapImg}
              alt="Nigeria Map"
              loading="lazy"
              className="w-[90%] mx-auto md:w-[95%] md:mx-auto lg:w-full lg:mx-0"
            />
          </motion.div>

          {/* Text and cities list with scroll animations */}
          <div className="lg:ml-10 text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="lg:mb-12"
            >
              <h3 className="text-[20px] lg:text-[40px] md:text-[35px] font-bold font-nohemi text-dark">
                Cities We Operate In
              </h3>
            </motion.div>

            <div className="flex flex-wrap gap-3 scale-80 md:scale-none sm:ml-2 justify-center md:w-[539px] md:translate-x-27 md:justify-center lg:justify-center lg:w-full lg:translate-x-0 lg:scale-none">
              {cities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start px-4 py-2 gap-4 border border-light rounded-3xl"
                >
                  <div>
                    <item.icon className="w-6 h-6 text-bg fill-light" />
                  </div>
                  <p className="text-medium text-[16px] font-normal font-sans">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="scale-80 lg:scale-100 lg:text-[20px] lg:translate-x-10 font-normal font-nohemi text-medium"
            >
              We’re expanding fast, more cities launching soon!
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  )
}