"use client"
import Image from 'next/image'
import React from 'react'
import post1 from "../../public/images/post1.jpg"
import post2 from "../../public/images/post2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { GoArrowUpRight } from "react-icons/go";


const Blogs = () => {

    const projects = [
        {
            id: 1,
            image: post1, // Replace with your image path
            title: "Top 10 wooden architecture building",
            // tags: ["Architecture", "Furniture"],
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit voluptatum itaque harum asperiores repudiandae modi sapiente inventore amet perspiciatis.",
          },
          {
            id: 2,
            image: post2,
            title: "How to handle the day light in vary of the best light",
            // tags: ["Interior", "Workspace"],
            description:
              "Creative office spaces designed with elegance and functionality in mind for a productive environment.",
          },
          {
            id: 3,
            image: post1,
            title: "Luxury Villa in Malibu",
            // tags: ["Real Estate", "Luxury"],
            description:
              "Experience unparalleled luxury with our exclusive villa located in the heart of Malibu.",
          },
          {
            id: 4,
            image: post1,
            title: "Urban Apartment Design",
            // tags: ["Urban", "Comfort"],
            description:
              "Crafted with urban living in mind, this apartment merges comfort with contemporary design.",
          },
        ];

  return (
<div className='w-[90%] flex flex-col items-start' data-aos="fade-up">
    <div className='flex md:flex-row flex-col items-center justify-between w-full'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-4xl font-bold'>Stay Inspired with Our Insights</h1>
        <p className='textColor'>Discover design trends, project highlights, and expert tips on creating extraordinary spaces.</p>
      </div>
        <button className='w-[200px] h-[50px] bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] rounded-full transition-all hover:shadow-lg hover:text-white text-sm flex flex-row items-center justify-center'>All Articles <GoArrowUpRight/></button>
    </div>

            <div className="w-[90vw] h-full mt-[50px]">
      <Swiper spaceBetween={50}  breakpoints={{
    480: {
      slidesPerView: 1, // For screens < 768px
    },
    768: {
      slidesPerView: 2, // For screens >= 768px
    },
  }} className="p-4" data-aos="zoom-in" data-aos-delay="300">
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex flex-col w-full">
            {/* Image Section */}
            <div className="h-[400px] w-[100%] mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            {/* Title and Description */}
            <div className='flex flex-row mt-[30px]'>
            <span className='flex flex-col'>
                <p className='text-4xl'>16</p>
                <p className='text-sm textColor'>December</p>
                <p className='text-sm textColor'>2023</p>
            </span>
            <h1 className="text-2xl w-[60%] ml-[40px]">{project.title}</h1>
            </div>
            {/* <p className="mt-2 text-gray-600">{project.description}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>  )
}

export default Blogs