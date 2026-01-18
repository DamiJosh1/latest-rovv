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
  <section className="py-20 md:py-24 lg:py-26 px-6 bg-bg">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-2 mb-4 md:mb-5 lg:mb-6">
        {/* Badge */}
        <span className="inline-flex items-center justify-center px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-1.5 bg-[#FFF2DE] text-[#141414] rounded-[34.463px] md:rounded-[40px] text-[13px] md:text-[14px] lg:text-base leading-[13px] md:leading-[14px] lg:leading-4 font-medium font-nohemi">
          ROVV app
        </span>

        {/* Title and Description */}
        <div className="flex flex-col items-center">
          <h2 className="text-[30px] md:text-[35px] lg:text-[40px] leading-[40px] md:leading-[40px] lg:leading-[48px] font-bold font-nohemi text-[#141414] text-center mb-0">
            Partner With ROVV
          </h2>
          <p className="text-base md:text-base lg:text-2xl leading-5 md:leading-[22px] lg:leading-[34px] font-medium font-nohemi text-[#4A4A4A] text-center max-w-[333px] md:max-w-[333px] lg:max-w-[884px]">
            Join ROVV through simple partnership models built to help you grow and scale
          </p>
        </div>
      </div>

      {/* Main Content - Image and Features */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 md:gap-5 lg:gap-20 mb-6 md:mb-10 lg:mb-10">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:order-first">
          <div className="relative w-[343px] h-[337px] md:w-[434px] md:h-[414.65px] lg:w-[628px] lg:h-[600px] rounded-[32.07px] md:rounded-[27.64px] lg:rounded-[40px] overflow-hidden">
            <img
              src={mapImg}
              alt="Partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Partnership Features */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:w-auto lg:max-w-[434px]">
          {partnerships.map((item, i) => (
            <div key={i} className="flex gap-3 md:gap-5 lg:gap-5">
              {/* Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-[#CDBBE1] rounded-full flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 text-[#4A4A4A]" />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base md:text-2xl lg:text-2xl leading-6 md:leading-[34px] lg:leading-[34px] font-medium font-nohemi text-[#141414]">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg lg:text-lg leading-5 md:leading-6 lg:leading-6 font-normal font-sans text-[#4A4A4A]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-3">
        <div className="flex flex-col items-center gap-0 md:gap-1 lg:gap-1">
          <h3 className="text-base md:text-lg lg:text-2xl leading-4 md:leading-[18px] lg:leading-[34px] font-medium font-nohemi text-[#141414] text-center">
            Let's Build Africa's Mobility Future Together
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-5 md:leading-[22px] lg:leading-6 font-normal font-sans text-[#4A4A4A] text-center">
            Be part of the movement shaping Africa's mobility future
          </p>
        </div>
        
        <button className="flex justify-center items-center px-6 py-[10px] md:px-7 md:py-[14px] lg:px-7 lg:py-[13px] w-[132px] h-[39px] md:w-[161px] md:h-[52px] lg:w-[171px] lg:h-[52px] bg-[#5E239D] rounded-lg text-white text-base md:text-xl lg:text-xl leading-[19px] md:leading-6 lg:leading-6 font-medium font-sans hover:bg-purple-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  </section>
)}