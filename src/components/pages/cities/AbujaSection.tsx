// src/pages/get-to-know-rovv/AbujaSection.tsx
import { motion } from 'framer-motion'
import { MapPin, Zap, Car, Navigation } from 'lucide-react'
import mapImg from '../../../assets/images/safety-full.png'

const stats = [
  { icon: MapPin, label: "Reliable pickups across major business and residential districts" },
  { icon: Car, label: "Low-emission EV & CNG cars helping keep Abuja cleaner" },
  { icon: Zap, label: "Reliable, comfortable rides for commuters and professionals" },
  { icon: Navigation, label: "Real-time tracking & verified drivers" },
]

export default function AbujaSection() {
  return (
    <section className="px-4 py-8 lg:py-20 lg:px-6 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 blur-3xl opacity-40 -z-10"></div>
           <div className="absolute inset-0  opacity-40 -z-10"></div>
           <img
              src={mapImg}
              alt="Nigeria Map"
              className="w-full "
            />
        </motion.div>

        {/* Content - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-2"
        >
          <h2 className="text-[15px] md:text-2xl lg:text-2xl font-bold font-sans text-dark mb-6">
            Abuja – Comfort, Clean Mobility & Smooth Travel
          </h2>
          <p className="text-sm md:text-[16.5px]  text-medium font-bold font-sans leading-relaxed mb-10">
            Abuja is known for its calm, well-structured road networks, making it an ideal city for efficient on-demand mobility. 
            Rovv enhances this by offering steady ride availability, premium service quality, and environmentally conscious vehicles as part of our
            sustainabiity push.
          </p>
          <p className="text-sm md:text-[17px] text-medium font-bold font-sans0 leading-relaxed mb-12">
            Our EV and CNG fleet supports cleaner air, reduced noise, and better long-term affordability for both riders and drivers.
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
                 <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-medium" />
                </div>
                
                <p className="text-medium text-[17px] mt-5 flex font-bold font-sans">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

