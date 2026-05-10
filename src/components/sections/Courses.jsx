import React from 'react'
import Container from '../layout/Container'
import CourseCard from '../cards/CourseCard'
import CourseCardOrange from '../cards/CourseCardOrange'
import CTABtn from '../UI/CTABtn'
import SectionHeader from '../UI/SectionHeader'
import FadeInView from '../UI/FadeInView'

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
    <section className='py-12.5 md:py-20 bg-white' id='cursuri'>
      <Container>
        <FadeInView>
          <SectionHeader
            title="Cursuri de Engleză"
            subtitle="Oferim cursuri de engleză online și offline pentru copii, adolescenți și adulți, inclusiv lecții individuale, cu profesori dedicați și metode moderne de învățare."
          />
        </FadeInView>

        {/* Mobile layout — single column */}
        <div className='md:hidden flex flex-col gap-5'>
          {courses.map((c, i) => (
            <FadeInView key={c.title} delay={i * 0.08}>
              <CourseCard {...c} />
            </FadeInView>
          ))}
          <FadeInView delay={courses.length * 0.08}>
            <CourseCardOrange />
          </FadeInView>
        </div>

        {/* Desktop layout */}
        <div className='hidden md:flex flex-col gap-13 z-20'>
          <div className='grid grid-cols-3 gap-8.5'>
            {courses.slice(0, 3).map((c, i) => (
              <FadeInView key={c.title} delay={i * 0.1}>
                <CourseCard {...c} />
              </FadeInView>
            ))}
          </div>

          <div className='flex flex-row items-center justify-center gap-8.5'>
            {courses.slice(3, 5).map((c, i) => (
              <FadeInView key={c.title} delay={i * 0.1}>
                <CourseCard {...c} />
              </FadeInView>
            ))}
            <div />
          </div>

          <FadeInView>
            <CourseCardOrange />
          </FadeInView>
        </div>

        <FadeInView className='flex justify-center mt-6 md:mt-12 z-20 relative'>
          <CTABtn title="Află ce curs ți se potrivește" className='hidden md:flex' />
          <CTABtn title="Vreau consultație gratuită!" className='flex md:hidden w-full' />
        </FadeInView>
      </Container>
    </section>
  )
}

export default Courses
