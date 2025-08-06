import React from 'react'
import Hero from '@/components/about/Hero'
import Process from '@/components/about/Process'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Slider from '@/components/Home/Slider'
import Team from '@/components/Home/Team'
import Explanation from '@/components/service/Explanation'
import Faq from '@/components/service/Faq'
import Specializing from '@/components/service/Specializing'
import Video from '@/components/service/Video'
// import interior from "@/public/images/interior.jpg"
import renovation from "@/public/images/renovation.jpg"
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
  return (
    <div>
      <Hero heading="Interior Design" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={renovation} heading=" Complete Renovation & Fit-Out Services" text=" We offer start-to-finish renovation and fit-out services for homes, offices, and commercial spaces that need a fresh start."/>
        <Video/>
        <FeaturedProjects heading="Related Projects" />
        <Slider />
        <Team />
        <Process />
        <Faq faqs={renovationFaqs} />
      </div>
    </div>
  )
}

export default page
