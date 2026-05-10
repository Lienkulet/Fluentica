import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'
import HeroMenu from './HeroMenu'
import CTABtn from '../UI/CTABtn'
import { useNavMenu } from '@/context/NavMenuContext'

const MOBILE_PATH  = 'M-213 465.625V0H786.871C786.871 17.123 791.005 15.4511 752.534 79.8322C704.446 160.309 661.535 189.338 607.104 210.474C523.001 243.132 432.703 174.712 340.358 245.19C275.38 294.781 311.932 286.94 194.854 410.804C79.6051 532.733 -155.507 471.033 -213 465.625Z'
const NAV_PATH     = 'M-149 465.625V0H850.871C850.871 17.123 855.005 15.4511 816.534 79.8322C768.446 160.309 725.535 189.338 671.104 210.474C587.001 243.132 496.703 174.712 404.358 245.19C339.38 294.781 375.932 286.94 258.854 410.804C143.605 532.733 -91.5074 471.033 -149 465.625Z'

const Hero = ({ title, subtitle, showShape = true }) => {
  const { menuOpen } = useNavMenu()
  return (
    <section className='relative w-full min-h-screen overflow-hidden' id='#home'>
      {showShape && (
        <Image
          src="/assets/layout/Hero.svg"
          alt="hero background"
          fill
          priority
          className='object-cover object-top hidden md:block'
        />
      )}

      {/* Mobile background — morphs into nav menu shape when menu opens */}
      <svg
        className={`absolute inset-0 w-full h-full block md:hidden transition-[z-index] duration-0 ${menuOpen ? 'z-20' : 'z-0'}`}
        viewBox="0 0 360 486"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={menuOpen ? NAV_PATH : MOBILE_PATH}
          fill="#1801AE"
          className={`${menuOpen ? 'z-20 animate-morph-nav' : 'z-20 animate-morph-mobile'} transition-all duration-300 ease-in-out`}
          style={{ transition: 'd 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>

      {/* Mobile hero image */}
      <div className='absolute right-0 bottom-35 w-67.5 h-67.5 md:hidden z-5 pb-20'>
        <Image
          src={`/assets/hero/${showShape ? 'IMG.svg' : 'b2bmobilehero.png'}`}
          alt="hero students"
          fill
          priority
          className='block md:hidden'
        />
      </div>

      {/* Desktop B2B hero image */}
      {!showShape && (
        <div className='absolute right-50 bottom-0 w-154.25 h-136.75 hidden md:block z-5'>
          <Image
            src="/assets/hero/b2bdesktophero.png"
            alt="hero businessman"
            fill
            priority
            className='object-contain object-bottom-right'
          />
        </div>
      )}

      <div className='relative z-10 flex items-start min-h-screen pt-28 pb-20 md:items-center md:pt-32'>
        <Container>
          <div className='max-w-xl'>
            <h1 className={`${showShape ? 'md:text-white' : 'md:text-blue-navy'} text-white font-extrabold text-[28px]
            mt-9 md:mt-0 md:text-5xl leading-[1.1] mb-1.75 md:mb-4`}>
              {title}
            </h1>
            <p className={`${showShape ? 'md:text-lila' : 'md:text-blue-grey'} text-lila text-sm
            md:text-[23px] leading-[1.2] md:leading-[1.4] tracking-[0.02em] mb-5 md:mb-10`}>
              {subtitle}
            </p>
            <CTABtn title="Vreau consultație gratuită!" />
          </div>
        </Container>
      </div>

      <div className='hidden md:block'>
        <HeroMenu showShape={!showShape} />
      </div>
    </section>
  )
}

export default Hero
