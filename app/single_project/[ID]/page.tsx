import Hero from '@/components/about/Hero'
import FeaturedProjects from '@/components/Home/FeaturedProjects'
import Footer from '@/components/Home/Footer'
import Testimonials from '@/components/Home/Testimonials'
import Challenge from '@/components/SingleProject/Challenge'
import CoverImage from '@/components/SingleProject/CoverImage'
import Description from '@/components/SingleProject/Description'
import Solution from '@/components/SingleProject/Solution'
import React from 'react'
import CalltoForn from '@/components/Home/CalltoForn'


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // const { id } = await params
  // // const post = await getPost(id)
  // const data = await fetch(`https://dominobackend.vercel.app/get-portfolio/${id}`)
  // const singlePost = await data.json();
  // console.log("post", singlePost)
  return (
    <div>
      <Hero heading="Gordan's Villa" desc="This area will is short description of project, you can
select to show or hide it"/>
      {/* <CoverImage/> */}

      <div className='flex flex-col items-center justify-center bg-[#f1eee9] rounded-t-2xl w-full'>
        <Description/>
        <Challenge/>
        <Solution/>
        <CoverImage/>
        <Testimonials/>
        <FeaturedProjects/>
        <CalltoForn heading=" Let’s Design Something Extraordinary Together" desc="Whether you’re looking to build your dream home or transform a commercial space, Planic Design is here to make it happen. Let’s turn your ideas into reality with expert design solutions." btn="Get in Touch Today"/>
      <Footer/>
      </div>
    </div>
  )
}

// export default page