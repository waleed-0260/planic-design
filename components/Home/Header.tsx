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
import whitelogo from "../../public/images/whitelogo.webp";
import blacklogo from "@/public/images/blacklogo.webp"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const menuItems = [
  { name: "Home", subItems: [], link: "/" },
  {
    name: "Services",
    subItems: [
      { name: "Architectural Planning", id: "/architecture" },
      { name: "Interior Design", id: "/interior" },
      { name: "3D Visualization  & Renderings", id: "/visualization " },
      { name: "Renovation & Fit Out Solutions", id: "/renovation" },
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
    link: "/portfolio",
  },
  {
    name: "About Us",
    subItems: [
      { name: "Our Story", id: "#story" },
      { name: "Values", id: "#values" },
      { name: "Process", id: "#process" },
      { name: "Teams", id: "#teams" },
    ],
    link: "/about",
  },
  { name: "Contact", subItems: [], link: "/contact" },
];

export default function Header() {

    const [openDropdown, setOpenDropdown] = useState<number | null>(null);


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

  
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


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
            <li className={scrolled ? "flex absolute top-[-10px] left-[120px]":"hidden"}><Image src={blacklogo} alt="blacklogo" width={80} height={80}/></li>
            {menuItems.map((item) => (
              <li key={item.name} className="relative cursor-pointer z-50">
                <Link href={item.link}>
                  <p className="  flex items-center cursor-pointer">
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
                        <Link href={`${item.link}${subItem.id}`}>
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

     <div
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
  }`}
>
  {/* Navbar */}
  <div className="flex lg:hidden flex-row justify-between items-center w-[95%] h-[100px] mx-auto">
    {/* Logo */}
    <div className="h-[80px] w-[80px] relative z-10">
      {scrolled ?
      <Image src={blacklogo} alt="Logo" className="h-full w-full" />:
      null  
    }
    </div>

    {/* Menu Icon */}
    <div
      className={`p-2 rounded-md cursor-pointer transition-colors duration-300 z-50 ${
        scrolled ? "bg-brown-600 text-black" : "bg-transparent text-white"
      }`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <RxCross2 size={28} /> : <IoIosMenu size={28} />}
    </div>
  </div>

  {/* Menu */}
  <ul
    className={`fixed top-0 left-0 w-full h-screen flex flex-col gap-6 transition-all duration-500 ease-in-out overflow-hidden pt-[90px] ${
      menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    } ${scrolled ? "bg-white text-black" : "bg-[#333333] text-white"}`}
  >

    {/* Menu Links */}


      {menuItems.map((item, index) => (
        <li
          key={item.name}
          className="list-none mid-heading ml-4 "
        >
          <div className="flex justify-between items-center pr-4">
            <Link href={item.link}>{item.name}</Link>

            {item.subItems.length > 0 && (
              <button
                onClick={() => toggleDropdown(index)}
                className="focus:outline-none"
              >
                {openDropdown === index ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
              </button>
            )}
          </div>

          {/* Submenu */}
          {openDropdown === index && item.subItems.length > 0 && (
            <ul className="ml-4 mt-2 space-y-1">
              {item.subItems.map((sub) => (
                <li key={sub.name}>
                  <Link href={`${item.link}${sub.id}`} className="text-sm">
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}

    {/* <li className="list-none mid-heading ml-4 pt-[90px]">
      <Link href={"/"}>Home</Link>
    </li>
    <li className="list-none mid-heading ml-4">
      <Link href={"/service"}>Services</Link>
    </li>
    <li className="list-none mid-heading ml-4">
      <Link href={"/portfolio"}>Portfolio</Link>
    </li>
    <li className="list-none mid-heading ml-4">
      <Link href={"/about"}>About Us</Link>
    </li>
    <li className="list-none mid-heading ml-4">
      <Link href={"/contact"}>Contact</Link>
    </li> */}
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
