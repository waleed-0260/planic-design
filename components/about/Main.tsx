import React from 'react'
import Image from 'next/image'
import expertise3 from "@/public/images/expertise3.jpg"
import Link from 'next/link'
const Main = () => {
  return (
   <div className="flex flex-col md:flex-row justify-between items-start w-[90%] mx-auto py-12 gap-8">
      {/* Left Content */}
      <div className="flex-1 space-y-5">
        <h2 className="text-3xl md:text-4xl leading-tight">
          Architectural Layouts That Work
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
Our architecture services include detailed layout plans, space optimization, and technical 
drawings. From concept to construction. We handle every stage with precision.         </p>
        <Link className="relative top-[20px] button" href="/portfolio">View Portfolio</Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[300px] flex justify-center">
        <Image
          src={expertise3}
          alt="Architecture"
          className="rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </div>
    
)
}

export default Main