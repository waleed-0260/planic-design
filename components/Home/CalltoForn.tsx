import React from 'react'

const CalltoForn = ({heading, desc, btn}:any) => {
  return (
<div className="w-full flex flex-col items-center justify-center space-y-4 p-6 border-t-[1px] borer-[#b3b2af] mt-[100px]" data-aos="zoom-in">
  <h1 className="text-3xl font-bold text-center text-gray-800">
  {heading}
  </h1>
  <p className="text-lg text-center text-gray-600 max-w-2xl">
    {desc}
  </p>

  <form className="flex sm:flex-row flex-col items-center justify-center sm:space-x-3">
    <input
      type="text"
      placeholder="Email address"
      className="sm:w-80 h-12 px-4 text-lg border border-[#231f20] rounded-md focus:outline-none focus:ring-1 focus:ring-[#231f20] w-[80%]"
    />
    <button className="bg-[#231f20] text-white sm:w-[210px] sm:mt-0 mt-8 w-[80%] h-12 text-lg rounded-md  transition duration-300">
      {btn}
    </button>
  </form>
</div>
  )
}

export default CalltoForn