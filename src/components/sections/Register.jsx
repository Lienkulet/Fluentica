import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'

const Register = () => {
  return (
    <section id='contact' className='py-20 bg-white'>
      <Container>
        <div className='bg-blue-navy rounded-[74px] pl-25.25 pr-45.25 pt-28.75  
          flex flex-row items-center justify-between gap-16.75'>

          <div className='flex flex-col gap-14.5 pb-28.75 z-10 w-fit'>
            <div>
              <h2 className='text-white font-extrabold text-5xl leading-[1.1] tracking-normal mb-5'>
                Înscrie-te pentru o<br />testare gratuită
              </h2>
              <p className='text-lila text-xl leading-[1.4] tracking-[2%] font-normal'>
                Evaluăm nivelul tău de engleză și îți oferim toate<br />
                detaliile despre curs, program și preț după testare.
              </p>
            </div>

            <form className='flex flex-col gap-5.5'>
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
                 text-base font-medium leading-[1.4] tracking-[2%]'              />
              <input
                type='email'
                placeholder='E-mail'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none 
                 text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <button
                type='submit'
                className='w-full pl-6.75 pr-11.25 py-4 rounded-[100px] mt-2.5
                 bg-orange1 hover:bg-orange2 text-white font-semibold text-base transition-colors 
                 duration-300 cursor-pointer'
              >
                Vreau consultație gratuită!
              </button>
            </form>
          </div>
          <div className='relative w-91.75 h-157.25'>
            <Image
              src='/assets/hero/register-girl.png'
              alt='Register'
              fill
              className='object-contain object-bottom '
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Register
