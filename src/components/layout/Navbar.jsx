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
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

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
            <button
              className='md:hidden ml-auto text-white'
              onClick={() => setMenuOpen(true)}
              aria-label='Open menu'
            >
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <rect y="0" width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="8.75" width="28" height="2.5" rx="1.25" fill="white" />
                <rect y="17.5" width="28" height="2.5" rx="1.25" fill="white" />
              </svg>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-100 md:hidden overflow-hidden'>
          {/* mobilehero.png — bottom layer */}

          {/* Hero.svg — above mobilehero, its curve reveals students below */}
          <div className='absolute inset-0 z-10'>
            <Image
              src='/assets/layout/Hero.svg'
              alt='hero background'
              fill
              priority
              className='object-contain object-right'
            />
          </div>

          {/* Menu content — top layer */}
          <div className='relative z-20 flex flex-col h-full px-8 pt-8 pb-10'>
            {/* Top: logo + close */}
            <div className='flex items-center justify-between mb-10'>
              <Link href='/' onClick={close}>
                <LogoIcon />
              </Link>
              <button onClick={close} className='text-white' aria-label='Close menu'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M2 2L26 26M26 2L2 26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <ul className='flex flex-col gap-8 flex-1'>
              <li>
                <Link href='/' onClick={close}
                  className='text-white font-bold text-[28px] uppercase hover:text-orange1 transition-colors duration-200'>
                  Află Nivelul
                </Link>
              </li>
              <li>
                <a href='#cursuri' onClick={close}
                  className='text-white font-bold text-[28px] uppercase hover:text-orange1 transition-colors duration-200'>
                  Cursuri
                </a>
              </li>
              <li>
                <Link href='/b2benglish' onClick={close}
                  className='text-white font-bold text-[28px] uppercase hover:text-orange1 transition-colors duration-200'>
                  B2B English
                </Link>
              </li>
              <li>
                <a href='#despre' onClick={close}
                  className='text-white font-bold text-[28px] uppercase hover:text-orange1 transition-colors duration-200'>
                  Despre Noi
                </a>
              </li>
              <li>
                <a href='#recenzii' onClick={close}
                  className='text-white font-bold text-[28px] uppercase hover:text-orange1 transition-colors duration-200'>
                  Recenzii
                </a>
              </li>
            </ul>

            {/* Orange contact card */}
            <div className='bg-orange1 rounded-3xl px-6 py-7 flex flex-col gap-5 w-[60%]'>
              <Link href='https://instagram.com/fluentica.md' target='_blank' rel='noopener noreferrer'
                className='flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity duration-200'>
                <InstagramOrange />
                fluentica.md
              </Link>
              <Link href='https://facebook.com/fluentica.md' target='_blank' rel='noopener noreferrer'
                className='flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity duration-200'>
                <FacebookOrange />
                fluentica.md
              </Link>
              <Link href='tel:+37369634884'
                className='flex items-center gap-3 text-white font-bold text-lg hover:opacity-80 transition-opacity duration-200'>
                <PhoneOrange />
                +373 69 63 48 84
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
