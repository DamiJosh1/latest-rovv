// src/components/Cars.tsx
'use client'

import videoSrc from '../../../assets/images/fu.mp4'

export default function CarsSection() {
  return (
  <section className="relative w-full aspect-[16/9] overflow-hidden bg-black">
  <video
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    controls={false}
    disablePictureInPicture
    controlsList="nodownload nofullscreen noremoteplayback"
  >
    <source src={videoSrc} type="video/mp4" />
  </video>
</section>


  )
}



