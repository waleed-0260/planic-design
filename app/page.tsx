"use client"
import About from "@/components/Home/About";
import Awards from "@/components/Home/Awards";
import Blogs from "@/components/Home/Blogs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import Services from "@/components/service/Services";
import Testimonials from "@/components/Home/Testimonials";
import { useEffect, useState } from "react";

// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAnimation from "@/components/Home/TextAnimation";
import Loader from "@/components/Loader";
import CalltoForn from "@/components/Home/CalltoForn";
import Slider from "@/components/Home/Slider";
import CountDown from "@/components/Home/CountDown";
import ScrollColorText from "@/components/Home/ScrollColorText";
import Designer from "@/components/Home/Designer";
import Team from "@/components/Home/Team";
import ContactForm from "@/components/Contact/ContactForm";
import Sectors from "@/components/about/Sectors";
import TextRevealSection from "@/components/Home/TextRevealSection";
import SecondSection from "@/components/Home/SecondSection";
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
      {/* <About/> */}
      {/* <ScrollColorText/> */}
      <TextRevealSection/>
      {/* <SecondSection/> */}
      <Services/>
      {/* <Process/> */}
      <CountDown/>
      <FeaturedProjects/>
      <Sectors/>
      <Slider/>
      <Team/>
      <CalltoForn  heading="Stay Inspired, Stay Informed" desc="Join the Planic Design community to get the latest design trends, project highlights, and expert tips delivered straight to your inbox. Be the first to know about our exclusive insights and updates." btn="Subscribe Now"/>
      <ContactForm/>
    <Footer/>
    </div>
    </>
    )}
    </>
  );
}
