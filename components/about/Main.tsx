import React from "react";
import Image from "next/image";
// import expertise3 from "@/public/images/expertise3.jpg";
import Link from "next/link";
import aboutImg from "@/public/images/aboutImg.jpg";
const Main = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-[90%] mx-auto py-12 gap-8">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-between md:h-[400px] space-y-5">
        <h2 className="text-2xl md:text-4xl leading-tight">
          Designing Spaces with Impact
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Founded with the goal of transforming how people experience their
          surroundings, Planic Design blends creativity with practicality. Our
          team brings deep local insight, international trends, and technical
          expertise to every project.
        </p>
        <div>
            <Link className="button inline-block" href="/portfolio">
              View Portfolio
            </Link>
          </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[400px] flex justify-center">
        <Image
          src={aboutImg}
          alt="Image about"
          className=" object-cover"
          // width={300}
          // height={450}
        />
      </div>
    </div>
  );
};

export default Main;
