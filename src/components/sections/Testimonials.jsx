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
          <h2 className='text-blue-navy font-extrabold text-4xl md:text-5xl leading-[1.1] mb-2.5'>
            Ce spun studenții noștri?
          </h2>
          <p className='text-blue-grey text-base md:text-xl leading-[1.4] tracking-[2%] max-w-md mx-auto'>
            Experiențe <strong>reale</strong> ale studenților noștri,<br />
            de la începători la nivel avansat.
          </p>
        </FadeInView>

        {/* Desktop grid */}
        <div className='hidden md:grid grid-cols-3 gap-10.75'>
          {testimonials.map((t, i) => (
            <FadeInView key={t.name} delay={i * 0.1}>
              <TestimonialCard name={t.name} quote={t.quote} />
            </FadeInView>
          ))}
        </div>

        {/* Mobile slider */}
        <FadeInView className='md:hidden'>
          <Slider
            items={testimonials}
            renderItem={(t) => <TestimonialCard name={t.name} quote={t.quote} />}
          />
        </FadeInView>
      </Container>
    </section>
  )
}

export default Testimonials
