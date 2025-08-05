import React from 'react'

const Main = () => {
  return (
    <div className='w-[90%] flex flex-row justify-between items-start my-[60px] space-x-9'>
        <div className='flex-1'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro delectus repellendus quasi expedita possimus a, nam deleniti suscipit voluptatem corporis, repudiandae recusandae quos pariatur earum quibusdam numquam, molestias quaerat?</p>
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