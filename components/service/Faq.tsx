"use client"
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GoArrowUpRight } from "react-icons/go"
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface FaqProps {
  faqs: FAQItem[]
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  return (
    <div className='w-[90%] flex flex-col items-center justify-center my-[50px]'>
      <h1 className='md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full text-center'>FAQs</h1>

      <Accordion type="single" collapsible className="w-full my-[50px]">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="bg-transparent">
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="textColor">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link
        href={"/contact"}
        className='button primaryColor rounded-full transition-all flex flex-row items-center justify-center text-sm gap-3 sm:mt-0 mt-5'
      >
        Have more questions? Contact Us Today <GoArrowUpRight className='hidden sm:flex' />
      </Link>
    </div>
  )
}

export default Faq
