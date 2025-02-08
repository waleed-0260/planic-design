import Hero from '@/components/about/Hero'
// import LatestProjects from '@/components/about/LatestProjects'
// import FeaturedProjects from '@/components/Home/FeaturedProjects'
import React from 'react'
import CalltoForn from '@/components/Home/CalltoForn'
// import LatestCases from '@/components/portfolio/LatestCases'
import Footer from '@/components/Home/Footer'
import Projects from '@/components/portfolio/Projects'
import Testimonials from '@/components/Home/Testimonials'
const page = async() => {
  const data = await fetch(`https://dominobackend.vercel.app/get-portfolio`)
  const projects = await data.json();

  return (
    <>
    <Hero heading="Our Projects" desc="Architecture is a visual art, and the building
speak for themselves"/>
    <div className='w-full flex items-center justify-center flex-col bg-[#f1eee9]'>

    <Projects products={projects}/>
    {/* <LatestCases/> */}
    {/* <Testimonials/> */}
    <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
    <Footer/>
    </div>
    </>
  )
}

export default page