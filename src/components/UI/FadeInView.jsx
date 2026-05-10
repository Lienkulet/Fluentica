'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FadeInView = ({ children, delay = 0, y = 24, x = 0, className = '', margin = '-60px' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInView
