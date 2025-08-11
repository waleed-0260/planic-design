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

  const processData = [
  { number: "01", heading: "Initial Construction", text: "" },
  { number: "02", heading: "Dream Project", text: "We listen to your Vision about the Dream Project" },
  { number: "03", heading: "Schematic", text: "Graphic Communication, providing Illustrative Diagrammatic Sketching" },
  { number: "04", heading: "Design & Development", text: "Phase of Graphic Design where we provide Designed plans, 3D Modelling, fly-throughs, renders and visualisation" },
  { number: "05", heading: "Detailed Working DWGs", text: "Meticulously designed Plans of your Dream Project and providing the complete set of all sorts of drawings" },
  { number: "06", heading: "Construction Oversight", text: "We offer comprehensive site inspection services and monitor construction progress meticulously. Our team is committed to providing clients with timely updates and effectively communicating any issues encountered on-site, accompanied by appropriate solutions." },
  { number: "07", heading: "Connected till the end", text: "We do not leave our clients in limbo; instead, we remain engaged to ensure the successful implementation of your dream project" },
];

  return (
    <>
    <Hero heading="About US" desc="Architecture & Interior Design Company "/>
    <div className='flex flex-col items-center justify-center w-full bg-[#f1eee9]'>
      <Main/>
      <About/>
      <Values/>
      <Process process={processData}/>
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