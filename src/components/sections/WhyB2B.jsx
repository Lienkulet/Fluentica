import React from 'react'
import B2bTop from '../shapes/B2bTop'
import B2bBottom from '../shapes/B2bBottom'
import Container from '../layout/Container'
import FeatureCard from '../cards/FeatureCard'
import B2BPromoCard from '../cards/B2BPromoCard'
import NavyIcon from '../UI/NavyIcon'
import FadeInView from '../UI/FadeInView'
import PromotionIcon from '../icons/PromotionIcon'
import GlobeIcon from '../icons/GlobeIcon'
import NotebookIcon from '../icons/NotebookIcon'
import TriangleIcon from '../icons/TriangleIcon'
import BookIcon from '../icons/BookIcon'

const topCards = [
  {
    promo: true,
    icon: <NavyIcon><PromotionIcon /></NavyIcon>,
    title: 'Beneficii financiare pentru companii',
    description: <>Oferim <strong>reduceri</strong> și condiții <strong>avantajoase</strong> pentru companii, în funcție de echipă și durata colaborării.</>,
  },
  {
    icon: <BookIcon />,
    title: 'Programe personalizate pentru companii',
    description: <>Fiecare echipă beneficiază de un plan de studiu adaptat <strong>domeniului de activitate</strong>, obiectivelor companiei și nivelului angajaților.</>,
  },
]

const bottomCards = [
  {
    icon: <NotebookIcon />,
    title: <>Profesori certificați<br />în Business English</>,
    description: <>Cursurile sunt susținute de profesori <strong>certificați</strong>, specializați în predarea englezei pentru <strong>companii</strong>.</>,
  },
  {
    icon: <TriangleIcon />,
    title: 'Testare gratuită a echipei',
    description: <>Oferim <strong>evaluare gratuită</strong> pentru angajați, pentru a identifica nivelul real de engleză și nevoile specifice.</>,
  },
  {
    icon: <NavyIcon><GlobeIcon /></NavyIcon>,
    title: 'Format flexibil: online sau offline',
    description: <>Cursurile de engleză corporativă pot fi organizate <strong>online</strong> sau <strong>offline</strong>, în funcție de programul companiei.</>,
  },
]

const WhyB2B = () => {
  return (
    <section className='-mt-14.25 lg:-mt-92' id='despre'>
      <B2bTop />
      <div className='bg-blue-navy py-41 -mt-2'>
        <Container>
          <div className='flex flex-col gap-11'>

            {/* Row 1: text | B2BPromoCard | B2BPromoCard */}
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-9 items-start'>
              <FadeInView x={-24} y={0}>
                <div className='lg:w-[384px] flex flex-col gap-5 align-top'>
                  <h2 className='text-white text-center lg:text-start font-extrabold text-[28px]
                  lg:w-[384px] max-h-39.75 lg:text-4xl xl:text-[48px] leading-[110%] tracking-[-1%]'>
                    De ce cursurile de engleză Fluentica dau rezultate
                  </h2>
                  <p className='text-lila text-center lg:text-start text-sm font-medium lg:text-base xl:text-xl
                  leading-[1.4] tracking-[2%]'>
                    Programe de Business English adaptate companiilor, cu focus pe comunicare practică și
                    progres măsurabil.
                  </p>
                </div>
              </FadeInView>
              {topCards.map((c, i) => (
                <FadeInView key={i} delay={0.1 + i * 0.1}>
                  <B2BPromoCard promo={c.promo} icon={c.icon} title={c.title} description={c.description} />
                </FadeInView>
              ))}
            </div>

            {/* Row 2: feature | feature | feature */}
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-9'>
              {bottomCards.map((c, i) => (
                <FadeInView key={i} delay={i * 0.1}>
                  <FeatureCard icon={c.icon} title={c.title} description={c.description} />
                </FadeInView>
              ))}
            </div>

          </div>
        </Container>
      </div>
      <B2bBottom />
    </section>
  )
}

export default WhyB2B
