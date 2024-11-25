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

        <Link href={"/"} className="h-[170px] z-10">
          <Image src={logo} alt="" className="w-full h-full " />
        </Link>
        <div>
          <ul className={`flex flex-row gap-4 relative z-10`}>
            <li className="list-none mid-heading transition-all">
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
            <li className="list-none mid-heading  transition-all ">
              <Link href={"/blogs"}>Blogs</Link>
            </li>{" "}
            <li className="list-none mid-heading  transition-all ">
              <Link href={"/contact"}>Contact</Link>
            </li>{" "}
          </ul>
        </div>
        <div className="relative z-10 flex flex-row  space-x-4">
          <span>EN</span>
          <span>FR</span>
          <p className="text-2xl  ml-[40px]">
          <MdSearch/>
          </p>
          <p className="text-2xl ">
            <TbMenu/>
          </p>
        </div>
        </div>

      </div>

      <div>
      {/* Navbar */}
      <div className="flex lg:hidden flex-row justify-between p-1 items-center w-full h-[100px] bg-transparent absolute">
        <div className="h-[150px] w-[150px] relative z-10">
          <Image src={logo} alt="Logo" className="h-full w-full" />
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
        <li className="list-none mid-heading transition-all">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="list-none mid-heading relative group transition-all">
          <Link href={"/service"}>Services</Link>
        </li>
        <li className="list-none mid-heading transition-all">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="list-none mid-heading transition-all">
          <Link href={"/about"}>About Us</Link>
        </li>
        <li className="list-none mid-heading transition-all">
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li className="list-none mid-heading transition-all">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Header;
