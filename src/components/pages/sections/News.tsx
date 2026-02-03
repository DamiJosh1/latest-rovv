'use client'

import { motion } from 'framer-motion'
import conferenceImg from '../../../assets/images/news.png'

export default function NewsSection() {
  const externalLink = "https://qatar.websummit.com/appearances/qat26/f7b94279-e7c4-4043-9d9a-90923fa64f25/rovv/";

  return (
    <section className="px-4 md:px-8 lg:px-[79px] py-10 bg-bg overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="flex justify-center mb-6"
      >
        <span className="px-5 py-2 text-sm font-medium font-nohemi bg-back text-dark rounded-full">
          News
        </span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full max-w-[1100px] mx-auto"
      >
        {/* FIX: Added h-auto md:h-[400px] lg:h-[450px] to lock the height and prevent it from being "long" */}
        <div className="bg-white rounded-3xl border border-light shadow-sm overflow-hidden flex flex-col md:flex-row md:h-[400px] lg:h-[480px]">
          
          {/* Image side: Uses h-full of the parent to stay compact */}
          <div className="md:w-1/2 h-[240px] md:h-full">
            <img
              src={conferenceImg}
              alt="ROVV at Web Summit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content side: Center content within the fixed height */}
          <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-[12px] font-bold tracking-widest text-medium uppercase mb-2">
              International Tech Conference
            </span>

            <h3 className="text-xl md:text-2xl lg:text-[32px] font-nohemi font-medium leading-tight text-gray-900 mb-3">
              ROVV at Web Summit 2026
            </h3>

            <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg mb-6 leading-snug lg:leading-relaxed">
              Taking African mobility innovation to the global stage. We’ll be in Qatar this February, engaging with global leaders and innovators.
            </p>

            <a 
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-6 py-2.5 bg-primary text-white text-sm font-medium font-nohemi rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md flex items-center"
            >
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}