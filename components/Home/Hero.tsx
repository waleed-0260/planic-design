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
import { Swiper as SwiperClass } from 'swiper';

const Hero = () => {
  const swiperRef = useRef<any>(null);

  // Function to pause the swiper autoplay when the user focuses on any input
  const handleFocus = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.pause(); // Pause autoplay
    }
  };

  // Function to resume the swiper autoplay when the user blurs the input
  const handleBlur = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start(); // Resume autoplay
    }
  };

  return (
    <div className="w-full relative">
      <Header />
      <Swiper
      ref={swiperRef}
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
      className="lg:h-[45rem] h-[57rem] w-full"
    >
      <SwiperSlide
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/slide1.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10 flex lg:flex-row flex-col items-start md:justify-around h-full text-center text-white lg:mt-[120px] mt-[160px] ml-5 md:ml-0 md:space-y-0 space-y-6">
          <div className="flex flex-col md:w-[40%] w-[90%] items-start md:items-start md:ml-[80px] justify-start space-y-2 md:mt-[100px]">
            <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
              Inspire
            </h1>
            <p className="text-left md:w-[65%] w-[90%] leading-8 text-md">
              Transforming visions into breathtaking realities with expert architecture and interior design.
            </p>
            <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[230px] h-[50px] text-white rounded-full mt-[50px] text-sm">
              Discover Your Dream Space <GoArrowUpRight />
            </button>
          </div>
          <div className="md:w-[30%] w-[90%] flex flex-col bg-white bg-opacity-30 rounded-md">
            <h1 className="md:text-4xl text-xl font-bold">Ready to elevate your space</h1>
            <p className="text-sm">Get a custom interior design plan tailored to your vision.</p>
            <form className="px-3 py-4 rounded-md flex flex-col space-y-5">
              <input 
                className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input 
                className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input 
                className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input 
                className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
                type="text"
                name="project"
                id="project"
                placeholder="Project Details"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button className="w-full py-3 bg-transparent border-2 hover:bg-white transition duration-300 rounded-md text-center text-white hover:text-black">
                Get Our Free Consultation
              </button>
            </form>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide2.png')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-start md:justify-around h-full text-center text-white  lg:mt-[120px] mt-[160px]  ml-5 md:ml-0 md:space-y-0 space-y-6">
            <div className="flex flex-col md:w-[40%] w-[90%]  items-start md:items-start md:ml-[80px] justify-start space-y-2 md:mt-[100px]">
              <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
                Innvoate
              </h1>
              <p className="text-left md:w-[65%] w-[90%] leading-8 text-md">
                {" "}
                Blending creativity and functionality to craft spaces that define excellence.
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[230px] h-[50px] text-white rounded-full mt-[50px] text-sm">
                Explore our creations <GoArrowUpRight/>
              </button>
            </div>
            <div className="md:w-[30%] w-[90%] flex flex-col bg-white bg-opacity-30 rounded-md">
              <h1 className="md:text-4xl text-xl font-bold">Ready to elevate your space</h1>
              <p className="text-sm">Get a custom interior design plan tailored to your vision.</p>
              <form className="px-3 py-4 rounded-md  flex flex-col space-y-5">
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="text" name="" id="" placeholder="Name" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="email" name="" id="" placeholder="Email" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="phone" name="" id="" placeholder="Phone Number" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="text" name="" id="" placeholder="Project Details" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <button className="w-full py-3 bg-transparent border-2 hover:bg-white transition duration-300 rounded-md text-center text-white hover:text-black">Get Our Free Consultation</button>
              </form>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/slide3.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 flex lg:flex-row flex-col items-start md:justify-around h-full text-center text-white  lg:mt-[120px] mt-[160px]  ml-5 md:ml-0 md:space-y-0 space-y-6">
            <div className="flex flex-col md:w-[40%] w-[90%]  items-start md:items-start md:ml-[80px] justify-start space-y-2 md:mt-[100px]">
              <h1 className="text-5xl md:text-9xl drop-shadow-2xl shadow-[#000000] font-bold heading leading-tight ">
                Elevate
              </h1>
              <p className="text-left md:w-[65%] w-[90%] leading-8 text-md">
                {" "}
                Redefining environments with timeless designs tailored to your lifestyle.
              </p>
              <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-lg flex flex-row items-center justify-center gap-2 border-white border-[1px] w-[230px] h-[50px] text-white rounded-full mt-[50px] text-sm ">
              Start Your Journey <GoArrowUpRight/>
              </button>
            </div>
            <div className="md:w-[30%] w-[90%] flex flex-col bg-white bg-opacity-30 rounded-md">
              <h1 className="md:text-4xl text-xl font-bold pt-4">Ready to elevate your space</h1>
              <p className="text-sm">Get a custom interior design plan tailored to your vision.</p>
              <form className="px-3 py-4 rounded-md  flex flex-col space-y-5">
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="text" name="" id="" placeholder="Name" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="email" name="" id="" placeholder="Email" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="phone" name="" id="" placeholder="Phone Number" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <input  className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white" type="text" name="" id="" placeholder="Project Details" onFocus={handleFocus}
                onBlur={handleBlur}/>
                <button className="w-full py-3 bg-transparent border-2 hover:bg-white transition duration-300 rounded-md text-center text-white hover:text-black">Get Our Free Consultation</button>
              </form>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute right-[40px] sm:bottom-[40px] bottom-[70px] flex flex-row items-center space-x-2  z-50">
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
