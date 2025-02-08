import React from 'react'
import Architect from "../../public/images/Architect.png"
import Visulization from "../../public/images/Visulization.png"
import interior from "../../public/images/interior.png"
import service2 from "../../public/images/service2.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArchitecture } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { FaHardHat } from "react-icons/fa";
import Link from 'next/link'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[90%] '>
        <h1 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full ">OUR SERVICES</h1>

        <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4' data-aos="fade-up" data-aos-delay="300">
            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl primaryColor'>
                {/* <CiBezier/> */}
                <MdOutlineArchitecture/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Architectural Design</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={Architect} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Transforming visions into structures, our architectural designing service combines innovation and functionality. We craft unique, sustainable designs tailored to your needs, ensuring every project harmonizes aesthetics and practicality.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] '>
                <p className='text-3xl primaryColor'>
                <FaCouch/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'> Interior Designing</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={interior} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Redefine your spaces with our interior designing expertise. From concept to completion, we create personalized, stylish interiors that reflect your personality while maximizing comfort and functionality.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl primaryColor'>
                <BiCube/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Innovative Solutions</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={Visulization} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>At Planic Design, we embrace creativity and advanced technology to deliver innovative solutions across all our services. Whether it’s groundbreaking designs, bespoke interiors, or seamless construction processes, we ensure exceptional outcomes for every project.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] '>
                <p className='text-3xl primaryColor'>
                <FaHardHat/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Construction Onsite Supervision</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service2} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Ensure your project is executed flawlessly with our construction onsite supervision. Our experienced team oversees every detail, ensuring quality, efficiency, and compliance with your vision and standards.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>
        </div>
        <Link href={"/contact"} className='bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white transition-all rounded-full w-[240px] h-[50px] mt-[200px] hover:shadow-2xl flex flex-row items-center gap-1 justify-center'>
            Get A Free Quote Now <GoArrowUpRight/>
        </Link>
    </div>
  )
}

export default Services