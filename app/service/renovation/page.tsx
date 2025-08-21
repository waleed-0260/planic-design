import React from 'react'
import Hero from '@/components/about/Hero'
import Process from '@/components/service/Process'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Slider from '@/components/Home/Slider'
import Team from '@/components/Home/Team'
import Explanation from '@/components/service/Explanation'
import Faq from '@/components/service/Faq'
import Specializing from '@/components/service/Specializing'
import Video from '@/components/service/Video'
// import interior from "@/public/images/interior.jpg"
import renovationService from "@/public/images/renovationService.webp"
import Footer from '@/components/Home/Footer'
import { FiSearch, FiLayout, FiEdit3, FiTool, FiCheckCircle } from "react-icons/fi";
import Creativity from '@/components/service/Creativity'
import CallToAction from '@/components/service/CallToAction'
import PortfolioMain from '@/components/service/PortfolioMain'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services – Interior Design & Architecture | Planic Design",
  description: "Explore the full range of interior design, architectural planning, 3D renderings, and renovation services offered by Planic Design in Pakistan.",
};

const renovationFaqs = [
  {
    question: "What’s the difference between renovation and fit-out?",
    answer:
      "Renovation involves upgrading or remodeling an existing space. Fit-out refers to making an empty space ready for use — including flooring, ceilings, lighting, partitions, and more.",
  },
  {
    question: "Can you handle both residential and commercial renovations?",
    answer:
      "Yes, we specialize in home makeovers, office fit-outs, retail upgrades, and more. From small tweaks to full-scale transformations, we do it all.",
  },
  {
    question: "Do you manage the entire project, including materials and labor?",
    answer:
      "Yes, we offer a full turnkey solution. From sourcing quality materials to coordinating skilled workers — we take care of every detail so you don’t have to.",
  },
  {
    question: "How long does a typical renovation or fit-out project take?",
    answer:
      "Project duration varies by scope, but we always provide a clear timeline — and stick to it. Our team is known for delivering quality work, fast.",
  },
  {
    question: "Can I live or work in the space during the renovation?",
    answer:
      "It depends on the project. For minimal disruptions, we can phase"
  }
]

const page = () => {

const steps = [
  {
    icon: <FiSearch className="w-8 h-8" />,
    title: "Consultation & Briefing",
    text: "Understanding your goals, style, and functional needs.",
  },
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: "Concept & Design Development",
    text: "Creative proposals backed by technical feasibility.",
  },
  {
    icon: <FiEdit3 className="w-8 h-8" />,
    title: "Material Selection & Detailing",
    text: "Premium finishes and innovative solutions tailored to your vision.",
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "Construction & Fit-Out Execution",
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
    src: "/images/1R.webp",
    heading: "Residential Renovations",
    text: "Tailored upgrades that preserve character while enhancing modern comfort and functionality.",
  },
  {
    src: "/images/2R.webp",
    heading: "Commercial Fit-Outs",
    text: "Bespoke spaces that reflect brand identity, improve efficiency, and elevate user experience.",
  },
  {
    src: "/images/expertise3.webp",
    heading: "Luxury Interiors",
    text: "High-end finishes, custom furniture, and refined details for a signature look and feel.",
  },
  {
    src: "/images/4R.webp",
    heading: "Turnkey Solutions",
    text: "Complete, end-to-end project management with single-point accountability.",
  },
];


  return (
    <div>
      <Hero heading="Renovation & Fit Out" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={renovationService} heading=" Complete Renovation & Fit-Out Services" text="From initial site analysis to the final polish, our renovation and fit-out solutions are tailored to elevate your space. Whether it’s a residential refresh or a commercial overhaul, we blend design excellence with efficient execution to deliver impressive, lasting transformations."  points={[
    "Site Assessment & Demolition Planning",
    "Full Renovation & Installation Work",
    "Finishing, Styling & Handover"
  ]}/>
  <Creativity images={images}/>
      <Process steps={steps} heading="A Seamless Journey from Concept to Completion"/>
      <PortfolioMain/>
      <CallToAction heading="Let’s Redefine Your Space" text=" Your project deserves more than a standard renovation — it deserves a transformation. Let’s bring your vision to life with precision, creativity, and care." button="Speak with Our Design Team"/>
        {/* <Video/> */}
        {/* <FeaturedProjects heading="Related Projects" /> */}
        <Slider />
        <Team />
        <Faq faqs={renovationFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
