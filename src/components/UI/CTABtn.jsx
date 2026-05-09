import Link from 'next/link'
import React from 'react'

const CTABtn = ({ className = 'inline-flex', title }) => {
  return (
    <Link href="#contact"
      className={` items-center justify-center px-4 py-3  md:px-7.5 md:py-3 rounded-[100px]
        bg-orange1 hover:bg-orange2 text-white font-bold md:font-semibold text-sm md:text-[20px]
       leading-normal tracking-[1%]
        transition-all duration-300 ${className}`}>
      {title}
    </Link>
  )
}

export default CTABtn
