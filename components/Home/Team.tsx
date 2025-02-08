import Image from 'next/image'
import React from 'react'
import Ramish from "../../public/images/Ramish.png"
import Hiba from "../../public/images/Hiba.png"
const Team = () => {

  const teamMembers = [
    {
      name: "Ar. Muhammad Ramish Shakeel",
      designation: "Founder, Planic Design",
      bio: "A creative and detail-oriented architect with 6 years of experience in designing innovative spaces. Skilled in all phases of architectural design, project management, and construction oversight.",
      image: Ramish, // Replace with actual image path
    },
    {
      name: "Hiba Khawar",
      designation: "Director, Planic Design",
      bio: "A visionary leader dedicated to ensuring top-tier design solutions and strategic execution at Planic Design.",
      image: Hiba, // Replace with actual image path
    },
  ];
  

  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="md:text-[72px] text-2xl py-6 border-t-[1px] border-b-[1px] border-black w-full">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          A team of visionaries shaping innovative, functional, and timeless designs.
        </p>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image with Hover Effect */}
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full grayscale transition duration-300 border-4 border-gray-300 shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 text-sm font-medium">{member.designation}</p>
              <p className="text-gray-600 mt-3 px-6">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Team