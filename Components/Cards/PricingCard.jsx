import Link from 'next/link'
import React from 'react'
const PricingCard = ({type,price,text,features,id}) => {
  const renderFeatures = features?.map((item)=>{
    return <li key={item.id} className={`flex items-center gap-x-1 ${item.id <= 3 ? 'text-[black]':'text-[#a3a2a3]'} `}><span>{item.symbol}</span>{item.text}</li>
  })
  return (
    <div data-aos='fade-up' className='w-full max-w-3xl flex flex-col gap-y-8 p-8 hover:shadow-xl rounded-2xl mx-auto'>
        <div className='text-center'><span>{type}</span></div>
        <div className='text-5xl font-bold text-center'><span>${price}</span></div>
        <p className='text-center'>{text}</p>
        <Link aria-label='learn more about our services' href={'/Contact_Us'} className={`${id === 2 ? 'bg-[#936dff] text-white hover:bg-white hover:text-[#936dff] ':'bg-white text-[#936dff] hover:bg-[#936dff] hover:text-white'} border-2 border-[#936dff] rounded-3xl text-center py-3 font-semibold transition-all duration-300 ease-in`}>{id === 1 ?'Try it For Free':'Purchase Now'}</Link>
        <ul className='space-y-3'>
          {renderFeatures}
        </ul>
    </div>
  )
}

export default PricingCard