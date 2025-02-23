import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { GoArrowUpRight } from "react-icons/go";
import proc1 from "../../public/images/proc1.jpg"
import proc3 from "../../public/images/proc3.jpg"
import proc4 from "../../public/images/proc4.jpg"
import Image from 'next/image';
import aboutProcess from "../../public/images/aboutProcess.png"
import Link from 'next/link';
const Process = () => {

  const process = [
    {
      heading: "Initial Construction",
      text: "",
    },
    {
      heading: "Dream Project",
      text: "We listen to your Vision about the Dream Project",
    },
    {
      heading: "Schematic",
      text: "Graphic Communication, providing Illustrative Diagrammatic Sketching ",
    },
    {
      heading: "Design & Development",
      text: "Phase of Graphic Design where we provide Designed plans, 3D Modelling, fly-throughs, renders and  visualisation",
    },
    {
      heading: "Detailed Working DWGs",
      text: "Meticulously designed Plans of you Dream Project and providing the complete set of all sorts of drawings",
    },
    {
      heading: "Construction Oversight",
      text: "We offer comprehensive site inspection services and monitor construction progress meticulously. Our team is committed to providing clients with timely updates and effectively communicating any issues encountered on-site, accompanied by appropriate solutions.",
    },
    {
      heading: "Connected till the end",
      text: "We do not leave our clients in limbo; instead, we remain engaged to ensure the successful implementation of your dream project",
    },
  ];

  return (
    <div className='w-[90%] flex flex-col items-start justify-center my-[80px] space-y-5' id="process">
        <h1 className='md:text-[72px] text-2xl py-9 md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full mb-[50px]'>Our Process</h1>
        {/* <Image src={images} alt="asad" className='object-cover'/> */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-[150px] w-full'>
            {process.map((item, index)=>{
                return(
                <div className='flex flex-col items-start space-y-5' key={index}>
                    <h1 className='md:text-2xl text-md'>{item.heading}</h1>
                    <p className='text-sm textColor'>{item.text}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Process