import React from 'react'
import Image from 'next/image'
const IntegrationCards = ({logo,company,paragraph}) => {
  return (
    <div data-aos="fade-up" className='w-full group flex flex-col items-center gap-y-6 bg-white p-12'>
     <Image src={logo} alt="logo" width={80} height={80} className='transition-all duration-300 ease-in-out group-hover:scale-110' sizes='(max-width:768px) 50vw
      25vw' />  
      <h4 className='text-center text-3xl font-semibold'>{company}</h4>
      <p className='text-gray-400 text-center text-lg'>{paragraph}</p>
    </div>
  )
}

export default IntegrationCards