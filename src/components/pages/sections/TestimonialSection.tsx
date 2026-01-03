'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import bgImage from '../../../assets/images/bg.png'

import user1 from '../../../assets/testimonials/j2.png'
import user2 from '../../../assets/testimonials/j1.png'
import user3 from '../../../assets/testimonials/j2.png'


const testimonials = [
  {
    text:"ROVV has honestly made my daily trips so much easier. I love that I can offer what I can afford, and drivers still respond kindly. The rides feel safe, the cars are clean, and there’s this calm experience you just don’t get elsewhere. It’s more than an app, it’s comfort on demand.",
    author: 'Tolu Abraham',
    role: 'Rider, Lagos',
    avatar: user1,
  },
  {
    text:
      "ROVV changed how I see ride-hailing completely. I used to worry about drivers cancelling or overcharging, but now I just set my price and go. Every driver I’ve met has been respectful and professional. It feels safe, fair, and personal, like the app actually cares about people, not just profit.",
    author: 'Laura Anita',
    role: 'Rider, Benin',
    avatar: user3,
  },
  {
    text:
      "ROVV came into my life when I needed a breakthrough the most. I had lost my previous job and didn’t know how to support my family. Driving with ROVV not only helped me get back on my feet, but it gave me confidence again. I’m proud to say I now provide for my loved ones through this platform.",
    author: 'Samuel Ben',
    role: 'Driver, Abuja',
    avatar: user2,
  },

]


export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[index]

  return (
    <section className="bg-[#FFFAF2] py-10 md:py-5 lg:py-10 px-4 md:px-8 lg:px-[194px]">
      <div className="max-w-[1052px] mx-auto flex flex-col items-center gap-7 md:gap-7 lg:gap-10">

        {/* Eyebrow */}
        <div className="bg-[#FFF2DE] px-4 py-1 md:px-5 md:py-[5px] lg:px-6 lg:py-[6px] rounded-full">
          <span className="font-nohemi text-[13px] md:text-sm lg:text-base leading-[13px] md:leading-[14px] lg:leading-4 text-[#141414] font-medium">
            Stories of success
          </span>
        </div>

        {/* Glass container */}
        <div className="w-full bg-[rgba(94,35,157,0.2)] backdrop-blur-[50px] rounded-3xl shadow-[inset_0_0_40px_8px_#fff] p-4 md:p-4 lg:p-7">
          
          {/* Desktop & Tablet Layout */}
          <div className="hidden md:flex md:gap-6 lg:gap-[87px]">
            
            {/* LEFT CARD */}
            <div className="md:w-[161px] lg:w-[312px] flex flex-col justify-between">
              <img
                src={bgImage}
                alt=""
                className="w-full md:h-[183px] lg:h-[355px] object-contain"
              />

              <div className="flex md:flex-col lg:flex-row items-start md:items-start lg:items-center md:gap-2 lg:gap-3 md:mt-[135px] lg:mt-[57px]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-[60px] h-[60px] rounded-lg bg-[#7E4FB1] object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-nohemi font-medium md:text-[24px] md:leading-tight lg:text-2xl lg:leading-[30px] text-[#270F42]">
                    {t.author}
                  </p>
                  <p className="text-[#341356] md:text-base md:leading-[19px] md:italic md:font-bold lg:text-lg lg:leading-6 lg:not-italic lg:font-normal">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex-1 bg-[#5E239D] rounded-3xl md:px-9 md:py-10 lg:px-12 lg:py-10 text-white flex flex-col justify-between md:min-h-[502px]">
              <div className="flex flex-col md:gap-[60px] lg:gap-[60px]">
                {/* Stars */}
                <div className="flex gap-[6.21px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFEFD6] text-[29.31px] leading-none">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-nohemi md:text-[20px] md:w-[415px] md:h-[210px] md:leading-[30px] lg:text-[24px] lg:w-[501px] lg:h-[238px] lg:leading-[34px] text-[#FAFAFA]">
                  {t.text}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            
            {/* Image at top */}
            <img
              src={bgImage}
              alt=""
              className="w-[161px] h-[183px] object-contain mx-auto mb-2 rotate-90"
            />

            {/* Purple card */}
            <div className="bg-[#5E239D] rounded-3xl p-4 mb-3">
              <div className="flex flex-col gap-5">
                {/* Stars */}
                <div className="flex gap-[3.39px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFEFD6] text-base leading-none">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-nohemi font-medium lg:text-[24px] lg:leading-8.5 leading-6 text-[#FAFAFA]">
                  {t.text}
                </p>
              </div>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-2">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-9 h-9 rounded-lg bg-[#7E4FB1] object-cover"
              />
              <div>
                <p className="font-nohemi text-base leading-[19px] text-[#270F42] font-bold lg:text-[24px]">
                  {t.author}
                </p>
                <p className="text-[#341356] font-[Product_Sans] font-normal lg:text-[18px] lg:leading-[24px]">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition"
          >
            <ArrowLeft  className="text-[#5E239D] w-4 h-4 md:w-6 md:h-6" strokeWidth={5} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition"
          >
            <ArrowRight className="text-[#5E239D] w-4 h-4 md:w-6 md:h-6" strokeWidth={5} />
          </button>
        </div>
      </div>
    </section>
  )
}