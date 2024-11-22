import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t-[2px] text-black p-4">
      <div className="flex md:flex-row flex-col justify-between items-center max-w-6xl mx-auto">
        {/* Left Side: Copyright Info */}
        <div className="text-left">
          <p>&copy; 2024 Planic Design. All rights reserved.</p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex gap-4 md:mt-0 mt-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] transition-all"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
