import React from 'react'
import images from "../../public/images/images.jpg"
import Image from 'next/image';
const Values = () => {
    const value = [
        {
          heading: "We Are Inquisitive",
          text: "Precedent-based research and benchmarking informs project analysis.",
        },
        {
          heading: "We Are Visionary",
          text: "Leading design thinking with big ideas and city making (best for city) outcomes in mind.",
        },
        {
          heading: "We Are Strategic",
          text: "Urban context studied and leveraged to inform strategic site response and alignment with planning mechanisms.",
        },
        {
          heading: "We Are Authentic",
          text: "In our language, processes and approach.",
        },
        {
          heading: "We Are Engaging",
          text: "Communication, workshop processes and stakeholder engagement is front and centre.",
        },
        {
          heading: "We Are Inclusive",
          text: "We value inclusivity and the benefits it brings to our teams and our work.",
        },
        {
          heading: "We Are Responsive",
          text: "Project drivers / values are developed with project stakeholders to guide design direction.",
        },
        {
          heading: "We Are Integrated",
          text: "Our team is multi-disciplinary and collaborative.",
        },
        {
          heading: "We Are Rigorous",
          text: "We work rigorously with internal, client, and consultant teams.",
        },
      ];
  return (
    <div className='w-[90%] flex flex-col items-start justify-center my-[80px] space-y-5' id="values">
        <h1 className='md:text-[72px] text-2xl py-9 md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full mb-[50px]'>Our Values</h1>
        {/* <Image src={images} alt="asad" className='object-cover'/> */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-[150px] w-full'>
            {value.map((item, index)=>{
                return(
                <div className='flex flex-col items-start space-y-5' key={index}>
                    <h1 className='md:text-2xl text-md'>{item.heading}</h1>
                    <p className='text-sm textColor'>{item.text}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Values