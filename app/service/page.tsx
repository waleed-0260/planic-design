import Hero from '@/components/about/Hero'
import Footer from '@/components/Home/Footer'
// import Header from '@/components/Home/Header'
// import Process from '@/components/Home/Process'
// import Services from '@/components/Home/Services'
// import Testimonials from '@/components/Home/Testimonials'
// import TextAnimation from '@/components/Home/TextAnimation'
// import First from '@/components/service/First'
import React from 'react'
import Services from '@/components/service/Services'
import Faq from '@/components/service/Faq'
import CalltoForn from '@/components/Home/CalltoForn'
import Sectors from '@/components/about/Sectors'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
const page = () => {
  return (
    <>
      {/* <Header color="#000000"/> */}
      <Hero heading="Services" text="Our Services"/>
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        {/* <First/> */}
        <Services/>
        <FeaturedProjects/>
        <Sectors/>
        <Faq/>
        {/* <Process/> */}
        {/* <Testimonials/> */}
        {/* <TextAnimation/> */}
        <CalltoForn heading="Start Your Interior Transformation Today!" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
    <Footer/>
    </div>
</>
  )
}

export default page