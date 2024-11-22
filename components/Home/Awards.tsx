import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const Awards = () => {
    const awards = [
        {
            date: "2023-03-15",
            award: "Best Innovative Design",
            location: "New York, USA"
        },
        {
            date: "2022-11-10",
            award: "Excellence in Architecture",
            location: "Paris, France"
        },
        {
            date: "2021-07-25",
            award: "Outstanding Residential Project",
            location: "London, UK"
        },
        {
            date: "2023-01-05",
            award: "Top Urban Design",
            location: "Tokyo, Japan"
        },
        {
            date: "2022-09-30",
            award: "Green Building Award",
            location: "Berlin, Germany"
        },
        {
            date: "2021-12-12",
            award: "Most Sustainable Project",
            location: "Sydney, Australia"
        },
        {
            date: "2023-06-18",
            award: "Best Commercial Design",
            location: "Dubai, UAE"
        },
        {
            date: "2022-04-22",
            award: "Interior Excellence Award",
            location: "Toronto, Canada"
        },
        {
            date: "2021-10-08",
            award: "Heritage Restoration Award",
            location: "Rome, Italy"
        }
    ]
  return (
    <div className='bg-[#262929] w-full my-[50px] py-[50px] rounded-t-2xl flex flex-col items-center'>
        <h1 className='text-white text-4xl font-bold mt-[100px] text-center'>Awards & Recognitions</h1>
        <div className="flex flex-col md:items-center items-start justify-center w-[90%] mt-4 gap-4">
  {awards.map((item, index) => {
    return (
      <div
        className="w-full py-8 flex md:flex-row flex-col justify-between md:items-center items-start md:hover:bg-[#FF4814] bg-[#4a4946] md:bg-transparent transition-all text-white p-4 md:rounded-lg  rounded-lg md:gap-0 gap-4"
        key={index}
      >
        {/* Date */}
        <p className="md:w-[20%] text-left">{item.date}</p>

        {/* Award */}
        <p className="md:w-[40%] text-left">{item.award}</p>

        {/* Location */}
        <p className="md:w-[30%] text-left flex flex-row items-center gap-2"><CiLocationOn/> {item.location}</p>

        {/* Icon */}
        <span className="w-[10%] text-right">
          <IoIosArrowRoundForward />
        </span>
      </div>
    );
  })}
</div>
    </div>
  )
}

export default Awards