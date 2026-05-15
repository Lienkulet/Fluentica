'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Container from '../layout/Container'
import FadeInView from '../UI/FadeInView'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Register = ({ img, title, desc }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = (name, value) => {
    if (name === 'name') {
      if (!value) return 'Numele este obligatoriu.'
      if (/\d/.test(value)) return 'Numele nu poate conține cifre.'
      return ''
    }
    if (name === 'phone') {
      if (!value) return 'Numărul de telefon este obligatoriu.'
      if (!/^\d+$/.test(value)) return 'Numărul de telefon poate conține doar cifre.'
      if (value.length > 9) return 'Numărul de telefon poate avea maxim 9 cifre.'
      return ''
    }
    if (name === 'email') {
      if (!value) return 'E-mailul este obligatoriu.'
      if (!emailRegex.test(value)) return 'Adresa de e-mail nu este validă.'
      return ''
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone' && value && !/^\d*$/.test(value)) return
    if (name === 'phone' && value.length > 9) return
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {
      name: validate('name', form.name),
      phone: validate('phone', form.phone),
      email: validate('email', form.email),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return
    setStatus('loading')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='py-10 md:py-20 bg-white'>
      <Container>
        <div className='bg-blue-navy rounded-[20px] xl:rounded-[74px] px-5 pt-9.5 pb-9.5 md:px-14 md:py-14 xl:pb-0 xl:pl-25.25
         xl:pr-28.75 xl:pt-28.75
          flex flex-col xl:flex-row xl:items-end xl:justify-between xl:gap-16.75'>

          <FadeInView x={-24} y={0} className='flex flex-col gap-6 xl:gap-14.5 xl:pb-28.75 z-10 xl:w-fit xl:max-w-118.75'>
            <div>
              <h2 className='text-white font-extrabold text-[28px] md:text-4xl lg:text-5xl leading-[1.1] tracking-normal mb-1.75 md:mb-5 md:text-center xl:text-start'>
                {title}
              </h2>
              <p className='text-lila text-sm md:text-base lg:text-xl leading-[1.2] md:leading-[1.4] tracking-[2%] font-normal md:text-center xl:text-start'>
                {desc}
              </p>
            </div>

            {status === 'success' ? (
              <p className='text-white text-base md:text-lg font-semibold'>
                Mulțumim! Te vom contacta în curând.
              </p>
            ) : (
              <form className='flex flex-col gap-3.5 md:gap-5.5' onSubmit={handleSubmit}>
                <div>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Nume, Prenume'
                    className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                     bg-white text-blue-grey placeholder:text-blue-grey outline-none
                     text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
                  />
                  {errors.name && <p className='text-red-400 text-xs mt-1 pl-4'>{errors.name}</p>}
                </div>
                <div>
                  <input
                    type='tel'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    placeholder='Număr de telefon'
                    className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                     bg-white text-blue-grey placeholder:text-blue-grey outline-none
                     text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
                  />
                  {errors.phone && <p className='text-red-400 text-xs mt-1 pl-4'>{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='E-mail'
                    className='w-full pl-6.75 pr-11.25 py-3.5 rounded-[100px]
                     bg-white text-blue-grey placeholder:text-blue-grey outline-none
                     text-sm md:text-base font-medium leading-[1.4] tracking-[2%]'
                  />
                  {errors.email && <p className='text-red-400 text-xs mt-1 pl-4'>{errors.email}</p>}
                </div>
                {status === 'error' && (
                  <p className='text-red-400 text-sm'>A apărut o eroare. Încearcă din nou.</p>
                )}
                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='w-full pl-6.75 pr-11.25 py-4 rounded-[100px] mt-2
                   bg-orange1 hover:bg-orange2 text-white font-semibold text-base transition-colors
                   duration-300 cursor-pointer disabled:opacity-60'
                >
                  {status === 'loading' ? 'Se trimite...' : 'Vreau consultație gratuită!'}
                </button>
              </form>
            )}
          </FadeInView>
          <div className='hidden xl:flex relative w-117.25 h-153.5'>
            <Image
              src={img}
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
