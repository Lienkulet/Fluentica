import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'
import BlueTop from '../shapes/BlueTop'
import BlueBottom from '../shapes/BlueBottom'
import Link from 'next/link'

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
    <section>
      <BlueTop />

      <div className='bg-blue-navy py-16'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-white font-bold text-4xl mb-4'>De ce Fluentica?</h2>
            <p className='text-lila text-base max-w-md mx-auto leading-relaxed'>
              Noi oferim metode moderne, profesori dedicați și rezultate reale în învățarea limbii engleze.
            </p>
          </div>

          <div className='grid grid-cols-4 gap-5'>
            {reasons.map((r) => (
              <div key={r.title} className='bg-white rounded-2xl overflow-hidden shadow-sm'>
                <div className='relative w-full h-44'>
                  <Image src={r.img} alt={r.title} fill className='object-cover' />
                </div>
                <div className='p-5'>
                  <h3 className='text-blue-navy font-bold text-lg mb-2'>{r.title}</h3>
                  <p className='text-gray-500 text-sm leading-relaxed'>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-12'>
            <Link href='#contact' className='px-8 py-4 rounded-full bg-orange1 hover:bg-orange2 text-white font-semibold transition-colors duration-300'>
              Află ce curs ți se potrivește
            </Link>
          </div>
        </Container>
      </div>

      <BlueBottom />
    </section>
  )
}

export default WhyUs
