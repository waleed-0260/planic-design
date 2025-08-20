import React from 'react'
// import images from "../../public/images/images.jpg"
// import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
const Values = () => {

  return (
    // <div className='w-[90%] flex flex-col items-start justify-center my-[80px] space-y-5' id="values">
    //     <h1 className='md:text-[72px] text-2xl py-9 md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full mb-[50px]'>Our Values</h1>
    //     {/* <Image src={images} alt="asad" className='object-cover'/> */}
    //     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-[150px] w-full'>
    //         {value.map((item, index)=>{
    //             return(
    //             <div className='flex flex-col items-start space-y-5' key={index}>
    //                 <h1 className='md:text-2xl text-md'>{item.heading}</h1>
    //                 <p className=' textColor'>{item.text}</p>
    //             </div>
    //             )
    //         })}
    //     </div>
    // </div>
        <section className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-10" id="values">
      {/* First box — special styling */}
      <div className="">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-600 text-sm">
          Here’s how we work step-by-step to bring your ideas to life with
          precision and creativity.
        </p>
      </div>

      {/* Second box */}
      <div className="flex  flex-col items-start gap-4 border-4 border-gray-300 p-6">
        <FiCheckCircle className="text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">We Are Inquisitive</h3>
          <p className="text-gray-600 text-sm">
            Precedent-based research and benchmarking informs project analysis.
          </p>
        </div>
      </div>

      {/* Third box */}
      <div className="flex  flex-col items-start gap-4 border-4 border-gray-300 p-6">
        <FiCheckCircle className="text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">We Are Visionary</h3>
          <p className="text-gray-600 text-sm">
           Leading design thinking with big ideas and city making (best for city) outcomes in mind.
          </p>
        </div>
      </div>

      {/* Fourth box */}
      <div className="flex  flex-col items-start gap-4 border-4 border-gray-300 p-6">
        <FiCheckCircle className="text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">We Are Strategic</h3>
          <p className="text-gray-600 text-sm">
            Urban context studied and leveraged to inform strategic site response and alignment with planning mechanisms.
          </p>
        </div>
      </div>

      {/* Fifth box */}
      <div className="flex  flex-col items-start gap-4 border-4 border-gray-300 p-6">
        <FiCheckCircle className="text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">We Are Authentic</h3>
          <p className="text-gray-600 text-sm">
In our language, processes and approach.          </p>
        </div>
      </div>

      {/* Sixth box */}
      <div className="flex  flex-col items-start gap-4 border-4 border-gray-300 p-6">
        <FiCheckCircle className="text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">We Are Engaging</h3>
          <p className="text-gray-600 text-sm">
Communication, workshop processes and stakeholder engagement is front and centre.          </p>
        </div>
      </div>
    </section>
  )
}

export default Values
