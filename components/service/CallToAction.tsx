import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CallToAction = ({heading, text, button}:any) => {
  return (
    <div className="w-[90%] flex justify-center my-[80px]">
      <div className="bg-[#0E1325] rounded-2xl  w-full text-center p-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {/* Need more convincing? <br />
          Let’s <span className="text-purple-400">talk.</span> */}
          {heading}
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm md:text-base">
          {text}
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
    href="mailto:planicdesignisb@gmail.com?subject=Let's Talk&body=Hi, I’d like to discuss..."
    className="bg-white text-black rounded-full inline-block px-4 py-2"
  >
    {button} 
  </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
