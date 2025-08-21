"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
// import { Button } from "../ui/button";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import whitelogo from "../../public/images/whitelogo.webp"
import Image from "next/image";
const Hero = () => {

  const [formDataSlide1, setFormDataSlide1] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  
  const [formDataSlide2, setFormDataSlide2] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  
  const [formDataSlide3, setFormDataSlide3] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  
  // Generic handleChange
  const handleChange = (e:any, slide:any) => {
    const { name, value } = e.target;
  
    if (slide === 1) {
      setFormDataSlide1((prev) => ({ ...prev, [name]: value }));
    } else if (slide === 2) {
      setFormDataSlide2((prev) => ({ ...prev, [name]: value }));
    } else if (slide === 3) {
      setFormDataSlide3((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  // Generic handleSubmit
  const handleSubmit = async (e:any, slide:any) => {
    e.preventDefault();
  
    const formData =
      slide === 1
        ? formDataSlide1
        : slide === 2
        ? formDataSlide2
        : formDataSlide3;
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // toast.success("Form submitted successfully!");
        alert("Message sent successfully!");
        // e.target.reset();
        if (slide === 1) {
          setFormDataSlide1({ name: "", email: "", phone: "", type:"", message: "" });
        } else if (slide === 2) {
          setFormDataSlide2({ name: "", email: "", phone: "", type:"", message: "" });
        } else if (slide === 3) {
          setFormDataSlide3({ name: "", email: "", phone: "", type:"", message: "" });
        }
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      // toast.error("Error submitting form. Please try again!");
    }
  };

  const swiperRef = useRef<any>(null);

  // Function to pause the swiper autoplay when the user focuses on any input
  const handleFocus = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.pause(); // Pause autoplay
    }
  };

  // Function to resume the swiper autoplay when the user blurs the input
  const handleBlur = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start(); // Resume autoplay
    }
  };

  return (
    <div className="w-full relative">
      <Header />
     <div
  className="relative flex items-center justify-center w-full lg:h-[45rem] h-[57rem] bg-cover md:bg-bottom 2xl:bg-center bg-center bg-no-repeat text-white"
  style={{ backgroundImage: `url('/images/Slide1.webp')` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

  {/* Content */}
  <div className="md:w-[90%] w-[95%] flex md:flex-row flex-col justify-between h-[90%] md:mt-[50px] md:ml-[50px] ml-[20px] z-10">
    {/* Left Section */}
    <div className="flex items-start justify-start flex-col md:justify-between md:w-[40%] z-50">
      <Image src={whitelogo} alt="logo" width={300} height={300} />
      <p>let’s Inspire, Innovate and Elavate with Planic Design!</p>
    </div>

    {/* Right Section (Form) */}
    <div className="flex md:items-end items-start md:justify-between flex-col text-white md:w-[50%]">
      <form
        className="md:w-[70%] w-[90%] bg-white bg-opacity-30 md:mt-[50px] md:px-6 py-3 rounded-md flex flex-col space-y-5 z-50 md:pb-4 pb-[20px]"
        onSubmit={(e) => handleSubmit(e, 2)}
      >
        <input
          className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          value={formDataSlide2.name}
          onChange={(e) => handleChange(e, 2)}
        />

        <input
          className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          value={formDataSlide2.email}
          onChange={(e) => handleChange(e, 2)}
        />

        <input
          className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={formDataSlide2.phone}
          onChange={(e) => handleChange(e, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />

        <select
          className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
          name="type"
          id="type"
          value={formDataSlide2.type}
          onChange={(e) => handleChange(e, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        >
          <option value="" disabled hidden>
            Select Project Type
          </option>
          <option value="resedential" className="text-black">
            Resedential
          </option>
          <option value="commercial" className="text-black">
            Commercial
          </option>
          <option value="educational" className="text-black">
            Educational
          </option>
          <option value="healthcare" className="text-black">
            Healthcare
          </option>
          <option value="hospitality" className="text-black">
            Hospitality
          </option>
          <option value="marquee" className="text-black">
            Marquee
          </option>
          <option value="restaurant" className="text-black">
            Restaurant
          </option>
        </select>

        <input
          className="p-2 text-white border-b-2 border-b-white bg-transparent placeholder-white"
          type="text"
          name="message"
          id="message"
          placeholder="Message Details"
          value={formDataSlide2.message}
          onChange={(e) => handleChange(e, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />

        <button className="w-full py-3 bg-transparent border-2 hover:bg-white transition duration-300 rounded-md text-center text-white hover:text-black">
          Get Our Free Consultation
        </button>
      </form>
    </div>
  </div>
</div>

      {/* <div className="absolute right-[40px] sm:bottom-[40px] bottom-[70px] flex flex-row items-center space-x-2  z-50">
        <p className="sm:text-6xl text-3xl text-white custom-prev cursor-pointer">
          <GoChevronLeft />
        </p>
        <p className="sm:text-6xl text-3xl text-white custom-next cursor-pointer">
          <GoChevronRight />
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
