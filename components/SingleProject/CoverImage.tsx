import React from 'react'
import projectImg from "../../public/images/projectImg.jpg"
import Image from 'next/image'

const CoverImage = () => {
  return (
    <div className='w-full h-[800px] bg-yellow-700 rounded-t-lg'>
        <Image src={projectImg} alt="cover of sc" className='object-cover w-full h-[800px]'/>
    </div>
  )
}

export default CoverImage