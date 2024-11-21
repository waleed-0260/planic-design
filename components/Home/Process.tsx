"use client"
import React, {useState} from 'react'
import processBg from "../../public/images/processBg.jpg"
import process from "../../public/images/process.jpg"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

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
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Section overlapping the image */}
      <div className="bg-[#f1eee9] relative -mt-4 rounded-t-2xl  p-6 flex flex-col justify-between items-center" data-aos="fade-up">
        {/* Middle Heading */}
        <h1 className="text-4xl font-bold text-center mt-[100px]">
          Our Process Work
        </h1>

        <div className='flex lg:flex-row flex-col items-center justify-around w-full mt-12'>

        {/* Left Side: Toggle for Questions & Answers */}
        <div className="flex flex-col w-1/2 space-y-4 " data-aos="fade-left" data-aos-delay="300">
              <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-3xl font-bold'>Survey & Quotes</AccordionTrigger>
        <AccordionContent className='textColor'>
        After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-5'>
        <AccordionTrigger className='text-3xl font-bold'>Design & Performance</AccordionTrigger>
        <AccordionContent className='textColor'>
        After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-5'>
        <AccordionTrigger className='text-3xl font-bold'>Hand over</AccordionTrigger>
        <AccordionContent className='textColor'>
        After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center" data-aos="fade-left" data-aos-delay="300">
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