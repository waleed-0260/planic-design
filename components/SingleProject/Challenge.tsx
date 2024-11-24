import React from 'react'
import challenge1 from "../../public/images/challenge1.jpg"
import challenge2 from "../../public/images/challenge2.jpg"
import challenge3 from "../../public/images/challenge3.jpg"
// import project2 from "../../public/images/project2.jpg"
import Image from 'next/image'

const Challenge = () => {
  return (
    // <div>
            <div className='w-[90%] py-[50px] my-[50px]' data-aos="fade-up">
        <h1 className='text-5xl font-bold'>Challenge</h1>
        <p className='text-2xl font-semibold mt-[50px] leading-10'>Create an unconventional yet user-friendly website – innovative, with a clean and simple design that communicates brand values and showcases multi-media content. Site that spreads the message: "Islamic stories your child will love"</p>
        <div className='flex flex-row w-full justify-between space-x-3 mt-[100px]'>
            <Image src={challenge1} alt="project image" className='rounded-2xl w-[100%] h-[250px]' data-aos="zoom-in" data-aos-delay="300"/>
            <Image src={challenge2} alt="project image" className='rounded-2xl w-[100%] h-[250px]' data-aos="zoom-in" data-aos-delay="300"/>
            <Image src={challenge3} alt="project image" className='rounded-2xl w-[100%] h-[250px]' data-aos="zoom-in" data-aos-delay="300"/>
        </div>
    </div>
    // </div>
  )
}

export default Challenge