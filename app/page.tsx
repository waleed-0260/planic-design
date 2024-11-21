"use client"
import About from "@/components/Home/About";
import Awards from "@/components/Home/Awards";
import Blogs from "@/components/Home/Blogs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import { useEffect } from "react";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 900, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, [])
  return (
    <>
    <Hero/>
    <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
      <About/>
      <Services/>
      <Process/>
      <FeaturedProjects/>
      <Testimonials/>
      <Awards/>
      <Blogs/>
    </div>
    <Footer/>
    </>
  );
}
