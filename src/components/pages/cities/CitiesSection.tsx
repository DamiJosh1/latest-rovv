// src/components/sections/CitiesSection.tsx
import mapImg from '../../../assets/images/safety-full.png'
import { motion } from 'framer-motion'
import { MapPin} from 'lucide-react'


const cities = [
   { icon: MapPin, label: "Lagos" },
  { icon: MapPin, label: "Abuja" },
  { icon: MapPin, label: "Ibadan" },
  { icon: MapPin, label: "Benin City " },
  { icon: MapPin, label: "Port Harcourt" },
]

export default function CitiesSection() {
  return (
    <section className="mt-20 lg:py-30 md:py-20 bg-bg">
      <div className="max-w-6xl lg:mx-80">

        {/* Map + Cities */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-12  items-center">
          <div>
            <img
              src={mapImg}
              alt="Nigeria Map"
              className="scale-95 lg:w-full md:translate-x-3 "
            />
          </div>
          <div className=" lg:ml-25 text-center space-y-6">
            <div className=" lg:mb-12">
              <h3 className="text-[25px] lg:text-4xl font-bold font-nohemi text-dark">Cities We Operate In</h3>
            </div>
            <div className="flex flex-wrap gap-3 scale-80 md:scale-125 sm:ml-2 justify-center md:w-1/2 md:translate-x-46 md:justify-center lg:justify-center lg:w-full lg:translate-x-0 lg:scale-none ">
              {cities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start px-4 py-2 gap-4 border border-light rounded-3xl"
              >
                <div>
                  <item.icon className="w-6 h-6 text-bg fill-light" />
                </div>
                <p className="text-medium  text-sm font-bold font-sans">{item.label}</p>
              </motion.div>
            ))}
            </div>
            <p className="scale-80 lg:text-[16px] lg:ml-5 font-bold font-sans text-medium">
              We’re expanding fast, more cities launching soon!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}