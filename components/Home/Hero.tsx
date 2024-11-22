"use client";
import React, { useRef, useEffect } from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="w-full relative">
      <Header />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".custom-prev", // Link to custom previous button
          nextEl: ".custom-next", // Link to custom next button
        }}
        loop={true}
        className="sm:h-[35rem] h-[35rem] w-full "
      >
        <SwiperSlide
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide1.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center md:justify-between h-full text-center text-white  md:mt-[80px] mt-[0px] md:ml-[120px] ml-0">
            <div className="flex flex-col md:w-[60%] w-[90%] items-start md:items-start md:ml-[200px] justify-start mt-[100px]">
              <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
                time
              </h1>
              <button className="btn md:p-3 text-white rounded-[100px] mt-3 sm:text-2xl text-xl transition-all text-left">
                <Link href={"/contact"}>Substainable material Resource</Link>
              </button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left md:w-[55%] w-[90%] leading-8 text-md">
                {" "}
                We collaborate with clients to create buildings and environments
                in dialogue with culture and place. And become one of the
                country's leading architectural practices
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[190px] h-[50px] text-white rounded-full mt-[50px]">
                Our Services <GoArrowUpRight/>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide2.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center md:justify-between h-full text-center text-white  md:mt-[80px] mt-[0px] md:ml-[120px] ml-0">
            <div className="flex flex-col md:w-[60%] w-[90%] items-start md:items-start md:ml-[200px] justify-start mt-[100px]">
              <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
                Shape
              </h1>
              <button className="btn md:p-3 text-white rounded-[100px] mt-3 sm:text-2xl text-xl transition-all text-left">
                <Link href={"/contact"}>Architecture language signature</Link>
              </button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left md:w-[55%] w-[90%] leading-8 text-md">
                {" "}
                We collaborate with clients to create buildings and environments
                in dialogue with culture and place. And become one of the
                country's leading architectural practices
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[190px] h-[50px] text-white rounded-full mt-[50px]">
                Our Services <GoArrowUpRight/>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide3.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-center md:justify-between h-full text-center text-white  md:mt-[80px] mt-[0px] md:ml-[120px] ml-0">
            <div className="flex flex-col md:w-[60%] w-[90%] items-start md:items-start md:ml-[200px] justify-start mt-[100px]">
              <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
                archin
              </h1>
              <button className="btn md:p-3 text-white rounded-[100px] mt-3 sm:text-2xl text-xl transition-all text-left">
                <Link href={"/contact"}>architecture design studio</Link>
              </button>
            </div>
            <div className="flex flex-col md:w-[40%] w-[90%]">
              <p className="text-left md:w-[55%] w-[90%] leading-8 text-md">
                {" "}
                We collaborate with clients to create buildings and environments
                in dialogue with culture and place. And become one of the
                country's leading architectural practices
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[190px] h-[50px] text-white rounded-full mt-[50px] flex flex-row text-center">
                Our Services <GoArrowUpRight/>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute right-[40px] sm:bottom-[40px] bottom-[100px] flex flex-row items-center space-x-2  z-50">
        <p className="sm:text-6xl text-3xl text-white custom-prev cursor-pointer">
          <GoChevronLeft />
        </p>
        <p className="sm:text-6xl text-3xl text-white custom-next cursor-pointer">
          <GoChevronRight />
        </p>
      </div>
    </div>
  );
};

export default Hero;
