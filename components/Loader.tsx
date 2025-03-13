import React from 'react'
import loader from "../public/images/loader.gif"
import Image from 'next/image'
import Preloader from './PreLoader'
// import logotext from "../public/images/logotext.png"
const Loader = () => {
  return (
    <div className='bg-white w-[100vw] h-full absolute flex flex-col items-center justify-center'>
        {/* <Image src={loader} alt="gjrit" className='object-cover'/> */}
        <Preloader/>
        {/* <Image src={logotext} alt="ads" /> */}
    </div>
  )
}

export default Loader