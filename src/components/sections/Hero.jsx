import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'
import HeroMenu from './HeroMenu'
import CTABtn from '../UI/CTABtn'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen overflow-hidden' id='#home'>
      <Image
        src="/assets/layout/Hero.svg"
        alt="hero background"
        fill
        priority
        className='object-cover object-top'
      />

      {/* Mobile hero image */}
      <div className='absolute right-0 bottom-0 w-[68%] h-[65%] md:hidden z-5'>
        <Image
          src="/assets/hero/mobilehero.png"
          alt="hero students"
          fill
          priority
          className='object-contain object-bottom-right'
        />
      </div>

      <div className='relative z-10 flex items-start min-h-screen pt-28 pb-20 md:items-center md:pt-32'>
        <Container>
          <div className='max-w-xl'>
            <h1 className='text-white font-extrabold text-[2.4rem] md:text-5xl leading-[1.1] mb-4'>
              Află nivelul tău de<br />engleză în doar 5 minute
            </h1>
            <p className='text-lila text-lg md:text-[23px] leading-[1.4] tracking-[0.02em] mb-10'>
              Programează-te la o consultație gratuită<br />
              și află ce curs ți se potrivește.
            </p>
            <CTABtn title="Vreau consultație gratuită!" />
          </div>
        </Container>
      </div>

      <div className='hidden md:block'>
        <HeroMenu />
      </div>
    </section>
  )
}

export default Hero
