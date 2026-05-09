import React from 'react'
import QuotesIcon from '../icons/QuotesIcon'
import StarIcon from '../icons/StarIcon'

const TestimonialCard = ({ name, quote }) => {
  const initials = name.split(' ').map(n => n[0]).join('')

  return (
    <article className='bg-white rounded-[20px] h-63.5 md:h-75.5 px-6 pt-6 pb-6 md:px-12.5 md:pt-8.75 md:pb-11.75 drop-shadow-sm flex flex-col gap-2.5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-start gap-[11.5px]'>
          <div className='w-19.5 h-19.5 rounded-full bg-lila flex items-center justify-center shrink-0'>
            <span className='text-blue-navy font-bold text-lg'>{initials}</span>
          </div>
          <div className='mr-[15.5px]'>
            <p className='text-blue-navy font-semibold text-xl leading-[100%] tracking-[1%]'>{name}</p>
            <p className='text-blue-grey2 text-xs tracking-[3%] leading-normal font-normal mt-1.25 mb-2.75'>Student FLUENTICA</p>
            <div className='flex items-center gap-1'>
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
          </div>
        <QuotesIcon />
        </div>
      </div>



      <p className='text-blue-grey2 font-medium text-base leading-[1.4] tracking-[2%]'>{quote}</p>
    </article>
  )
}

export default TestimonialCard
