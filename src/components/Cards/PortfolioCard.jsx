import React from 'react'

export default function PortfolioCard({image, title, subtitle}) {
  return (
    <div className='flex flex-col w-[300px] md:w-auto sm:w-full'>
      <img src={image} alt="imag" className='w-full h-[300px] object-cover object-center' />

      <h2 className='text-[#3461FF] text-[16px] mt-2 md:text-[14px]'>{subtitle}</h2>
      <h3 className='font-[800] text-[24px] leading-[28px] md:text-[18px]'>{title}</h3>
    </div>
  )
}
