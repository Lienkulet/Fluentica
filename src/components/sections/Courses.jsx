import React from 'react'
import Container from '../layout/Container'
import Link from 'next/link'
import CourseCard from '../cards/CourseCard'
import CourseCardOrange from '../cards/CourseCardOrange'
import CTABtn from '../UI/CTABtn'

const courses = [
  {
    img: '/assets/courses/Children.png',
    title: 'Engleză pentru Copii',
    desc: 'Lecții interactive adaptate vârstei, care dezvoltă vocabularul, pronunția și încrederea copilului.',
  },
  {
    img: '/assets/courses/adolescent.png',
    title: 'Engleză pentru adolescenți',
    desc: 'Cursuri dinamice pentru școală, examene și viitor. Accent pe conversație, pregătire pentru teste internaționale.',
  },
  {
    img: '/assets/courses/matur.png',
    title: 'Engleză pentru Maturi',
    desc: 'Programe flexibile pentru carieră, călătorii sau dezvoltare personală. Înveți să comunici clar și cu încredere.',
  },
  {
    img: '/assets/courses/individual.png',
    title: 'Engleză Individuală',
    desc: 'Lecții unu-la-unu, adaptate nevoilor tale. Tu alegi ritmul, temele și obiectivele, iar noi te ghidăm spre fluență.',
  },
  {
    img: '/assets/courses/cambridge.png',
    title: 'Pregătire Cambridge',
    desc: 'Pregătire structurată pentru examenele Cambridge, cu accent pe strategie, performanță și rezultate certificate internațional.',
  },
]

const Courses = () => {
  return (
    <section className='py-20 bg-white'>
      <Container>
        <div className='text-center mb-12'>
          <h2 className='text-blue-navy font-bold text-4xl mb-4'>Cursuri de Engleză</h2>
          <p className='text-gray-500 text-base max-w-xl mx-auto leading-relaxed'>
            Oferim cursuri de engleză online și offline pentru copii, adolescenți și adulți,
            inclusiv lecții individuale, cu profesori dedicați și metode moderne de învățare.
          </p>
        </div>

        <div className='flex flex-col gap-13'>
          <div className='grid grid-cols-3 gap-8.5'>
            {courses.slice(0, 3).map((c) => <CourseCard key={c.title} {...c} />)}
          </div>

          <div className='flex flex-row items-center justify-center gap-8.5'>
            {courses.slice(3, 5).map((c) => <CourseCard key={c.title} {...c} />)}
            <div />
          </div>

          <CourseCardOrange />
        </div>

        <div className='flex justify-center mt-12'>
          <CTABtn title="Află ce curs ți se potrivește" />
        </div>
      </Container>
    </section>
  )
}

export default Courses
