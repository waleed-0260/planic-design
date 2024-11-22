import React from 'react'
import { CiBezier } from "react-icons/ci";
import { LuHardHat } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import building from "../../public/images/building.jpg"
import interior from "../../public/images/interior.jpg"
import furniture from "../../public/images/furniture.jpg"
import consulting from "../../public/images/consulting.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[90%] '>
        <h1 data-aos="zoom-in">OUR SERVICES</h1>

        <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4' data-aos="fade-up" data-aos-delay="300">
            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl text-[#FF4814]'>
                {/* <CiBezier/> */}
                <LuHardHat/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Architecture & Bulding</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={building} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Planning, 3D Vissuallization, Landscape Design, Structural Drawing, CGI, Construction Supervision</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] md:relative top-[100px]'>
                <p className='text-3xl text-[#FF4814]'>
                <CiBezier/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Interior & Exterior design</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={interior} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Planning, 3D Vissuallization, Landscape Design, Structural Drawing, CGI, Construction Supervision</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl text-[#FF4814]'>
                <IoBedOutline/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Furniture Productions</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={furniture} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Planning, 3D Vissuallization, Landscape Design, Structural Drawing, CGI, Construction Supervision</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] md:relative top-[100px]'>
                <p className='text-3xl text-[#FF4814]'>
                <FaRegComments/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Project Consulting & Supervisor</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={consulting} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Planning, 3D Vissuallization, Landscape Design, Structural Drawing, CGI, Construction Supervision</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>
        </div>
        <button className='bg-[#FF4814] hover:bg-black transition-all text-white rounded-full w-[240px] h-[50px] mt-[200px] hover:shadow-2xl font-thin flex flex-row items-center gap-1 justify-center'>
            Get A Free Quote Now <GoArrowUpRight/>
        </button>
    </div>
  )
}

export default Services