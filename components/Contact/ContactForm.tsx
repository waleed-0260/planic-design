import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const ContactForm = () => {
  return (
    <div className='w-[90%] my-[50px] py-[50px] flex md:flex-row flex-col items-start justify-between'>
        <div className='flex flex-col space-y-5 md:w-[50%]'>
            <h1 className='md:text-[60px] text-2xl md:leading-[60px]'>Let's work together to turn your dreams into reality</h1>
            <p className='textColor realtive md:top-[70px] text-sm'>Your email address will not be published.
            Required fields are marked *</p>
        </div>

        <div className='md:w-[45%] flex flex-col md:mt-0 mt-[50px]'>
          <h2 className='md:text-3xl text-lg py-3 border-t-[1px] border-b-[1px] border-black w-full'>Contact Us</h2>
        <form action="" className=" space-y-6 mt-[30px]">
  <div className="flex gap-4">
    <div className="flex-1">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
        required
      />
    </div>
    <div className="flex-1">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
        required
      />
    </div>
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Enter your message"
      className="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-1 bg-transparent"
      required
    ></textarea>
  </div>
  {/* <div className="text-center"> */}
  <button className="bg-white rounded-full text-black w-[200px] h-[50px] hover:bg-black hover:text-white transition flex flex-row items-center justify-center gap-2 font-light">
          Send your message <GoArrowUpRight />
        </button>
          <p className='textColor text-sm'>By Submitting I'm agree to terms & Conditions</p>

  {/* </div> */}
</form>
        </div>
    </div>
  )
}

export default ContactForm