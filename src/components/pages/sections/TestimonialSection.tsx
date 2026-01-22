'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import bgImage from '../../../assets/images/bg.png'

const testimonials = [
  {
    text: "This app is Amazing, Rovv is Taking Over. Low Fares and Courteous drivers",
    author: 'Kennedy Ighodalo',
    role: 'Rider, Lagos',
  },
  {
    text: "nice app with rates just need more drivers on the plartform",
    author: 'Kelvin Martins',
    role: 'Rider, Benin',
  },
  {
    text: "ROVV came into my life when I needed a breakthrough the most. I had lost my previous job and didn’t know how to support my family. Driving with ROVV not only helped me get back on my feet, but it gave me confidence again.",
    author: 'Samuel Ben',
    role: 'Driver, Abuja',
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
  const firstLetter = t.author.charAt(0).toUpperCase()

  return (
    <section className="bg-[#FFFAF2] py-10 px-4 md:px-8 lg:px-[194px] overflow-hidden">
      <div className="max-w-[1052px] mx-auto flex flex-col items-center gap-8">

        {/* 1. Header Eyebrow - Individual Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFF2DE] px-5 py-1 rounded-full"
        >
          <span className="font-nohemi text-sm md:text-base text-[#141414] font-medium">
            Stories of success
          </span>
        </motion.div>

        {/* 2. Main Testimonial Card - Individual Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-[rgba(94,35,157,0.2)] backdrop-blur-[50px] rounded-3xl shadow-[inset_0_0_40px_8px_#fff] p-5 lg:p-7"
        >
          {/* Internal content swapping stays with its original logic */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* DESKTOP & TABLET VIEW */}
              <div className="hidden md:flex gap-6 lg:gap-[87px]">
                <div className="md:w-[180px] lg:w-[312px] flex flex-col justify-between">
                  <img
                    src={bgImage}
                    alt=""
                    loading="lazy"
                    className="w-full md:h-[180px] lg:h-[320px] object-contain"
                  />
                  <div className="flex md:flex-col lg:flex-row gap-3 mt-5">
                    <div className="w-[60px] h-[60px] rounded-lg bg-[#5E239D] flex items-center justify-center">
                      <span className="text-white font-nohemi text-2xl font-bold">
                        {firstLetter}
                      </span>
                    </div>
                    <div>
                      <p className="font-nohemi font-medium text-xl text-[#270F42]">
                        {t.author}
                      </p>
                      <p className="text-[#341356] text-base">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-[#5E239D] rounded-3xl px-7 py-6 text-white flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FFEFD6] text-[22px] leading-none">★</span>
                    ))}
                  </div>
                  <p className="font-nohemi text-[22px] leading-[32px] text-[#FAFAFA]">
                    {t.text}
                  </p>
                </div>
              </div>

              {/* MOBILE VIEW */}
              <div className="md:hidden flex flex-col">
                <img
                  src={bgImage}
                  alt=""
                  loading="lazy"
                  className="w-[161px] h-[183px] object-contain mx-auto mb-2 rotate-90"
                />
                <div className="bg-[#5E239D] rounded-3xl p-4 mb-3 h-[220px] overflow-hidden">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FFEFD6] text-base">★</span>
                      ))}
                    </div>
                    <p className="font-nohemi text-[#FAFAFA] leading-6 line-clamp-5">
                      {t.text}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#5E239D] flex items-center justify-center">
                    <span className="text-white font-nohemi text-lg font-bold">
                      {firstLetter}
                    </span>
                  </div>
                  <div>
                    <p className="font-nohemi text-base font-bold text-[#270F42]">
                      {t.author}
                    </p>
                    <p className="text-[#341356] text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 3. Navigation Controls - Individual Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition active:scale-95"
          >
            <ArrowLeft className="text-[#5E239D]" strokeWidth={5} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition active:scale-95"
          >
            <ArrowRight className="text-[#5E239D]" strokeWidth={5} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}