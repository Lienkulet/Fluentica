import React from 'react'
import Container from '../layout/Container'
import BlueTop from '../shapes/BlueTop'
import BlueBottom from '../shapes/BlueBottom'
import CTABtn from '../UI/CTABtn'
import WhyUsCard from '../cards/WhyUsCard'
import SectionHeader from '../UI/SectionHeader'

const reasons = [
  {
    img: '/assets/cardimgs/card1.png',
    title: 'Lecții dinamice',
    desc: 'Ore interactive, pline de energie, care îți mențin interesul și au rezultate.',
  },
  {
    img: '/assets/cardimgs/card2.png',
    title: 'Profesori dedicați',
    desc: 'Traineri pasionați și certificați internațional, gata să te ghideze.',
  },
  {
    img: '/assets/cardimgs/card3.png',
    title: 'Grupuri mici',
    desc: 'Clase cu doar 3–6 cursanți, pentru atenție individuală și progres.',
  },
  {
    img: '/assets/cardimgs/card4.png',
    title: 'Resurse moderne',
    desc: 'Program structurat pe materiale Cambridge, adaptat nivelului tău.',
  },
]

const WhyUs = () => {
  return (
    <section className='overflow-hidden -mt-60' id='despre'>
      <BlueTop />

      <div className='bg-blue-navy py-16'>
        <Container>
          <SectionHeader
            title="De ce Fluentica?"
            subtitle="Noi oferim metode moderne, profesori dedicați și rezultate reale în învățarea limbii engleze."
            dark
          />

          <div className='grid grid-cols-4 gap-7.75'>
            {reasons.map((r) => (
              <WhyUsCard key={r.title} img={r.img} title={r.title} desc={r.desc} />
            ))}
          </div>

          <div className='flex justify-center mt-11.5'>
            <CTABtn title="Află ce curs ți se potrivește" />
          </div>
        </Container>
      </div>

      <BlueBottom />
    </section>
  )
}

export default WhyUs
