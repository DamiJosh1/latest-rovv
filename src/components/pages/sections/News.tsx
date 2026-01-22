'use client'

import { motion } from 'framer-motion'
import conferenceImg from '../../../assets/images/news.png'

export default function NewsSection() {
  const externalLink = "https://qatar.websummit.com/appearances/qat26/f7b94279-e7c4-4043-9d9a-90923fa64f25/rovv/";

  return (
    <section className="px-4 -mt-40 md:-mt-90 md:px-8 lg:-mt-10 lg:px-[79px] py-10 md:py-10 lg:py-20 bg-bg overflow-hidden">
      
      {/* ANIMATION COMMENT: News Tag (Eyebrow)
          Animates independently with a subtle fade and rise.
          'viewport={{ once: false }}' ensures the scroll-up/down trigger is active.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center mb-5 lg:mb-0"
      >
        <span className="px-5 py-2 text-sm font-medium font-nohemi bg-back text-dark rounded-full">
          News
        </span>
      </motion.div>

      {/* ANIMATION COMMENT: Main News Card
          Uses a slightly longer duration and a small delay (0.2s) to create 
          a staggered entry effect relative to the tag above.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="py-0 lg:max-w-[1432px] lg:h-[640px] mx-auto lg:py-5 lg:px-20"
      >
        <div className="bg-white rounded-3xl border border-light md:h-70 lg:w-7xl lg:h-[508px] shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Image side - Lazy loaded for performance */}
          <div className="md:w-1/2 h-[260px] md:h-[300px] lg:w-[714px] lg:h-[600px]">
            <img
              src={conferenceImg}
              alt="ROVV at Web Summit"
              loading="lazy" // Native lazy loading optimization
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content side */}
          <div className="md:w-[530px] md:scale-85 p-8 md:p-10 flex lg:w-[486px] lg:scale-none lg:h-[327px] lg:mt-0 flex-col justify-center">
            <span className="text-sm font-bold font-sans tracking-widest md:text-[16px] lg:text-[18px] text-medium uppercase mb-4">
              International Tech Conference
            </span>

            <h3 className="text-3xl md:text-3xl font-nohemi font-medium lg:text-[24px] lg:leading-8.5 text-gray-900 mb-4">
              ROVV at Web Summit 2026
            </h3>

            <p className="text-medium font-normal font-sans leading-relaxed md:text-[15px] lg:text-[16px] lg:w-[486px] lg:leading-5 mb-8">
              Taking African mobility innovation to the global stage in 2026.
              <br className="hidden lg:block" />
              We’ll be attending the conference in Qatar in February, engaging with global leaders and innovators.
            </p>

            {/* ANIMATION COMMENT: CTA Button
                Has its own entrance animation nested inside the card logic
                to ensure the call-to-action is the last thing to 'land'.
            */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white text-sm font-medium font-nohemi rounded-xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-md"
              >
                Learn More
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}