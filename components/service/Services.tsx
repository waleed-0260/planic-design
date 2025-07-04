"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/smallaccordion";
import serviceNew from "../../public/images/serviceNew.png";

const Services = () => {
  const router = useRouter();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  const [refreshKey, setRefreshKey] = useState(0); // 🔧 Force refresh

  const handleHashChange = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenItem(hash);
      setRefreshKey((prev) => prev + 1); // 🔧 Trigger re-render
    }
  };

  useEffect(() => {
    handleHashChange(); // handle initial load
    window.addEventListener("hashchange", handleHashChange); // 🔧 Listen to hash changes
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex flex-col w-[90%] items-left justify-left space-y-9 my-[80px] z-10 relative">
      <h1 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">
        Our Services
      </h1>

      <p className="md:w-[50%] text-md textColor">
        At Planic Design, we transform visions into reality through innovative
        architectural and interior designs that blend aesthetics, functionality,
        and sustainability.
      </p>

      <div className="flex md:flex-row flex-col items-start justify-between mt-[50px] w-full">
        <div className="md:w-[40%] w-full">
          <Image src={serviceNew} alt="services" className="w-full h-full" />
        </div>

        <div className="flex flex-col md:w-[50%] w-full md:mt-0 mt-5">
          <p className="text-xl ">Expertise</p>

          {/* 🔧 Key added for force-re-render on repeated value */}
          <Accordion
            key={refreshKey}
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="md:w-[80%] w-full mt-[20px]"
          >
            <AccordionItem value="architecture" id="architecture" className="rounded-none">
              <AccordionTrigger className="text-md font-normal text-left">
                Architectural Designing
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Site testing, Topography survey and Soil test</li>
                  <li>Feasibility study and business cases</li>
                  <li>Full Architectural Design</li>
                  <li>Full Interior Design</li>
                  <li>Research and Development</li>
                  <li>Graphic Design</li>
                  <li>3D Modelling, fly-throughs + renders + visualisation</li>
                  <li>Graphic Communication - Illustrative Diagrammatic Sketching and Mood Board</li>
                  <li>Approval from relative authorities</li>
                  <li>Detailed Drawings documentation services (MEP, BOQ, Structure)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="interior" id="interior" className="mt-5 rounded-none">
              <AccordionTrigger className="text-md font-normal text-left">
                Interior Designing
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Full Interior Design including furniture details.</li>
                  <li>Providing finishes specifications.</li>
                  <li>Research and Development.</li>
                  <li>Graphic Design</li>
                  <li>3D Modelling, fly-throughs + renders + visualisation</li>
                  <li>Graphic Communication - Illustrative Diagrammatic Sketching and Mood Board</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="turnkey" id="turnkey" className="mt-5 rounded-none">
              <AccordionTrigger className="text-md font-normal text-left">
                Turn-Key Solution
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Site testing, Topography survey and Soil test</li>
                  <li>Feasibility study and business cases</li>
                  <li>Full Architectural and Interior Design</li>
                  <li>Approval from authorities</li>
                  <li>Design, engineering, and installation of structures</li>
                  <li>3D Modelling, renders, visualisation</li>
                  <li>Final touches like finishes or coatings</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="innovative" id="innovative" className="mt-5 rounded-none">
              <AccordionTrigger className="text-md font-normal text-left">
                Innovative Solutions
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Facade Uplifting Detail Design</li>
                  <li>Interior Revamping Detail Design</li>
                  <li>Innovative Interior Solutions</li>
                  <li>3D Modelling, visualisation</li>
                  <li>Graphic Communication and Mood Boards</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="construction" id="construction" className="mt-5 rounded-none">
              <AccordionTrigger className="text-md font-normal text-left">
                Construction OnSite Supervision
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Site Visits</li>
                  <li>Reporting and Documentation</li>
                  <li>Ensuring Quality and Problem Solving</li>
                  <li>Client Satisfaction</li>
                  <li>Execution according to design/specs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Services;
