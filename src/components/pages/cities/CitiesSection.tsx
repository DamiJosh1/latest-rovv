// src/components/sections/CitiesSection.tsx
import mapImg from '../../../assets/images/city3.png'
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
    <section className="py-20 lg:py-20 md:py-20 bg-bg">
      <div className="max-w-6xl mx-auto">

        {/* Map + Cities */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-12  items-center justify-center lg:justify-between">
          <div>
            <img
              src={mapImg}
              alt="Nigeria Map"
              className=" w-[90%] mx-auto md:w-[95%]  md:mx-auto lg:w-full lg:mx-0 "
            />
          </div>
          <div className=" lg:ml-10 text-center space-y-6">
            <div className=" lg:mb-12">
              <h3 className="text-[20px] lg:text-[40px] md:text-[35px] font-bold font-nohemi text-dark">Cities We Operate In</h3>
            </div>
            <div className="flex flex-wrap gap-3 scale-80 md:scale-none sm:ml-2 justify-center md:w-[539px] md:translate-x-27  md:justify-center lg:justify-center lg:w-full lg:translate-x-0 lg:scale-none ">
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
                <p className="text-medium  text-[16px] font-normal font-sans">{item.label}</p>
              </motion.div>
            ))}
            </div>
            <p className="scale-80 lg:scale-100 lg:text-[20px] lg:translate-x-10 font-normal font-nohemi text-medium">
              We’re expanding fast, more cities launching soon!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}