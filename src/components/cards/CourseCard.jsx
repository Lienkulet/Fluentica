import Image from 'next/image'
import React from 'react'

const CourseCard = ({ img, title, desc }) => (
  <article className='flex flex-row items-end md:items-start xl:items-end bg-white hover:bg-blue-navy group px-4 md:px-5 pt-5 md:pt-7 pb-0 drop-shadow-xl
   rounded-2xl overflow-hidden gap-4 md:gap-4.5 transition-colors duration-400'>
    <div className='relative w-24 h-36 md:w-28.75 md:h-53 shrink-0 self-end md:self-start xl:self-end'>
      <Image src={img} alt={title} fill className='object-contain object-bottom' />
    </div>
    <div className='flex-1 xl:max-w-50 mb-5 md:mb-7'>
      <h3 className='text-blue-navy group-hover:text-white font-extrabold text-xl md:text-[26px] leading-[1.1] md:leading-[1.3] mb-1.25'>{title}</h3>
      <p className='text-blue-grey group-hover:text-lila text-sm md:text-base leading-[1.4] tracking-[2%] font-medium'>{desc}</p>
    </div>
  </article>
)

export default CourseCard
