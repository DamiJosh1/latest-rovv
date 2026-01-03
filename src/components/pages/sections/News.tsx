'use client'

import conferenceImg from '../../../assets/images/news.png' // replace with your image path

export default function NewsSection() {
  return (
    <section className="px-4 -mt-40 md:-mt-90 md:px-8 lg:-mt-10 lg:px-[79px] py-10 md:py-10 lg:py-20 bg-bg">
      {/* Tag */}
      <div className="flex justify-center mb-5 lg:mb-0">
        <span className="px-5 py-2 text-sm font-medium font-nohemi bg-back text-dark rounded-full">
          News
        </span>
      </div>

      {/* Card */}
      <div className="py-0 lg:max-w-[1432px] lg:h-[640px] mx-auto lg:py-5 lg:px-20">
        <div className="bg-white rounded-3xl border border-light md:h-70 lg:w-7xl lg:h-[508px] shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="md:w-1/2 h-[260px] md:h-[300px] lg:w-[714px] lg:h-[600px]">
            <img
              src={conferenceImg}
              alt="ROVV at Web Summit"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 md:p-10 flex  lg:w-[486px] lg:h-[207px] lg:mt-10 flex-col justify-center">
            <span className="text-sm font-bold font-sans tracking-widest md:text-[16px] lg:text-[18px] text-medium  uppercase mb-4">
              International Tech Conference
            </span>

            <h3 className="text-3xl md:text-3xl font-nohemi font-medium lg:text-[24px] lg:leading-8.5 text-gray-900 mb-4">
              ROVV at Web Summit 2026
            </h3>

            <p className="text-medium font-normal font-sans leading-relaxed md:text-[15px] lg:text-[16px] lg:w-[486px] lg:leading-5">
  Taking African mobility innovation to the global stage in 2026.
  <div className=" lg:block lg:mt-4"></div>
  We’ll be attending the conference in Qatar in February, engaging with global leaders and innovators.
</p>
          </div>

        </div>
      </div>
    </section>
  )
}