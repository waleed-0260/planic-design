"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
// import logo from "../../public/images/logo.enc";
// import logo from "../../public/images/logo.png"
import Link from "next/link";
// import { MdSearch } from "react-icons/md";
// import { TbMenu } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import whitelogo from "../../public/images/whitelogo.png";
const menuItems = [
  { name: "Home", subItems: [], link: "/" },
  {
    name: "Services",
    subItems: [
      { name: "Architectural Planning", id: "architecture" },
      { name: "Interior Design", id: "interior" },
      { name: "3D Visulization & Renderings", id: "turnkey" },
      { name: "Renovation & Fit Out Solutions", id: "innovative" },
      // { name: "Construction OnSite Supervision", id: "construction" },
    ],
    link: "/service",
  },
  {
    name: "Our Projects",
    subItems: [
      // { name: "Team", id: "team" },
      // { name: "Careers", id: "careers" }
    ],
    link: "/#portfolio",
  },
  {
    name: "About Us",
    subItems: [
      { name: "Our Story", id: "story" },
      { name: "Values", id: "values" },
      { name: "Process", id: "process" },
      { name: "Teams", id: "teams" },
    ],
    link: "/about",
  },
  { name: "Contact", subItems: [], link: "/contact" },
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full lg:block hidden transition-all duration-300 ease-in-out z-50
    ${
      scrolled
        ? "bg-white text-black shadow-md fixed top-0"
        : hoveredItem
        ? "bg-[#231f20] text-white absolute top-0 h-[400px]"
        : "bg-transparent text-white absolute top-0 h-16"
    }
  `}
        onMouseEnter={() => setHoveredItem(true)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <nav className="h-16 flex items-center justify-center px-4">
          <ul className="flex space-x-16 flex-row justify-between">
            {menuItems.map((item) => (
              <li key={item.name} className="relative cursor-pointer z-50">
                <Link href={item.link}>
                  <p className=" font-semibold flex items-center cursor-pointer">
                    {item.name}
                    {item.subItems.length > 0 &&
                      (hoveredItem === true ? (
                        <ChevronUp className="ml-1 w-4 h-4" />
                      ) : (
                        <ChevronDown className="ml-1 w-4 h-4" />
                      ))}
                  </p>
                </Link>
                {hoveredItem === true && item.subItems.length > 0 && (
                  <ul className="absolute left-0 mt-2 w-48 rounded-md py-2 transition-all">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link href={`${item.link}#${subItem.id}`}>
                          <p className="block px-2 py-2 text-sm">
                            {subItem.name}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {hoveredItem && (
          <div className="flex justify-start items-center h-full p-8">
            <Image
              src={whitelogo}
              alt="Company Logo"
              width={200}
              height={100}
              className=""
            />
          </div>
        )}
      </header>

      <div>
        {/* Navbar */}
        <div className="flex lg:hidden flex-row justify-between p-1 items-center w-[95%] h-[100px] bg-transparent absolute">
          <div className="h-[100px] w-[100px] relative z-10">
            {/* <Image src={whitelogo} alt="Logo" className="h-full w-full" /> */}
          </div>
          <p
            className="text-3xl p-1 z-50 rounded-md text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
          >
            {menuOpen ? <RxCross2 /> : <IoIosMenu />}
          </p>
        </div>

        {/* Menu */}
        <ul
          className={`${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } flex flex-col gap-4 relative z-10 overflow-hidden transition-all duration-500 ease-in-out bg-[#333333] pb-0 pl-4 text-white space-y-2`}
        >
          <div className="h-[100px] w-[100px] relative z-10">
            <Image src={whitelogo} alt="Logo" className="h-full w-full" />
          </div>
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
          <li className="list-none mid-heading transition-all pb-4">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="fixed bottom-[20px] right-[100px] z-50">
        <FloatingWhatsApp
          phoneNumber="+923489755702"
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
}
