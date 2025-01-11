"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the API data
    const fetchData = async () => {
      try {
        const response = await fetch("https://dominobackend.vercel.app/get-portfolio");
        const data = await response.json();
        setProjects(data); // Save the fetched data to the state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  return (
    <div className="w-[90%] flex flex-col items-start my-[50px]" data-aos="fade-up">
      <h1 className="md:text-5xl text-2xl font-bold">Featured Projects</h1>
      <div className="flex md:flex-row flex-col justify-between md:items-center w-full my-[50px]">
        <ul className="flex md:flex-row flex-col gap-5">
          <li>Featured</li>
          <li>Architecture</li>
          <li>Interior</li>
          <li>Landscape</li>
          <li>Furniture</li>
        </ul>

        <Link
          href={"/portfolio"}
          className="w-[200px] h-[50px] bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] rounded-full transition-all hover:shadow-lg hover:text-white flex flex-row items-center justify-center text-sm gap-3 sm:mt-0 mt-5"
        >
          Featured Projects <GoArrowUpRight />
        </Link>
      </div>

      <div className="w-[90vw] h-full mt-4">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            480: { slidesPerView: 1 }, // For screens < 768px
            768: { slidesPerView: 2 }, // For screens >= 768px
          }}
          className="p-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {projects.map((project:any) => (
            <SwiperSlide key={project._id} className="flex flex-col w-full">
              <Link href="/single_project/112">
                {/* Image Section */}
                <div className="md:h-[600px] h-[400px] w-[100%] mx-auto">
                  <Image
                    src={project.descriptionImage}
                    alt={project.heading}
                    width={800}
                    height={600}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
                {/* Tags */}
                <div className="flex flex-row gap-3 items-start mt-10">
                  {project.tags.map((tag:any, index:any) => (
                    <span
                      key={index}
                      className="rounded-full py-1 px-3 border-[#aeb1b5] border-[1px] text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Title and Description */}
                <h1 className="text-4xl font-bold mt-[40px]">{project.heading}</h1>
                <p className="mt-2 text-gray-600 mt-[20px]">{project.tagline}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProjects;
