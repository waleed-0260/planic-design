import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Address = () => {
  return (
    <div className='flex md:flex-row flex-col items-center justify-between w-[90%] my-[50px]'>
        <div className='flex w-[50%] flex-row space-x-4'>
            <div className='flex flex-col items-start space-y-4'>
                <h1 className='font-bold text-3xl'>Boston, MA</h1>
                <p className='textColor text-sm'>49 Brimmer St, Boston, MA 02108</p>
                <p className='textColor text-sm'>hello@archin.co</p>
                <p className='textColor text-sm'>(054) 3256 78 87</p>
            </div>
            <div className='flex flex-col items-start space-y-4'>
                <h1 className='font-bold text-3xl'>Potlland Or</h1>
                <p className='textColor text-sm'>2221 Sw Broadway Dr, Portland, OR 97201</p>
                <p className='textColor text-sm'>hello@archin.co</p>
                <p className='textColor text-sm'>(054) 3256 78 87</p>
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