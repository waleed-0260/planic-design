"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
// import portfolio from "../../public/images/portfolio.pdf"
const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the API data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dominobackend.vercel.app/get-portfolio"
        );
        const data = await response.json();
        setProjects(data); // Save the fetched data to the state
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className="flex flex-col items-start w-[90%] my-[40px] space-y-5" id="portfolio">
      <p className=" md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">Featured Projects</p>
      {/* <p className="md:w-[40%] text-sm">Showcasing Excellence: Explore Our Featured Projects That Redefine Architectural Innovation, Blend Timeless Design with Modern Functionality, and Inspire a New Standard of Creativity</p>
      <Link href={"/portfolio"} className="py-2 border-b-[1px] border-b-black flex flex-row items-center gap-4">View All Projects <FaArrowRight className="ml-[20px]"/></Link> */}
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 w-full">
    {projects?.map((project:any, index) => (
          <Link
            key={index}
            className={`relative ${
              (index + 1) % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
            }`}
            href={`/single_project/${project._id}`}
          >
            <div className="flex flex-col items-start">
            <Image
              src={project.masterFloorImage} // Ensure the image URL is valid
              alt={`Project ${index + 1}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-lg w-full object-cover h-[400px]"
              />
              <p className="text-3xl">{project.heading}</p>
              </div>
          </Link>
        ))}
    </div>
    <div className="flex md:items-end items-center justify-center md:justify-end flex-col gap-4 w-full">

    <Link href={"/portfolio"} className="py-2 border-b-[1px] border-b-black flex flex-row items-center justify-end gap-4">View All Projects <FaArrowRight className="ml-[40px]"/></Link>
    <a  href="/images/portfolio.pdf" 
  download="portfolio.pdf" className="bg-[#231f20] text-white  sm:mt-0 mt-8 px-[20px] py-[10px] text-lg rounded-md transition duration-300 cursor-pointer">Download Portfolio</a>
    </div>
            </div>
  );
};

export default FeaturedProjects;

// const fallbackImages = [service1, service2, service3, service4, service2];

// const getImages = () => {
//   if (projects.length > 0) {
//     return projects.map((project: any) => project.masterFloorImage || "");
//   } else {
//     return fallbackImages;
//   }
// };

// const images = getImages();
// {/* First two images */}
// {images.slice(0, 2).map((image, index) => (
  //   <div key={index} className="w-full">
  //     <Image
  //       src={image}
//       alt={`Image ${index + 1}`}
//       className="w-full h-[400px] object-cover rounded-md"
//       width={800}
//       height={400}
//       placeholder="blur"
//       blurDataURL="/images/placeholder.png"
//     />
//   </div>
// ))}

// {/* Third image spanning full width */}
// <div className="col-span-2">
//   <Image
//     src={images[2]}
//     alt="Image 3"
//     className="w-full h-[400px] object-cover rounded-md"
//     width={1600}
//     height={400}
//     placeholder="blur"
//     blurDataURL="/images/placeholder.png"
//   />
// </div>

// {/* Last two images */}
// {images.slice(3, 5).map((image, index) => (
//   <div key={index} className="w-full">
//     <Image
//       src={image}
//       alt={`Image ${index + 4}`}
//       className="w-full h-[400px] object-cover rounded-md"
//       width={800}
//       height={400}
//       placeholder="blur"
//       blurDataURL="/images/placeholder.png"
//     />
//   </div>
// ))}