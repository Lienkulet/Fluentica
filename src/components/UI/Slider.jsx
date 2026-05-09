'use client'

import React, { useState } from 'react'
import LeftSliderArrowIcon from '../icons/LeftSliderArrowIcon'
import RightSliderArrowIcon from '../icons/RightSliderArrowIcon'
import FilledDotIcon from '../icons/FilledDotIcon'
import EmptyDotIcon from '../icons/EmptyDotIcon'

const sliderStyles = `
  @keyframes sliderInRight {
    from { transform: translateX(48px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }
  @keyframes sliderInLeft {
    from { transform: translateX(-48px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }
`

const Slider = ({ items, renderItem }) => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('right')

  const prev = () => {
    setDirection('left')
    setCurrent((i) => (i === 0 ? items.length - 1 : i - 1))
  }

  const next = () => {
    setDirection('right')
    setCurrent((i) => (i === items.length - 1 ? 0 : i + 1))
  }

  return (
    <>
      <style>{sliderStyles}</style>

      <div
        key={current}
        style={{
          animation: `${direction === 'right' ? 'sliderInRight' : 'sliderInLeft'} 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
        }}
      >
        {renderItem(items[current], current)}
      </div>

      <div className='flex items-center justify-center gap-6 mt-8'>
        <button onClick={prev} aria-label='Previous' className='cursor-pointer rotate-180'>
          <RightSliderArrowIcon />
        </button>

        <div className='flex items-center gap-2'>
          {items.map((_, i) =>
            i === current ? <FilledDotIcon key={i} /> : <EmptyDotIcon key={i} />
          )}
        </div>

        <button onClick={next} aria-label='Next' className='cursor-pointer'>
          <RightSliderArrowIcon />
        </button>
      </div>
    </>
  )
}

export default Slider
