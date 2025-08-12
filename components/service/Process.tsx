import React from "react";
import { FiSearch, FiLayout, FiEdit3, FiTool, FiCheckCircle } from "react-icons/fi";

const Process = ({steps, heading}:any) => {


  return (
    <div className="w-[90%] mx-auto my-[80px]">
      {/* Headline */}
      <h2 className="text-3xl md:text-[70px]  mb-12 leading-tight">
        {heading ? heading : "  A Journey from Vision to Reality"}
      </h2>

      {/* Boxes in 2 rows of 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step:any, idx:any) => (
          <div
            key={idx}
            className="flex flex-col items-start p-6 border-2 bg-white transition-all hover:bg-black hover:text-white border-gray-200  h-[250px] justify-start"
          >
            {step.icon}
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 ">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
