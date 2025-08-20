"use client";
import React from "react";
import Header from "../Home/Header";
// import aboutHero from "../../public/images/aboutHero.jpg"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaRegComments } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

const Hero = ({heading, desc}:any) => {
  const icons = [
    { component: <FaFacebook />, color: "#4267B2", link:"https://www.facebook.com/theplanicdesign" }, // Facebook Blue
    { component: <FaInstagram />, color: "#1DA1F2", link:"https://www.instagram.com/theplanicdesign/" }, // Twitter Blue
    { component: <FaLinkedin />, color: "#E1306C", link:"https://www.linkedin.com/company/theplanicdesign" }, // Instagram Pink
    { component: <FaYoutube />, color: "#0077B5", link:"https://www.youtube.com/@PlanicDesign" }, // LinkedIn Blue
    // { component: <FaYoutube />, color: "#FF0000" },  // YouTube Red
    // { component: <FaGithub />, color: "#333" }, // GitHub Black
  ];

  const moreIcons = [
    { component: <HiOutlineDesktopComputer />, color: "#4267B2" }, // Facebook Blue
    { component: <FaRegComments />, color: "#1DA1F2" }, // Twitter Blue
    { component: <FaFile />, color: "#E1306C" }, // Instagram Pink
    { component: <FaRegCommentDots />, color: "#0077B5" }, // LinkedIn Blue
    { component: <IoCartSharp />, color: "#FF0000" }, // YouTube Red
    // { component: <FaGithub />, color: "#333" },      // GitHub Black
  ];

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full flex flex-col items-center justify-center bg-cover h-[45rem] overflow-hidden">
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-cover hero-animation bg-bottom"
          style={{ backgroundImage: `url('/images/Slide3.webp')` }}
        >
          <div className="absolute inset-0 bg-black opacity-10 h-[45rem]"></div>
          <div className="flex md:flex-row flex-col items-center justify-between p-4 w-[80%] text-white z-10 mt-[50px]">
            <div className="flex md:flex-row flex-col gap-4 justify-around md:w-[50%] w-full">
              <div className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 z-50 md:mt-0 mt-[150px]">
                {icons.map((icon, index) => (
                  <a href={icon.link}
                    key={index}
                    className={`p-3 rounded-full hover:opacity-100 transition duration-300 hover:bg-[#231f20] bg-white bg-opacity-10`}
                  >
                    <div className="text-xl text-white">{icon.component}</div>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3  relative top-[10px]">
              {/* <p className="text-lg text-white md:w-[350px]">
                {desc ? desc: 
                "Architecture and interior Design Company"
                }
              </p> */}
              <h1 className="md:text-6xl text-3xl font-bold ">{heading}</h1>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:justify-end justify-start md:ml-[50px] md:space-x-[60px] md:w-[50%] w-full md:mt-0 mt-[100px] space-x-[40px] ">
            {/* <div className="relative flex items-center justify-center w-40 h-40 bg-[#231f20] text-white rounded-full">
  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
    7+
  </div>

  Circular Text
  <svg
    className="absolute inset-0 w-full h-full p-3 transform rotating-box"
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        id="circlePath"
        d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
      />
    </defs>
    <text fill="white" fontSize="25" textAnchor="middle">
      <textPath href="#circlePath" startOffset="60%">
      Years of Experience since 2018 •
      </textPath>
    </text>
  </svg>
</div> */}


        {/* <span className="transform rotate-20 whitespace-nowrap">Years of Experience</span>
        <span className="mx-2">•</span>
        <span className="transform -rotate-90 whitespace-nowrap">Since 1997</span> */}

              {/* <div className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 md:ml-0 relative md:left-0 left-[-40px] md:mt-0 mt-[40px]">
                {moreIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-full hover:opacity-100 transition duration-300 hover:bg-[#FF4814] bg-white bg-opacity-10`}
                  >
                    <div className="text-xl text-white">{icon.component}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
{/* 
          <ul className="flex md:flex-row flex-col items-center justify-around gap-8 text-white z-50 relative top-[160px]">
            <li>Architecture Studio</li>
            <li>Interior Design</li>
            <li>3D modeling and animations</li>
            <li>Decoration & Furniture</li>
            <li>High performance</li>

          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
