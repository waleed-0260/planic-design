import Hero from '@/components/about/Hero'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Explanation from '@/components/service/Explanation'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero heading="Interior Design"/>
         <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
            <Explanation/>
            <FeaturedProjects heading="Related Projects"/>
         </div>
    </div>  
    
  )
}

export default page