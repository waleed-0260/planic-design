"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiCheckCircle } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

const Process = ({
  process,
}: {
  process: Array<{ number: string; heading: string; text: string }>;
}) => {
  const prevRef = useRef<HTMLParagraphElement>(null);
  const nextRef = useRef<HTMLParagraphElement>(null);

  // Track swiper state
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className="w-[90%] flex flex-col items-start justify-center my-[80px] space-y-5"
      id="process"
    >
      <h1 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full mb-[50px]">
        Our Process
      </h1>

      {/* Navigation */}
      <div className="flex flex-row space-x-2 justify-end w-full font-bold">
        <p
          ref={prevRef}
          className={`custom-prev cursor-pointer ${
            isBeginning ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          PREV
        </p>
        <p
          ref={nextRef}
          className={`custom-next cursor-pointer ${
            isEnd ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          NEXT
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          980: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="mt-[150px] w-full"
      >
        {process.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[30%] border-l-2 md:pl-2 border-gray-200"
          >
            <div className="flex items-center gap-4">
              <div className="border-4 border-gray-300 p-3">
                <FiCheckCircle className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1 border-t-4 border-gray-300"></div>
            </div>

            <h3 className="mt-4 text-lg font-bold text-black">
              {item.heading}
            </h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              {item.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Process;
