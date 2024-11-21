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


const Blogs = () => {

    const projects = [
        {
            id: 1,
            image: post1, // Replace with your image path
            title: "TownHouse in San Joe",
            // tags: ["Architecture", "Furniture"],
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit voluptatum itaque harum asperiores repudiandae modi sapiente inventore amet perspiciatis.",
          },
          {
            id: 2,
            image: post2,
            title: "Modern Office Design",
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
<div className='w-[90%] flex flex-col items-start'>
    <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='text-4xl font-bold'>Latest Posts</h1>
        <button className='w-[250px] h-[50px] bg-transparent border-2 hover:bg-red-700 border-red-700 rounded-full'>SEE ALL POSTS</button>
    </div>

            <div className="w-[90vw] h-full mt-4">
      <Swiper spaceBetween={50}  breakpoints={{
    480: {
      slidesPerView: 1, // For screens < 768px
    },
    768: {
      slidesPerView: 2, // For screens >= 768px
    },
  }} className="p-4">
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
            <div className='flex flex-row items-center justify-around'>
            <span className='flex flex-col'>
                <p className='text-4xl'>16</p>
                <p>December 2023</p>
            </span>
            <h1 className="text-4xl ">{project.title}</h1>
            </div>
            {/* <p className="mt-2 text-gray-600">{project.description}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>  )
}

export default Blogs