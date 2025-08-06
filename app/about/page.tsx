import About from '@/components/about/About'
import Hero from '@/components/about/Hero'
// import LatestProjects from '@/components/about/LatestProjects'
import Process from '@/components/about/Process'
// import Sectors from '@/components/about/Sectors'
import Values from '@/components/about/Values'
// import Awards from '@/components/Home/Awards'
import CalltoForn from '@/components/Home/CalltoForn'
import Footer from '@/components/Home/Footer'
import Team from '@/components/Home/Team'
// import Testimonials from '@/components/Home/Testimonials'
import React from 'react'
import type { Metadata } from "next";
import Choose from '@/components/about/Choose'
import Main from '@/components/about/Main'

export const metadata: Metadata = {
  title: "About Planic Design – Interior Architects in Pakistan",
  description: "Meet the creative minds behind Planic Design. Learn about our values, process, and passion for elevating interiors across Pakistan.",
};
const page = () => {
  return (
    <>
    <Hero heading="About US" desc="Architecture & Interior Design Company "/>
    <div className='flex flex-col items-center justify-center w-full bg-[#f1eee9]'>
      <Main/>
      <About/>
      <Values/>
      <Process/>
      <Choose/>,
      {/* <Awards/> */}
      {/* <Sectors/> */}
      {/* <LatestProjects/> */}
      <Team/>
      {/* <Testimonials/> */}
      <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
      <Footer/>
    </div>
    </>
  )
}

export default page