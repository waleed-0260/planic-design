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
import architectureService from "@/public/images/architectureService.jpg"
import Footer from '@/components/Home/Footer'

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
        <Video/>
        {/* <FeaturedProjects heading="Related Projects" /> */}
        <Slider />
        <Team />
        {/* <Process /> */}
        <Faq faqs={architectFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
