import React from 'react'
// import expertise2 from "@/public/images/expertise2.jpg"
import Image from 'next/image'
import Link from 'next/link'
const Specializing = ({img, heading, text, points}:any) => {
  return (
    <div className='w-[90%] mx-auto my-[50px]'>
      {/* Heading */}
      <h1 className='text-left md:text-[52px] text-2xl  mb-6 leading-tight'>
        {heading}
      </h1>

      {/* Text and Image Row */}
      <div className='flex md:flex-row flex-col justify-between space-x-5 items-start w-full mt-[40px]'>
        {/* Text on Left */}
        <div className='w-1/2 space-y-4 flex-col flex flex-1 justify-between md:h-[300px]'>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
          <p className='textColor'>{text}</p>
          <ol className='list-decimal list-inside space-y-5 font-bold'>
            {points.map((point:any, index:any) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
          <div>
            <Link href={"/portfolio"} className="button">View Portfolio</Link>
          </div>
        </div>

        {/* Image on Right */}
        <div className='w-1/2 flex justify-start md:h-[300px]'>
        {/* <div className='w-[400px] h-[400px]'> */}

          <Image
            src={img}
            alt='expertise'
            className=' object-cover'
            />
            {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Specializing
