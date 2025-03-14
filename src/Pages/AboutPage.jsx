import React from 'react'

const AboutPage = () => {
  return (
      <div className='bg-slate-300 pt-10'>
          <div className='flex flex-col items-center space-y-3 p-4'>
              <h1 className='text-2xl font-bold'>Meet The <span className='text-blue-600'>Team.</span><br/>Best Of All.</h1>
              <p className='text-center text-lg pt-2'><span className='font-semibold underline underline-offset-4'>Pupel-Cars</span> is a global sourcing and shipping Company domiciled in <span className='text-blue-600'>Nairobi, Kenya</span>. We export and ship new & used vehicles, brand-new & used spare parts, industrial equipment and electronics from our primary source markets in Europe, Middle east and the Orient.</p>
          </div>
          <div className='flex flex-col items-center pt-6 space-y-2 p-4'>
              <h1 className='text-2xl font-bold'>Who We Are</h1>
              <p className='text-center text-lg pt-2'>We are passionate about cars and committed to connecting buyers and sellers in the most efficient way possible. With years of experience in the automotive industry, we have built a trusted platform where customers can find the best deals, access financing options, and receive expert guidance.</p>
          </div>
    </div>
  )
}

export default AboutPage