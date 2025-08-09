import Hero from '@/components/about/Hero'
// import LatestProjects from '@/components/about/LatestProjects'
// import FeaturedProjects from '@/components/Home/FeaturedProjects'
import React from 'react'
import CalltoForn from '@/components/Home/CalltoForn'
// import LatestCases from '@/components/portfolio/LatestCases'
import Footer from '@/components/Home/Footer'
import Projects from '@/components/portfolio/Projects'
import Testimonials from '@/components/Home/Testimonials'
import Main from '@/components/portfolio/Main'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Slider from '@/components/Home/Slider'
const page = async() => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// const res = await fetch(`https://planicdesign.com/api/portfolio`);
//   const data = await res.json();

  return (
    <>
    <Hero heading="Our Projects" desc="Architecture is a visual art, and the building
speak for themselves"/>
    <div className='w-full flex items-center justify-center flex-col bg-[#f1eee9]'>
      <Main/>
      <Slider/>
    {/* <Projects products={projects}/> */}
    <FeaturedProjects heading="Featured Projects"/>
    <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
    <Footer/>
    </div>
    </>
  )
}

export default page