'use client'

import React from 'react'
import Container from '../layout/Container'
import TestimonialCard from '../cards/TestimonialCard'
import Slider from '../UI/Slider'
import FadeInView from '../UI/FadeInView'

const Testimonials = ({ testimonials }) => {
  return (
    <section className='py-20 bg-white' id='recenzii'>
      <Container>
        <FadeInView className='text-center mb-13'>
          <h2 className='text-blue-navy font-extrabold text-4xl lg:text-5xl leading-[1.1] mb-2.5'>
            Ce spun studenții noștri?
          </h2>
          <p className='text-blue-grey text-base md:text-xl leading-[1.4] tracking-[2%] max-w-md mx-auto'>
            Experiențe <strong>reale</strong> ale studenților noștri,<br />
            de la începători la nivel avansat.
          </p>
        </FadeInView>

        {/* Desktop grid */}
        <div className='hidden md:flex flex-row justify-center gap-10.75 items-center'>
          {/* Cards 1, 2, 4 stacked in left column */}
          <div className='flex flex-col gap-10.75'>
            {[testimonials[0], testimonials[1], testimonials[3]].filter(Boolean).map((t, i) => (
              <FadeInView key={t.name} delay={i * 0.1}>
                <TestimonialCard name={t.name} quote={t.quote} img={t.url} />
              </FadeInView>
            ))}
          </div>
          {/* Card 3 alone in right column */}
          {testimonials[2] && (
            <FadeInView delay={0.1}>
              <TestimonialCard name={testimonials[2].name} quote={testimonials[2].quote} img={testimonials[2].url} />
            </FadeInView>
          )}
        </div>

        {/* Mobile slider */}
        <FadeInView className='md:hidden'>
          <Slider
            items={testimonials}
            renderItem={(t) => <TestimonialCard name={t.name} quote={t.quote} img={t.url} />}
          />
        </FadeInView>
      </Container>
    </section>
  )
}

export default Testimonials
