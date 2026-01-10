// src/pages/get-to-know-rovv/AbujaSection.tsx
import { motion } from 'framer-motion'
import { MapPin, Zap, Car, Navigation } from 'lucide-react'
import mapImg from '../../../assets/images/city2.png'

const stats = [
  { icon: MapPin, label: "1.8 millions+ rides completed in Lagos in the last year" },
  { icon: Car, label: "74% of surveyed riders agree that ride-hailing is safer" },
  { icon: Navigation, label: "EV & CNG cars lower operating costs" },
  { icon: Zap, label: "Real-time tracking & verified drivers" },
]

export default function LagosSection() {
  return (
    <section className=" px-4 lg:py-20 lg:px-6 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1 items-center">

        {/* Content - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-[15px] md:text-3xl lg:text-2xl font-bold font-sans text-dark mb-6">
            Lagos – Rovv Headquarters
          </h2>
          <p className="text-sm text-medium font-bold font-sans leading-relaxed mb-10">
            Lagos is the heart of Rovv. As our headquaters,the city represents everything we stand for-speed, reliability, innovation
            , and scale with millions moving across the city daily. Lagos allow Rovv to deliver fast pickups, transparent pricing, and a consistanly safe ride experience.
          </p>
          <p className="text-sm  text-medium font-bold font-sans leading-relaxed mb-12">
          We are also pioneering sustainable mobility here. Our growing fleet of EV and CNG-powered vehicles
          reduces emissions, lowers fuel dependecies, and offers passengers smoother, quicker rides.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className=" border border-light rounded-2xl p-5 shadow-lg"
              >
                <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-medium" />
                </div>
                
                <p className="text-medium text-[17px] mt-5 flex font-bold font-sans">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
          {/* Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-1 "
        >
          <div className="absolute inset-0  opacity-40 -z-10"></div>
           <img
              src={mapImg}
              alt="Nigeria Map"
              className="w-full "
            />
        </motion.div>

      </div>
      
    </section>
  )
}

