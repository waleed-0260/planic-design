"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import TextRevealSection from "@/components/Home/TextRevealSection";
import Expertise from "@/components/Home/Expertise";
import CountDown from "@/components/Home/CountDown";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Sectors from "@/components/about/Sectors";
import Team from "@/components/Home/Team";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Home/Footer";
import Loader from "@/components/Loader";

export default function HomeClientWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Hero />
      <div className="flex flex-col items-center justify-center w-full rounded-t-[20px] bg-[#f1eee9] relative ">
        <Slider />
        <TextRevealSection />
        <div className="bg-[#f1eee9] flex flex-col items-center justify-center w-full rounded-t-[20px] relative py-3">
          <Expertise />
          <CountDown />
          <FeaturedProjects heading="Featured Projects" />
          <Sectors />
          <Team />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
