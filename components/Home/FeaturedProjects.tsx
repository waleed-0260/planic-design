"use client"
import Image from 'next/image'
import React from 'react'
import project1 from "../../public/images/project1.jpg"
import project2 from "../../public/images/project2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
// import { Autoplay} from "swiper/modules";

const FeaturedProjects = () => {
    const projects = [
    {
        id: 1,
        image: project1, // Replace with your image path
        title: "TownHouse in San Joe",
        tags: ["Architecture", "Furniture"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit voluptatum itaque harum asperiores repudiandae modi sapiente inventore amet perspiciatis.",
      },
      {
        id: 2,
        image: project2,
        title: "Modern Office Design",
        tags: ["Interior", "Workspace"],
        description:
          "Creative office spaces designed with elegance and functionality in mind for a productive environment.",
      },
      {
        id: 3,
        image: project1,
        title: "Luxury Villa in Malibu",
        tags: ["Real Estate", "Luxury"],
        description:
          "Experience unparalleled luxury with our exclusive villa located in the heart of Malibu.",
      },
      {
        id: 4,
        image: project2,
        title: "Urban Apartment Design",
        tags: ["Urban", "Comfort"],
        description:
          "Crafted with urban living in mind, this apartment merges comfort with contemporary design.",
      },
    ];

  return (
    <div className='w-[90%] flex flex-col items-start'>
        <h1 className='text-4xl font-bold'>Featured Projects</h1>
        <div className='flex md:flex-row flex-col justify-between md:items-center w-full mt-2'>
            <ul className='flex md:flex-row flex-col gap-5'>
                <li>Featured</li>
                <li>Architecture</li>
                <li>Interior</li>
                <li>Landscape</li>
                <li>Furniture</li>
            </ul>

            <button className='w-[250px] h-[50px] bg-transparent border-2 hover:bg-red-700 border-red-700 rounded-full mt-3'>SEE ALL PROJECTS</button>
            </div>

            <div className="w-[90vw] h-full mt-4">
      <Swiper spaceBetween={20}   breakpoints={{
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
            <div className="h-[600px] w-[100%] mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            {/* Tags */}
            <div className="flex flex-row gap-3 items-start mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full p-2 border-[#000000] border-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Title and Description */}
            <h1 className="text-4xl mt-4 font-bold">{project.title}</h1>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default FeaturedProjects