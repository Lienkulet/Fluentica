import Image from 'next/image'
import React from 'react'

const WhyUsCard = ({ img, title, desc }) => {
  return (
    <article className='bg-white rounded-[20px] overflow-hidden shadow-sm
      flex flex-row md:block gap-4 px-4 py-4 md:px-7.5 md:py-8'>
      <div className='relative w-25 h-25 md:w-full md:h-53.75 xl:w-53.75 shrink-0 rounded-[7px] md:rounded-[17px] overflow-hidden'>
        <Image src={img} alt={title} fill className='object-cover' />
      </div>
      <div className='flex-1 flex flex-col justify-center md:justify-start md:mt-5'>
        <h3 className='text-blue-navy font-bold md:font-extrabold text-xl md:text-[26px] 
          leading-[1.2] md:leading-[1.3] tracking-normal mb-1.25 md:mb-2.5'>{title}</h3>
        <p className='text-blue-grey text-sm md:text-base leading-[1.2] md:leading-[1.4] font-medium tracking-[2%]'>{desc}</p>
      </div>
    </article>
  )
}

export default WhyUsCard
