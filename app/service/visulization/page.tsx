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
import interior from "@/public/images/interior.jpg"
import visulizationService from "@/public/images/visulizationService.jpg"
import Footer from '@/components/Home/Footer'
const visualizationFaqs = [
  {
    question: "What is 3D visualization, and why is it important?",
    answer:
      "3D visualization lets you see a lifelike model of your space before anything is built. It helps you visualize layouts, lighting, and finishes — and make decisions with clarity and confidence.",
  },
  {
    question: "What software or tools do you use for rendering?",
    answer:
      "We use industry-leading tools like SketchUp, 3ds Max, and Lumion to deliver high-quality, photo-realistic renderings that reflect every nuance of your design.",
  },
  {
    question: "Can I request changes once I see the 3D model?",
    answer:
      "Yes! Your feedback is welcome. We offer revisions to fine-tune the model until it meets your vision and expectations.",
  },
  {
    question: "How long does it take to get the 3D renderings?",
    answer:
      "Depending on project size, basic renderings can take a few days, while complex visuals may take a week. We always provide realistic timelines upfront.",
  },
  {
    question: "Is 3D visualization part of your design package, or a separate service?",
    answer:
      "It can be both. Many of our clients choose it as part of a design package, but it’s also available as a standalone service.",
  },
];


const page = () => {
  return (
    <div>
      <Hero heading="3D Visulization" />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
        <Specializing img={visulizationService} heading="Photo-Realistic 3D Renderings" text="Visualize your project before it’s built with our high-quality 3D renderings. Our immersive designs showcase every element—from material textures to lighting and layout—allowing you to confidently explore design options, make decisions, and communicate your vision clearly."  points={[
    "Concept-to-Model Translation",
    "Lighting, Texturing & Styling",
    "Design Validation & Decision-Making"
  ]}/>
        <Video/>
        {/* <FeaturedProjects heading="Related Projects" /> */}
        <Slider />
        <Team />
        <Process />
        <Faq faqs={visualizationFaqs} />
        <Footer/>
      </div>
    </div>
  )
}

export default page
