import React from 'react'
import Ramish from "../../public/images/Ramish.png"
import Image from 'next/image'

const Designer = () => {
  return (
    <div className='w-[90%] flex md:flex-row flex-col justify-between items-center my-[100px]'>
        <div className=''>
            <Image
            src={Ramish}
            alt="ramish"
            // height={300}
            // width={200}
            className='object-cover w-auto h-auto'
            />
        </div>
        <div className='w-[50%] flex flex-col items-start justify-center  '>
            <b className='text-5xl text-[#FF4814]'>MEET OUR DESIGNER</b>
            <p className='text-3xl mt-8'>Ar. Muhammad Ramish Shakeel</p>
            <p className='mt-3 text-lg textColor'>Founder Planic Design</p>
            <p className='text-sm mt-[40px]'> creative and detail-oriented architect with 6 years of extensive experience of designing innovative and functional spaces. Skilled in all phases of architectural design, from conceptualization and drafting to project management and construction oversight. 
                <br />
Strong ability to collaborate with clients, contractors, and multidisciplinary teams to deliver projects on time and within budget. 
<br />
Through collaborative teamwork, thorough research, and a dedication to quality, Ramish strive to bring his clients' visions to life while adhering to the highest standards of design and construction.</p>
        <div className='my-4 space-y-3'>

        <p className='font-bold'>Capabilities</p>
        <div className='h-[8px] w-[300px] bg-gray-900 rounded-md'></div>
        <p className='font-bold'>Productivities</p>
        <div className='h-[8px] w-[300px] bg-gray-900 rounded-md'></div>
        </div>
        </div>


    </div>
  )
}

export default Designer