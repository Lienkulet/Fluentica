import React from 'react'
import Link from 'next/link'
import InstagramOrange from './icons/InstagramOrange'
import PhoneOrange from './icons/PhoneOrange'
import FacebookOrange from './icons/FacebookOrange'

const HeroMenu = () => {
    return (
        <div className='absolute right-0 top-1/2 -translate-y-1/4 z-10 bg-orange1 rounded-l-[50px] pl-7.5 pr-12 py-9 flex flex-col gap-5'>
            <Link href="https://instagram.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                className='flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity duration-200'>
                <InstagramOrange />
                fluentica.md
            </Link>
            <Link href="https://facebook.com/fluentica.md" target="_blank" rel="noopener noreferrer"
                className='flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity duration-200'>
                <FacebookOrange />
                fluentica.md
            </Link>
            <Link href="tel:+37369634884"
                className='flex items-center gap-3 text-white font-medium hover:opacity-80 transition-opacity duration-200'>
                <PhoneOrange />
                +373 69 63 48 84
            </Link>
        </div>
    )
}

export default HeroMenu