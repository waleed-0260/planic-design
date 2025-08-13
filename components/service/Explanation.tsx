import React from 'react'
import Link from 'next/link'
const Explanation = () => {
  return (
    <div className='flex flex-col w-[90%] my-[80px] space-y-9'>
        <h1 className='md:text-[52px] text-2xl leading-tight'>Services at Planic Design</h1>
        <p className='text-md textColor mt-2'>At Planic Design, we offer a comprehensive suite of interior design services tailored to transform spaces into thoughtful, livable environments. Whether you're renovating a home, designing a modern office, or planning a commercial project, our team blends creativity with precision to deliver solutions that reflect your style and goals. Below, you’ll find an overview of our core services, each designed to meet the unique demands of your space.</p>
        <div className='md:flex hidden flex-row md:space-x-5 '>
  <Link className='button flex items-center justify-center' href={"#architecture"}>Architectural Design</Link>
  <Link className='button flex items-center justify-center' href={"#renovation"}>Renovation & Fit Out</Link>
  <Link className='button flex items-center justify-center' href={"#visulization"}>3D Visualization</Link>
  <Link className='button flex items-center justify-center' href={"#interior"}>Interior Design</Link>
</div>

    </div>
  )
}

export default Explanation