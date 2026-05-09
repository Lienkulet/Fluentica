import React from 'react'

const SectionHeader = ({ title, subtitle, dark = false }) => {
  return (
    <div className='text-center mb-13'>
      <h2 className={`font-extrabold text-5xl leading-[1.1] mb-2.5 ${dark ? 'text-white' : 'text-blue-navy'}`}>
        {title}
      </h2>
      <p className={`text-xl leading-[1.4] tracking-[2%] max-w-xl mx-auto ${dark ? 'text-white' : 'text-blue-grey'}`}>
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeader
