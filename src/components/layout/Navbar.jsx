'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import LogoIcon from '../icons/LogoIcon'
import PhoneBtn from '../UI/PhoneBtn'
import NewIcon from '../icons/NewIcon'

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
          <Link href='/'><LogoIcon /></Link>
          <ul className='flex flex-row items-center gap-16'>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'><Link href='/'>AFLǍ NIVELUL</Link></li>
            <li className='relative text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
              <span className='absolute -top-7 left-1/2 -translate-x-1/9'>
                <NewIcon />
              </span>
              <a href='#cursuri'>CURSURI</a>
            </li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'><Link href='/b2benglish'>B2B ENGLISH</Link></li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'><a href='#despre'>DESPRE NOI</a></li>
            <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'><a href='#recenzii'>RECENZII</a></li>
          </ul>
          <PhoneBtn className='hidden lg:flex' />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar