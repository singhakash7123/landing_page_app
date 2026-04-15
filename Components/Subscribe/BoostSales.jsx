import React from 'react'

const BoostSales = () => {
  return (
    <section className='min-h-[70vh] flex items-center justify-center bg-[#936dff]'>
        <div className='flex items-center justify-center flex-col gap-y-12'>
            <h2 className='text-center text-white text-4xl lg:text-5xl font-bold max-w-4xl leading-snug' data-aos='fade-down'>Boost Sales. Build Lasting Relationships. Achieve Faster Growth Today!</h2>
            <form data-aos='fade-up' className='bg-[#936dff] md:bg-white py-2 px-5 flex flex-col md:flex-row w-full max-w-xl rounded-full gap-y-2' >
                <input className='w-full outline-0 text-black rounded-full bg-white md:py-0 py-2 md:px-0 px-3' type='email' placeholder='Enter your email address' required />
                <button className='text-white font-semibold bg-black py-3 px-8 rounded-full whitespace-nowrap hover:bg-[#936dff]' type='submit'>Get Started Now!</button>
            </form>
        </div>
    </section>
  )
}

export default BoostSales