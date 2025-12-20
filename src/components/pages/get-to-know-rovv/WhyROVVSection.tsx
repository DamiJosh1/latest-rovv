// src/components/sections/WhyROVVSection.tsx
import missionImg from '../../../assets/images/why-1.png'
import valuesImg from '../../../assets/images/why-2.png'

export default function WhyROVVSection() {
  return (
    <section className="py-16 px-4 mt-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-12">
          <span className="inline-flex font-sans items-center gap-2 bg-dark text-bg px-6 py-2 rounded-full text-sm font-medium">
            Why ROVV?
          </span>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <div className="w-full">
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-auto object-cover transition-all duration-900 ease-in-out hover:scale-110"
            />
          </div>
          <div className="space-y-4 ml-0 md:ml-0  md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-[35px] font-nohemi font-bold text-dark">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg md:text-[20px] text-medium font-bold font-sans leading-relaxed">
              We are redefining movement in Africa, <span className='lg:block' />
              creating smarter, safer, and fairer <span className='lg:block' /> 
              mobility powered by trust, <span className='lg:block' />
              transparency, and technology.
            </p>
            
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 order-2 md:order-1 md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-[35px] font-nohemi font-bold text-dark">
              Values
            </h3>
            <p className="text-base sm:text-lg md:text-[20px] text-medium font-bold font-sans leading-relaxed">
              Fair earnings, real choice, full  <span className='lg:block' />
              transparency. At ROVV, we put people <span className='lg:block' />
              and community first, delivering <span className='lg:block' />
              movement that is safe, honest, and <span className='lg:block' /> 
               empowering for everyone.
            </p>
            
          </div>
          <div className="order-1 md:order-2 w-full">
            <img
              src={valuesImg}
              alt="Values"
              className="w-full h-auto object-cover transition-all duration-700 ease-in-out hover:scale-110"
              
            />
          </div>
        </div>
      </div>
    </section>
  )
}