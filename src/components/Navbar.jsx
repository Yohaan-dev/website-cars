import React from 'react'
import {NavLink} from 'react-router-dom'
import images from '../images/Black Flat Illustrative Car Rental Service logo.png'

const Navbar = () => {
    const LinkActive= ({isActive}) => isActive ? 'uppercase text-lg bg-black text-white px-2 py-1 rounded-lg': 'uppercase text-lg text-black'
  return (
      <div className='bg-slate-300 px-6'>
          <div className='flex items-center justify-between space-x-6'>
              <div className='w-28 h-28 pt-6'>
                  <img src={images} alt="logo-image" />
              </div>

              <div className='flex space-x-6'>
                  <NavLink to="/" className={LinkActive} >home</NavLink>
                  <NavLink to="/about" className={LinkActive}>about</NavLink>
                  <NavLink to="/services" className={LinkActive}>services</NavLink>
              </div>
          </div>
    </div>
  )
}

export default Navbar