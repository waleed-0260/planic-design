"use client"
import React, {useState} from 'react'
import processBg from "../../public/images/processBg.png"
import process from "../../public/images/process.png"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link'

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
      { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
      { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that resembles HTML." },
      { question: "What are hooks?", answer: "Hooks are functions that let you use state and other React features." },
    ];
  
    const toggleAnswer = (index:any) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <div className="mx-auto my-[50px]">
      {/* Top Image */}
      <div className="relative">
        <Image
          src={processBg}
          alt="Process Background"
          className="h-full scale-110"
        />
      </div>

      {/* Section overlapping the image */}
      <div className="bg-[#f1eee9] relative rounded-t-2xl  p-6 flex flex-col justify-between items-center" data-aos="fade-up">
        {/* Middle Heading */}
        <h1 className="sm:text-4xl text-2xl font-bold text-center mt-[100px]">
        Your Vision, Our Proven Process
        </h1>

        <div className='flex lg:flex-row flex-col md:items-start items-start justify-between w-[90%] mt-[90px]'>

        {/* Left Side: Toggle for Questions & Answers */}
        <div className="flex flex-col md:w-1/2 space-y-4 w-full" data-aos="fade-right" data-aos-delay="300">
              <Accordion type="single" collapsible className="md:w-[80%]">
      <AccordionItem value="item-1" className=' rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>Conceptualization</AccordionTrigger>
        <AccordionContent className='textColor'>
        We collaborate closely to understand your needs, preferences, and aspirations, laying the foundation for a bespoke design journey.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-5 rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>Design & Development</AccordionTrigger>
        <AccordionContent className='textColor'>
        Our creative team brings your vision to life with innovative designs and meticulous attention to detail.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-5 rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>Execution & Delivery</AccordionTrigger>
        <AccordionContent className='textColor'>
        From project management to the final reveal, we ensure a seamless process that transforms your dream into reality.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Link href={"/contact"} className='w-[280px] h-[50px] bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] text-[#231f20] rounded-full  transition-all hover:shadow-lg hover:text-white flex flex-row items-center justify-center text-sm gap-3 px-3'>Let's Begin Your Transformation <GoArrowUpRight/></Link>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center md:mt-0 mt-[50px]" data-aos="fade-left" data-aos-delay="300">
          <Image
            src={process}
            alt="Process Illustration"
            className="w-full h-auto max-w-xs object-cover rounded-md rotate-[20deg]"
          />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Process