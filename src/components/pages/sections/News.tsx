'use client'

import conferenceImg from '../../../assets/images/news.png' // replace with your image path

export default function NewsSection() {
  return (
    <section className="py-24 bg-bg">
      {/* Tag */}
      <div className="flex justify-center mb-10">
        <span className="px-5 py-2 text-sm font-medium bg-black text-white rounded-full">
          News
        </span>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl md:h-70 lg:h-auto shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="md:w-1/2 h-[260px] md:h-[300px]">
            <img
              src={conferenceImg}
              alt="ROVV at Web Summit"
              className="w-full h-full lg:h-100 object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 md:scale-85 md:p-12 flex flex-col justify-center">
            <span className="text-sm font-bold font-sans tracking-widest md:text-[12px] text-medium  uppercase mb-4">
              International Tech Conference
            </span>

            <h3 className="text-3xl md:text-3xl font-nohemi font-bold text-gray-900 mb-4">
              ROVV at Web Summit 2026
            </h3>

            <p className="text-medium font-bold font-sans  leading-relaxed md:text-[15px]">
              Taking African mobility innovation to the global stage in 2026.
              <br /><br />
              We’ll be attending the conference in Qatar in February, engaging
              with global leaders and innovators.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}