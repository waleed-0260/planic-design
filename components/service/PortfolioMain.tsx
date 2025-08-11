import React from 'react'
import { GetPortfolio } from "@/lib/GetPortfolio";
import FeaturedProjects from '../Home/FeaturedProjects';

const PortfolioMain = async() => {
  const data = await GetPortfolio()

  return (
    <div className='w-full flex items-center justify-center'><FeaturedProjects projects={data} heading="Featured Projects"/></div>
  )
}

export default PortfolioMain