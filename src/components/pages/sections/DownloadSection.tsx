
// src/components/sections/DownloadSection.tsx
import lightPng from '../../../assets/images/light.png'
import lightMode from '../../../assets/images/light-1.png'
import light from '../../../assets/images/light-2.png'

export default function DownloadSection() {
  return (
    <section className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto text-center">

        <h3 className="text-3xl md:text-6xl font-nohemi font-bold text-dark mb-4">
          Download our app
        </h3>
        <p className="text-[10px] text-medium font-bold font-sans mb-16">
          Available for iOS and Android devices.
        </p>

        {/* Main Card + Light PNG */}
        <div className="relative max-w-5xl mx-auto">

          {/* THE ONE AND ONLY LIGHT PNG (FIXED RESPONSIVENESS) */}
          <img
            src={lightPng}
            alt=""
            className="
              pointer-events-none absolute z-20 rounded-2xl
              w-full lg:w-[25.7%]
              left-full lg:left-[869px]
              md:w-[30%] hidden lg:block


              
            "
          />
          <img
            src={light}
            alt=""
            className="
              pointer-events-none absolute z-20 rounded-2xl
             md:mt-106 md:left-19 md:block
              md:w-[80%] lg:hidden hidden


              
            "
          />
          <img
            src={lightMode}
            alt=""
            className="
              pointer-events-none absolute mt-[265px] z-20 rounded-2xl
             sm:w-full 
              
              md:hidden lg:hidden


              
            "
          />
          

          {/* Purple Card */}
          <div className="relative bg-purple h-[400px] lg:w-[121%] lg:h-[350px] lg:right-27  lg:ml-0
                          md:w-[80%] md:h-[650px] md:ml-19
                          rounded-2xl p-12 md:p-20 text-bg
                          shadow-2xl overflow-hidden">
           
            <div className="relative z-10 lg:ml-1 text-center md:text-center lg:text-left">
              <h4 className="text-xl md:text-3xl font-nohemi font-bold  mb-4 lg:text-[20px]">
                Experience Smarter<br />Mobility on the Go
              </h4>
              <p className="text-light text-[10px]  font-bold font-sans mb-4 lg:mb-10">
                ROVV gives you control, comfort, and choice, <br /> all from one app.
                Book rides, bid your price, <br /> track drivers in real time, and enjoy
                safe, fair, <br /> and flexible mobility wherever you are.
              </p>

              {/* Only ONE button */}
              <button className="bg-accent hover:bg-orange-600 text-bg
                                 px-6 py-2 rounded-[8px] font-sans font-bold
                                 shadow-xl hover:scale-105 transition-all duration-300">
                Download the app
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}