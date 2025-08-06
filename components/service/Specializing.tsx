import React from 'react'
import expertise2 from "@/public/images/expertise2.jpg"
import Image from 'next/image'

const Specializing = ({img, heading, text}:any) => {
  return (
    <div className='w-[90%] mx-auto my-[50px]'>
      {/* Heading */}
      <h1 className='text-left md:text-[52px] text-2xl  mb-6 leading-tight'>
        {heading}
      </h1>

      {/* Text and Image Row */}
      <div className='flex md:flex-row flex-col justify-between items-start w-full'>
        {/* Text on Left */}
        <div className='w-1/2 space-y-4'>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
          <p className='textColor'>{text}</p>
        </div>

        {/* Image on Right */}
        <div className='w-1/2 flex justify-start'>
        <div className='w-[350px] h-[350px]'>

          <Image
            src={img}
            alt='expertise'
            className=' object-cover'
            />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Specializing
