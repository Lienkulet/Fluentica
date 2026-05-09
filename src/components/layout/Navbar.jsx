'use client'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import LogoIcon from '../icons/LogoIcon'
import PhoneBtn from '../UI/PhoneBtn'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed py-7.5 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-blue-navy' : 'bg-transparent'}`}>
      <Container>
        <div className='flex flex-row items-center w-full gap-20'>
          <LogoIcon />
          <ul className='flex flex-row items-center gap-16'>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>AFLǍ NIVELUL</li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>CURSURI</li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>B2B ENGLISH</li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>DESPRE NOI</li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>RECENZII</li>
          </ul>
          <PhoneBtn className='hidden lg:flex' />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar