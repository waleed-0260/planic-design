import Image from 'next/image'
import React from 'react'
import project1 from "../../public/images/project1.jpg"
import project2 from "../../public/images/project2.jpg"
import Link from 'next/link'


const LatestCases = () => {
    const projects = [
        {
            id: 4,
            image: project1, // Replace with your image path
            title: "TownHouse in San Joe",
            tags: ["Architecture", "Furniture"],
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit voluptatum itaque harum asperiores repudiandae modi sapiente inventore amet perspiciatis.",
          },
          {
            id: 5,
            image: project2,
            title: "Modern Office Design",
            tags: ["Interior", "Workspace"],
            description:
              "Creative office spaces designed with elegance and functionality in mind for a productive environment.",
          },
          {
            id: 6,
            image: project1,
            title: "Luxury Villa in Malibu",
            tags: ["Real Estate", "Luxury"],
            description:
              "Experience unparalleled luxury with our exclusive villa located in the heart of Malibu.",
          },
          {
            id: 7,
            image: project2,
            title: "Urban Apartment Design",
            tags: ["Urban", "Comfort"],
            description:
              "Crafted with urban living in mind, this apartment merges comfort with contemporary design.",
          },
          {
            id: 8,
            image: project2,
            title: "Modern Office Design",
            tags: ["Interior", "Workspace"],
            description:
              "Creative office spaces designed with elegance and functionality in mind for a productive environment.",
          },
          {
            id: 9,
            image: project1,
            title: "Luxury Villa in Malibu",
            tags: ["Real Estate", "Luxury"],
            description:
              "Experience unparalleled luxury with our exclusive villa located in the heart of Malibu.",
          },
          {
            id: 10,
            image: project2,
            title: "Urban Apartment Design",
            tags: ["Urban", "Comfort"],
            description:
              "Crafted with urban living in mind, this apartment merges comfort with contemporary design.",
          },
        ];
  return (
    <div className='w-[90%] flex flex-col  my-[50px]' data-aos="fade-up">
        <h1 className='font-bold md:text-5xl text-3xl'>Latest Cases</h1>
        <ul className='flex md:flex-row flex-col gap-5 mt-[50px]'>
                <li>All</li>
                <li>Architecture</li>
                <li>Interior</li>
                <li>Landscape</li>
                <li>Furniture</li>
            </ul>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full mt-[60px]' >
            {projects.map((project) => (
          <Link href="/single_project/231" key={project.id} className="flex flex-col w-full mt-[20px]" data-aos="zoom-in" data-aos-delay="300">
            {/* Image Section */}
            <div className="md:h-[400px] h-[300px] w-[100%] mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            {/* Tags */}
            <div className="flex flex-row gap-3 items-start mt-10">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full py-1 px-3 border-[#aeb1b5] border-[1px] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Title and Description */}
            <h1 className="md:text-4xl text-2xl mt-4 font-bold mt-[40px] ">{project.title}</h1>
            <p className="mt-2 text-gray-600 mt-[20px]">{project.description}</p>
          </Link>
        ))}
            </div>
    </div>
  )
}

export default LatestCases