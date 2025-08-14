import React from 'react'
import Hero from '@/components/about/Hero'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Slider from '@/components/Home/Slider'
import Team from '@/components/Home/Team'
import Explanation from '@/components/service/Explanation'
import Faq from '@/components/service/Faq'
import Specializing from '@/components/service/Specializing'
import Video from '@/components/service/Video'
// import interior from "@/public/images/interior.jpg"
import architectureService from "@/public/images/architectureService.jpg"
import Footer from '@/components/Home/Footer'
import CoreServices from '@/components/service/CoreServices'
import CallToAction from '@/components/service/CallToAction'
import { FiSearch, FiLayout, FiEdit3, FiTool, FiCheckCircle } from "react-icons/fi";
import Creativity from '@/components/service/Creativity'
import Process from '@/components/service/Process'
import PortfolioMain from '@/components/service/PortfolioMain'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Interior Design & Architecture | Planic Design",
  description: "Explore the full range of interior design, architectural planning, 3D renderings, and renovation services offered by Planic Design in Pakistan.",
};
const architectFaqs = [
  {
    question: "What’s included in your architectural planning service?",
    answer:
      "Our service includes space analysis, detailed floor plans, elevations, layout optimization, and construction-ready technical drawings.",
  },
  {
    question: "Can you design for both residential and commercial buildings?",
    answer:
      "Yes. Whether it's a home, an office, a shop, or a restaurant, we create functional, code-compliant layouts that bring structure and style together.",
  },
  {
    question: "How do you ensure the layout is practical and future-proof?",
    answer:
      "We prioritize efficient space usage, natural light, ventilation, and future expansion potential. Every plan is crafted with both present needs and long-term value in mind.",
  },
  {
    question: "Do you handle all necessary documentation and approvals?",
    answer:
      "Yes, we assist in preparing all architectural documentation required for permits and approvals, ensuring a smooth process from start to finish.",
  },
  {
    question: "I already have a rough idea — can you build on it?",
    answer:
      "Of course! We can refine your sketches or ideas into professional architectural plans that are ready for implementation.",
  },
];

const steps = [
  {
    icon: <FiSearch className="w-8 h-8" />,
    title: "Site Analysies & Feasibility Study",
    text: "Understanding your goals, style, and functional needs.",
  },
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: "Concept Development & Master Planning",
    text: "Creative proposals backed by technical feasibility.",
  },
  {
    icon: <FiEdit3 className="w-8 h-8" />,
    title: "Sustainable & Energy-Efficient Planning",
    text: "Premium finishes and innovative solutions tailored to your vision.",
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "3D Visualization & Planning Documentation",
    text: "Meticulous craftsmanship with on-site project management.",
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Final Styling & Handover",
    text: "Attention to every finishing detail, ensuring flawless delivery.",
  },
];

const images = [
  {
    src: "/images/1AR.jpg",
    heading: "Architectural drawings  ",
    text: "Tailored upgrades that preserve character while enhancing modern comfort and functionality.",
  },
  {
    src: "/images/2AR.jpg",
    heading: "Structural drawings",
    text: "Architects services means providing a number of services, including site analysis, preparing feasibility reports, making structural and submission",
  },
  {
    src: "/images/3AR.jpg",
    heading: "Master Plans",
    text: "High-end finishes, custom furniture, and refined details for a signature look and feel.",
  },
  {
    src: "/images/4AR.jpg",
    heading: "3D Visulizations",
    text: "Complete, end-to-end project management with single-point accountability.",
  },
];


const page = () => {
  return (
    <div>
      <Hero heading="Architectural Planning" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={architectureService} heading=" Architectural Layouts That Work" text="Our architectural services cover every detail—concept development, technical drawings, and space planning tailored to your needs. We ensure smart, functional designs that align with your lifestyle, project goals, and construction requirements from start to finish." points={[
    "Site Analysis & Space Planning",
    "Technical Drawings & Documentation",
    "Project Supervision & Design Evolution"
  ]}/>
  <Creativity images={images}/>
      <Process steps={steps}/>
      <PortfolioMain/>
        <Slider />
        <CallToAction heading="Let’s Design Your Signature Space" text=" Your dream space is just a conversation away. Discover how our expertise can turn your vision into a masterpiece." button="Book a Private Consultation"/>
        <Team />
        <Faq faqs={architectFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
