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

const Header = (color: any) => {
  const [bgColor, setBgColor] = useState("[#ffffff]");
  const [btnColor, setBtnColor] = useState("[#0D2137]");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setBgColor("[#0D2137]");
        setBtnColor("white");
      } else {
        setBgColor("[#ffffff]");
        setBtnColor("[#0D2137]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleArrowClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        className={`lg:flex hidden flex-row items-center justify-evenly w-full transition-all h-[80px] z-50 bg-transparent absolute`}
      >
        <div className=" flex flex-row items-center justify-between w-[80%]">

        <Link href={"/"} className="h-[170px] z-10">
          <Image src={logo} alt="" className="w-full h-full " />
        </Link>
        <div>
          <ul className={`flex flex-row gap-4 relative z-10`}>
            <li className="list-none mid-heading text-white hover:text-[#FF8E2B] transition-all">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="list-none mid-heading relative group transition-all text-white hover:text-[#FF8E2B] transition-all">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="list-none mid-heading hover:text-[#FF8E2B] transition-all text-white">
              <Link href={"/about"}>Portfolio</Link>
            </li>
            <li className="list-none mid-heading hover:text-[#FF8E2B] transition-all text-white">
              <Link href={"/contact"}>About Us</Link>
            </li>{" "}
            <li className="list-none mid-heading hover:text-[#FF8E2B] transition-all text-white">
              <Link href={"/contact"}>Our Blogs</Link>
            </li>{" "}
            <li className="list-none mid-heading hover:text-[#FF8E2B] transition-all text-white">
              <Link href={"/contact"}>Contact</Link>
            </li>{" "}
          </ul>
        </div>
        <div className="relative z-10 flex flex-row text-white space-x-4">
          <span>EN</span>
          <span>FR</span>
          <p className="text-2xl text-white">
          <MdSearch/>
          </p>
          <p className="text-2xl text-white">
            <TbMenu/>
          </p>
        </div>
        </div>

      </div>

      <div className="flex lg:hidden flex-row justify-between p-2 items-center w-full h-[100px] bg-[#0D2137]">
        <div className="h-[150px] w-[150px]  relative z-10">
          <Image src={logo} alt="" className="h-full w-full" />
        </div>
        <p className="text-3xl text-white"><IoIosMenu/></p>

      </div>
      <div className="fixed bottom-[20px] right-[100px] z-50">
        {/* <FloatingWhatsApp
          phoneNumber="+923392073100"
          accountName="SpearingSystem"
          statusMessage="Replies within 15 minutes"
          chatMessage="Hello there! How can I help you ?"
          avatar="/images/logoAvatar.png"
          chatboxHeight={350}
          buttonClassName="floating-whatsapp-button"
        /> */}
      </div>
    </>
  );
};

export default Header;
