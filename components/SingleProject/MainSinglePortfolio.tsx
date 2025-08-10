import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const MainSinglePortfolio = ({heading, description, challenge, solution, value, name, location, date, role}:any) => {
  return (
    <div className='w-[90%] flex md:flex-row flex-col items-start justify-around my-[100px]'>
        <div className='md:w-[35%] w-[100%] flex flex-col '>
            <div className='flex flex-row items-start justify-between py-[20px] border-t-[2px] border-t-[#000000]'>
                <p>Client</p>
                <p className='textColor text-right'>{name}</p>
            </div>
            <div className='flex flex-row items-start justify-between py-[20px] border-t-[2px] border-t-[#000000]'>
                <p>Location</p>
                <p className='textColor text-right'>{location}</p>
            </div>
            <div className='flex flex-row items-start justify-between py-[20px] border-t-[2px] border-t-[#000000]'>
                <p>Date</p>
                <p className='textColor text-right'>{date}</p>
            </div>
            <div className='flex flex-row items-start justify-between py-[20px] border-t-[2px] border-t-[#000000]'>
                <p>Role</p>
                <p className='textColor text-right'>role</p>
            </div>
        </div>
        <div className='md:w-[50%] flex flex-col items-start'>
            <p className='text-3xl'>{heading}</p>
            {/* <p className='mt-[20px] textColor'>{description}</p> */}
            <div className="mt-[20px] textColor">
    {description.split('<br/>').map((line:any, index:any) => (
      <React.Fragment key={index}>
        {line}
        {index < description.split('<br/>').length - 1 && <br />}
      </React.Fragment>
    ))}
  </div>

 <Accordion type="single" collapsible className="md:w-[80%] my-[20px]">
  {challenge ? (

    <AccordionItem value="item-1" className=' rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>What were the Challenges</AccordionTrigger>
        <AccordionContent className='textColor text-left'>
            {challenge}
        </AccordionContent>
      </AccordionItem>
      ): null}
      {solution ? (

        <AccordionItem value="item-2" className='mt-5 rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>What were the Solutions</AccordionTrigger>
        <AccordionContent className='textColor text-left'>
        {solution}
        </AccordionContent>
      </AccordionItem>
      ): null}
      {value ? (

        <AccordionItem value="item-3" className='mt-5 rounded-lg'>
        <AccordionTrigger className='md:text-3xl text-xl font-bold text-left'>How did we add value</AccordionTrigger>
        <AccordionContent className='textColor text-left'>
        {value}
        </AccordionContent>
      </AccordionItem>
  ):null}
    </Accordion>
        </div>
    </div>
  )
}

export default MainSinglePortfolio