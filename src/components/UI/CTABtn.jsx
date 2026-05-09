import Link from 'next/link'
import React from 'react'

const CTABtn = ({ className = '' }) => {
  return (
    <Link href="#contact"
      className={`items-center justify-center px-7.5 py-4 rounded-[100px]
        bg-orange1 hover:bg-orange2 text-white font-semibold text-[20px] leading-1 tracking-[1%]
        transition-all duration-300 ${className}`}>
      Vreau consultație gratuită!
    </Link>
  )
}

export default CTABtn
