"use client"
import About from '@/components/about/About'
import Hero from '@/components/about/Hero'
import LatestProjects from '@/components/about/LatestProjects'
import Process from '@/components/about/Process'
import Awards from '@/components/Home/Awards'
import CalltoForn from '@/components/Home/CalltoForn'
import Footer from '@/components/Home/Footer'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero heading="About US" desc="Architecture & Interior Design Company "/>
    <div className='flex flex-col items-center justify-center w-full bg-[#f1eee9]'>
      <About/>
      <Process/>
      <Awards/>
      <LatestProjects/>
      <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
      <Footer/>
    </div>
    </>
  )
}

export default page