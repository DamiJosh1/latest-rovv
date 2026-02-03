'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import bgImage from '../../../assets/images/bg.png'

const testimonials = [
  // ... (testimonials array remains exactly the same as your original)
  {
    text: "Rovv has made navigating Lagos traffic so much easier! The drivers know the best routes, and I always get to my meetings on time. No more haggling over prices—everything is clear upfront.",
    author: 'Sarah Okonkwo',
    role: 'Marketing Manager, Lekki',
  },
  {
    text: "As a UNILAG student, Rovv is perfect for my budget. The app works smoothly even with poor network, and drivers are always respectful. I use it to get to campus and back home safely every day.",
    author: 'James Adeleke',
    role: 'Student, Yaba',
  },
  {
    text: "I depend on Rovv for business trips across Lagos. Rain or shine, my driver arrives on time. The cashless payment is convenient, and I get receipts instantly for my records. Rovv is reliable!",
    author: 'Patricia Eze',
    role: 'Business Owner, Ikeja',
  },
  {
    text: "At my age, I wasn’t sure about these apps, but Rovv made it simple. The drivers are courteous and patient. I feel safe traveling around Lagos, and my children can track my trips.",
    author: 'Marcus Bello',
    role: 'Retiree, Victoria Island',
  },
  {
    text: "Working night shifts at the hospital, I need safe transport at odd hours. Rovv has never failed me. The drivers are professional, and the cars are always clean. It’s my trusted way to get home.",
    author: 'Emily Adeyemi',
    role: 'Nurse, Surulere',
  },
  {
    text: "Rovv treats drivers like partners, not just workers. They listen to our complaints and actually make changes. The instant payment feature helps when I need cash immediately.",
    author: 'Tunde Babatunde',
    role: 'Driver , Lagos',
  },
  {
    text: "Rovv pays better than other platforms in Lagos. The weekly earnings are fair, and support team actually responds when I call. I can support my family comfortably driving with Rovv.",
    author: 'David Ogunleye',
    role: 'Driver, Lagos',
  },
  {
    text: "As a female driver, I feel safe with Rovv. The passenger verification is good, and support is just a call away. The flexibility lets me pick up my children from school between rides.",
    author: 'Joke Akintola',
    role: 'Driver, Lagos',
  },
  {
    text: "Switched from another platform to Rovv—best decision ever! Riders are better mannered, earnings are higher, and the weekly bonuses for good ratings motivate me.",
    author: 'Blessing Okoro',
    role: 'Driver, Lagos',
  },
  {
    text: "What I love about Rovv is the respect. They don’t exploit drivers to make profit. I earn enough to pay rent, school fees, and save small. Rovv has truly changed my life!",
    author: 'Amaka Nnamdi',
    role: 'Driver, Lagos',
  }
];

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
    /* FIX: Changed lg:px to a smaller value (px-12) and reserved the large padding for xl (desktop) 
       to prevent the card from becoming too narrow and tall on iPad Pro. */
    <section className="bg-[#FFFAF2] py-10 px-4 md:px-8 lg:px-12 xl:px-[194px] overflow-hidden">
      <div className="max-w-[1052px] mx-auto flex flex-col items-center gap-8">

        {/* 1. Header Eyebrow */}
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

        {/* 2. Main Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-[rgba(94,35,157,0.2)] backdrop-blur-[50px] rounded-3xl shadow-[inset_0_0_40px_8px_#fff] p-5 lg:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* DESKTOP & TABLET VIEW */}
              <div className="hidden md:flex flex-row items-stretch gap-6 lg:gap-12">
                
                {/* Image and Author Container */}
                <div className="md:w-[240px] lg:w-[312px] flex flex-col justify-between">
                  {/* FIX: Set a max-height and used object-contain to prevent the phone image from 
                      stretching the card height on iPad Pro screens. */}
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={bgImage}
                      alt=""
                      loading="lazy"
                      className="w-full max-h-[220px] lg:max-h-[320px] object-contain"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0 rounded-lg bg-[#5E239D] flex items-center justify-center">
                      <span className="text-white font-nohemi text-xl lg:text-2xl font-bold">
                        {firstLetter}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-nohemi font-medium text-lg lg:text-xl text-[#270F42] truncate">
                        {t.author}
                      </p>
                      <p className="text-[#341356] text-sm lg:text-base truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text Container */}
                <div className="flex-1 bg-[#5E239D] rounded-3xl p-6 lg:p-10 text-white flex flex-col justify-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FFEFD6] text-[20px] lg:text-[22px] leading-none">★</span>
                    ))}
                  </div>
                  <p className="font-nohemi text-[18px] lg:text-[22px] leading-[28px] lg:leading-[32px] text-[#FAFAFA]">
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
                <div className="bg-[#5E239D] rounded-3xl p-6 mb-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FFEFD6] text-base">★</span>
                      ))}
                    </div>
                    <p className="font-nohemi text-[#FAFAFA] text-lg leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <div className="w-10 h-10 rounded-lg bg-[#5E239D] flex items-center justify-center">
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

        {/* 3. Navigation Controls */}
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
            className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition active:scale-95 shadow-sm"
          >
            <ArrowLeft className="text-[#5E239D]" strokeWidth={3} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 md:w-[60px] md:h-[60px] bg-[#CDBBE1] rounded-lg flex items-center justify-center hover:scale-105 transition active:scale-95 shadow-sm"
          >
            <ArrowRight className="text-[#5E239D]" strokeWidth={3} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}