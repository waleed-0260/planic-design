"use client"
import React, { useEffect, useRef, useState } from "react";
import experience from "../../public/images/experience.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const About = () => {
  // const [hasScrolledTo, setHasScrolledTo] = useState(false);
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting && !hasScrolledTo) {
  //         setHasScrolledTo(true);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (imageRef.current) {
  //     observer.observe(imageRef.current);
  //   }

  //   return () => {
  //     if (imageRef.current) {
  //       observer.unobserve(imageRef.current);
  //     }
  //   };
  // }, [hasScrolledTo]);

  return (
    <div className="w-[90%] flex items-center justify-center">
      <p className="w-[50%] text-[#CBA2B2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor, nulla, officia harum voluptas omnis cupiditate voluptatem laudantium suscipit sequi aut quas atque expedita vitae voluptates sunt. Expedita, deleniti necessitatibus?</p>
      </div>
    // <div className="w-[90%] flex md:flex-row flex-col items-center justify-around gap-5 my-[100px]">
    //   <div className="flex md:flex-row flex-col items-center justify-around space-x-10 md:w-[50%]">
    //     <div className="flex flex-col">
    //       <p className="w-[150px] font-semibold">Years of experience</p>
    //       <h1 className="text-9xl font-bold text-[#FF4814]" data-aos="zoom-in">
    //         15
    //       </h1>
    //     </div>
    //     <div
    //       ref={imageRef}
    //       className={`h-[550px] w-[250px] rounded-md transition-transform duration-1000 ease-out ${
    //         hasScrolledTo ? "rotate-[-20deg] opacity-100" : "rotate-[-100deg] opacity-50"
    //       }`}
    //     //   data-aos="zoom-in"
    //     //   data-aos-delay="300"
    //     >
    //       <Image
    //         src={experience}
    //         alt=""
    //         className="object-cover h-full w-full rounded-2xl"
    //       />
    //     </div>
    //   </div>
    //   <div
    //     className="flex flex-col space-y-9 md:w-[40%] md:mt-0 mt-4"
    //     data-aos="fade-left"
    //   >
    //     <h1 className="sm:text-4xl text-2xl font-medium">Designing Excellence, Building Dreams</h1>
    //     <p className="textColor md:w-[60%] leading-6 text-sm">
    //     With 15 years of expertise, Planic Design is your partner in creating inspiring spaces that reflect your unique style. From conceptual design to project completion, we deliver innovation, functionality, and artistry at every step.
    //     </p>
    //     <Link href={"/about"} className="bg-border-2 rounded-full bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] hover:text-white w-[240px] h-[50px]  transition flex flex-row items-center justify-center gap-2 font-light">
    //       Learn More About Us <GoArrowUpRight />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default About;
