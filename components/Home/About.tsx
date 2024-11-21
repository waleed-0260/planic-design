import React from 'react'
import experience from "../../public/images/experience.png"
import Image from 'next/image'
const About = () => {
  return (
    <div className='w-[90%] flex md:flex-row flex-col items-center gap-5 my-[100px]'>
        <div className='flex md:flex-row flex-col items-center justify-center gap-3 w-[50%]'>
            <div className='flex flex-col'>
                <p className='w-[150px] font-semibold'>Years of experience</p>
                <h1 className='text-6xl font-bold' data-aos="zoom-in">15</h1>
            </div>
                <div className='h-[500px] w-[250px] rounded-md rotate-[-20deg]' data-aos="zoom-out" data-aos-delay="300">
            <Image src={experience} alt="" className='object-cover h-full w-full rounded-xl'/>
                </div>
        </div>
            <div className='flex flex-col space-y-3 w-[40%] md:mt-0 mt-4' data-aos="fade-left">
                <h1 className='text-2xl font-bold'>Est. 1986</h1>
                <p className='textColor'>Archin Studio is an archiectural practice based in Boston. We cut ourteeth on designing and creating buildings that are both beautiful and sustainable.                </p>
                <button className='bg-white rounded-full text-black w-[130px] h-[50px] hover:bg-black hover:text-white transition'>Our Studio</button>
            </div>
    </div>
  )
}

export default About