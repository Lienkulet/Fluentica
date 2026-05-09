import Image from 'next/image'
import React from 'react'
import LogoIcon from '../icons/LogoIcon'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'
import HomeIcon from '../icons/HomeIcon'
import InstagramIcon from '../icons/InstagramIcon'
import FacebookIcon from '../icons/FacebookIcon'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='relative w-full'>
      <Image
        src="/assets/layout/Footer.svg"
        alt="footer"
        width={1600}
        height={600}
        className='w-full h-auto'
      />
      <Container className='absolute inset-0'>
        <div className='absolute inset-0 flex flex-col items-end pr-[8%]'>

          <div className='flex flex-col gap-8 w-[50%] flex-1 pt-10'>
            <div className='flex flex-col gap-8 flex-1 justify-center'>
              <LogoIcon />
              <div className='flex flex-row gap-20'>
                <div>
                  <p className='text-white font-bold text-lg mb-4'>Contacte:</p>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3 text-white'>
                      <PhoneIcon />
                      +373 69 63 48 84
                    </li>
                    <li className='flex items-center gap-3 text-white'>
                      <EmailIcon />
                      fluenticaenglish@gmail.com
                    </li>
                    <li className='flex items-center gap-3 text-white'>
                      <HomeIcon />
                      str. Gavriil-Bănulescu Bodoni 59
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='text-white font-bold text-lg mb-4'>Suntem pe social media:</p>
                  <div className='flex items-center gap-5'>
                    <a href="https://instagram.com/fluentica.md" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity duration-200'>
                      <InstagramIcon />
                    </a>
                    <a href="https://facebook.com/fluentica.md" target="_blank" rel="noopener noreferrer" className='hover:opacity-70 transition-opacity duration-200'>
                      <FacebookIcon />
                    </a>
                    <a href="tel:+37369634884" className='hover:opacity-70 transition-opacity duration-200'>
                      <PhoneIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-white/60 text-sm mb-4.25'>
              © Toate drepturile sunt rezervate. FLUENTICA 2026.
            </p>
          </div>

        </div>
      </Container>

    </footer>
  )
}

export default Footer
