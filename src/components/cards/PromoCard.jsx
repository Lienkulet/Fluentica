import React from 'react'
import LightningIcon from '../icons/LightningIcon'

const PromoCard = ({ icon, title, description }) => {
  return (
    <article className='bg-blue-navy rounded-[30px] px-12 py-13.5 flex flex-col gap-7'>
      <span className='flex items-center gap-2 bg-orange1 px-2.75 py-1.75 rounded-full w-fit
       text-white text-lg font-extrabold leading-normal tracking-normal '>
        <LightningIcon />
        Promoție
      </span>
      <div className='flex flex-row items-start gap-6.75'>
        {icon}


        <div className='max-w-88.75 w-full'>
          <h3 className='text-white font-extrabold text-[40px] leading-[120%] tracking-[0%] mb-3'>{title}</h3>
          <p className='text-white font-500 text-[26px] leading-[130%] tracking-[0%]'>{description}</p>
        </div>
      </div>

    </article>
  )
}

export default PromoCard
