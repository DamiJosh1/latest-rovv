// src/components/sections/TestimonialsSection.tsx
'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import LeftCurve from '../../../assets/masks/left-curve.png'
import RightCurve from "../../../assets/masks/right-curve.png"

import user1 from '../../../assets/testimonials/tolu.jpg'
import user2 from '../../../assets/testimonials/samuel.jpg'
import user3 from '../../../assets/testimonials/chioma.jpg'
import user4 from '../../../assets/testimonials/david.jpg'

interface Testimonial {
  text: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
    { text: "ROVV has honestly made my daily trips so much easier. I love that i can offer what i can afford", author:"Tolu Abraham", role: "Rider, Lagos", avatar: user1},
    { text: "ROVV has honestly made my daily trips so much easier. I love that i can offer what i can afford", author:"Samuel C.", role: "Driver, Abuja", avatar: user2},
    { text: "ROVV has honestly made my daily trips so much easier. I love that i can offer what i can afford", author:"Chioma Okeke", role: "Buisness Owner, Port Harcourt", avatar: user3},
    { text: "ROVV has honestly made my daily trips so much easier. I love that i can offer what i can afford", author:"David Okafor", role: "Traveler, Enugu - Lagos", avatar: user4},
 ]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="py-24 bg-bg text-dark ">
      {/* Title */}
      <div className="text-center mb-16 px-6">
        <h2 className="md:text-5xl lg:text-7xl text-2xl font-nohemi font-bold leading-tight">
          What Our Users Are Saying
        </h2>
        <p className="mt-4 text-medium font-bold font-sans text-center mx-auto">
          Hear from riders and drivers who’ve made ROVV part of their everyday journeys
        </p>
      </div>

      {/* FULL-SCREEN CONTAINER FOR FIXED MASKS */}
      <div className="relative">

        {/* FIXED LEFT MASK — never moves, full bleed */}
        <img
          src={LeftCurve}
          alt=""
          className="pointer-events-none absolute left-45 top-[175px] -translate-y-1/2 h-[350px] w-auto z-40 lg:block md:hidden hidden"
           // tweak -20vw to taste
        />

        {/* FIXED RIGHT MASK — never moves, full bleed */}
        <img
          src={RightCurve}
          alt=""
          className="pointer-events-none absolute right-45 top-[175px] -translate-y-1/2 h-[350px] w-auto z-40 hidden lg:block"
          // tweak -20vw to taste
        />

        {/* CENTERED CAROUSEL — slides under the fixed masks */}
        <div className="relative max-w-7xl mx-auto ">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none lg:w-[60%] md:w-[80%] w-full px-2">
                  <div className="bg-purple rounded-3xl overflow-hidden shadow-2x lg:h-[350px] md:h-[270px] h-[270px]">
                    <div className="p-10 md:p-14 text-white flex flex-col min-h-[560px]">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-accent text-3xl drop-shadow">★</span>
                        ))}
                      </div>
                      <p className="text-lg md:text-xl leading-relaxed italic flex-1">“{t.text}”</p>
                      <div className="flex items-center gap-5 mt-10">
                        <img src={t.avatar} alt={t.author} className="w-16 h-16 rounded-full object-cover border-4 border-white/40 shadow-lg" />
                        <div>
                          <p className="font-bold text-xl">{t.author}</p>
                          <p className="text-sm opacity-90">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button aria-label='Previous testimonial'
                onClick={scrollPrev} 
                className="w-12 h-12 bg-light shadow-lg rounded-[10px] hover:scale-110 transition"
                >
              <ArrowLeft className="w-7 h-7 ml-2 text-dark" />
            </button>
            <button aria-label='Next testimonial'
                onClick={scrollNext} className="w-11.5 h-12  bg-light rounded-[10px] shadow-lg hover:scale-110 transition"
                >
              <ArrowRight className="w-11 h-7 text-dark mr-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}