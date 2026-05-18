'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'all')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-[200] bg-blue-navy border-t border-white/10 px-5 py-5 md:py-6'>
      <div className='max-w-298.5 mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-10'>
        <p className='text-lila text-sm leading-[1.6] flex-1'>
          Folosim cookie-uri esențiale pentru funcționarea site-ului și, cu acordul tău, cookie-uri analitice pentru a îmbunătăți experiența.{' '}
          <Link href='/cookie-policy' className='text-white underline hover:text-orange1 transition-colors duration-200'>
            Politica de cookies
          </Link>
        </p>
        <div className='flex gap-3 shrink-0'>
          <button
            onClick={decline}
            className='text-lila text-sm border border-lila/50 px-4 py-2 rounded-xl hover:border-lila hover:text-white transition-colors duration-200 whitespace-nowrap'
          >
            Doar esențiale
          </button>
          <button
            onClick={accept}
            className='bg-orange1 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200 whitespace-nowrap'
          >
            Acceptă toate
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
