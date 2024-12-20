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
import Slider from "@/components/Home/Slider";
export default function Home() {
  const [loading, setLoading] = useState(true);

  // console.log("check env",process.env);

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
      <Slider/>
      <Testimonials/>
      <TextAnimation/>
      {/* <Awards/> */}
      {/* <Blogs/> */}
      <CalltoForn  heading="Stay Inspired, Stay Informed" desc="Join the Planic Design community to get the latest design trends, project highlights, and expert tips delivered straight to your inbox. Be the first to know about our exclusive insights and updates." btn="Subscribe Now"/>
    <Footer/>
    </div>
    </>
    )}
    </>
  );
}
