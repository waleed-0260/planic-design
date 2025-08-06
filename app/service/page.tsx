import React from 'react'
import Hero from '@/components/about/Hero'
import Footer from '@/components/Home/Footer'
// import Header from '@/components/Home/Header'
// import Process from '@/components/Home/Process'
// import Services from '@/components/Home/Services'
// import Testimonials from '@/components/Home/Testimonials'
// import TextAnimation from '@/components/Home/TextAnimation'
// import First from '@/components/service/First'
// import Services from '@/components/service/Services'
// import Faq from '@/components/service/Faq'
// import CalltoForn from '@/components/Home/CalltoForn'
// import Sectors from '@/components/about/Sectors'
// import FeaturedProjects from '@/components/Home/FeaturedProjects'
import type { Metadata } from "next";
import Architecture from '@/components/service/Architecture'
import Team from '@/components/Home/Team'
import Explanation from '@/components/service/Explanation';

export const metadata: Metadata = {
  title: "Our Services – Interior Design & Architecture | Planic Design",
  description: "Explore the full range of interior design, architectural planning, 3D renderings, and renovation services offered by Planic Design in Pakistan.",
};

const page = () => {
  return (
    <>
      {/* <Header color="#000000"/> */}
      <Hero heading="Services" text="Our Services"/>
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Explanation/>
        {/* <First/> */}
        <Architecture/>
        <Team/>
        {/* <Services/>
        <FeaturedProjects/>
        <Sectors/>
        <Faq/>
        <Process/> */}
        {/* <Testimonials/> */}
        {/* <TextAnimation/> */}
        {/* <CalltoForn heading="Ready to Transform Your Space?" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get Started with a Free Quote"/>  */}
    <Footer/>
    </div>
</>
  )
}

export default page