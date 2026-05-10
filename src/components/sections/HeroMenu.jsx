'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import InstagramOrange from '../icons/InstagramOrange'
import PhoneOrange from '../icons/PhoneOrange'
import FacebookOrange from '../icons/FacebookOrange'

const links = [
  { href: 'https://instagram.com/fluentica.md', icon: <InstagramOrange />, label: 'fluentica.md', external: true },
  { href: 'https://facebook.com/fluentica.md',  icon: <FacebookOrange />,  label: 'fluentica.md', external: true },
  { href: 'tel:+37369634884',                   icon: <PhoneOrange />,     label: '+373 69 63 48 84' },
]

const HeroMenu = ({ showShape }) => {
  return (
    <motion.div
      className='absolute right-0 top-1/2 translate-y-1/20 z-10 bg-orange1 rounded-l-[50px] pl-7.5 pr-12 py-9 flex flex-col gap-5'
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {links.map(({ href, icon, label, external }, i) => (
        <motion.div
          key={href}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 + i * 0.1 }}
        >
          <Link
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className='flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity duration-200'
          >
            {icon}
            {label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default HeroMenu
