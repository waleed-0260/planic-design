import React from 'react'

const CalltoForn = () => {
  return (
<div className="w-full flex flex-col items-center justify-center space-y-4 p-6 border-t-[1px] borer-[#b3b2af] mt-[100px]">
  <h1 className="text-3xl font-bold text-center text-gray-800">
  Ready to Transform Your Space? Contact Us Today
  </h1>
  <p className="text-lg text-center text-gray-600 max-w-2xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus unde accusamus
    adipisci atque quis sit quas, harum beatae ducimus nostrum?
  </p>

  <form className="flex sm:flex-row flex-col items-center justify-center sm:space-x-3">
    <input
      type="text"
      placeholder="Email address"
      className="sm:w-80 h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <button className="bg-[#FF4814] text-white sm:w-32 sm:mt-0 mt-8 w-full h-12 text-lg rounded-md  transition duration-300">
      SUBMIT
    </button>
  </form>
</div>
  )
}

export default CalltoForn