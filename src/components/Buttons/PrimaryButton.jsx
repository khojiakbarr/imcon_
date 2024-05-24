import React from 'react'

export default function PrimaryButton({text, clickFunc}) {
  return (
    <button className='p-[16px_24px] bg-[#3461FF] text-[#fff] font-medium text-[16px] whitespace-nowrap leading-[20px] rounded-[70px] md:p-[12px_20px] sm:w-full'>
      {text}
    </button>
  )
}
