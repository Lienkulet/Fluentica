import Image from 'next/image'
import React from 'react'
import LogoIcon from '../icons/LogoIcon'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'
import HomeIcon from '../icons/HomeIcon'
import InstagramIcon from '../icons/InstagramIcon'
import FacebookIcon from '../icons/FacebookIcon'
import Container from './Container'
import FadeInView from '../UI/FadeInView'

const Footer = () => {
  return (
    <>
      {/* Desktop footer */}
      <footer className='relative w-full hidden md:block'>
        <Image
          src="/assets/layout/Footer.svg"
          alt="footer"
          width={1600}
          height={600}
          className='w-full h-auto block'
        />
        <Container className='absolute inset-0'>
          <div className='absolute inset-0 flex flex-col items-end pr-[8%]'>

            <div className='flex flex-col gap-8 w-[50%] flex-1 pt-10'>
              <div className='flex flex-col gap-11.5 flex-1 justify-center'>
                <FadeInView x={-20} y={0}>
                  <LogoIcon />
                </FadeInView>
                <div className='flex flex-row gap-30.25'>
                  <FadeInView delay={0.1}>
                    <div>
                      <p className='text-white font-semibold text-xl mb-4 leading-[100%] tracking-[1%]'>Contacte:</p>
                      <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-3.75 text-lila text-lg font-regular leading-[150%] tracking-[1%]'>
                          <PhoneIcon />
                          +373 69 63 48 84
                        </li>
                        <li className='flex items-center gap-3.75 text-lila text-lg font-regular leading-[150%] tracking-[1%]'>
                          <EmailIcon />
                          fluenticaenglish@gmail.com
                        </li>
                        <li className='flex items-center gap-3.75 text-lila text-lg font-regular leading-[150%] tracking-[1%]'>
                          <HomeIcon />
                          str. Gavriil-Bănulescu Bodoni 59
                        </li>
                      </ul>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.2}>
                    <div>
                      <p className='text-white font-semibold text-xl mb-3.75 leading-[100%] tracking-[1%]'>Suntem pe social media:</p>
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
                  </FadeInView>
                </div>
              </div>

              <FadeInView delay={0.3} margin='0px'>
                <p className='text-lila text-sm mb-4.25'>
                  © Toate drepturile sunt rezervate. FLUENTICA 2026.
                </p>
              </FadeInView>
            </div>

          </div>
        </Container>
      </footer>

      {/* Mobile footer */}
      <footer className='relative w-full md:hidden'>
        <Image
          src="/assets/layout/FooterMobile.svg"
          alt="footer"
          width={360}
          height={425}
          className='w-full h-auto block'
        />
        <div className='absolute inset-0 flex flex-col pb-5'>
          <div className='flex flex-col gap-7 flex-1 justify-center pl-[42%] pr-5 pt-10'>
            <FadeInView x={-20} y={0}>
              <div className='overflow-hidden'>
                <LogoIcon />
              </div>
            </FadeInView>

            <div className='flex flex-col gap-5'>
              <FadeInView delay={0.1}>
                <div>
                  <p className='text-white font-semibold text-lg mb-3 leading-[100%] tracking-[1%]'>Contacte:</p>
                  <ul className='flex flex-col gap-2.5'>
                    <li className='flex items-center gap-3 text-lila text-sm font-regular leading-[150%] tracking-[1%]'>
                      <PhoneIcon />
                      +373 69 63 48 84
                    </li>
                    <li className='flex items-center gap-3 text-lila text-sm font-regular leading-[150%] tracking-[1%]'>
                      <EmailIcon />
                      fluenticaenglish@gmail.com
                    </li>
                    <li className='flex items-center gap-3 text-lila text-sm font-regular leading-[150%] tracking-[1%]'>
                      <HomeIcon />
                      str. G.-B. Bodoni 59
                    </li>
                  </ul>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div>
                  <p className='text-white font-semibold text-lg mb-3 leading-[100%] tracking-[1%]'>Suntem pe social media:</p>
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
              </FadeInView>
            </div>
          </div>

          <FadeInView delay={0.3} margin='0px'>
            <p className='text-lila text-xs text-center w-full'>
              © Toate drepturile sunt rezervate. Fluentica 2026.
            </p>
          </FadeInView>
        </div>
      </footer>
    </>
  )
}

export default Footer
