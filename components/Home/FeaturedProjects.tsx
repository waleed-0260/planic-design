"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProjects = ({heading, projects}:any) => {
  // console.log("projects", projects)
  // const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // Track if "Load More" is clicked

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/portfolio");
  //       const data = await response.json();
  //       console.log("data", data)
  //       setProjects(data.data);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (!projects) {
    return <div>Loading....</div>
  }

  const displayedProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <div className="flex flex-col items-start w-[90%] my-[40px] space-y-5" id="portfolio">
      <p className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">
      {heading}
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-2 w-full">
       {displayedProjects.map((project: any, index:any) => (
  <Link
    key={index}
    className={`relative group overflow-hidden ${
      (index + 1) % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
    }`}
    href={`/single_project/${project._id}`}
  >
    <div className="flex flex-col items-start">
      <div className="relative w-full sm:h-[450px] h-[300px]">
        <Image
          src={project.masterFloorImage}
          alt={`Project ${index + 1}`}
          layout="fill"
          className=" object-cover transition-transform duration-300 "
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ">
          <p className="absolute top-3 left-3 hidden group-hover:block text-white text-3xl transition-all duration-300">
            {project.heading}
          </p>
        </div>
      </div>
    </div>
  </Link>
))}

      </div>

      {/* Load More Button */}
      {!showAll && projects.length > 5 && (
        <div className="flex w-full justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="button"
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* View All + Download Portfolio */}
      <div className="flex md:items-start items-center justify-center md:justify-end flex-col gap-4 w-full">
        <Link
          href={"/portfolio"}
          className="py-2 border-b-[1px] border-b-black flex flex-row items-center justify-end gap-4"
        >
          View All Projects <FaArrowRight className="ml-[40px]" />
        </Link>
        {/* <a
          href="/images/portfolio.pdf"
          download="portfolio.pdf"
          className="button bg-[#231f20] text-white sm:mt-0 mt-8 px-[20px] py-[10px] text-lg rounded-md transition duration-300 cursor-pointer"
        >
          Download Portfolio
        </a> */}
      </div>
    </div>
  );
};

export default FeaturedProjects;
