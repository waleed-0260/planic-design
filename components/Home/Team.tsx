import Image from 'next/image'
import React from 'react'
import Ramish from "../../public/images/Ramish.png"
import Hiba from "../../public/images/Hiba.png"
const Team = () => {
  return (
    <div className='w-[90%] flex flex-col items-center justify-center my-[50px]' id='team'>
        <p className='md:text-4xl text-2xl font-bold text-[#231f20]'>MEET OUR TEAM</p>
        <div className='flex md:flex-row flex-col items-center justify-around w-full mt-8'>
            <div className='flex flex-col items-start justify-start space-y-3'>
                <Image src={Ramish} alt='Ramish' width={300} height={500}/>
                <p className='font-bold text-3xl'>Ramish Shakeel</p>
                <p className='text-md textColor'>Founder & CEO</p>
            </div>
            <div className='flex flex-col items-start justify-start space-y-3'>
                <Image  src={Hiba} alt='Ramish' width={300} height={500}/>
                <p className='font-bold text-3xl'>Hiba Khawar</p>
                <p className='text-md textColor'>DIRECTOR</p>
            </div>
        </div>
    </div>
  )
}

export default Team