import Image from 'next/image'
import React from 'react'
import commercialSector from "../../public/images/commercialSector.svg"
import citySector from "../../public/images/citySector.svg"
import HospitalitySector from "../../public/images/HospitalitySector.svg"
import healthSector from "../../public/images/healthSector.svg"
import InteriorSector from "../../public/images/InteriorSector.svg"
import resedentialSector from "../../public/images/resedentialSector.svg"

const Sectors = () => {
  return (
    <div className='w-[90%] flex flex-col items-start justify-center my-[100px]'>
        <p className='text-4xl'>Our Sectors</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-[50px]">
  {/* Commercial Spaces */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={commercialSector} alt="commercial" className='object-cover w-auto h-auto'/>
    <p className="text-2xl font-bold">Commercial Design</p>
    <p className='textColor'>
    Efficient and dynamic commercial spaces, balancing functionality, aesthetics, and branding to optimize productivity. Collaboration with clients ensures their identity is reflected in the final design.
    </p>
  </div>

    {/* Interior Design */}
    <div className="flex flex-col items-start space-y-4">
    {/* <Image /> */}
    <Image src={InteriorSector} alt="" className='object-cover w-auto h-auto'/>
    <p className="text-2xl font-bold">Interior Design</p>
    <p className='textColor'>
    Focuses on creating inviting and functional indoor spaces. It harmonizes aesthetics, functionality, and client preferences to craft personalized environments.
    </p>
  </div>
  {/* Resources & Infrastructure */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={resedentialSector} alt="commercial" className='object-cover w-auto h-auto'/>
    <p className="text-2xl font-bold">Resedential Design</p>
    <p className='textColor'>
    Residential design merges function and style, focusing on space planning, aesthetics, lighting, furniture, and technology, with collaboration between designers and homeowners pivotal for success.
    </p>
  </div>

  {/* Hospitality */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={HospitalitySector} alt="commercial" className='object-cover w-auto h-auto'/>
    <p className="text-2xl font-bold">Hospitality</p>
    <p className='textColor'>
      Our hospitality designs blend elegance with functionality, creating immersive spaces that leave lasting impressions. We specialize in hotels, resorts, restaurants, and other hospitality venues, ensuring guests feel at home.
    </p>
  </div>


  {/* Urban City Design */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={citySector} alt="" className='object-cover w-auto h-auto'/>
    <p className="text-2xl font-bold">Urban City Design</p>
    <p className='textColor'>
      Our urban design solutions focus on sustainable growth, enhancing the quality of life in cities through smart planning and iconic architecture.
    </p>
  </div>

  {/* Health Sector */}
  <div className="flex flex-col items-start space-y-4">
  <Image src={healthSector} alt="" className='object-cover w-auto h-auto'/>
  
    <p className="text-2xl font-bold">Health Sector</p>
    <p className='textColor'>
      We craft state-of-the-art healthcare facilities that prioritize patient comfort, operational efficiency, and cutting-edge technology integration. Our designs ensure healing spaces are both functional and compassionate.
    </p>
  </div>
</div>

    </div>
  )
}

export default Sectors