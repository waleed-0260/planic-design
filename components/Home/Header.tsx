"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
// import logo from "../../public/images/logo.enc";
import logo from "../../public/images/logo.png"
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import whitelogo from "../../public/images/whitelogo.png"
const Header = (color: any) => {
  console.log("color", color)
  // const [bgColor, setBgColor] = useState("[#ffffff]");
  // const [btnColor, setBtnColor] = useState("[#0D2137]");
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <div
        className={`lg:flex hidden flex-row items-center justify-evenly w-full transition-all h-[80px] z-50 bg-transparent absolute text-white`}
      >
        <div className=" flex flex-row items-center justify-between w-[80%]">

        <Link href={"/"} className="h-[100px] z-10">
          <Image src={whitelogo} alt="" className="w-full h-full " />
        </Link>
        <div>
          <ul className={`flex flex-row gap-4 relative z-10`}>
            <li className="list-none mid-heading transition-all ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="list-none mid-heading relative group transition-all">
              <Link href={"/service"}>Services</Link>
            </li>
            <li className="list-none mid-heading  transition-all ">
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li className="list-none mid-heading  transition-all ">
              <Link href={"/about"}>About Us</Link>
            </li>{" "}
            {/* <li className="list-none mid-heading  transition-all ">
              <Link href={"/blogs"}>Blogs</Link>
            </li>{" "} */}
            <li className="list-none mid-heading  transition-all ">
              <Link href={"/contact"}>Contact</Link>
            </li>{" "}
          </ul>
        </div>
        <div>
          <Link href={"/contact"} className="bg-transparent border-white border-2 px-4 py-3 rounded-full hover:bg-white hover:text-black transition-all ">Contact Us</Link>
        </div>
        </div>

      </div>

      <div>
      {/* Navbar */}
      <div className="flex lg:hidden flex-row justify-between p-1 items-center w-[95%] h-[100px] bg-transparent absolute">
        <div className="h-[100px] w-[100px] relative z-10">
          <Image src={whitelogo} alt="Logo" className="h-full w-full" />
        </div>
        <p
          className="text-3xl border-[1px] border-[#b3b2af] p-1 z-50 rounded-md text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
        >
          {menuOpen ?
          <RxCross2/>
          : 
          <IoIosMenu />
          }
        </p>
      </div>

      {/* Menu */}
      <ul
        className={`${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } flex flex-col gap-4 relative z-10 overflow-hidden transition-all duration-500 ease-in-out bg-[#333333] pl-4 text-white`}
      >
        <li className="list-none mid-heading transition-all ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="list-none mid-heading transition-all ">
          <Link href={"/service"}>Services</Link>
        </li>
        <li className="list-none mid-heading transition-all ">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="list-none mid-heading transition-all ">
          <Link href={"/about"}>About Us</Link>
        </li>
        {/* <li className="list-none mid-heading transition-all ">
          <Link href={"/blogs"}>Blogs</Link>
        </li> */}
        <li className="list-none mid-heading transition-all ">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    <div className="fixed bottom-[20px] right-[100px] z-50">
        <FloatingWhatsApp
          phoneNumber="+923355272083"
          accountName="Planic Design"
          statusMessage="Replies within 15 minutes"
          chatMessage="Hello there! How can I help you ?"
          avatar="/images/logo.png"
          chatboxHeight={350}
          buttonClassName="floating-whatsapp-button"
        />
      </div>
    </>
  );
};

export default Header;
