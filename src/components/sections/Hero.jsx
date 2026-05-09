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

      <div className='relative z-10 flex items-center min-h-screen pt-32 pb-20'>
        <Container>
          <div className='max-w-xl'>
            <h1 className='text-white font-extrabold text-5xl leading-[1.1] letter-spacing[0%] mb-4'>
              Află nivelul tău de<br />engleză în doar 5 minute
            </h1>
            <p className='text-lila text-[23px] leading-[1.4] tracking-[0.02em] mb-10'>
              Programează-te la o consultație gratuită<br />
              și află ce curs ți se potrivește.
            </p>
            <CTABtn title="Vreau consultație gratuită!" />
          </div>
        </Container>
      </div>

    <HeroMenu />
    </section>
  )
}

export default Hero
