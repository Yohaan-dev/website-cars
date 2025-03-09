import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
      <div className='bg-slate-300 pt-20'>
          <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-slate-400'>
              <div className='text-center md:text-left space-y-3 md:w-1/2 w-full'>
                  <h1 className='text-xl font-bold'>Request Through Email.</h1>
                  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa incidunt sed totam autem sit, porro minus iste atque iure maxime deserunt. Doloremque cumque sit, doloribus dolor tempore ab fugit obcaecati.</p>
                  <div className='flex md:flex-row flex-col items-center justify-center space-y-4 pb-4'>
                      <div className='w-1/2'>
                      <label htmlFor="email"></label>
                      <input type="text" className='w-3/4 outline-none px-3 py-1' placeholder='example@gmail.com' />
                      </div>
            <div className='mt-3'>
              <Link className='bg-blue-950 text-white rounded-sm px-3 py-1 hover:bg-blue-600 hover:text-white' to="/about">send</Link>
                      </div>
                  </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                  <h2 className='text-xl font-bold'>Company</h2>
                  <Link className='hover:text-gray-600' to="/about">About</Link>
                  <Link className='hover:text-gray-600' to="/sell">Sell Your Car</Link>
                  <Link className='hover:text-gray-600' to="/contact">Contact</Link>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                  <h1 className='text-xl font-bold'>Support</h1>
                  <Link className='hover:text-gray-600' to="/faq">Frequently asked Questions</Link>
                  <Link className='hover:text-gray-600' to="/terms">Sell On Behalf Terms of Service</Link>
              </div>
          </div>

          <div className='container w-3/4 mx-auto flex flex-col md:flex-row mt-6 pb-4 space-y-2 md:space-y-3 items-center justify-between'>
              <p>&copy; 2025 Cars Website All rights reserved</p>
              <div className='flex flex-row space-x-3'>
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} className="text-slate-600 hover:text-slate-400" />
                  </Link>
                  <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={30} className="text-slate-600 hover:text-slate-400" />
      </Link>
      <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} className="text-slate-600 hover:text-slate-400" />
      </Link>
      <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className="text-slate-600 hover:text-slate-400" />
      </Link>
              </div>
          </div>
    </div>
  )
}

export default Footer