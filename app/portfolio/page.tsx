import Hero from '@/components/about/Hero'
// import LatestProjects from '@/components/about/LatestProjects'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import React from 'react'
import CalltoForn from '@/components/Home/CalltoForn'
import LatestCases from '@/components/portfolio/LatestCases'
import Footer from '@/components/Home/Footer'
const page = () => {
  return (
    <>
    <Hero heading="Cases" desc="Architecture is a visual art, and the building
speak for themselves"/>
    <div className='w-full flex items-center justify-center flex-col'>

    <FeaturedProjects/>
    <LatestCases/>
    <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
    </div>
    <Footer/>
    </>
  )
}

export default page