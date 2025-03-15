import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Projects = ({products}:any) => {
    // console.log("projects", products)
  return (
    <div className="flex flex-col items-start w-[90%] my-[40px] space-y-5">
    <p className="font-bold md:text-5xl text-2xl py-4 border-t-[1px] border-b-[1px] border-black w-full">Featured Projects</p>
    {/* <p className="w-[40%] text-sm">Showcasing Excellence: Explore Our Featured Projects That Redefine Architectural Innovation, Blend Timeless Design with Modern Functionality, and Inspire a New Standard of Creativity</p> */}
    {/* <Link href={"/portfolio"} className="py-2 border-b-[1px] border-b-black flex flex-row items-center gap-4">View All Projects <FaArrowRight className="ml-[20px]"/></Link> */}
  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 w-full">
  {products.map((project:any, index:any) => (
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
            className="rounded-lg"
            />
            <p>{project.heading}</p>
            </div>
        </Link>
      ))}
  </div>
  <div className="flex items-end justify-end w-full">

  {/* <Link href={"/portfolio"} className="py-2 border-b-[1px] border-b-black flex flex-row items-center justify-end gap-4">View All Projects <FaArrowRight className="ml-[40px]"/></Link> */}
  </div>
          </div>
  )
}

export default Projects