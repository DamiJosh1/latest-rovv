'use client'

import { motion } from 'framer-motion'
import missionImg from '../../../assets/images/i.png'
import valuesImg from '../../../assets/images/why-2.png'

export default function WhyROVVSection() {
  return (
    <section className="py-10 px-4 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER: Individual entrance for Badge and Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex font-nohemi items-center gap-2 bg-back text-dark px-6 py-2 rounded-full text-sm font-medium">
              Why ROVV?
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='font-bold font-nohemi mb-2 text-center xl:text-[40px] md:text-[28px] text-[20px]'
          >
            A Smarter Way to Move Across Cities
          </motion.h1>
        </div>

        {/* MISSION BLOCK: Staggered side-by-side entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <img
              src={missionImg}
              alt="Our Mission"
              loading="lazy"
              className="w-full h-auto object-cover transition-all duration-700 ease-in-out hover:scale-105 rounded-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-[35px] font-nohemi font-bold text-dark">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg md:text-[18px] text-medium font-medium font-sans leading-relaxed">
              We are redefining movement in Africa, <span className='lg:block' />
              creating smarter, safer, and fairer <span className='lg:block' /> 
              mobility powered by trust, <span className='lg:block' />
              transparency, and technology.
            </p>
          </motion.div>
        </div>

        {/* VALUES BLOCK: Mirrored staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 order-2 md:order-1 md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-[35px] font-nohemi font-bold text-dark">
              Values
            </h3>
            <p className="text-base sm:text-lg md:text-[18px] text-medium font-medium font-sans leading-relaxed">
              Fair earnings, real choice, full <span className='lg:block' />
              transparency. At ROVV, we put people <span className='lg:block' />
              and community first, delivering <span className='lg:block' />
              movement that is safe, honest, and <span className='lg:block' /> 
              empowering for everyone.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 w-full"
          >
            <img
              src={valuesImg}
              alt="Our Values"
              loading="lazy"
              className="w-full h-auto object-cover transition-all duration-700 ease-in-out hover:scale-105 rounded-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}