import React from 'react'
import Architect from "../../public/images/Architect.png"
import Visulization from "../../public/images/Visulization.png"
import interior from "../../public/images/interior.png"
import service2 from "../../public/images/service2.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
// import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link'
import { MdOutlineArchitecture } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { FaHardHat } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/smallaccordion"
const Services = () => {
  return (
    // <div className='flex flex-col items-center justify-center w-[90%] '>
    //     <h1 data-aos="zoom-in">OUR SERVICES</h1>

    //     <div className='mt-5 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1  ' data-aos="fade-up" data-aos-delay="300">
    //         <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 md:border-b-[1px] border-[#b3b2af]' id='architecture'>
    //             <p className='text-3xl primaryColor'>
    //             {/* <CiBezier/> */}
    //             <MdOutlineArchitecture/>

    //             </p>
    //             <h1 className='font-semibold sm:text-2xl text-sm font-normalral Design</h1>
    //             <div className='md:w-[160px] w-[250px] h-[140px]'> 
    //                 <Image src={Architect} alt="building" className='object-cover rounded-md h-full w-full'/>
    //             </div>
    //             <h1 className='font-bold md:text-2xl text-sm font-normaltructures with Purpose and Precision</h1>
    //             <p className='text-sm textColor'>Transforming visions into structures, our architectural designing service combines innovation and functionality. We craft unique, sustainable designs tailored to your needs, ensuring every project harmonizes aesthetics and practicality.</p>
    //             <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Explore Architectural Solutions<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
    //         </div>

    //         <div className='py-5 gap-5 flex flex-col items-start px-5 justify-around border-l-[1px] border-[#b3b2af] md:border-b-[1px] border-[#b3b2af]' id='interior'>
    //             <p className='text-3xl primaryColor'>
    //             {/* <CiBezier/> */}
    //             <FaCouch/>

    //             </p>
    //             <h1 className='font-semibold sm:text-2xl text-sm font-normalesigning</h1>
    //             <div className='md:w-[160px] w-[250px] h-[140px]'> 
    //                 <Image src={interior} alt="building" className='object-cover rounded-md h-full w-full'/>
    //             </div>
    //             <h1 className='font-bold md:text-2xl text-sm font-normalInteriors That Define You</h1>
    //             <p className='text-sm textColor'>Redefine your spaces with our interior designing expertise. From concept to completion, we create personalized, stylish interiors that reflect your personality while maximizing comfort and functionality.</p>
    //             <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Start Your Interior Transformation <IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
    //         </div>
    //         <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 ' id='innovative'>
    //             <p className='text-3xl primaryColor'>
    //             {/* <CiBezier/> */}
    //             <BiCube/>

    //             </p>
    //             <h1 className='font-semibold sm:text-2xl text-sm font-normal Solutions</h1>
    //             <div className='md:w-[160px] w-[250px] h-[140px]'> 
    //                 <Image src={Visulization} alt="building" className='object-cover rounded-md h-full w-full'/>
    //             </div>
    //             <h1 className='font-bold md:text-2xl text-sm font-normalour vision</h1>
    //             <p className='text-sm textColor'>At Planic Design, we embrace creativity and advanced technology to deliver innovative solutions across all our services. Whether it’s groundbreaking designs, bespoke interiors, or seamless construction processes, we ensure exceptional outcomes for every project.</p>
    //             <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> See your design in 3D<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
    //         </div>

    //         <div className='py-5 gap-5 flex flex-col items-start justify-around px-5 border-l-[1px]  border-[#b3b2af]' id='constructions'>
    //             <p className='text-3xl primaryColor'>
    //             {/* <CiBezier/> */}
    //             <FaHardHat/>

    //             </p>
    //             <h1 className='font-semibold sm:text-2xl text-sm font-normalon Onsite Supervision</h1>
    //             <div className='md:w-[160px] w-[250px] h-[140px]'> 
    //                 <Image src={service2} alt="building" className='object-cover rounded-md h-full w-full'/>
    //             </div>
    //             <h1 className='font-bold md:text-2xl text-sm font-normalith Care, Precision, and Expertise</h1>
    //             <p className='text-sm textColor'>Ensure your project is executed flawlessly with our construction onsite supervision. Our experienced team oversees every detail, ensuring quality, efficiency, and compliance with your vision and standards.</p>
    //             <Link href={"/portfolio"} className='w-[300px] h-10 sm:flex hidden items-center justify-center gap-4 bg-transparent border-[1px] hover:bg-[#231f20] border-[#231f20] primaryColor hover:text-white rounded-full transition duration-300 text-sm '> Ensuring Excellence in Execution<IoIosArrowRoundForward style={{rotate:"310deg"}}/></Link>
    //         </div>
    //     </div>
    // </div> 
    <div className='flex flex-col w-[90%] items-left justify-left space-y-9 my-[80px]'>
        <h1 className='md:text-[72px] text-2xl py-9 border-t-[1px] border-b-[1px] border-black w-full'> Our Services</h1>
        <p className='md:w-[50%] text-sm'>At Planic Design, we transform visions into reality through innovative architectural and interior designs that blend aesthetics, functionality, and sustainability. Our expert team ensures flawless execution with onsite supervision, delivering personalized solutions tailored to your needs. With creativity and advanced technology, we craft exceptional spaces that inspire and endure.</p>
        <div className='flex md:flex-row flex-col items-start justify-between mt-[50px] w-full'>
            <div className=''>
            <Image src={service2} alt='services' className='h-auto w-auto'/>
            </div>
            <div className='flex flex-col  md:w-[50%] w-full'>
                <p className='text-xl '>Expertise</p>
                <Accordion type="single" collapsible className="md:w-[80%] w-full mt-[20px]">
      <AccordionItem value="item-1" className=' rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Architectural Designing</AccordionTrigger>
        <AccordionContent className='textColor'>
        <ul className='list-disc pl-5'>
  <li>Site testing, Topography survey and Soil test</li>
  <li>Feasibility study and business cases</li>
  <li>Full Architectural Design</li>
  <li>Full Interior Design</li>
  <li>Research and Development</li>
  <li>Graphic Design</li>
  <li>3D Modelling, fly-throughs + renders + visualisation</li>
  <li>Graphic Communication - Illustrative Diagrammatic Sketching and Mood Board Details</li>
  <li>Approval from relative authorities</li>
  <li>Detailed Drawings documentation services including (MEP, BOQ, and Structure)</li>
</ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Interior Design</AccordionTrigger>
        <AccordionContent className='textColor'>
        <ul className='list-disc pl-5'>
  <li>Full Interior Design including furniture details.</li>
  <li>Providing finishes specifications.</li>
  <li>Research and Development.</li>
  <li>Graphic Design</li>
  <li>3D Modelling, fly-throughs + renders + visualisation</li>
  <li>Graphic Communication - Illustrative Diagrammatic Sketching and Mood Board Details.</li>
</ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>turn-key solution</AccordionTrigger>
        <AccordionContent className='textColor'>
        <ul className='list-disc pl-5'>
        <li>Site testing, Topography survey and Soil test</li>
  <li>Feasibility study and business cases</li>
  <li>Full Architectural and Interior Design</li>
  <li>Research and Development</li>
  <li>Approval from relative authorities</li>
  <li>We will provide design, engineering, and installation of structures for all sorts of buildings</li>
  <li>3D Modelling, fly-throughs + renders + visualisation</li>
  <li>Graphic Communication - Illustrative Diagrammatic Sketching</li>
  <li>Detailed Drawings documentation services including (MEP, BOQ, and Structure)</li>
  <li>Final touches like finishes, coatings, or any other required elements for the project</li>
</ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Construction OnSite Supervision</AccordionTrigger>
        <AccordionContent className='textColor'>
        <ul className='list-disc pl-5'>
  <li>Site Visits</li>
  <li>Documentation and reporting on site</li>
  <li>Ensuring quality standards</li>
  <li>Providing Problem-Solving</li>
  <li>Client Satisfaction</li>
  <li>Ensuring that the project is executed according to the design and specifications mentioned</li>
</ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Innovative Solutions</AccordionTrigger>
        <AccordionContent className='textColor'>
        <ul className='list-disc pl-5'>
  <li>Facade Uplifting Detail Design</li>
  <li>Interior Revamping Detail Design</li>
  <li>Innovative Interior Solutions</li>
  <li>Research and Development</li>
  <li>Graphic Design</li>
  <li>3D Modelling, fly-throughs + renders + visualisation</li>
  <li>Graphic Communication - Illustrative Diagrammatic Sketching and Mood Board Details</li>
</ul>

        </AccordionContent>
      </AccordionItem>
    </Accordion>


    {/* <p className='text-xl mt-[50px]'>Supporting Services</p>
                <Accordion type="single" collapsible className="md:w-[80%] w-full mt-[20px]">
      <AccordionItem value="item-1" className=' rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Strategic Planning + Communication</AccordionTrigger>
        <AccordionContent className='textColor'>
        Transforming visions into structures, our architectural designing service combines innovation and functionality. We craft unique, sustainable designs tailored to your needs, ensuring every project harmonizes aesthetics and practicality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Consultation + Engagement</AccordionTrigger>
        <AccordionContent className='textColor'>
        Redefine your spaces with our interior designing expertise. From concept to completion, we create personalized, stylish interiors that reflect your personality while maximizing comfort and functionality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='mt-5 rounded-none'>
        <AccordionTrigger className=' text-sm font-normal text-left'>Design Review</AccordionTrigger>
        <AccordionContent className='textColor'>
        Ensure your project is executed flawlessly with our construction onsite supervision. Our experienced team oversees every detail, ensuring quality, efficiency, and compliance with your vision and standards.
        </AccordionContent>
      </AccordionItem>
    </Accordion> */}
            </div>
        </div>
    </div>
)
}

export default Services