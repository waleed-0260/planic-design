import React from 'react'
import Hero from '@/components/about/Hero'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Slider from '@/components/Home/Slider'
import Team from '@/components/Home/Team'
import Explanation from '@/components/service/Explanation'
import Faq from '@/components/service/Faq'
import Specializing from '@/components/service/Specializing'
import Video from '@/components/service/Video'
import interiorService from "@/public/images/interiorService.jpg"
import Footer from '@/components/Home/Footer'
import Process from '@/components/service/Process'
import CoreServices from '@/components/service/CoreServices'
import { FiSearch, FiLayout, FiEdit3, FiTool, FiCheckCircle } from "react-icons/fi";
import Creativity from '@/components/service/Creativity'
import CallToAction from '@/components/service/CallToAction'
import PortfolioMain from '@/components/service/PortfolioMain'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Interior Design & Architecture | Planic Design",
  description: "Explore the full range of interior design, architectural planning, 3D renderings, and renovation services offered by Planic Design in Pakistan.",
};
const interiorFaqs = [
  {
    question: "What types of spaces do you design interiors for?",
    answer: "We design interiors for homes, apartments, offices, cafes, retail stores, and more. Whether it's a cozy bedroom or a trendy coffee shop, we tailor every space to suit your lifestyle and brand."
  },
  {
    question: "How do you ensure the design reflects my personality?",
    answer: "We begin with an in-depth consultation to understand your taste, daily needs, and aspirations. From color palettes to furniture choices, every detail is curated to mirror your personal or brand identity."
  },
  {
    question: "Can I be involved in the design process?",
    answer: "Absolutely! Collaboration is key. We involve you at every step, sharing mood boards, sketches, and revisions to make sure you love the outcome."
  },
  {
    question: "What if I already have some furniture or decor pieces I want to keep?",
    answer: "No problem! We can incorporate your existing pieces seamlessly into the new design. Blending old and new can create beautiful, unique results."
  },
  {
    question: "Do you offer turnkey interior design solutions?",
    answer: "Yes, we provide complete solutions — from design concepts to final styling — so you can sit back and watch your dream space come to life."
  },
]


const images = [
  {
    src: "/images/1A.webp",
    heading: "Luxury Residential Interiors",
    text: "Tailor-made designs that capture personal style and elevate daily living into an art form.",
  },
  {
    src: "/images/2A.webp",
    heading: "Commercial & Workplace Design",
    text: "Dynamic spaces that balance brand identity, productivity, and employee well-being.",
  },
  {
    src: "/images/3A.webp",
    heading: "Hospitality & Lifestyle Projects",
    text: "Immersive environments that delight guests and define memorable experiences.",
  },
  {
    src: "/images/4A.webp",
    heading: "Custom Furniture & Styling",
    text: "Bespoke furnishings and curated details that complete your space with distinction.",
  },
];


const page = () => {
    const steps = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Discovery & Consultation",
      text: "Understanding your lifestyle, needs, and aspirations.",
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Concept Development",
      text: "Crafting mood boards, spatial layouts, and design direction.",
    },
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: "Detailed Planning",
      text: "Material selection, technical drawings, and sustainability considerations.",
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: "Execution & Styling",
      text: "Seamless coordination, from construction oversight to final finishing touches.",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Project Handover",
      text: "Delivering a perfected space that tells your unique story.",
    },
  ];
  return (
    <div>
      <Hero heading="Interior Design" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={interiorService} heading=" Personalized Interior Design for Every Space" text="We craft interiors that blend style, comfort, and functionality. Our process is collaborative and tailored, focusing on your personality, needs, and space type—be it residential, retail, or office. Every element is selected to create a meaningful, inspiring environment." points={[
    "Project Planning & Concept Development",
    "Furniture & Material Selection",
    "Styling & Space Optimization"
  ]}/>
  {/* <CoreServices/> */}
  <Creativity images={images}/>
        <Process steps={steps}/>
        <PortfolioMain/>
        {/* <Video/> */}
        {/* <FeaturedProjects heading="Related Projects" /> */}
        <CallToAction heading="Let’s Design Your Signature Space" text=" Your dream space is just a conversation away. Discover how our expertise can turn your vision into a masterpiece." button="Book a Private Consultation"/>
        <Slider />
        <Team />
        <Faq faqs={interiorFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
