import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

const Faq = () => {
  return (
    <div className='w-[90%] flex flex-col items-center justify-center my-[50px]'>
        <h1 className='font-bold md:text-4xl text-2xl'>FAQs</h1>
        <Accordion type="single" collapsible className="w-[100%] my-[50px]">
  <AccordionItem className=" bg-transparent" value="item-1">
    <AccordionTrigger className="text-left">What services does Planic Design offer?</AccordionTrigger>
    <AccordionContent>
      We provide a comprehensive range of services, including Architecture, Interior Design, 3D Visualization, and Construction Supervision. Our end-to-end solutions ensure a seamless design and execution process tailored to your needs.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-2">
    <AccordionTrigger className="text-left">What is the process for starting a project with Planic Design?</AccordionTrigger>
    <AccordionContent>
      Our process is simple and collaborative:
      <br />- **Consultation**: We begin with a detailed discussion to understand your vision and requirements.
      <br />- **Design & Planning**: Our team develops a bespoke design plan based on your input.
      <br />- **Execution**: We bring the design to life with expert supervision and attention to detail.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-3">
    <AccordionTrigger className="text-left">Can I see a visual preview of my project before it starts?</AccordionTrigger>
    <AccordionContent>
      Yes! With our advanced 3D Visualization services, you can see photorealistic renderings of your design, helping you make confident decisions before execution.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-4">
    <AccordionTrigger className="text-left">Do you provide construction supervision services?</AccordionTrigger>
    <AccordionContent>
      Absolutely. Our construction supervision ensures that every stage of the build is carried out with precision, quality, and compliance, delivering results that match your expectations.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-5">
    <AccordionTrigger className="text-left">Do you handle residential and commercial projects?</AccordionTrigger>
    <AccordionContent>
      Yes, we specialize in designing both residential and commercial spaces, including homes, offices, retail outlets, and more.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-6">
    <AccordionTrigger className="text-left">How long does a typical project take?</AccordionTrigger>
    <AccordionContent>
      The timeline depends on the project’s scope and complexity. During our initial consultation, we’ll provide you with an estimated timeline tailored to your needs.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-7">
    <AccordionTrigger className="text-left">Can I make changes during the design process?</AccordionTrigger>
    <AccordionContent>
      Of course! We value your feedback and encourage collaboration throughout the design process to ensure the final result aligns perfectly with your vision.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem className=" bg-transparent" value="item-8">
    <AccordionTrigger className="text-left">How do I get started with Planic Design?</AccordionTrigger>
    <AccordionContent>
      Getting started is easy! Simply contact us through our website, email, or phone, and our team will schedule an initial consultation to discuss your project.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Link href={"/contact"} className='w-[340px] h-[50px] bg-transparent border-[1px] hover:bg-[#FF4814] border-[#FF4814] text-[#FF4814] rounded-full  transition-all hover:shadow-lg hover:text-white flex flex-row items-center justify-center text-sm gap-3 sm:mt-0 mt-5'>Have more questions? Contact Us Today <GoArrowUpRight/></Link>
    </div>
  )
}

export default Faq