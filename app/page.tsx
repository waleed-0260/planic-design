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
import { useEffect, useState } from "react";

// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "@/components/Home/TextAnimation";
import Loader from "@/components/Loader";
import CalltoForn from "@/components/Home/CalltoForn";
export default function Home() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? <Loader/>: (
      <>
      <Hero/>
    <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative py-3">
      <About/>
      <Services/>
      <Process/>
      <FeaturedProjects/>
      <Testimonials/>
      <TextAnimation/>
      <Awards/>
      <Blogs/>
      <CalltoForn/>
    </div>
    <Footer/>
    </>
    )}
    </>
  );
}
