import React from 'react'
import loader from "../public/images/loader.gif"
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='bg-black w-[100vw] h-full absolute flex items-center justify-center'>
        <Image src={loader} alt="gjrit" className='object-cover'/>
    </div>
  )
}

export default Loader