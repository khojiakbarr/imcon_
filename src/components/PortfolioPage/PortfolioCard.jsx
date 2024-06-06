import React from 'react'
import PortfolioGallery from './PortfolioGallery'
import PortfolioInfo from './PortfolioInfo'

export default function PortfolioCard({data}) {
  return (
    <div className='w-full flex gap-5 py-10' id='galleryCard'>
      <PortfolioGallery url={data?.url} />
      <PortfolioInfo info={data} />
    </div>
  )
}
