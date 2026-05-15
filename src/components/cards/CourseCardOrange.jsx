import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowIconOrange from '../icons/ArrowIconOrange'
import ArrowIconBlue from '../icons/ArrowIconBlue'

const CourseCardOrange = () => (
  <>
    <article className='hidden md:flex flex-row items-start xl:items-end bg-orange1 hover:bg-blue-navy group px-4 md:px-11 pt-5 md:pt-7 pb-0
  xl:max-w-195.5 w-full justify-self-center self-center drop-shadow-xl
   rounded-2xl shadow-sm overflow-hidden gap-4 md:gap-4.5 transition-colors duration-400'>
      <div className='relative w-24 h-36 md:w-73.25 md:h-55.75 shrink-0 md:self-start xl:self-end'>
        <Image src='/assets/courses/corporate.png' alt='Engleză Corporativă' fill
          className='object-contain object-bottom' />
      </div>
      <div className='flex-1 xl:max-w-95.25 mb-5 md:mb-7'>
        <h3 className='text-white font-extrabold text-xl md:text-[26px] leading-[1.3] mb-2'>
          Engleză Corporativă
        </h3>
        <p className='text-white text-sm md:text-base leading-[1.4] tracking-[2%] font-medium mb-4'>
          Training personalizat pentru companii, axat pe comunicare de afaceri, prezentări, e-mailuri profesionale și negocieri eficiente.
        </p>
        <Link href='#contact'
          className='group flex items-center gap-2 w-fit pl-5 pr-1.75 py-0.5 rounded-[100px]
      text-blue-grey bg-white text-4 font-medium leading-[1.4] tracking-[2%]
      transition-colors duration-200'>
          Vezi mai mult...
          <ArrowIconOrange className='group-hover:hidden transition-colors duration-400' />
          <ArrowIconBlue className='hidden group-hover:block transition-colors duration-400' />
        </Link>
      </div>
    </article>
    <article className='flex md:hidden flex-row items-end bg-orange1 group px-4 md:px-5 pt-5 md:pt-7 pb-0 drop-shadow-xl
       rounded-2xl overflow-hidden gap-4 md:gap-4.5 transition-colors duration-400'>
      <div className='relative w-24 h-36 md:w-28.75 md:h-53 shrink-0 self-end'>
        <Image src='/assets/courses/mobilecorporate.png' alt='Engleză Corporativă' fill className='object-contain object-bottom' />
      </div>
      <div className='flex-1 md:max-w-50 mb-5 md:mb-7'>
        <h3 className='text-white group-hover:text-white font-extrabold text-xl md:text-[26px] 
            leading-[1.1] md:leading-[1.3] mb-1.25'>Engleză Corporativă</h3>
        <p className='text-white group-hover:text-lila text-sm md:text-base leading-[1.4] 
          tracking-[2%] font-medium'>
          Training personalizat pentru companii, axat pe comunicare de afaceri.
        </p>
        <Link href='#contact'
          className='group flex items-center justify-between gap-2 w-full pl-4.5 pr-2 py-0.5 rounded-[100px]
      text-orange1 bg-white text-sm font-normal leading-[1.2] tracking-[2%]
      transition-colors duration-200 mt-1.25'>
          Vezi mai mult...
          <ArrowIconOrange size='30' />
        </Link>
      </div>
    </article>
  </>
)

export default CourseCardOrange
