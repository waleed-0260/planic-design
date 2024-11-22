import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Process from '@/components/Home/Process'
import Services from '@/components/Home/Services'
import Testimonials from '@/components/Home/Testimonials'
import TextAnimation from '@/components/Home/TextAnimation'
import Hero from '@/components/service/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Header color="#000000"/>
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Hero/>
        <Services/>
        <Process/>
        <Testimonials/>
        <TextAnimation/>
    </div>
    <Footer/>
</>
  )
}

export default page