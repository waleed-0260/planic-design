import React from 'react'
import Architect from "../../public/images/Architect.png"
import Visulization from "../../public/images/Visulization.png"
import interior from "../../public/images/interior.png"
import service2 from "../../public/images/service2.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
// import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link'
import { MdOutlineArchitecture } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { FaHardHat } from "react-icons/fa";
const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[90%] '>
        <h1 data-aos="zoom-in">OUR SERVICES</h1>

        <div className='mt-5 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1  ' data-aos="fade-up" data-aos-delay="300">
            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 md:border-b-[1px] border-[#b3b2af]'>
                <p className='text-3xl primaryColor'>
                {/* <CiBezier/> */}
                <MdOutlineArchitecture/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Architecture</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={Architect} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <h1 className='font-bold md:text-2xl text-xl'>Crafting Structures with Purpose and Precision</h1>
                <p className='text-sm textColor'>At Planic Design, we create architectural designs that blend functionality with aesthetic appeal. From concept development to final blueprints, our team delivers innovative solutions tailored to your needs.</p>
                <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Explore Architectural Solutions<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start px-5 justify-around border-l-[1px] border-[#b3b2af] md:border-b-[1px] border-[#b3b2af]'>
                <p className='text-3xl primaryColor'>
                {/* <CiBezier/> */}
                <FaCouch/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Interior Design</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={interior} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <h1 className='font-bold md:text-2xl text-xl'>Designing Interiors That Define You</h1>
                <p className='text-sm textColor'>Transform your spaces into stunning, functional environments. Our bespoke interior design services focus on blending your style with modern trends to create spaces that inspire.</p>
                <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Start Your Interior Transformation <IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
            </div>
            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 '>
                <p className='text-3xl primaryColor'>
                {/* <CiBezier/> */}
                <BiCube/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>3D Visulaization</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={Visulization} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <h1 className='font-bold md:text-2xl text-xl'>Viuslize your vision</h1>
                <p className='text-sm textColor'>Bring your ideas to life with cutting-edge 3D visualization. Our photorealistic renderings help you preview designs before execution, ensuring every detail is perfect.</p>
                <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> See your design in 3D<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
            </div>

            <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px]  border-[#b3b2af]'>
                <p className='text-3xl primaryColor'>
                {/* <CiBezier/> */}
                <FaHardHat/>

                </p>
                <h1 className='font-semibold sm:text-2xl text-xl'>Construction Supervision</h1>
                <div className='md:w-[160px] w-[250px] h-[140px]'> 
                    <Image src={service2} alt="building" className='object-cover rounded-md h-full w-full'/>
                </div>
                <h1 className='font-bold md:text-2xl text-xl'>Building with Care, Precision, and Expertise</h1>
                <p className='text-sm textColor'>Our construction supervision services ensure every aspect of your project is executed flawlessly. We oversee the process with a meticulous eye, delivering results that exceed expectations.</p>
                <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Ensuring Excellence in Execution<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
            </div>
        </div>
    </div>  )
}

export default Services