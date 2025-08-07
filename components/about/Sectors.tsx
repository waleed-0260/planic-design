import Image from 'next/image'
import React from 'react'
import commercialSector from "../../public/images/commercialSector.svg"
// import citySector from "../../public/images/citySector.svg"
import HospitalitySector from "../../public/images/HospitalitySector.svg"
import healthSector from "../../public/images/healthSector.svg"
// import InteriorSector from "../../public/images/InteriorSector.svg"
import resedentialSector from "../../public/images/resedentialSector.svg"
import EducationalSector from "../../public/images/EducationalSector.svg"
import education from "../../public/images/education.png"
const Sectors = () => {
  return (
    <div className='w-[90%] flex flex-col items-start justify-center my-[100px]'>
        <p className='md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full'>Our Sectors</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-[50px]">
  {/* Commercial Spaces */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={healthSector} alt="commercial" className='object-cover w-auto h-auto grayscale w-[150px] h-[150px]'/>
    <p className="text-md">Commercial Design</p>
    <p className='textColor'>
    We create efficient and dynamic commercial spaces that balance functionality, aesthetics, and branding. From marquees and event halls to mixed-use developments like Islamabad Square and Twin City Tower, we design environments that enhance productivity and leave a lasting impact.    </p>
  </div>

    {/* Interior Design */}
    {/* <div className="flex flex-col items-start space-y-4">
    
    <Image src={InteriorSector} alt="" className='object-cover w-auto h-auto grayscale'/>
    <p className="text-md">Interior Design</p>
    <p className='textColor'>
    Focuses on creating inviting and functional indoor spaces. It harmonizes aesthetics, functionality, and client preferences to craft personalized environments.
    </p>
  </div> */}
  {/* Resources & Infrastructure */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={HospitalitySector} alt="commercial" className='object-cover w-auto h-auto grayscale w-[150px] h-[150px]'/>
    <p className="text-md">Resedential Design</p>
    <p className='textColor'>
    Merging function with style, our residential designs focus on smart space planning, lighting, and personalized aesthetics. Whether it's a modern home or a luxury farmhouse, we create spaces that feel uniquely yours.
    </p>
  </div>

  {/* Hospitality */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={resedentialSector} alt="commercial" className='object-cover w-auto h-auto grayscale w-[150px] h-[150px]'/>
    <p className="text-md">Hospitality</p>
    <p className='textColor'>
    Our hospitality designs blend elegance with functionality, ensuring inviting and immersive spaces. From hotels and resorts to restaurants and event venues, we craft experiences that leave lasting impressions.
    </p>
  </div>


  {/* Urban City Design */}
  <div className="flex flex-col items-start space-y-4">
    <Image src={education} alt="" className='object-cover w-auto h-auto grayscale w-[150px] h-[150px]'/>
    <p className="text-md">Educational</p>
    <p className='textColor'>
    We design inspiring educational environments that foster learning and creativity. Our expertise extends to schools, colleges, and universities, including successful projects like PKNC Faisalabad.
    </p>
  </div>

  {/* Health Sector */}
  <div className="flex flex-col items-start space-y-4">
  <Image src={commercialSector} alt="" className='object-cover grayscale w-[150px] h-[150px]'/>
  
    <p className="text-md">HealthCare</p>
    <p className='textColor'>
    We craft state-of-the-art healthcare facilities that prioritize patient comfort, efficiency, and advanced technology. From dental clinics to aesthetic centers, our designs ensure a balance of functionality and care.
    </p>
  </div>
</div>

    </div>
  )
}

export default Sectors