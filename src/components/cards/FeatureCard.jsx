import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className='border border-gray-100 shadow-xl px-8 py-8.75 rounded-[20px] p-8 flex flex-row gap-4.5'>
        {icon}
      <div className='max-w-58'> 
        <h3 className='text-blue-navy font-extrabold text-[26px] leading-[1.3] mb-1.25'>{title}</h3>
        <p className='text-blue-grey text-lg leading-normal tracking-[1%] font-500'>{description}</p>
      </div>
    </article>
  )
}

export default FeatureCard
