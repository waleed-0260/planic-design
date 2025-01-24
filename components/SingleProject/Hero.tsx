import React from 'react'
import Header from '../Home/Header'

const Hero = ({img, tagline}:any) => {
  return (
    <div className="w-full flex flex-col">
    <Header />
    <div className="w-full flex flex-col items-center justify-center bg-cover h-[36rem] overflow-hidden relative">
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-cover hero-animation bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      {/* Text Overlay */}
      <div className="absolute bottom-0 w-full text-center bg-gray-700 bg-opacity-30">
      <div className="group overflow-hidden w-full">
  <h1
    className="text-7xl font-bold name transition-all duration-300 group-hover:text-black my-[50px] whitespace-nowrap"
    style={{
      WebkitTextStroke: "1px black",
      color: "transparent",
      WebkitTextFillColor: "transparent",
    }}
  >
    {tagline}
  </h1>
</div>
      </div>
    </div>
  </div>
  )
}

export default Hero