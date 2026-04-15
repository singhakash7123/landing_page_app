import React from 'react'

const FooterCTABanner = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center bg-[#00f043] gap-x-25 gap-y-8 px-10 py-8 mb-25'>
        <div className=' flex flex-col sm:flex-row items-center justify-center'>
            <h4 data-aos="fade-up" className='text-3xl font-semibold'> Any Questions? Our support team is available 24/7</h4>
        </div>
        <div className=' flex flex-col lg:flex-row items-center justify-center'>
            <button data-aos="fade-right" className='bg-black text-lg text-white font-semibold px-8 py-2 rounded-3xl before:content-[""] before:w-full before:h-full before:bg-[#936dff] relative before:absolute before:-top-full before:left-0 overflow-hidden before:-translate-y-full before:transition-transform hover:before:translate-y-full  before:duration-300 before:ease-in-out'><span className='relative z-10'>Live Chat Now</span></button>
        </div>
    </div>
  )
}

export default FooterCTABanner