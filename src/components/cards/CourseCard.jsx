import Image from 'next/image'
import React from 'react'

const CourseCard = ({ img, title, desc }) => (
  <article className='flex flex-row items-end bg-white hover:bg-blue-navy group px-5 pt-7 pb-0 drop-shadow-xl
   rounded-2xl overflow-hidden gap-4.5 transition-colors duration-400'>
    <div className='relative w-28.75 h-53 shrink-0 self-end'>
      <Image src={img} alt={title} fill className='object-contain object-bottom' />
    </div>
    <div className='max-w-50 mb-7'>
      <h3 className='text-blue-navy group-hover:text-white font-extrabold text-[26px] leading-[1.3] mb-2.5'>{title}</h3>
      <p className='text-blue-grey group-hover:text-lila text-base leading-[1.4] tracking-[2%] font-medium'>{desc}</p>
    </div>
  </article>
)

export default CourseCard