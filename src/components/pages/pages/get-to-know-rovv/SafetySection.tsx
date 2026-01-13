// src/components/sections/SafetySection.tsx  (renamed it to match the new content)
import girlImg from '../../../assets/images/safety-full.png' // ← put your girl image here

export default function SafetySection() {
  return (
    <section className="py-10 px-6 lg:px-8 md:py-0 bg-bg">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-2">
          <span className="inline-block px-4 py-1 bg-[#FFF2DE] text-dark font-sans font-bold rounded-full mb-4 md:mb-1 lg:mb-4">
            Safety
          </span>
          <h2 className="text-[20px] md:text-2xl lg:text-[40px] font-bold font-nohemi text-dark">
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
              className=" w-[100%] md:w-[80%] md:translate-x-0 lg:translate-x-20 "
            />
            
          </div>

          {/* Right Side – New powerful copy */}
          <div className="p-2 md:p-0 lg:p-10 space-y-2 md:-ml-10">
            <h3 className="text-[18px] md:text-[20px] lg:text-2xl text-start md:text-left font-medium font-nohemi text-dark">
              Safety you can feel in every ride
            </h3>
            
            <div className=" text-[18px] md:w-[424px] md:text-[18px] lg:text-[16px] text-medium md:text-left lg:text-left font-medium font-sans text-start ">
              <p>
                We're committed to protecting both 
                passangers and drivers on every trip, with 
                safety features and standards that ensure 
                everyone moves confidently and securely
              </p>
              
              
            </div>

            <button className="inline-flex  px-15 py-3 md:px-7 md:py-3.5 md:translate-x-0  bg-primary text-bg font-medium rounded-[8px] transition shadow-lg hover:shadow-xl">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}