import React from 'react'
import LightningIcon from '../icons/LightningIcon'

const PromoCard = ({ icon, title, description }) => {
  return (
    <article className='bg-blue-navy rounded-[30px] px-3.75 py-3.25 xl:px-12 xl:py-13.5 flex flex-col gap-0.75 xl:gap-7'>
      <span className='flex items-center gap-2 bg-orange1 px-2 py-1 xl:px-2.75 xl:py-1.75 rounded-full w-fit
       text-white text-[8px] xl:text-lg font-extrabold leading-normal tracking-normal'>
        <LightningIcon size="12" />
        Promoție
      </span>
      <div className='flex flex-row items-center xl:items-start gap-4 pb-2.5 xl:gap-6.75'>
        <div className='shrink-0 w-10 xl:w-13.75 [&_svg]:w-full [&_svg]:h-auto'>
          {icon}
        </div>

        <div className='max-w-88.75 w-full'>
          <h3 className='text-white font-extrabold text-xl xl:text-[40px] leading-[120%] tracking-[0%] mb-1 xl:mb-3'>{title}</h3>
          <p className='text-white font-500 text-sm xl:text-[26px] leading-[130%] tracking-[0%]'>{description}</p>
        </div>
      </div>

    </article>
  )
}

export default PromoCard
