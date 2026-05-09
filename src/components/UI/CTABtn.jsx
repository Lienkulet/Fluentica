import Link from 'next/link'
import React from 'react'

const CTABtn = ({ className = '', title }) => {
  return (
    <Link href="#contact"
      className={`inline-flex items-center justify-center px-7.5 py-4 rounded-[100px]
        bg-orange1 hover:bg-orange2 text-white font-semibold text-[20px] leading-normal tracking-[1%]
        transition-all duration-300 ${className}`}>
      {title}
    </Link>
  )
}

export default CTABtn
