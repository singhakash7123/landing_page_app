'use client'
import Link from 'next/link'
import React from 'react'

const HomePricingCard = ({id,features,price,plan,used}) => {
 
  const renderFeatures = features?.map((item)=>{
    return  <li className='group-hover:text-white flex gap-x-3' key={item.id}><span>{item.symbol}</span>{item.text}</li>
  })
  return (
    <div data-aos="fade-up" className={`p-5 group hover:bg-[#936dff] rounded-xl ${id === 2?'bg-[#936dff] text-white':'bg-white text-black'}`}>
        <div className='border-b space-y-2 py-5 border-b-white'>
            <h3 className='group-hover:text-white font-bold text-4xl'>{plan}</h3>
            <p className='group-hover:text-white font-semibold'>{used}</p>
        </div>
        <h3 className='text-xl group-hover:text-white font-bold  mt-6'><span className='text-5xl'>${price}</span> /monthly</h3>
        <ul className='space-y-4 mt-8'>
           {renderFeatures}
            
        </ul>
        <div className='text-black mt-8 w-full bg-white py-2 text-center rounded-full font-semibold hover:text-purple-500'>
          <Link aria-label='learn more about our services' href={'/Contact_Us'}>Choose Plan</Link>
        </div>
    </div>
  )
}

export default HomePricingCard