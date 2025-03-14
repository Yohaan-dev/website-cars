import React from 'react'
import {FaCar, FaCheck, FaMoneyBillAlt} from 'react-icons/fa'

const ServicesPage = () => {
  return (
    <div className='bg-slate-300 pt-10 overflow-x-hidden'>
      <div className='flex flex-col items-center p-4'>
      <h1 className='font-bold text-2xl text-center pb-4'>Our Services</h1>
      <p className='text-center text-lg'>At <span className='text-indigo-700'>Pupel-Cars</span>, we offer a range of services to make car buying, selling, and ownership as smooth as possible. Whether you're looking for a new vehicle, selling your current car, or need financing assistance, we’ve got you covered.</p>
      </div>
      <div className='flex flex-col items-center p-4'>
      <h1 className='flex items-center justify-center font-bold text-2xl pt-8'><FaCar className='pr-2' size={30} color="blue" />Buy A Car.</h1>
        <p className='text-center text-lg'>Looking for your dream car? Browse our extensive collection of new and pre-owned vehicles from trusted dealerships and private sellers. Our platform ensures verified listings, competitive pricing, and detailed vehicle history reports, so you can buy with confidence.</p>
        <div className='space-y-2 py-3'>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Verified car listings</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Wide range of brands and models</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Easy search and filter options</p>
        </div>
      </div>
      <div className='flex flex-col items-center p-4'>
      <h1 className='flex items-center justify-center font-bold text-2xl pt-8'><FaCar className='pr-2' size={30} color="red" />Sell A Car.</h1>
        <p className='text-center text-lg'>Want to sell your car fast and at the best price? Our platform allows you to list your vehicle in minutes, get offers from potential buyers, and close the deal hassle-free.</p>
        <div className='space-y-2 py-3'>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/>  Free car listing</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Instant offers from buyers</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Secure transactions</p>
        </div>
      </div>
      <div className='flex flex-col items-center p-4'>
      <h1 className='flex items-center justify-center font-bold text-2xl pt-8'><FaMoneyBillAlt className='pr-2' size={40} color="green" />Car Financing & Insurance.</h1>
        <p className='text-center text-lg'>Need help with car financing? We offer affordable auto loans with flexible repayment plans. Our team will guide you through the loan approval process and help you find the best insurance plans for your new vehicle.</p>
        <div className='space-y-2 py-3'>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/>  Low-interest financing options</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/>  Quick loan approvals</p>
        <p className='flex items-center justify-center text-center'><FaCheck className='text-green-500 mr-3'/> Comprehensive car insurance coverage</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage