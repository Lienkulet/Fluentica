import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'

const Register = ({ img, title, desc }) => {
  return (
    <section id='contact' className='py-10 md:py-20 bg-white'>
      <Container>
        <div className='bg-blue-navy  rounded-[20px] md:rounded-[74px] px-5 pt-9.5 pb-9.5 md:pb-0 md:pl-25.25
         md:pr-28.75 md:pt-28.75
          flex flex-col md:flex-row md:items-end md:justify-between md:gap-16.75'>

          <div className='flex flex-col gap-6 md:gap-14.5 md:pb-28.75 z-10 md:w-fit max-w-118.75'>
            <div>
              <h2 className='text-white font-extrabold text-[28px] md:text-5xl leading-[1.1] tracking-normal mb-1.75 md:mb-5'>
                {/* Înscrie-te pentru o<br />testare gratuită */}
                {title}
              </h2>
              <p className='text-lila text-sm md:text-xl leading-[1.2] md:leading-[1.4] tracking-[2%] font-normal'>
                {/* Evaluăm nivelul tău de engleză și îți oferim toate
                detaliile despre curs, program și preț după testare. */}
                {desc}
              </p>
            </div>

            <form className='flex flex-col gap-3.5 md:gap-5.5'>
              <input
                type='text'
                placeholder='Nume, Prenume'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <input
                type='tel'
                placeholder='Număr de telefon'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
              />
              <input
                type='email'
                placeholder='E-mail'
                className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                 bg-white text-blue-grey placeholder:text-blue-grey outline-none
                 text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
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
          <div className='hidden md:flex relative w-117.25 h-153.5'> 
            {/* // w-91.75  h-157.25 */}
            <Image
              src={img} // '/assets/hero/register-girl.png'
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
