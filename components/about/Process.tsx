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
  return (
    <div id='values' className='flex flex-col items-center justify-center bg-cover w-full my-[100px] py-[100px]' style={{backgroundImage:`url('/images/aboutProcess.png')`}}>
        <h1 className='md:text-5xl text-2xl font-bold py-4 border-t-[1px] border-b-[1px] border-black w-[90%]'>Our Values</h1>
        <div className='flex md:flex-row flex-col w-[90%] justify-between items-start mt-[50px]' >
            <div className='md:w-[40%] w-full flex flex-col ' data-aos="fade-right">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className='rounded-2xl'>
        <AccordionTrigger >
          <div className='flex flex-row items-center gap-4'>

            <p className='textColor'>1/</p>
            <h1 className='md:text-3xl text-xl font-bold text-left'>
            Client Centric Approach
            </h1>
          </div>
            </AccordionTrigger>
        <AccordionContent className='textColor'>
        Your satisfaction is our priority. Every decision we make is focused on delivering your vision.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-2 rounded-2xl'>
      <AccordionTrigger >
        <div className='flex flex-row items-center gap-4'>
            <p className='textColor'>2/</p>
            <h1 className='md:text-3xl text-xl font-bold text-left'>
            Innovation & creativity
            </h1>
        </div>
            </AccordionTrigger>
            <AccordionContent className='textColor'>
        We thrive on pushing boundaries to create unique and inspiring spaces.        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-2 rounded-2xl'>
      <AccordionTrigger >
      <div className='flex flex-row items-center gap-4'>
            <p className='textColor'>3/</p>
            <h1 className='md:text-3xl text-xl font-bold text-left'>
            Quality & Excellence
            </h1>
            </div>
            </AccordionTrigger>        <AccordionContent className='textColor'>
        From concept to completion, we ensure uncompromising quality in every detail.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='mt-2 rounded-2xl'>
      <AccordionTrigger >
      <div className='flex flex-row items-center gap-4'>
            <p className='textColor'>4/</p>
            <h1 className='md:text-3xl text-xl font-bold text-left'>
            Sustainability
            </h1>
        </div>
            </AccordionTrigger>        <AccordionContent className='textColor'>
        We are committed to creating designs that are environmentally responsible and sustainable.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Link href={"/portfolio"} className='w-[330px] h-[50px] bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] text-[#231f20] rounded-full  transition-all hover:shadow-lg hover:text-white flex flex-row items-center justify-center text-sm gap-3 px-3 mt-[50px]'>See How Our Values Shape Our Work <GoArrowUpRight/></Link>
            </div>

            <div className='md:w-[50%] relative lg:block hidden' data-aos="fade-left">

                <div className='h-[350px] w-[320px] absolute top-[20px] left-[180px]'>
                    <Image src={proc1} alt="aasd" className='object-cover rounded-full h-[320px]'/>
                </div>

                <div className='h-[200px] w-[200px] absolute top-[300px] left-[20px]'>
                    <Image src={proc3} alt="aasd" className='object-cover rounded-full h-[200px] w-[250px]'/>
                </div>
                <div className='h-[200px] w-[200px] absolute top-[360px] left-[300px]'>
                    <Image src={proc4} alt="aasd" className='object-cover rounded-full h-[200px] w-[250px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process