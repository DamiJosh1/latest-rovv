// src/components/sections/SafetySection.tsx  (renamed it to match the new content)
import girlImg from '../../../assets/images/safety-full.png' // ← put your girl image here

export default function SafetySection() {
  return (
    <section className="py-10 px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 bg-dark text-bg font-sans font-bold rounded-full mb-4">
            Safety
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-nohemi text-dark">
            Your safety comes first
          </h2>
        </div>

        {/* Main Card */}
        <div className="  overflow-hidden grid md:grid-cols-2 items-center">
          
          {/* Left Side – Image of the girl */}
          <div className="relative  md:h-full">
            <div className="absolute inset-0 "></div>
            <img 
              src={girlImg} 
              alt="Happy and safe passenger" 
              className=" w-[80%] translate-x-10 "
            />
            
          </div>

          {/* Right Side – New powerful copy */}
          <div className="p-1 md:p-16 lg:p-20 space-y-4">
            <h3 className="text-[18px] md:text-4xl lg:text-2xl text-center md:text-start font-bold font-nohemi text-dark">
              Safety you can feel in every ride
            </h3>
            
            <div className=" text-[12px] text-medium md:text-start lg:text-left font-bold font-sans text-center leading-relaxed">
              <p>
                We're committed to protecting both 
                passangers and drivers on every trip, with 
                safety features and standards that ensure 
                everyone moves confidently and securely
              </p>
              
              
            </div>

            <button className="inline-flex translate-x-22 px-15 py-3 md:px-8 md:py-2 md:translate-x-0  bg-primary text-bg font-medium rounded-sm transition shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}