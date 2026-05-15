import Link from 'next/link'
import React from 'react'

const PhoneBtn = ({ className = '' }) => {
  return (
    <Link href="tel:+37360555886"
      className={`px-7.5 py-3.5 text-center rounded-[100px] max-w-59 h-11 w-fit items-center justify-center
         flex drop-shadow-md whitespace-nowrap
         text-orange1 hover:text-white font-bold text-[16px] letterspacing-[-0.02%]
          bg-white hover:bg-orange1 transition-all duration-300 ${className}`}>
      +373 60 555 886
    </Link>
  )
}

export default PhoneBtn