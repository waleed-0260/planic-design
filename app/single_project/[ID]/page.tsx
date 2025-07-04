// import Hero from '@/components/about/Hero'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Footer from '@/components/Home/Footer'
import Testimonials from '@/components/Home/Testimonials'
import Challenge from '@/components/SingleProject/Challenge'
import CoverImage from '@/components/SingleProject/CoverImage'
import Description from '@/components/SingleProject/Description'
import Solution from '@/components/SingleProject/Solution'
import React from 'react'
import CalltoForn from '@/components/Home/CalltoForn'
import MainSinglePortfolio from '@/components/SingleProject/MainSinglePortfolio'
import Hero from '@/components/SingleProject/Hero'
import Images from '@/components/SingleProject/Images'


export default async function Page({
  params,
}: {
  params: Promise<{ ID: string }>
}) {
  const { ID } = await params;
  // console.log("id", ID)
  // const post = await getPost(id)
  const data = await fetch(`https://planicbackend.vercel.app/get-portfolio/${ID}`)
  const singlePost = await data.json();
  // console.log("post", singlePost)
  return (
    <div>
      {/* <Hero heading="Gordan's Villa" desc="This area will is short description of project, you can
select to show or hide it"/> */}
<Hero img={singlePost?.masterFloorImage} tagline={singlePost?.tagline}/>
      {/* <CoverImage/> */}

      <div className='flex flex-col items-center justify-center rounded-t-2xl w-full'>
        <MainSinglePortfolio heading={singlePost?.heading} description={singlePost?.description} challenge={singlePost?.challenge} solution={singlePost?.solution} value={singlePost?.value} name={singlePost?.clientName} location={singlePost?.location} date={singlePost?.date} role={singlePost?.date}/>
        <Images panel={singlePost?.panelFloorImage} master={singlePost?.masterFloorImage} mapImage={singlePost.mapImage} rendering={singlePost?.renderingImage} additional={singlePost?.additionalImage}/>
        {/* <Testimonials/> */}
        {/* <FeaturedProjects/> */}
        <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
      <Footer/>
      </div>
    </div>
  )
}

// export default page