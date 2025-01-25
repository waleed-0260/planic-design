"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuQuote } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Planic Design turned our vision into a stunning reality. Every detail was handled with precision and care",
      name: "Sarah M",
      position: "Marketing Manager",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "Exceptional creativity and professionalism. They made our home feel like a masterpiece.",
      name: "Omar R",
      position: "CEO, TechCorp",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "From concept to completion, the team exceeded our expectations at every step.",
      name: "Emily T",
      position: "CEO, TechCorp",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="flex h-full mt-[100px] w-[90%] flex md:flex-row flex-col">
      {/* Left Section */}
      <div className="md:w-2/5 flex flex-col justify-start items-start p-4" data-aos="fade-left">
        <h3 className="text-lg font-semibold mb-4 ">What Clients Say About Us</h3>
        <LuQuote className="text-8xl primaryColor" />
      </div>

      {/* Right Section */}
      <div className="md:w-3/5 relative">
        <Swiper
          spaceBetween={30}
          // navigation
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev", // Link to custom previous button
            nextEl: ".custom-next", // Link to custom next button
          }}
          className="h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center ">
              <p className="md:text-3xl text-xl font-semibold leading-10 mb-4">
              “{testimonial.text}”
              </p>
              <div className="flex flex-row items-center gap-4 mt-[100px] w-full pt-[50px] border-t-[1px] border-[#b3b2af]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <span className="flex flex-col ">

                <strong className="text-lg">{testimonial.name}</strong>
                <span className="textColor">{testimonial.position}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="rounded-full border-[#b3b2af] border-[1px] text-black w-[120px] h-[40px] flex flex-row items-center justify-around absolute right-0 bottom-[20px] bg-white z-50">
          <p className="cursor-pointer custom-prev">
            <FaChevronLeft/>
          </p>
          <p>
          1/3
          </p>
          <p className="cursor-pointer custom-next">
            <FaChevronRight/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
