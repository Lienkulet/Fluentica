import React from 'react'
import Container from '../layout/Container'
import SectionHeader from '../UI/SectionHeader'
import PromoCard from '../cards/PromoCard'
import FeatureCard from '../cards/FeatureCard'
import PromotionIcon from '../icons/PromotionIcon'
import GlobeIcon from '../icons/GlobeIcon'
import NotebookIcon from '../icons/NotebookIcon'
import TriangleIcon from '../icons/TriangleIcon'
import BookIcon from '../icons/BookIcon'

const promos = [
  {
    icon: <PromotionIcon />,
    title: <><span className='text-orange1'>-15%</span> pentru<br />membrii familiei</>,
    description: <>Înscrie-te cu un <span className='text-orange1'>membru al familiei</span> și beneficiați împreună de reducere!</>,
  },
  {
    icon: <GlobeIcon />,
    title: <><span className='text-white'>„Be Friendly"</span><br /><span className='text-orange1'>-200 lei</span></>,
    description: <>Înscrie-te cu un <span className='text-orange1'>prieten</span> și primești <span className='text-orange1'>200 lei</span> reducere la taxa de curs.</>,
  },
]

const features = [
  {
    icon: <NotebookIcon />,
    title: 'Suport nelimitat al profesorului',
    description: <>Răspunsuri rapide și ghidare constantă pe tot parcursul cursului.</>,
  },
  {
    icon: <TriangleIcon />,
    title: <>Fluență în 8<br />săptămâni</>,
    description: <>Metoda <strong>Fluentica</strong> este axată pe <strong>comunicare</strong> activă și <strong>practică</strong> reală.</>,
  },
  {
    icon: <BookIcon />,
    title: 'Materiale Cambridge',
    description: <>Resurse oficiale <strong>Cambridge</strong>, structurate pe niveluri, cu <strong>acces nelimitat</strong>.</>,
  },
]

const WhyOurCourses = () => {
  return (
    <section className='py-10 md:py-20 bg-white'>
      <Container>
        <SectionHeader
          title={<>De ce cursurile de engleză<br />Fluentica dau rezultate</>}
          subtitle={<>Fluență în <strong>8 săptămâni</strong>, suport <strong>permanent</strong> și <strong>beneficii</strong> financiare pentru cursanți și familii.</>}
        />

        <div className='flex flex-col gap-5 md:gap-12.5 mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-13.75'>
            {promos.map((p, i) => (
              <PromoCard key={i} icon={p.icon} title={p.title} description={p.description} />
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9.25'>
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyOurCourses
