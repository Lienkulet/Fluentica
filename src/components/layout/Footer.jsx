import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Image src="/assets/layout/Footer.svg" alt="footer" width={1600} height={600} className='w-full h-auto' />
    </footer>
  )
}

export default Footer