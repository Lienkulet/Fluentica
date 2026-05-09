import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'

const Register = () => {
  return (
    <section id='contact' className='py-20 bg-white'>
      <Container>
        <div className='bg-blue-navy rounded-[40px] md:rounded-[74px] px-6 py-10 md:pl-25.25 md:pr-45.25 md:pt-28.75
          flex flex-col md:flex-row md:items-center md:justify-between md:gap-16.75'>

          <div className='flex flex-col gap-8 md:gap-14.5 md:pb-28.75 z-10 md:w-fit'>
            <div>
              <h2 className='text-white font-extrabold text-3xl md:text-5xl leading-[1.1] tracking-normal mb-4 md:mb-5'>
                Înscrie-te pentru o<br />testare gratuită
              </h2>
              <p className='text-lila text-base md:text-xl leading-[1.4] tracking-[2%] font-normal'>
                Evaluăm nivelul tău de engleză și îți oferim toate
                detaliile despre curs, program și preț după testare.
              </p>
            </div>

            <form className='flex flex-col gap-4 md:gap-5.5'>
              <input
                type='text'
                placeholder='Nume, Prenume'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <input
                type='tel'
                placeholder='Număr de telefon'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <input
                type='email'
                placeholder='E-mail'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <button
                type='submit'
                className='w-full pl-6.75 pr-11.25 py-4 rounded-[100px] mt-2
                 bg-orange1 hover:bg-orange2 text-white font-semibold text-base transition-colors
                 duration-300 cursor-pointer'
              >
                Vreau consultație gratuită!
              </button>
            </form>
          </div>
          <div className='hidden md:block relative w-91.75 h-157.25'>
            <Image
              src='/assets/hero/register-girl.png'
              alt='Register'
              fill
              className='object-contain object-bottom'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Register
