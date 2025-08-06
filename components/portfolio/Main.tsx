import React from 'react'

const Main = () => {
  return (
    <div className='w-[90%] flex flex-row justify-between items-start my-[60px] space-x-9'>
        <div className='flex-1'>
            <p className='font-semibold text-lg'>At Planic Design, we turn ideas into inspiring spaces. Our portfolio showcases a diverse range of projects across residential, commercial, and office interiors—each crafted with a focus on elegance, functionality, and client vision. Explore our work to see how we bring design concepts to life.</p>
        </div>
        <div className='flex flex-col flex-1 space-y-5 textColor text-md'>
            <p>2D Visulization</p>
            <p>Architecture Planning</p>
            <p>Interior Design</p>
            <p>Renovation & Fit out</p>
        </div>
    </div>
  )
}

export default Main