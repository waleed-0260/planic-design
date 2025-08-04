"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProjects = ({heading}:any) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // Track if "Load More" is clicked

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://planicbackend.vercel.app/get-portfolio");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <div className="flex flex-col items-start w-[90%] my-[40px] space-y-5" id="portfolio">
      <p className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">
      {heading}
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-4 w-full">
        {displayedProjects.map((project: any, index) => (
          <Link
            key={index}
            className={`relative ${
              (index + 1) % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
            }`}
            href={`/single_project/${project._id}`}
          >
            <div className="flex flex-col items-start">
              <Image
                src={project.masterFloorImage}
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

      {/* Load More Button */}
      {!showAll && projects.length > 5 && (
        <div className="flex w-full justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#231f20] text-white px-6 py-3 rounded-md transition duration-300 hover:bg-[#3b393a]"
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* View All + Download Portfolio */}
      <div className="flex md:items-end items-center justify-center md:justify-end flex-col gap-4 w-full">
        <Link
          href={"/portfolio"}
          className="py-2 border-b-[1px] border-b-black flex flex-row items-center justify-end gap-4"
        >
          View All Projects <FaArrowRight className="ml-[40px]" />
        </Link>
        <a
          href="/images/portfolio.pdf"
          download="portfolio.pdf"
          className="bg-[#231f20] text-white sm:mt-0 mt-8 px-[20px] py-[10px] text-lg rounded-md transition duration-300 cursor-pointer"
        >
          Download Portfolio
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
