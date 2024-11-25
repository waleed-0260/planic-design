import React from 'react'
import service1 from "../../public/images/service1.png"
import service2 from "../../public/images/service2.png"
import service3 from "../../public/images/service3.png"
import service4 from "../../public/images/service4.png"
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
        <h1 data-aos="zoom-in">OUR SERVICES</h1>

        <div className='mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4' data-aos="fade-up" data-aos-delay="300">
            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl text-[#FF4814]'>
                {/* <CiBezier/> */}
                <MdOutlineArchitecture/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Architecture</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service1} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>At Planic Design, we create architectural designs that blend functionality with aesthetic appeal. From concept development to final blueprints, our team delivers innovative solutions tailored to your needs.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] md:relative top-[100px]'>
                <p className='text-3xl text-[#FF4814]'>
                <FaCouch/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'> Interior Design</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service4} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Transform your spaces into stunning, functional environments. Our bespoke interior design services focus on blending your style with modern trends to create spaces that inspire.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af]'>
                <p className='text-3xl text-[#FF4814]'>
                <BiCube/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>3D Visulization</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service3} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Bring your ideas to life with cutting-edge 3D visualization. Our photorealistic renderings help you preview designs before execution, ensuring every detail is perfect.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px] border-[#b3b2af] md:relative top-[100px]'>
                <p className='text-3xl text-[#FF4814]'>
                <FaHardHat/>
                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Construct Supervision</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service2} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <p className='text-sm textColor'>Our construction supervision services ensure every aspect of your project is executed flawlessly. We oversee the process with a meticulous eye, delivering results that exceed expectations.</p>
                <p className='w-8 h-8 flex items-center justify-center bg-transparent text-black text-center border-[1px] border-black hover:bg-black hover:text-white rounded-full transition duration-300'><IoIosArrowRoundForward style={{rotate:"310deg"}}/></p>
            </div>
        </div>
        <Link href={"/contact"} className='bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] hover:text-white transition-all rounded-full w-[240px] h-[50px] mt-[200px] hover:shadow-2xl font-thin flex flex-row items-center gap-1 justify-center'>
            Get A Free Quote Now <GoArrowUpRight/>
        </Link>
    </div>
  )
}

export default Services