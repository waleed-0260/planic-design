"use client";
import React, { useRef, useEffect } from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { Autoplay} from "swiper/modules";

const Hero = () => {
  return (

    <div className="w-full">
      <Header />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
        loop={true}
        className="sm:h-[44rem] h-[20rem] w-full"
      >
        <SwiperSlide
          className="relative w-full bg-cover sm:bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide1.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center justify-around h-full text-center text-white ">
            <div className="flex flex-col md:w-[50%]">

                <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold heading leading-tight w-[80%]" >Time</h1>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Sustainable material resources</Link></button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Molestias minima possimus tenetur ducimus!</p>
              <button className="bg-transparent sm:block hidden border-white border-2 w-[150px] h-[50px] text-white rounded-full">
                Our Services
              </button>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover sm:bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide2.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center justify-around h-full text-center text-white ">
            <div className="flex flex-col md:w-[50%]">

                <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold heading leading-tight w-[80%]" >Time</h1>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Sustainable material resources</Link></button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Molestias minima possimus tenetur ducimus!</p>
              <button className="bg-transparent sm:block hidden border-white border-2 w-[150px] h-[50px] text-white rounded-full">
                Our Services
              </button>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover sm:bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide3.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center justify-around h-full text-center text-white ">
            <div className="flex flex-col md:w-[50%]">

                <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold heading leading-tight w-[80%]" >Time</h1>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Sustainable material resources</Link></button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Molestias minima possimus tenetur ducimus!</p>
              <button className="bg-transparent sm:block hidden border-white border-2 w-[150px] h-[50px] text-white rounded-full">
                Our Services
              </button>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;