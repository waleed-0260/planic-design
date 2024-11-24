import Hero from '@/components/about/Hero'
import Address from '@/components/Contact/Address'
import ContactForm from '@/components/Contact/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero heading="Contact Us" desc="Want to chat further? We’d love to hear from you, let us oppoturnity
to make your dream become reality"/>
      <div className='flex flex-col items-center justify-center w-full bg-[#f1eee9]'>
        <Address/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default page