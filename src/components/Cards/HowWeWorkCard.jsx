import React from 'react'


export default function HowWeWorkCard({icon, title, paragraph}) {
  return (
    <div className='max-w-[236px] px-[20px] flex flex-col items-center lg:px-[15px] md:flex-row md:max-w-full gap-[27px]'>
      <div className='flex items-center justify-center min-w-[50px] min-h-[50px] max-w-[80px] max-h-[80px] rounded-full bg-[rgba(244,_247,_255,_1)] lg:max-w-[50px] lg:max-h-[50px]'>
        <img src={icon} alt="Icon" className='w-full h-full' />
      </div>

      <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-[18px] leading-[28px] font-bold mt-2 lg:text-[18px] '>{title}</h3>
          <p className='text-center lg:text-[14px] md:text-start'>{paragraph}</p>
      </div>
    </div>
  )
}
