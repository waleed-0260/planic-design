"use client"
import React, { useState } from "react";
import Image from "next/image";
import expertise1 from "@/public/images/expertise1.jpg";
import expertise2 from "@/public/images/expertise2.jpg";
import expertise3 from "@/public/images/expertise3.jpg";
import exoertise4 from "@/public/images/expertise4.jpg";

const headings = [
  { id: 1, title: "3D Visulization", image: expertise1 },
  { id: 2, title: "Renovation & Fit Out", image: expertise2 },
  { id: 3, title: "Architectural Planning", image: expertise3 },
  { id: 4, title: "Interior Design", image: exoertise4 },
];

const Choose = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex w-[90%] mx-auto py-12 relative">
      {/* Left Section */}
      <div className="w-[30%] pr-6">
        <h2 className="md:text-[72px] text-3xl leading-tight text-black">
          Why Choose <br /> Planic Design
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-[70%] space-y-10 relative">
        {headings.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <h3 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 relative z-10">
              {item.title}
            </h3>

            {/* Image appears on hover */}
          {activeId === item.id && (
  <div className="absolute left-[80%] top-0 animate-fade-in z-50">
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
