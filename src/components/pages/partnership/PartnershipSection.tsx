// src/pages/partnership/PartnershipSection.tsx
import { Car, Building2, Handshake } from 'lucide-react'
import mapImg from '../../../assets/images/new- (6).png'

export default function PartnershipSection() {
  const partnerships = [
    { icon: Car, title: "Vehicle Leasing Partnership", desc: "Earn monthly returns through car ownership programs" },
    { icon: Building2, title: "Corporate Transport Solutions", desc: "Custom fleet & employee mobility management" },
    { icon: Handshake, title: "Investment Collaboration", desc: "Partner to scale ROVV into new cities" },
  ]

  return (
    <section className="py-26 px-6 bg-bg">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-dark text-bg text-sm font-semibold rounded-full mb-4">
          Partnerships
        </span>
        <h2 className="text-2xl md:text-3xl font-nohemi font-bold text-dar0 mb-2">
          Partner With ROVV
        </h2>
        <p className="text-xl text-medium font-sans font-bold mb-16 w-1/2 xl:max-w-3xl mx-auto ">
          Join ROVV through simple partnership models built to help you grow and scale
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
              src={mapImg}
              alt="Nigeria Map"
              className="w-full md:w-[80%] md:translate-x-20 "
            />

          <div className="space-y-8 ml-30 text-left">
            {partnerships.map((item, i) => (
              <div key={i} className="flex  gap-5">
                <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-medium" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
                  <p className="text-medium font-bold font-sans text-[16px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl md:text-3xl font-nohemi font-bold text-dark mb-2">
            Let's Build Africa's Mobility Future Together
          </h3>
          <p className="text-xl font-bold font-sans text-medium mb-4">Be part of the movement shaping Africa's mobility future</p>
          <button className="px-8 py-3 bg-primary text-bg font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
