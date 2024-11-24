import React from 'react'
import project1 from "../../public/images/project1.jpg"
import project2 from "../../public/images/project2.jpg"
import Image from 'next/image'

const Description = () => {
  return (
    <div className='w-[90%] py-[50px] my-[50px]' data-aos="fade-up">
        <h1 className='text-5xl font-bold'>Description</h1>
        <p className='text-2xl font-semibold mt-[50px] leading-10 font-light'>Nestled at the heart of Forest hill in Boston, there stood a villa that embodied a profound connection between the natural world & the comforts of modern living. This extraordinary abode was more than just a home, it was an immersive experience, a testament to the spirit of its surroundings.
        Our design for the first phase office building creates 115,000sqft net of highly efficient, agile office space that provides unrivalled quality in Maidenhead.</p>
        <div className='w-[50%] grid sm:grid-cols-2 grid-cols-1 gap-4 mt-[50px]'>
            <div className='flex flex-col space-y-6'>
                <p className='text-sm textColor'>Service</p>
                <p>Architecture Design,
Interior Design, Landscape
Design</p>
            </div>
            <div className='flex flex-col space-y-6'>
                <p className='text-sm textColor'>Location</p>
                <p>Architecture Design,
Interior Design, Landscape
Design</p>
            </div>
            <div className='flex flex-col space-y-6'>
                <p className='text-sm textColor'>Collaboration</p>
                <p>Architecture Design,
Interior Design, Landscape
Design</p>
            </div>
            <div className='flex flex-col space-y-6'>
                <p className='text-sm textColor'> Status</p>
                <p>Architecture Design,
Interior Design, Landscape
Design</p>
            </div>
        </div>

        <div className='flex flex-row w-full justify-between space-x-3 mt-[100px]'>
            <Image src={project1} alt="project image" className='rounded-2xl w-[100%] h-[500px]'  data-aos="zoom-in" data-aos-delay="300"/>
            <Image src={project2} alt="project image" className='rounded-2xl w-[100%] h-[500px]' data-aos="zoom-in" data-aos-delay="300"/>
        </div>
    </div>
  )
}

export default Description