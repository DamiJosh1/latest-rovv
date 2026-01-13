// src/pages/fleet-management/FleetSection.tsx
import Image from '../../../assets/images/new- (7).png'
import { motion } from 'framer-motion'
import { MapPinned, BarChart3, LineChart, BellRing, CarFront, ShieldCheck, FileText } from 'lucide-react'

const features = [
  { icon: MapPinned, title: "Real-time GPS Tracking", desc: "See every vehicle’s live location and movement at a glance" },
  { icon: BarChart3, title: "Driver Performance Dashboard", desc: "Monitor driving behavior and performance in one smart dashboard" },
  { icon: LineChart, title: "Income & Trip Analytics", desc: "Track earnings and trip insights to improve daily operations" },
  { icon: BellRing, title: "Maintenance Alerts", desc: "Get instant notifications when a vehicle needs service or attention" },
  { icon: CarFront, title: "Multi-Vehicle Management", desc: "Control and oversee all your vehicles from a single platform" },
  { icon: ShieldCheck, title: "Access Control", desc: "Assign roles and manage who can access your fleet tools" },
  { icon: FileText, title: "Automated Reports", desc: "Receive scheduled reports that keep you updated effortlessly updated" },
]

export default function FleetSection() {
  return (
    <section className="py-10 mt-11 md:mt-0 md:py-20 px-4 md:px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3">
  <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-[34.463px] md:rounded-[40px] text-[13px] md:text-[14px] lg:text-base leading-[13px] md:leading-[14px] lg:leading-4 font-medium font-nohemi"> 
    Smart Fleet 
  </span>
  
  <div className="flex flex-col items-center gap-1.5 md:gap-1 lg:gap-1">
    <h2 className="text-[18px] md:text-[28px] lg:text-[40px] leading-[19px] md:leading-[40px] lg:leading-[48px] font-bold font-nohemi text-[#141414] text-center"> 
      Manage Your Fleet Smarter with ROVV 
    </h2>
    <p className="text-[14px] md:text-[20px] lg:text-[24px] leading-[34px] md:leading-5 lg:leading-[54px] font-medium font-nohemi text-[#4A4A4A] text-center max-w-[326px] md:max-w-[466px] lg:max-w-[559px]"> 
      Track, manage, and optimize your fleet with ease 
    </p>
  </div>
</div>
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start lg:mr-30">
          {/* Image + CTA - Right */}
          <div className="relative order-1 lg:order-2 ">
            {/* Laptop Image */}
            <motion.img initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} 
            src={Image} alt="ROVV Fleet Dashboard"
             className="w-full h-auto lg:w-[70%] md:w-[60%] md:translate-x-40 object-contain transition-all duration-900 ease-in-out hover:scale-110" />
          </div>
          {/* Features List - Left */}
          <div className="order-2 lg:order-1 space-y-4 lg:w-full lg:ml-0 md:w-[50%] md:translate-x-50">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex gap-4 group">
                <div className="shrink-0 w-10 h-10 bg-light rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-medium" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">{feature.title}</h3>
                  <p className="font-sans font-bold text-medium text-sm lg:w-[80%] leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* CTA Card at bottom */}
        <div className="text-center mt-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-nohemi text-gray-900 mb-1"> Partner with ROVV Fleet </h3>
            <p className="text-[18px] font-medium font-nohemi  mb-3"> Partner with ROVV Fleet for seamless control </p>
            <a href="#" className="px-4 py-2 bg-primary text-white font-normal rounded-[4px] shadow-lg hover:shadow-xl transition-all duration-300"> Sign Up </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
