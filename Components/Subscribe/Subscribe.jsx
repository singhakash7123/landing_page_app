import React from 'react'
import { TiTick } from "react-icons/ti";
const Subscribe = () => {
  return (
    <section className='py-25 px-5'>
      <div className='w-full max-w-7xl mx-auto'>
        <h1 data-aos="fade-down" className='text-4xl md:text-5xl lg:text-6xl text-center max-w-5xl mx-auto font-bold leading-tight'>Ready to enhance your sales & customer satisfaction?</h1>

        <div>
          <form data-aos="fade-up" className='p-1 rounded-4xl mx-auto max-w-lg lg:max-w-xl border-2 flex overflow-hidden mt-14'>
            <input className='border-0 outline-0 lg:text-lg pl-2 w-full rounded-4xl text-sm' type='email' placeholder='Enter Your Email' required />
            <button className='bg-[#936dff] text-white text-sm md:text-lg font-semibold whitespace-nowrap py-2 lg:py-3 px-3 lg:px-7  rounded-4xl'>Sign Up Free</button>
          </form>
          <div data-aos="fade-up" className='flex items-center justify-center gap-x-2 lg:gap-x-6 mt-3'>
            <p  className='flex items-center gap-x-1'> <span className='text-green-500'><TiTick /></span> No credit card needed</p>
            <p  className='flex items-center gap-x-1'> <span className='text-green-500'><TiTick /></span> Free 14-day trial</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe