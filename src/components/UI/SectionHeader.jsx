import React from 'react'

const SectionHeader = ({ title, subtitle, dark = false }) => {
  return (
    <div className='text-center mb-6 md:mb-10 lg:mb-13'>
      <h2 className={`font-extrabold text-[28px] md:text-4xl lg:text-5xl leading-[1.1] mb-1.75 md:mb-2.5 ${dark ? 'text-white' : 'text-blue-navy'}`}>
        {title}
      </h2>
      <p className={`text-sm md:text-base lg:text-xl leading-[1.2] md:leading-[1.4] tracking-[2%] max-w-xl mx-auto ${dark ? 'text-white' : 'text-blue-grey'}`}>
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeader
