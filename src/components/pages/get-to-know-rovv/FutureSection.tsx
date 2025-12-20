import bgImage from '../../../assets/images/journey-5.png'
import girlImg from '../../../assets/images/why-1.png'// src/components/Hero.tsx


export default function Hero() {
  return (
    <section className="relative flex items-center mt-19 lg:mt:16">     
      {/* Background image */}
      <div
        className="absolute inset-0 z-0  lg:h-[700px] bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Pastel gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none"
       
      />

       {/* Top-center About Us button */}
     <div className="absolute top-5 sm:top-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className="inline-flex items-center text-bg gap-2 px-5 sm:px-6 py-2 bg-dark sm:text-sm font-semibold rounded-full shadow-sm hover:opacity-90 transition"
        >
          About us
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full lg:max-w-[1400px] mx-auto lg:mt-[90px] px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">
        {/* LEFT: Text */}
        <div className="pt-20 sm:pt-16 pb-12 lg:pt-0 lg:pb-0 text-center md:text-left lg:text-left">
          <h1 className="font-nohemi font-bold text-[22px] md:text-[40px] lg:text-[40px] leading-tight md:mt-5 md:mx-0 text-dark">
            Building the Future of
          
            <span className='md:block' > Seamless Transportation</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-medium font-sans font-bold  md:text-lg md:mr-50 leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0">
            ROVV is a modern mobility platform <br /> built to make movement simple, safe <br />
            and accessible for everyone, from city <br /> rides and intercity travel to
            fast <br /> delivery and reliable vehicle services.
          </p>

          
          <button className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-medium hover:bg-accent transition">
              Download the app
            </button>
        </div>

        {/* RIGHT: Blob Image */}
        <div className="flex justify-center lg:justify-end items-center mt-6 sm:mt-0">
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 "></div>
            <img 
              src={girlImg} 
              alt="Happy and safe passenger" 
              className=" "
            />
            
          </div>
        </div>
      </div>
    </section>
  )
}