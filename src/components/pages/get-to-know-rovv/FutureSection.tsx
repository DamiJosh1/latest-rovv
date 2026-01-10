'use client'

import { useEffect, useState } from 'react'

import bgImg from '../../../assets/images/journey-5.png'      // background image
import heroImg from '../../../assets/images/why-1.png'     // right image

export default function AboutSection() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <section
      className="relative py-25 px-6 overflow-hidden"
    >
      {/* Background with opacity */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* CENTERED BADGE AT TOP */}
        <div className="flex justify-center mb-8">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-medium">
            About Us
          </span>
        </div>

        {/* LEFT AND RIGHT CONTENT */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div
            className={`flex flex-col gap-9 text-center md:text-left transition-all duration-700
            ${show ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-10'}`}
          >
            <div className="flex flex-col gap-4 items-center md:items-start md:justify-start md:mr-[280px]">
              <h1 className="xl:text-[40px] xl:w-[491px] lg:text-[40px] lg:w-[491px] md:text-[32px] md:w-[401px] text-[20px] w-[249px] font-bold  font-nohemi leading-[120%] md:leading-[36px] lg:leading-[48px] text-[#141414]">
                Building the Future of
                Seamless Transportation
              </h1>

              <p className="text-[18px] leading-6 text-[#4A4A4A] max-w-[411px]">
                ROVV is a modern mobility platform built to make movement simple,
                safe and accessible for everyone. from city rides and intercity
                travel to fast delivery and reliable vehicle services
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="flex justify-center items-center w-[246px] h-[60px] bg-[#5E239D] rounded-lg text-[#FFEFD6] text-xl font-bold hover:bg-purple-700 transition">
                Download the app
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`transition-all duration-700 delay-200
            ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative w-full max-w-[603.85px]  mx-auto overflow-hidden">
              <img
                src={heroImg}
                alt="Passenger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}