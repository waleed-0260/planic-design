import React from "react";
// import Architect from "../../public/images/Architect.png";
// import Visulization from "../../public/images/Visulization.png";
// import interior from "../../public/images/interior.png";
// import service2 from "../../public/images/service2.png";
import serviceNew from "../../public/images/serviceNew.png"
// import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
// import { GoArrowUpRight } from "react-icons/go";
// import Link from "next/link";
// import { MdOutlineArchitecture } from "react-icons/md";
// import { FaCouch } from "react-icons/fa";
// import { BiCube } from "react-icons/bi";
// import { FaHardHat } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/smallaccordion";
// import images from "../../public/images/images.jpg"
const Services = () => {
  return (
    <div className="flex flex-col w-[90%] items-left justify-left space-y-9 my-[80px] z-10 relative">
      <h1 className="md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full">
        {" "}
        Our Services
      </h1>
      <p className="md:w-[50%] text-md textColor">
        At Planic Design, we transform visions into reality through innovative
        architectural and interior designs that blend aesthetics, functionality,
        and sustainability. Our expert team ensures flawless execution with
        onsite supervision, delivering personalized solutions tailored to your
        needs. With creativity and advanced technology, we craft exceptional
        spaces that inspire and endure.
      </p>
      <div className="flex md:flex-row flex-col items-start justify-between mt-[50px] w-full">
        <div className="md:w-[40%] w-full">
          <Image src={serviceNew} alt="services" className="w-full h-full" />
        </div>
        <div className="flex flex-col  md:w-[50%] w-full md:mt-0 mt-5">
          <p className="text-xl ">Expertise</p>
          <Accordion
            type="single"
            collapsible
            className="md:w-[80%] w-full mt-[20px]"
          >
            
            
            <AccordionItem value="item-1" className=" rounded-none">
              <AccordionTrigger className=" text-md font-normal text-left">
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
                  <li>
                    Graphic Communication - Illustrative Diagrammatic Sketching
                    and Mood Board Details
                  </li>
                  <li>Approval from relative authorities</li>
                  <li>
                    Detailed Drawings documentation services including (MEP,
                    BOQ, and Structure)
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-5 rounded-none">
              <AccordionTrigger className=" text-md font-normal text-left">
                Interior Designing
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Full Interior Design including furniture details.</li>
                  <li>Providing finishes specifications.</li>
                  <li>Research and Development.</li>
                  <li>Graphic Design</li>
                  <li>3D Modelling, fly-throughs + renders + visualisation</li>
                  <li>
                    Graphic Communication - Illustrative Diagrammatic Sketching
                    and Mood Board Details.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mt-5 rounded-none">
              <AccordionTrigger className=" text-md font-normal text-left">
                Turn-Key Solution
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Site testing, Topography survey and Soil test</li>
                  <li>Feasibility study and business cases</li>
                  <li>Full Architectural and Interior Design</li>
                  <li>Research and Development</li>
                  <li>Approval from relative authorities</li>
                  <li>
                    We will provide design, engineering, and installation of
                    structures for all sorts of buildings
                  </li>
                  <li>3D Modelling, fly-throughs + renders + visualisation</li>
                  <li>
                    Graphic Communication - Illustrative Diagrammatic Sketching
                  </li>
                  <li>
                    Detailed Drawings documentation services including (MEP,
                    BOQ, and Structure)
                  </li>
                  <li>
                    Final touches like finishes, coatings, or any other required
                    elements for the project
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="mt-5 rounded-none">
              <AccordionTrigger className=" text-md font-normal text-left">
                Innovative Solutions
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Facade Uplifting Detail Design</li>
                  <li>Interior Revamping Detail Design</li>
                  <li>Innovative Interior Solutions</li>
                  <li>Research and Development</li>
                  <li>Graphic Design</li>
                  <li>3D Modelling, fly-throughs + renders + visualisation</li>
                  <li>
                    Graphic Communication - Illustrative Diagrammatic Sketching
                    and Mood Board Details
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mt-5 rounded-none">
              <AccordionTrigger className=" text-md font-normal text-left">
                Construction OnSite Supervision
              </AccordionTrigger>
              <AccordionContent className="textColor text-[16px]">
                <ul className="list-disc pl-5">
                  <li>Site Visits</li>
                  <li>Documentation and reporting on site</li>
                  <li>Ensuring quality standards</li>
                  <li>Providing Problem-Solving</li>
                  <li>Client Satisfaction</li>
                  <li>
                    Ensuring that the project is executed according to the
                    design and specifications mentioned
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* <p className='text-xl mt-[50px]'>Supporting Services</p>
                <Accordion type="single" collapsible className="md:w-[80%] w-full mt-[20px]">
      <AccordionItem value="item-1" className=' rounded-none'>
        <AccordionTrigger className=' text-md font-normal text-left'>Strategic Planning + Communication</AccordionTrigger>
        <AccordionContent className='textColor'>
        Transforming visions into structures, our architectural designing service combines innovation and functionality. We craft unique, sustainable designs tailored to your needs, ensuring every project harmonizes aesthetics and practicality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-md font-normal text-left'>Consultation + Engagement</AccordionTrigger>
        <AccordionContent className='textColor'>
        Redefine your spaces with our interior designing expertise. From concept to completion, we create personalized, stylish interiors that reflect your personality while maximizing comfort and functionality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-md font-normal text-left'>Design Review</AccordionTrigger>
        <AccordionContent className='textColor'>
        Ensure your project is executed flawlessly with our construction onsite supervision. Our experienced team oversees every detail, ensuring quality, efficiency, and compliance with your vision and standards.
        </AccordionContent>
      </AccordionItem>
    </Accordion> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
