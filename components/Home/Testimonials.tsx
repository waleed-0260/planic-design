"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuQuote } from "react-icons/lu";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget. More than what i'm expected. I’m really satisfied and recommended!.",
      name: "Jane Doe",
      position: "Marketing Manager",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis doloremque dignissimos, blanditiis eaque ullam suscipit aut exercitationem, accusantium quaerat voluptatem commodi. Libero fugiat tempore nulla eos iure veritatis, quam dignissimos harum molestias. Incidunt at quam voluptatem corrupti ipsum, quo molestias reiciendis asperiores nostrum iusto, vero quod, nisi dignissimos voluptate quibusdam!",
      name: "John Smith",
      position: "CEO, TechCorp",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="flex h-full mt-[100px] w-[90%] flex md:flex-row flex-col">
      {/* Left Section */}
      <div className="w-2/5 flex flex-col justify-start items-start p-4">
        <h3 className="text-lg font-semibold mb-4 ">What Clients Say About Us</h3>
        <LuQuote className="text-8xl text-red-700" />
      </div>

      {/* Right Section */}
      <div className="md:w-3/5">
        <Swiper
          spaceBetween={30}
          // navigation
          // modules={[Navigation]}
          className="h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center ">
              <p className="text-lg font-semibold leading-10 mb-4">
              “{testimonial.text}”
              </p>
              <div className="flex flex-row items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-2"
                />
                <span className="flex flex-col">

                <strong className="text-lg">{testimonial.name}</strong>
                <span className="textColor">{testimonial.position}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
