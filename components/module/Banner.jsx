import React from 'react'

function Banner({ img }) {
  return (
    <div className='py-6'>
        <img className='w-full object-contain' src={img} alt="banner" />
    </div>
  )
}

export default Banner