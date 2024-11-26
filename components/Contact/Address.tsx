import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Address = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between w-[90%] my-[50px]'>
        <div className="flex justify-end md:flex-row flex-col md:mt-0 mt-5 w-[50%]">
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>Islamabad, Pakistan</h1>
                <p className='textColor text-sm w-[300px]'>Suite No. 3, 5th Floor, Gulberg Trade Center, Gulberg Greens</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>0335 5272083</p>
        </div>
        <div className="flex flex-col items-start space-y-2">
        <h1 className='font-bold text-3xl'>London</h1>
                <p className='textColor text-sm  '>UK: FL 3, 45 Albemarle St</p>
                <p className='textColor text-sm'>planicdesign2@gmail.com</p>
                <p className='textColor text-sm'>0335 5272083</p>
        </div>
      </div>

        <div className='w-[50%] flex items-end justify-end'>
        <div className="flex gap-4 md:mt-0 mt-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF4814] hover:bg-[#FF4814] hover:text-white transition-all"
          >
            <FaLinkedinIn />
          </a>
        </div>
        </div>
    </div>
  )
}

export default Address