import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-row items-center justify-around h-[500px] w-full'>
        <div className='flex flex-col space-y-6'>
            <h1 className='font-bold text-4xl'>Our Services</h1>
            <span className='h-[40px] w-[300px] border-[1px] border-black rounded-full flex flex-row items-center justify-around'>
                <p>An award winning studio</p>
                <p>2020</p>
            </span>
        </div>

        <div className='flex flex-row items-center justify-between p-[30px] border-2 border-[#000000] rounded-md w-[300px]'>
            <div className='flex flex-col'>
                <p className='font-bold text-4xl'>92%</p>
                <p className='text-sm'>Clients satisfied</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-4xl'>152</p>
                <p className='text-sm'>Projects done</p>
            </div>
        </div>
    </div>
  )
}

export default Hero