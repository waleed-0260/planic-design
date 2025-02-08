"use client"
import React from 'react'
import Image from 'next/image'
import project1 from "../../public/images/project1.jpg"
import project2 from "../../public/images/project2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
// import { Autoplay} from "swiper/modules";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'

const LatestProjects = () => {
    const projects = [
        {
            id: 1,
            image: project1, // Replace with your image path
            title: "TownHouse in San Joe",
            date:"2022",
            tags: ["Architecture", "Furniture"],
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit voluptatum itaque harum asperiores repudiandae modi sapiente inventore amet perspiciatis.",
          },
          {
            id: 2,
            image: project2,
            title: "Modern Office Design",
            date:"2022",
            tags: ["Interior", "Workspace"],
            description:
              "Creative office spaces designed with elegance and functionality in mind for a productive environment.",
          },
          {
            id: 3,
            image: project1,
            title: "Luxury Villa in Malibu",
            date:"2022",
            tags: ["Real Estate", "Luxury"],
            description:
              "Experience unparalleled luxury with our exclusive villa located in the heart of Malibu.",
          },
          {
            id: 4,
            image: project2,
            title: "Urban Apartment Design",
            date:"2024",
            tags: ["Urban", "Comfort"],
            description:
              "Crafted with urban living in mind, this apartment merges comfort with contemporary design.",
          },
        ];
  return (
    <div className='w-[90%] flex flex-col items-start my-[100px]' data-aos="fade-up" >
        <h1 className='md:text-5xl text-2xl font-bold'>Latest Projects</h1>
        <div className='flex md:flex-row flex-col justify-between md:items-center w-full my-[50px]'>
            <ul className='flex md:flex-row flex-col gap-5'>
                <li>Interior design</li>
                <li>Landscape</li>
                <li>Renovation</li>
                {/* <li>Landscape</li> */}
                <li>Furniture</li>
            </ul>

            <Link href={"/portfolio"} className='w-[200px] h-[50px] bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] rounded-full  transition-all hover:shadow-lg hover:text-white flex flex-row items-center justify-center text-sm gap-3 mt-5 sm:mt-0'>See all rpojects <GoArrowUpRight/></Link>
            </div>

            <div className="w-[90vw] h-full mt-4 relative">
      <Swiper spaceBetween={20}   breakpoints={{
    480: {
      slidesPerView: 1, // For screens < 768px
    },
    768: {
      slidesPerView: 3, // For screens >= 768px
    },
  }} className="p-4"  data-aos="zoom-in" data-aos-delay="300">
        {projects.map((project) => {
            return(

          <SwiperSlide key={project.id} className="flex flex-col w-full relative">
            <Link href={"/single_project/213"}>
            {/* Image Section */}
            <p className='bg-white text-black rounded-lg px-12 py-6 absolute top-0 left-0 '>{project.date}</p>
            <p className='h-14 w-14 text-center bg-white hover:bg-[#FF4814] hover:text-white transition duration-300 absolute top-2 right-2 rounded-full text-2xl flex items-center justify-center cursor-pointer'><GoArrowRight/></p>
            <div className="md:h-[600px] h-[400px] w-[100%] mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
            {/* Tags */}
            <div className="flex flex-row gap-3 items-start mt-10 absolute bottom-[100px] left-[20px]">
              {project.tags.map((tag, index) => (
                <span
                key={index}
                className="rounded-full py-1 px-3 border-[#aeb1b5] border-[1px] bg-white text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Title and Description */}
            <h1 className="text-3xl mt-4 font-bold mt-[40px] absolute bottom-[20px] left-[20px] text-white">{project.title}</h1>
            {/* <p className="mt-2 text-gray-600 mt-[20px]">{project.description}</p> */}
              </Link>
          </SwiperSlide>
                      )

})}
      </Swiper>
    </div>
    </div>  )
}

export default LatestProjects