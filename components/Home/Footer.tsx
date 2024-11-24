import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="w-[90%] flex md:flex-row flex-col  mt-[150px]">
      <div className="md:w-[50%] flex flex-col ">
        <p className="text-2xl font-semibold">We believe that architecture has the power to shape lives and uplift communities. Archin‘s philosophy is passion for innovation, sustainablity and t imeless aesthetics
        </p>

        <div className="flex gap-4 md:mt-[20px] mt-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
      <div className="flex justify-end md:flex-row flex-col md:w-[50%] md:mt-0 mt-8">
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>Islamabad, Pakistan</h1>
                <p className='textColor text-sm w-[300px]'>Suite No. 3, 5th Floor, Gulberg Trade Center, Gulberg Greens</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>0335 5272083</p>
        </div>
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>London</h1>
                <p className='textColor text-sm  '>UK: FL 3, 45 Albemarle St</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>0335 5272083</p>
        </div>
      </div>
    </div>
     <footer className="w-full border-t-[2px] text-black py-4 mt-[50px]">
       <div className="flex md:flex-row flex-col justify-between items-center max-w-6xl mx-auto w-[90%]">
         <div className="text-left">
           <p>&copy; 2024 Planic Design. All rights reserved.</p>
         </div>

       <div className="flex gap-4 md:mt-0 mt-4">
        <ul className="flex flex-row gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        </div>
      </div>
    </footer>
    </>

  );
};

export default Footer;
