"use client";
import React, {useRef} from "react";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
//   import { GoArrowUpRight } from "react-icons/go";
// import proc1 from "../../public/images/proc1.jpg"
// import proc3 from "../../public/images/proc3.jpg"
// import proc4 from "../../public/images/proc4.jpg"
// import Image from 'next/image';
// import aboutProcess from "../../public/images/aboutProcess.png"
// import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FiCheckCircle } from "react-icons/fi";

const Process = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const process = [
    {
      number: "01",
      heading: "Initial Construction",
      text: "",
    },
    {
      number: "02",
      heading: "Dream Project",
      text: "We listen to your Vision about the Dream Project",
    },
    {
      number: "03",
      heading: "Schematic",
      text: "Graphic Communication, providing Illustrative Diagrammatic Sketching",
    },
    {
      number: "04",
      heading: "Design & Development",
      text: "Phase of Graphic Design where we provide Designed plans, 3D Modelling, fly-throughs, renders and visualisation",
    },
    {
      number: "05",
      heading: "Detailed Working DWGs",
      text: "Meticulously designed Plans of your Dream Project and providing the complete set of all sorts of drawings",
    },
    {
      number: "06",
      heading: "Construction Oversight",
      text: "We offer comprehensive site inspection services and monitor construction progress meticulously. Our team is committed to providing clients with timely updates and effectively communicating any issues encountered on-site, accompanied by appropriate solutions.",
    },
    {
      number: "07",
      heading: "Connected till the end",
      text: "We do not leave our clients in limbo; instead, we remain engaged to ensure the successful implementation of your dream project",
    },
  ];

  return (
    <div
      className="w-[90%] flex flex-col items-start justify-center my-[80px] space-y-5"
      id="process"
    >
      <h1 className="md:text-[72px] text-2xl py-9 md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full mb-[50px]">
        Our Process
      </h1>
      <div className="flex flex-row space-x-2 justify-end w-full font-bold">
        <p ref={prevRef} className=" custom-prev cursor-pointer">PREV</p>
        <p ref={nextRef} className="custom-next cursor-pointer">NEXT</p>
      </div>
      {/* <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-[150px] w-full'> */}
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          980: {
            slidesPerView: 3,
          },
        }}
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        // }}
        // speed={500}
        loop={true}
        modules={[Navigation]}
          navigation={{
    nextEl: ".custom-next", // Custom class for the next button
    prevEl: ".custom-prev", // Custom class for the previous button
  }}
        className="mt-[150px] w-full"
      >
        {process.map((item, index) => {
          return (
            <SwiperSlide className="w-[30%] border-l-2 pl-3 border-gray-200">
              {/* Icon with dashed border and line */}
              <div className="flex items-center gap-4">
                <div className="border-4 border-dashed border-gray-300 p-3">
                  <FiCheckCircle className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1 border-t-4 border-dashed border-gray-300"></div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-black">
                {item.heading}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Process;
