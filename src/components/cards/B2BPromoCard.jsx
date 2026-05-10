import React from 'react'
import LightningIcon from '../icons/LightningIcon'

const B2BPromoCard = ({ icon, title, description, promo = false }) => (
  <article className='bg-white border border-gray-100 shadow-xl px-5 py-6 md:px-8 md:py-8.75 
  rounded-[20px] flex flex-col gap-4 md:w-93 md:h-84.75'>
    {promo && (
      <span className='flex items-center gap-2 bg-orange1 px-2 py-1 md:px-2.75 md:py-1.75 rounded-full 
      w-fit text-white text-sm md:text-lg font-extrabold leading-normal'>
        <LightningIcon />
        Promoție
      </span>
    )}
    <div className='flex flex-row items-start gap-3 md:gap-4.5'>
      <div className='shrink-0 w-9.5 md:w-14.5 [&_svg]:w-full [&_svg]:h-auto'>
        {icon}
      </div>
      <div>
        <h3 className='text-blue-navy font-extrabold text-lg md:text-[26px] leading-[1.3] mb-1'>{title}</h3>
        <p className='text-blue-grey text-sm md:text-lg leading-normal tracking-[1%] font-500'>{description}</p>
      </div>
    </div>
  </article>
)

export default B2BPromoCard
