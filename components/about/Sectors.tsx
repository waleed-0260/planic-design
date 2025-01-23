import Image from 'next/image'
import React from 'react'

const Sectors = () => {
  return (
    <div className='w-[90%] flex flex-col items-start justify-center my-[50px]'>
        <p className='text-4xl'>Our Sectors</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-[50px]">
  {/* Commercial Spaces */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Commercial Spaces</p>
    <p>
      We create functional, aesthetic, and efficient commercial environments that align with your brand identity. From office buildings to retail outlets, we ensure every space fosters productivity and creativity.
    </p>
  </div>

  {/* Hospitality */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Hospitality</p>
    <p>
      Our hospitality designs blend elegance with functionality, creating immersive spaces that leave lasting impressions. We specialize in hotels, resorts, restaurants, and other hospitality venues, ensuring guests feel at home.
    </p>
  </div>

  {/* Resources & Infrastructure */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Resources & Infrastructure</p>
    <p>
      We contribute to the development of resource-based facilities with innovative designs that balance practicality and environmental stewardship.
    </p>
  </div>

  {/* Urban City Design */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Urban City Design</p>
    <p>
      Our urban design solutions focus on sustainable growth, enhancing the quality of life in cities through smart planning and iconic architecture.
    </p>
  </div>

  {/* Health Sector */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Health Sector</p>
    <p>
      We craft state-of-the-art healthcare facilities that prioritize patient comfort, operational efficiency, and cutting-edge technology integration. Our designs ensure healing spaces are both functional and compassionate.
    </p>
  </div>

  {/* Interior Design */}
  <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <p className="text-2xl font-bold">Interior Design</p>
    <p>
      We specialize in creating bespoke interior designs that blend creativity, functionality, and sophistication. Whether residential or commercial, our interiors reflect the unique personality of each space while optimizing usability and aesthetics.
    </p>
  </div>
</div>

    </div>
  )
}

export default Sectors