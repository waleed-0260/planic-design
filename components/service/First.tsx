import React from 'react'
// import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import Link from 'next/link';
const First = () => {
  return (
    <div className='flex md:flex-row flex-col md:items-center items-left justify-between w-[90%] my-[100px]'>
        <div className='flex flex-col space-y-6 md:w-[50%]' data-aos="fade-left">
            <h1 className='font-bold md:text-4xl text-2xl'>Comprehensive Solutions for Every Space</h1>
            <p className='textColor text-md'>We provide end-to-end architecture and interior design services, from planning and creative design to project management and construction supervision. Whether it's a residential sanctuary or a commercial masterpiece, our team ensures every detail exceeds expectations.</p>
            <Link href={"/contact"} className='w-[250px] h-10 flex items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] textColor hover:text-white rounded-full transition duration-300 text-sm'> Contact Us<IoIosArrowRoundDown/></Link>
            {/* <span className='h-[40px] w-[300px] border-[1px] border-black rounded-full flex flex-row items-center justify-around'>
                <p>An award winning studio</p>
                <p>2020</p>
            </span> */}
        </div>

        <div className='flex flex-row items-center justify-between p-[30px] border-2 border-[#000000] rounded-md w-[300px] md:w-[30%] md:mt-0 mt-6' data-aos="fade-right">
            <div className='flex flex-col'>
                <p className='font-bold text-4xl'>92%</p>
                <p className='text-sm'>Clients satisfied</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-4xl'>152</p>
                <p className='text-sm'>Projects done</p>
            </div>
        </div>
    </div>
  )
}

export default First