import React from 'react'
import Header from '../Home/Header'

const Hero = ({img, tagline}:any) => {
  return (
    <div className="w-full flex flex-col relative">
    <Header />
    <div className="w-full flex flex-col items-center justify-center bg-cover h-[20rem] sm:h-[25rem] md:h-[45rem] bg-top overflow-hidden relative">
      <div
        className=" relative w-full h-full flex flex-col items-center justify-center bg-cover md:bg-bottom bg-center hero-animation"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      </div>
      {/* Text Overlay */}
      {/* <div className="absolute bottom-0 w-full text-center bg-gray-700 bg-opacity-30">
      <div className="group overflow-hidden w-full">
  <h1
    className="text-7xl font-bold name transition-all duration-300 group-hover:text-white my-[50px] whitespace-nowrap"
    style={{
      WebkitTextStroke: "1px white",
      color: "transparent",
      WebkitTextFillColor: "transparent",
    }}
  >
    {tagline}
  </h1>
</div>
      </div> */}
    </div>
  </div>
  )
}

export default Hero