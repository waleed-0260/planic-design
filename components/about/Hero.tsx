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

const Hero = () => {
  const icons = [
    { component: <FaFacebook />, color: "#4267B2" }, // Facebook Blue
    { component: <FaTwitter />, color: "#1DA1F2" }, // Twitter Blue
    { component: <FaInstagram />, color: "#E1306C" }, // Instagram Pink
    { component: <FaLinkedin />, color: "#0077B5" }, // LinkedIn Blue
    // { component: <FaYoutube />, color: "#FF0000" },  // YouTube Red
    { component: <FaGithub />, color: "#333" }, // GitHub Black
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
      <div className="w-full flex flex-col items-center justify-center bg-cover h-[37rem] overflow-hidden">
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-cover hero-animation bg-center"
          style={{ backgroundImage: `url('/images/aboutHero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="flex flex-row items-center justify-between p-4 w-full text-white z-50 mt-[100px]">
            <div className="flex flex-row gap-4 justify-around">
              <div className="flex flex-col space-y-4">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-full hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: `${icon.color}20`, // Adds a transparent background using the color
                      opacity: 0.8,
                    }}
                  >
                    <div className="text-xl text-white">{icon.component}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 justify-end">
              <p className="text-lg text-white">
                Architecture and interior NextJs Theme
              </p>
              <h1 className="text-6xl font-bold">About Us</h1>
              </div>
            </div>

            <div className="flex flex-row gap-4">
<div className="relative flex items-center justify-center w-40 h-40 bg-gray-800 text-white rounded-full">
      <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
        25
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-sm uppercase tracking-wider">
        <span className="transform rotate-90">Years of Experience</span>
        <span className="mx-2">•</span>
        <span className="transform -rotate-90">Since 1997</span>
      </div>
    </div>

              <div className="flex flex-col space-y-4">
                {moreIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-full hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: `${icon.color}20`, // Adds a transparent background using the color
                      opacity: 0.8,
                    }}
                  >
                    <div className="text-xl text-white">{icon.component}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ul className="flex flex-row items-center justify-around gap-8 text-white z-50 relative top-[40px]">
            <li>Architecture Studio</li>
            <li>Interior Design</li>
            <li>3D modeling and animations</li>
            <li>Decoration & Furniture</li>
            <li>High performance</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
