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
import interiorService from "@/public/images/interiorService.jpg"
import Footer from '@/components/Home/Footer'
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

const page = () => {
  return (
    <div>
      <Hero heading="Interior Design" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={interiorService} heading=" Personalized Interior Design for Every Space" text="We craft interiors that blend style, comfort, and functionality. Our process is collaborative and tailored, focusing on your personality, needs, and space type—be it residential, retail, or office. Every element is selected to create a meaningful, inspiring environment." points={[
    "Project Planning & Concept Development",
    "Furniture & Material Selection",
    "Styling & Space Optimization"
  ]}/>
        <Video/>
        {/* <FeaturedProjects heading="Related Projects" /> */}
        <Slider />
        <Team />
        <Process />
        <Faq faqs={interiorFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
