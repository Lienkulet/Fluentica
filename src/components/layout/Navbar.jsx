'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import LogoIcon from '../icons/LogoIcon'
import PhoneBtn from '../UI/PhoneBtn'
import NewIcon from '../icons/NewIcon'
import InstagramOrange from '../icons/InstagramOrange'
import FacebookOrange from '../icons/FacebookOrange'
import PhoneOrange from '../icons/PhoneOrange'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    console.log('Menu open:', menuOpen)
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`fixed py-7.5 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-blue-navy' : 'bg-transparent'}`}>
        <Container>
          <div className='flex flex-row items-center w-full gap-20'>
            <Link href='/'><LogoIcon /></Link>

            {/* Desktop nav links */}
            <ul className='hidden md:flex flex-row items-center gap-16'>
              <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
                <Link href='/'>AFLĂ NIVELUL</Link>
              </li>
              <li className='relative text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
                <span className='absolute -top-7 left-1/2 -translate-x-1/9'>
                  <NewIcon />
                </span>
                <a href='#cursuri'>CURSURI</a>
              </li>
              <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
                <Link href='/b2benglish'>B2B ENGLISH</Link>
              </li>
              <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
                <a href='#despre'>DESPRE NOI</a>
              </li>
              <li className='text-white hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-all duration-300'>
                <a href='#recenzii'>RECENZII</a>
              </li>
            </ul>

            <PhoneBtn className='hidden lg:flex' />

            {/* Mobile hamburger */}
            {menuOpen === false && (
              <button
                className='ml-auto text-white md:hidden'
                onClick={(e) => setMenuOpen(true)}
                aria-label='Open menu'
              >
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <rect y="0" width="28" height="2.5" rx="1.25" fill="white" />
                  <rect y="8.75" width="28" height="2.5" rx="1.25" fill="white" />
                  <rect y="17.5" width="28" height="2.5" rx="1.25" fill="white" />
                </svg>
              </button>
            )}

            {/* Close button for mobile menu */}
            {menuOpen && (
              <button onClick={(e) => setMenuOpen(false)} className='text-white ml-auto md:hidden' aria-label='Close menu'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M2 2L26 26M26 2L2 26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='fixed inset-0 z-40 md:hidden flex flex-col overflow-hidden'>
          {/* SVG as full-screen background */}
          <Image
            src='/assets/hero/navmobile.svg'
            alt=''
            fill
            className='object-fill pointer-events-none'
          />

          {/* Spacer for navbar */}
          <div className='h-24 shrink-0' />

          {/* Nav links — left aligned inside the blue shape */}
          <ul className='relative z-10 flex flex-col items-start justify-start flex-1 gap-4.75'>
            <li>
              <Link
                href='/'
                onClick={() => setMenuOpen(false)}
                className='text-white text-base font-medium tracking-widest hover:text-orange1 
                transition-colors duration-200 px-8'
              >
                AFLĂ NIVELUL
              </Link>
            </li>
            <li className='relative'>
              <a
                href='#cursuri'
                onClick={() => setMenuOpen(false)}
                className='text-white text-base font-medium tracking-widest hover:text-orange1 
                transition-colors duration-200 px-8'
              >
                CURSURI
              </a>
            </li>
            <li>
              <Link
                href='/b2benglish'
                onClick={() => setMenuOpen(false)}
                className='text-white text-base font-medium tracking-widest hover:text-orange1 
                transition-colors duration-200 px-8'
              >
                B2B ENGLISH
              </Link>
            </li>
            <li>
              <a
                href='#despre'
                onClick={() => setMenuOpen(false)}
                className='text-white text-base font-medium tracking-widest hover:text-orange1
                 transition-colors duration-200 px-8'
              >
                DESPRE NOI
              </a>
            </li>
            <li>
              <a
                href='#recenzii'
                onClick={() => setMenuOpen(false)}
                className='text-white text-base font-medium tracking-widest hover:text-orange1 
                transition-colors duration-200 px-8'
              >
                RECENZII
              </a>
            </li>
            {/* Social + phone icons */}

            <li>
              <div className='relative z-10 bg-orange1 rounded-r-[17px] flex flex-col items-start gap-4 py-6 px-6'>
                <Link href="https://instagram.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                  className='flex items-center gap-3 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                  <InstagramOrange />
                  fluentica.md
                </Link>
                <Link href="https://facebook.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                  className='flex items-center gap-3 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                  <FacebookOrange />
                  fluentica.md
                </Link>
                <Link href="tel:+37369634884"
                  className='flex items-center gap-3 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                  <PhoneOrange />
                  +373 69 63 48 84
                </Link>
              </div>
            </li>
          </ul>


        </div>
      )}
    </>
  )
}

export default Navbar
