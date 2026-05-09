import Image from 'next/image'
import React from 'react'
import Container from '../layout/Container'
import SectionHeader from '../UI/SectionHeader'

const Gallery = () => {
  return (
    <section className='py-20 bg-white'>
      <Container>
        <SectionHeader
          title="Atmosfera la Fluentica"
          subtitle="Momente reale din lecții, progres autentic și încredere construită pas cu pas."
        />

        {/* Mobile layout */}
        <div className='md:hidden flex flex-col gap-3'>
          <div className='grid grid-cols-2 gap-3'>
            <div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 1.png' alt='Atmosfera 1' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 2.png' alt='Atmosfera 2' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 4.png' alt='Atmosfera 4' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-4/3 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 3.png' alt='Atmosfera 3' fill className='object-cover' />
            </div>
          </div>
          <div className='relative w-full h-72 rounded-2xl overflow-hidden'>
            <Image src='/assets/gallery/poza 6.png' alt='Atmosfera 6' fill className='object-cover' />
          </div>
        </div>

        {/* Desktop layout */}
        <div className='hidden md:grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            <div className='relative w-full h-80 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 1.png' alt='Atmosfera 1' fill className='object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='relative w-full h-52 rounded-2xl overflow-hidden'>
                <Image src='/assets/gallery/poza 4.png' alt='Atmosfera 4' fill className='object-cover' />
              </div>
              <div className='relative w-full h-52 rounded-2xl overflow-hidden'>
                <Image src='/assets/gallery/poza 5.png' alt='Atmosfera 5' fill className='object-cover' />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='relative w-full h-52 rounded-2xl overflow-hidden'>
                <Image src='/assets/gallery/poza 2.png' alt='Atmosfera 2' fill className='object-cover' />
              </div>
              <div className='relative w-full h-52 rounded-2xl overflow-hidden'>
                <Image src='/assets/gallery/poza 3.png' alt='Atmosfera 3' fill className='object-cover' />
              </div>
            </div>
            <div className='relative w-full h-80 rounded-2xl overflow-hidden'>
              <Image src='/assets/gallery/poza 6.png' alt='Atmosfera 6' fill className='object-cover' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Gallery
