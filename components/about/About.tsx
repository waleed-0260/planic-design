import React from 'react'
import aboutSection from "../../public/images/aboutSection.png"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

const About = () => {
  return (
    <div id='story' className='flex md:flex-row flex-col md:items-center items-start justify-between space-x-4 gap-4 w-[90%] my-[100px]'>
      <div className="relative text-black md:w-[15%] h-[165px] rounded-full flex items-center justify-center" data-aos="fade-right">
  {/* Center Image */}
  <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
    <Image src={aboutSection} alt="" className="object-cover w-full h-full" />
  </div>

  {/* Circular Text */}
  <svg
    className="absolute inset-0 w-full h-full rotating-box p-1"
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <defs>
      <path
        id="circlePath"
        d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
      />
    </defs>
    <text fill="black" fontSize="16" textAnchor="middle">
      <textPath href="#circlePath" startOffset="50%">
        LANSCAPE DESIGN PLANIC DESIGN •
      </textPath>
    </text>
  </svg>
</div>

<div className='flex flex-col md:w-[45%]' data-aos="fade-up">
  <h1 className='text-3xl font-semibold '>From Concept to Creation: A Journey of <span className='text-[#231f20]'>Excellence</span></h1>
      <p className='leading-10 text-2xl'>
      Planic Design started with a mission to transform ordinary spaces into extraordinary environments. Over the years, we have grown into a full-service architecture and interior design firm, renowned for our innovative solutions and meticulous attention to detail.
Our work is driven by a passion for design and a commitment to delivering personalized experiences for our clients. Whether designing a home, an office, or a retail space, we create designs that inspire, elevate, and endure.
      </p>
      <Link href={"/portfolio"} className="rounded-full w-[280px] h-[50px] bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] text-[#231f20] hover:text-white transition flex flex-row items-center justify-center gap-2 font-light mt-4">
          Learn More About Our Journey <GoArrowUpRight />
        </Link>
      
</div>

      <div className='flex flex-col md:w-[20%]' data-aos="fade-left">
        <h1 className='text-6xl text-[#231f20]'>95%</h1>
        <p className='textColor mt-3'>Clients Satisfied and repeating        </p>

        <h1 className='text-6xl text-[#231f20] mt-[50px]'>125%</h1>
        <p className='textColor mt-3'>Project Done</p>
      </div>
    </div>
  )
}

export default About