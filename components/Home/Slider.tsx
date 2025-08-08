"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from 'next/image';
import logo1 from "../../public/images/logo1.png"
import logo2 from "../../public/images/logo2.png"
import logo3 from "../../public/images/logo3.png"
import logo4 from "../../public/images/logo4.png"
import logo5 from "../../public/images/logo5.png"

const Slider = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-full flex items-center justify-center m-6'>
        <Swiper
        spaceBetween={20}
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          480:{
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3,
          },
          980:{
            slidesPerView:4,
          }
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="lg:w-[100%] w-[80%] h-[120px]"
      >
        <SwiperSlide>
          <div className="w-[150px] h-[110px] ">
            <Image src={logo1} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={logo2} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide>  
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={logo3} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={logo4} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={logo5} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[150px] h-[110px]">
            <Image src={logo4} alt="" className='object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300'/>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Slider