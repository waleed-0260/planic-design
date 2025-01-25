import React from 'react'
import loader from "../public/images/loader.gif"
import Image from 'next/image'
import Preloader from './PreLoader'

const Loader = () => {
  return (
    <div className='bg-white w-[100vw] h-full absolute flex items-center justify-center'>
        {/* <Image src={loader} alt="gjrit" className='object-cover'/> */}
        <Preloader/>
    </div>
  )
}

export default Loader