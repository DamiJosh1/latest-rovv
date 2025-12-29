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

        {/* Main Card Container */}
        <div className="relative max-w-[343px] md:max-w-[572px] lg:max-w-[1049px] mx-auto">
          {/* Purple Card */}
          <div className="
            relative bg-purple rounded-xl shadow-2xl overflow-hidden
            
            /* Mobile: 343x398 */
            h-[398px] p-4
            
            /* Tablet: 572x683 */
            md:h-[683px] md:p-6
            
            /* Desktop: 1049x454 */
            lg:h-[454px] lg:p-20
            lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-12
          ">
            
            {/* Content Container */}
            <div className="
              relative z-10
              flex flex-col gap-3 md:gap-6 lg:gap-6
              items-center lg:items-start
              pt-4 md:pt-6 lg:pt-0
              max-w-[311px] md:max-w-[524px] lg:max-w-[456px]
              mx-auto lg:mx-0
            ">
              {/* Text Container */}
              <div className="flex flex-col gap-2 md:gap-4 lg:gap-3 items-center lg:items-start">
                {/* Heading */}
                <h4 className="
                  font-nohemi font-medium lg:font-medium text-white
                  text-center lg:text-left
                  
                  /* Mobile: 24px/28px */
                  text-2xl leading-7
                  
                  /* Tablet: 45px/54px */
                  md:text-[45px] md:leading-[54px] md:font-bold
                  
                  /* Desktop: 24px/30px */
                  lg:text-2xl lg:leading-[30px]
                ">
                  Experience Smarter Mobility on the Go
                </h4>

                {/* Description */}
                <p className="
                  font-sans text-light
                  text-center lg:text-left
                  
                  /* Mobile: 16px/24px, bold */
                  text-base leading-6 font-bold
                  
                  /* Tablet: 26px/36px, bold */
                  md:text-[26px] md:leading-9 md:font-bold
                  
                  /* Desktop: 18px/24px, regular */
                  lg:text-lg lg:leading-6 lg:font-normal
                ">
                  ROVV gives you control, comfort, and choice, all from one app. Book rides, bid your price, track drivers in real time, and enjoy safe, fair, and flexible mobility wherever you are.
                </p>
              </div>

              {/* Button */}
              <button className="
                bg-accent hover:bg-orange-600 text-dark
                font-sans font-bold rounded-lg
                shadow-xl hover:scale-105 transition-all duration-300
                
                /* Mobile: 184x39, 16px text, 10px padding */
                w-[184px] h-[39px] text-base py-2.5 px-6
                
                /* Tablet & Desktop: 217x52, 20px text, 14px padding */
                md:w-[217px] md:h-[52px] md:text-xl md:py-3.5 md:px-6
              ">
                Learn more
              </button>
            </div>

            {/* Light Image - Desktop Only (right side) */}
            <div className="hidden lg:block relative  lg:-mr-[85px] lg:-mb-[20px] shrink-0">
              <img
                src={lightPng}
                alt=""
                className="w-full h-[500px] object-contain pointer-events-none "
              />
            </div>
          </div>

          {/* Light Image - Tablet (bottom, rotated 90deg) */}
          <div className="hidden md:block lg:hidden absolute left-0 right-0 -bottom-[177px] h-[583px] pointer-events-none">
            <img
              src={light}
              alt=""
              className="w-full h-full object-contain "
            />
          </div>

          {/* Light Image - Mobile (bottom, rotated 90deg) */}
          <div className="block md:hidden absolute left-0 right-0 -bottom-[119px] h-[357px] pointer-events-none">
            <img
              src={lightMode}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Spacer for overlapping light images */}
        <div className="h-[200px] md:h-[300px] lg:h-0" />
      </div>
    </section>
  )
}
