import React from 'react'
import images from  '../images/hero_gwagon.svg'
import image1 from  '../images/image9-removebg-preview.png'

const Hero = () => {
  return (
      <div className='container-sm mx-auto bg-slate-300 items-center p-20 overflow-x-hidden'>
          <div>
              <h1 className='text-3xl text-center text-semibold'>The <span className='text-bold text-4xl'>safest way</span> to buy or<br/> sell your car in Kenya</h1>
          </div>
          <div className='flex flex-col md:flex-row space-x-3 space-y-3'>
              <img src={images} alt="hero-image" />
              <img src={image1} alt="hero-image" className='md:pr-4 md:w-1/2 md:h-auto' />
          </div>
    </div>
  )
}

export default Hero