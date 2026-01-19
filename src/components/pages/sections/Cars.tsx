// src/components/Cars.tsx
'use client'

import videoSrc from '../../../assets/images/fu.mp4'

export default function CarsSection() {
  return (
    <section className="relative mt-0 md:mt-10 lg:mt-0 w-full h-[260px] md:h-[420px] lg:h-[1000px] overflow-hidden bg-black">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/10" />

    </section>
  )
}
