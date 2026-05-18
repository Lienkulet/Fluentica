'use client'
import React, { useEffect, useState } from 'react'

const MOBILE_PATH = 'M-213 465.625V0H786.871C786.871 17.123 791.005 15.4511 752.534 79.8322C704.446 160.309 661.535 189.338 607.104 210.474C523.001 243.132 432.703 174.712 340.358 245.19C275.38 294.781 311.932 286.94 194.854 410.804C79.6051 532.733 -155.507 471.033 -213 465.625Z'
const NAV_PATH    = 'M-149 465.625V0H850.871C850.871 17.123 855.005 15.4511 816.534 79.8322C768.446 160.309 725.535 189.338 671.104 210.474C587.001 243.132 496.703 174.712 404.358 245.19C339.38 294.781 375.932 286.94 258.854 410.804C143.605 532.733 -91.5074 471.033 -149 465.625Z'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import LogoIcon from '../icons/LogoIcon'
import PhoneBtn from '../UI/PhoneBtn'
import NewIcon from '../icons/NewIcon'
import InstagramOrange from '../icons/InstagramOrange'
import FacebookOrange from '../icons/FacebookOrange'
import PhoneOrange from '../icons/PhoneOrange'
import { usePathname } from 'next/navigation'
import { useNavMenu } from '@/context/NavMenuContext'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { menuOpen, setMenuOpen } = useNavMenu()
  const pathname = usePathname()
  const isB2B = pathname === '/b2benglish'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
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
      <nav className={`fixed pb-2.5 pt-12 xl:pb-7.5 xl:pt-7.5 w-full z-50 transition-colors duration-300
        ${scrolled ? 'bg-blue-navy' : 'bg-transparent'}`}>
        <Container>
          <div className='flex flex-row items-center w-full gap-20'>
            <motion.div className='flex xl:hidden' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link href='/'><LogoIcon isB2B={false} /></Link>
            </motion.div>
            <motion.div className='hidden xl:flex' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link href='/'><LogoIcon isB2B={isB2B && !scrolled} /></Link>
            </motion.div>

            {/* Desktop nav links */}
            <ul className='hidden xl:flex flex-row items-center gap-16'>
              {[
                { label: 'AFLĂ NIVELUL', el: <Link href='/'>AFLĂ NIVELUL</Link>, color: isB2B && !scrolled ? 'text-blue-navy' : 'text-white' },
                { label: 'CURSURI',      el: <a href='#cursuri'>CURSURI</a>,     color: isB2B && !scrolled ? 'text-blue-navy' : 'text-white', badge: true },
                { label: 'B2B ENGLISH', el: <Link href='/b2benglish'>B2B ENGLISH</Link>, color: isB2B ? 'text-orange1' : 'text-white' },
                { label: 'DESPRE NOI',  el: <a href='#despre'>DESPRE NOI</a>,    color: isB2B && !scrolled ? 'text-blue-navy' : 'text-white' },
                { label: 'RECENZII',    el: <a href='#recenzii'>RECENZII</a>,    color: isB2B && !scrolled ? 'text-blue-navy' : 'text-white' },
              ].map(({ label, el, color, badge }, i) => (
                <motion.li
                  key={label}
                  className={`${color} hover:text-orange1 text-[16px] font-medium letter-spacing-[4%] cursor-pointer transition-colors duration-300 whitespace-nowrap ${badge ? 'relative' : ''}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {badge && <span className='absolute -top-7 left-1/2 -translate-x-1/9'><NewIcon /></span>}
                  {el}
                </motion.li>
              ))}
            </ul>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.55 }}>
              <PhoneBtn className='hidden xl:flex' />
            </motion.div>

            {/* Mobile menu toggle — single button, crossfade icons */}
            <motion.button
              className='ml-auto xl:hidden relative w-7 h-7'
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300
                ${menuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                  <rect y="0" width="28" height="2.5" rx="1.25" fill="white" />
                  <rect y="8.75" width="28" height="2.5" rx="1.25" fill="white" />
                  <rect y="17.5" width="28" height="2.5" rx="1.25" fill="white" />
                </svg>
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300
                ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M2 2L26 26M26 2L2 26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu — always mounted, animated in/out */}
      <div className={`fixed inset-0 z-40 xl:hidden flex flex-col overflow-hidden
        transition-all duration-300 ease-in-out
        ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>

        {/* Morphing shape — only when scrolled (hero handles it when at top) */}
        {scrolled && (
          <svg
            className='absolute inset-0 w-full h-full pointer-events-none'
            viewBox="0 0 360 486"
            preserveAspectRatio="xMidYMin meet"
            fill="none"
          >
            <path
              d={menuOpen ? NAV_PATH : MOBILE_PATH}
              fill="#1801AE"
              style={{ transition: 'd 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
            />
          </svg>
        )}

        {/* Extra background image — only when scrolled */}
        {scrolled && (
          <Image
            src='/assets/hero/navmobile.svg'
            alt=''
            width={375}
            height={486}
            className='absolute inset-0 w-full h-full object-cover object-top pointer-events-none'
          />
        )}

        {/* Nav links — fade in after shape morph completes */}
        <ul className='absolute top-30 z-40 flex flex-col items-start justify-start flex-1 gap-2.5'>
          {[
            { el: <Link href='/' onClick={() => setMenuOpen(false)}>AFLĂ NIVELUL</Link>, delay: 'delay-[350ms]' },
            { el: <a href='#cursuri' onClick={() => setMenuOpen(false)}>CURSURI</a>, delay: 'delay-[390ms]' },
            { el: <Link href='/b2benglish' onClick={() => setMenuOpen(false)}>B2B ENGLISH</Link>, delay: 'delay-[430ms]' },
            { el: <a href='#despre' onClick={() => setMenuOpen(false)}>DESPRE NOI</a>, delay: 'delay-[470ms]' },
            { el: <a href='#recenzii' onClick={() => setMenuOpen(false)}>RECENZII</a>, delay: 'delay-[510ms]' },
          ].map(({ el, delay }, i) => (
            <li key={i} className={`transition-opacity duration-200 ease-out ${delay}
              ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <span className='text-white text-base font-medium tracking-widest hover:text-orange1
                transition-colors duration-200 px-8 block whitespace-nowrap'>
                {el}
              </span>
            </li>
          ))}

          {/* Social + phone */}
          <li className={`transition-opacity duration-300 ease-out delay-200
            ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className='relative z-10 bg-orange1 rounded-r-[17px] flex flex-col items-start gap-4
              py-4.25 pl-6 pr-3.5'>
              <Link href="https://instagram.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                className='flex items-center gap-1.25 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                <InstagramOrange size={18} />
                fluentica.md
              </Link>
              <Link href="https://facebook.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                className='flex items-center gap-1.25 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                <FacebookOrange size={18} />
                fluentica.md
              </Link>
              <Link href="tel:+37369634884"
                className='flex items-center gap-1.25 text-white font-extrabold text-xl hover:opacity-80 transition-opacity duration-200'>
                <PhoneOrange size={18} />
                +373 69 63 48 84
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
