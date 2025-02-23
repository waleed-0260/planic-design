import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <>
    <div className="w-[90%] flex md:flex-row flex-col  mt-[150px]">
      <div className="md:w-[50%] flex flex-col ">
        <p className="md:text-2xl text-xl font-semibold">We believe that architecture has the power to shape lives and uplift communities. Planic Design's philosophy is built on a passion for innovation, sustainability, and timeless aesthetics.
        </p>

        <div className="flex gap-4 md:mt-[20px] mt-4">
          <a
            href="https://www.facebook.com/theplanicdesign"
            target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@PlanicDesign"
            target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/theplanicdesign/"
            target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/theplanicdesign"
            target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#231f20] hover:bg-[#231f20] hover:text-white transition-all"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
      <div className="flex justify-end md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3 space-x-0 md:mt-0 mt-5 md:w-[50%]">
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>Islamabad, PK</h1>
                <p className='textColor text-sm w-[300px]'>Suite No. 3, 5th Floor, Gulberg Trade Center, Gulberg Greens</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>0335 5272083</p>
        </div>
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>London, UK</h1>
                <p className='textColor text-sm  '>UK: FL 3, 45 Albemarle St</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>+44 7532813089</p>
        </div>
      </div>
    </div>
     <footer className="w-full border-t-[2px] text-black py-4 mt-[50px] textColor text-sm">
       <div className="flex md:flex-row flex-col justify-between sm:items-center items-start max-w-6xl mx-auto w-[90%]">
         <div className="text-left">
           <p>&copy; 2024 Planic Design. All rights reserved.</p>
         </div>

       <div className="flex gap-4 md:mt-0 mt-4">
        <ul className="flex sm:flex-row flex-col gap-4">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/about" className="cursor-pointer">About</Link>
          <Link href="/services" className="cursor-pointer">Services</Link>
          <Link href="/portfolio" className="cursor-pointer">Portfolio</Link>
          <Link href="/contact" className="cursor-pointer">Contact</Link>
        </ul>
        </div>
      </div>
    </footer>
    </>

  );
};

export default Footer;
