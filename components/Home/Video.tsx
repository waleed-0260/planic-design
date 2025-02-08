"use client"
import React from 'react'

const Video = () => {
  return (
    <div className="relative h-screen">
        {/* Video Background */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src="/images/planic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>  )
}

export default Video