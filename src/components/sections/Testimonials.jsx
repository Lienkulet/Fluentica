import React from 'react'
import Container from '../layout/Container'
import TestimonialCard from '../cards/TestimonialCard'

const testimonials = [
  {
    name: 'Ana Matveev',
    quote: '„Pentru mine problema principală era exprimarea. Știam cuvinte, dar nu știam cum să le leg. La Fluentica am făcut multă practică și am înțeles cum să vorbesc clar, nu doar să fac exerciții."',
  },
  {
    name: 'Elena Donos',
    quote: '„Am ales Fluentica pentru copilul meu pentru că aveam nevoie de un mediu sigur și bine structurat. Am observat rapid că vorbește mai deschis în engleză și nu mai evită orele."',
  },
  {
    name: 'Luciana Lucca',
    quote: '„Pentru Cambridge aveam nevoie de structură și feedback clar. La Fluentica am înțeles exact ce se cere la examen și pe ce să mă concentrez. M-a ajutat mult partea de speaking."',
  },
  {
    name: 'Victor Miciu',
    quote: '„Aveam nevoie de engleză pentru interviuri. Știam gramatica, dar nu știam să vorbesc clar. Cursurile m-au ajutat să-mi organizez ideile și să vorbesc mai sigur. Am trecut cu succes interviul."',
  },
  {
    name: 'Andrei Frunză',
    quote: '„La început îmi era greu să vorbesc în engleză și îmi era frică să greșesc. La Fluentica am început să vorbesc treptat, fără presiune. Acum mă exprim mult mai liber și am mai multă încredere la școală."',
  },
  {
    name: 'Matei Spătar',
    quote: '„Îmi place la engleză pentru că vorbim mult și nu e plictisitor. Profesorul explică frumos și mă ajută când nu înțeleg."',
  },
]

const Testimonials = () => {
  return (
    <section className='py-20 bg-white' id='recenzii'>
      <Container>
        <div className='text-center mb-13'>
          <h2 className='text-blue-navy font-extrabold text-5xl leading-[1.1] mb-2.5'>
            Ce spun studenții noștri?
          </h2>
          <p className='text-blue-grey text-xl leading-[1.4] tracking-[2%] max-w-md mx-auto'>
            Experiențe <strong>reale</strong> ale studenților noștri,<br />
            de la începători la nivel avansat.
          </p>
        </div>

        <div className='grid grid-cols-3 gap-10.75'>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} quote={t.quote} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
