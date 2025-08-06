import React from "react";
import Image from "next/image";
import expertise3 from "@/public/images/expertise3.jpg";
import expertise2 from "@/public/images/expertise2.jpg";
import expertise1 from "@/public/images/expertise1.jpg";
import expertise4 from "@/public/images/expertise4.jpg";
import Link from "next/link";


const Architecture = () => {
  return (
    <div className="flex flex-col my-[30px] w-[90%]">
    <div className="flex flex-col md:flex-row justify-between items-start w-full mx-auto py-12 gap-8">
      {/* Left Content */}
      <div className="flex-1 space-y-5" id="architecture">
        <h2 className="text-3xl md:text-4xl leading-tight">
          Architectural Layouts That Work
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
Our architecture services include detailed layout plans, space optimization, and technical 
drawings. From concept to construction. We handle every stage with precision.         </p>
        <Link className="relative top-[20px] button" href="/portfolio">View Portfolio</Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[300px] flex justify-center">
        <Image
          src={expertise3}
          alt="Architecture"
          className="rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </div>


        <div className="flex flex-col md:flex-row-reverse justify-between items-start w-full mx-auto py-12 gap-8" id="renovation">
      {/* Left Content */}
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl leading-tight">
   Complete Renovation & Fit-Out Services      </h2>
        <p className="text-gray-600 text-base md:text-lg">
We handle everything from site assessment to final execution. Whether you’re upgrading a 
space or starting fresh, we bring your vision to life with quality and speed.         </p>
        <Link className="relative top-[20px] button" href="/portfolio">View Portfolio</Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[300px] flex justify-center">
        <Image
          src={expertise2}
          alt="Architecture"
          className="rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </div>


          <div className="flex flex-col md:flex-row justify-between items-start w-full mx-auto py-12 gap-8" id="visulization">
      {/* Left Content */}
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl leading-tight">
Photo-Realistic 3D Renderings     </h2>
        <p className="text-gray-600 text-base md:text-lg">
  See your space before it’s built. Our 3D visualizations help you make design decisions 
confidently — from furniture layouts to lighting mood.       </p>
        <Link className="relative top-[20px] button" href="/portfolio">View Portfolio</Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[300px] flex justify-center">
        <Image
          src={expertise1}
          alt="Architecture"
          className="rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </div>

        <div className="flex flex-col md:flex-row-reverse justify-between items-start w-full mx-auto py-12 gap-8" id="interior">
      {/* Left Content */}
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl leading-tight">
          Personalized Interior Design for Every Space 

        </h2>
        <p className="text-gray-600 text-base md:text-lg">
We design interiors that reflect your personality and support your lifestyle. Whether you're 
furnishing a home or styling a cafe, we ensure every detail speaks to your vision.         </p>
        <Link className="relative top-[20px] button" href="/portfolio">View Portfolio</Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[300px] flex justify-center">
        <Image
          src={expertise4}
          alt="Architecture"
          className="rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </div>

    </div>
  );
};

export default Architecture;
