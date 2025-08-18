// import Hero from '@/components/about/Hero'
import Footer from '@/components/Home/Footer'
import React from 'react'
// import CalltoForn from '@/components/Home/CalltoForn'
import MainSinglePortfolio from '@/components/SingleProject/MainSinglePortfolio'
import Hero from '@/components/SingleProject/Hero'
import Images from '@/components/SingleProject/Images'
// import FeaturedProjects from '@/components/Home/FeaturedProjects'


export default async function Page({
  params,
}: {
  params: Promise<{ ID: string }>
}) {
  const { ID } = await params;
  // console.log("id", ID)
  // const post = await getPost(id)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const res = await fetch(`${baseUrl}/api/portfolio/${ID}`);
  const data = await res.json();
  // console.log("singlePost", singlePost)
  const singlePost = data?.data

// const products = await fetch(`${baseUrl}/api/portfolio`);
//   const allData = await products.json();

  return (
    <div>
<Hero img={singlePost?.masterFloorImage} tagline={singlePost?.tagline}/>

      <div className='flex flex-col items-center justify-center rounded-t-2xl w-full'>
        <MainSinglePortfolio heading={singlePost?.heading} description={singlePost?.description} challenge={singlePost?.challenge} solution={singlePost?.solution} value={singlePost?.value} name={singlePost?.clientName} location={singlePost?.location} date={singlePost?.date} role={singlePost?.date}/>
        <Images panel={singlePost?.panelFloorImage} master={singlePost?.masterFloorImage} mapImage={singlePost.mapImage} rendering={singlePost?.renderingImage} additional={singlePost?.additionalImage}/>
        {/* <FeaturedProjects heading="Related Projects" products={allData?.data}/> */}
      <Footer/>
      </div>
    </div>
  )
}

// export default page