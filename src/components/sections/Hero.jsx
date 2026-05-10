import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'
import HeroMenu from './HeroMenu'
import CTABtn from '../UI/CTABtn'

const Hero = ({ title, subtitle, showShape = true }) => {
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

      <Image
        src="/assets/hero/mobilebg.svg"
        alt="hero background"
        fill
        priority
        className='object-contain object-top block md:hidden'
      />

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
