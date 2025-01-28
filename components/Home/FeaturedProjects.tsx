"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-col items-start w-[90%] my-[40px] bg-yellow-700">
      <p className="font-bold md:text-4xl text-2xl">Featured Projects</p>
    <div className="grid grid-cols-2 gap-4 py-4 w-full">
    {projects?.map((project:any, index) => (
          <Link
            key={index}
            className={`relative ${
              index === 2
                ? "col-span-2" // Make the third item span two columns
                : "col-span-1"
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