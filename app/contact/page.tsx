import Hero from '@/components/about/Hero'
import Address from '@/components/Contact/Address'
import ContactForm from '@/components/Contact/ContactForm'
import Footer from '@/components/Home/Footer'
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Planic Design – Interior Architects in Pakistan",
  description: "Get in touch with Planic Design for residential and commercial interior architecture services in Pakistan. Start your project today.",
};

const page = () => {
  return (
    <div>
      <Hero heading="Contact Us" desc="Want to chat further? We’d love to hear from you, let us oppoturnity
to make your dream become reality"/>
      <div className='flex flex-col items-center justify-center w-full bg-[#f1eee9]'>
        <Address/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default page