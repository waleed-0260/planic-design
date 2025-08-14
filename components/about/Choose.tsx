"use client"
import React, { useState } from "react";
import Image from "next/image";
import expertise1 from "@/public/images/expertise1.jpg";
import expertise2 from "@/public/images/expertise2.jpg";
import expertise3 from "@/public/images/expertise3.jpg";
import exoertise4 from "@/public/images/expertise4.jpg";

const headings = [
  { id: 1, title: "Experienced in Residential & Commercial Design ", image: expertise1 },
  { id: 2, title: "Complete Design-Build Solutions ", image: expertise2 },
  { id: 3, title: "Transparent Pricing & Timelines ", image: expertise3 },
  { id: 4, title: "Pakistan-Based Team with Local Know-How ", image: exoertise4 },
];

const Choose = ({heading}:any) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex md:flex-row flex-col w-[90%] py-12 relative">
      {/* Left Section */}
      <div className="md:w-[30%] pr-6">
        <h2 className="md:text-[72px] text-3xl leading-tight text-black">
          {heading}
        </h2>
      </div>

      {/* Right Section */}
      <div className="md:w-[70%] space-y-10 relative md:mt-0 mt-4">
        {headings.map((item, index) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
          >
             {/* <span className="absolute -top-6 left-0 text-xl font-bold text-gray-400 z-20">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span> */}
            <h3 className="text-3xl textColor border-b-2 border-gray-300 pb-5 relative z-10">
              {item.title}
            </h3>

            {/* Image appears on hover */}
          {activeId === item.id && (
  <div className="absolute left-[80%] top-[-60px] animate-fade-in z-50">
    <div className="h-[150px] w-[150px]">
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
        className="rounded-md shadow-lg object-cover h-full w-full"
      />
    </div>
  </div>
)}
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Choose;
