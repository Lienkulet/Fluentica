import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className='border border-gray-100 shadow-xl px-5 py-6 md:px-8 md:py-8.75 rounded-[20px] flex flex-row gap-3 md:gap-4.5'>
      <div className='shrink-0 w-9.5 md:w-14.5 [&_svg]:w-full [&_svg]:h-auto'>
        {icon}
      </div>
      <div className='md:max-w-58'>
        <h3 className='text-blue-navy font-extrabold text-lg md:text-[26px] leading-[1.3] mb-1'>{title}</h3>
        <p className='text-blue-grey text-sm md:text-lg leading-normal tracking-[1%] font-500'>{description}</p>
      </div>
    </article>
  )
}

export default FeatureCard
