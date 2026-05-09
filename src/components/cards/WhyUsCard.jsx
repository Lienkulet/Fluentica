import Image from 'next/image'
import React from 'react'

const WhyUsCard = ({ img, title, desc }) => {
  return (
    <article key={title} className='bg-white rounded-[20px] overflow-hidden shadow-sm px-7.5 py-8' >
      <div className='relative w-53.75 h-53.75 rounded-[17px]'>
        <Image src={img} alt={title} fill className='object-cover rounded-[17px]' />
      </div>
      <div className='mt-5'>
        <h3 className='text-blue-navy font-extrabold text-[26px] leading-[1.3] tracking-normal mb-2.5'>{title}</h3>
        <p className='text-blue-grey text-base leading-[1.4] font-medium tracking-[2%]'>{desc}</p>
      </div>
    </article>
  )
}

export default WhyUsCard