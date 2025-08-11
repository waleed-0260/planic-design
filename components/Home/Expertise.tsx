import React from "react";
import Link from "next/link";
const images = [
  { src: "/images/expertise3.jpg", text: "Interior Design", link:"interior" },
  { src: "/images/expertise4.jpg", text: "3D Visulization", link:"visulization" },
  { src: "/images/expertise2.jpg", text: "Renovation & Fit Out", link:"renovation" },
  { src: "/images/expertise1.jpg", text: "Architectural Planning", link:"architecture" },
  // { src: "/images/Visulization.png", text: "Construction OnSite Supervision" },
];

const Expertise = () => {
  return (
    <section className=" py-10 w-[90%] mx-auto">
      <h2 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">Expertise</h2>

      {/* First Row */}
      <div className="flex md:flex-row flex-col gap-2 mb-2 my-[50px]">
        {/* First Image - double width */}
        <Link href={`/service/architecture`} className="flex-2 md:w-2/3 relative group overflow-hidden h-[300px] ">
          <img
            src={images[0].src}
            alt={images[0].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ">
          <p className="absolute top-3 left-3 block md:hidden group-hover:block text-white text-3xl transition-all duration-300">
            {images[0].text}
          </p>
        </div>
        </Link>


        {/* Second Image - normal width */}
        <Link href={`/service/${images[1].link}`} className="flex-1 md:w-1/3 relative group overflow-hidden h-[300px] ">
          <img
            src={images[1].src}
            alt={images[1].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ">
          <p className="absolute top-3 left-3 block md:hidden group-hover:block text-white text-3xl transition-all duration-300">
            {images[1].text}
          </p>
        </div>
        </Link>
      </div>


   <div className="flex gap-2 mb-4 md:flex-row flex-col">

        {/* Second Image - normal width */}

        <Link href={`/service/${images[2].link}`} className="flex-1 md:w-1/3 relative group overflow-hidden h-[300px] ">
          <img
            src={images[2].src}
            alt={images[2].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ">
          <p className="absolute top-3 left-3 block md:hidden group-hover:block text-white text-3xl transition-all duration-300">
            {images[2].text}
          </p>
        </div>
        </Link>

        <Link href={`/service/${images[3].link}`} className="flex-2 md:w-2/3 relative group overflow-hidden h-[300px] ">
          <img
            src={images[3].src}
            alt={images[3].text}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
          />
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300 ">
          <p className="absolute top-3 left-3 block md:hidden group-hover:block text-white text-3xl transition-all duration-300">
            {images[3].text}
          </p>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
