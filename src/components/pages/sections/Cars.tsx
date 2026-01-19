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
        // ensures no context menu appears if they right-click
        onContextMenu={(e) => e.preventDefault()}
        preload="auto"
        // standard attributes
        controls={false}
        disablePictureInPicture
        // removes any remaining browser UI shadows
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
