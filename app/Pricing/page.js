'use client'
import PricingCard from '@/Components/Cards/PricingCard'
import React from 'react'
import{monthlyPrice, annualPrice} from '@/Data/Pricing.js'
import FAQs from '@/Components/FAQs'
const Pricing = () => {
  const [isMonthly, setIsMonthly] = React.useState(true) 
  const renderMonthlyPricingCards = monthlyPrice?.map((item)=>{
   return <PricingCard key={item.id} type={item.type} price={item.price} text={item.text} features={item.features} id={item.id} />
  })
  const renderAnnualPricingCards = annualPrice?.map((item)=>{
   return <PricingCard key={item.id} type={item.type} price={item.price} text={item.text} features={item.features} id={item.id} />
  })
  return (
    <>
    <div className='h-20 lg:h-25'></div>
    <div className='flex items-center justify-center'><button onClick={()=>{setIsMonthly(!isMonthly)}} className='text-white bg-purple-500 rounded-2xl py-2 px-5 hover:shadow-2xl'>change</button></div>
    <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-x-10 mx-auto mt-30'>
      {isMonthly?renderMonthlyPricingCards:renderAnnualPricingCards}
      
    </div>
    <div className='mt-25'>
      <FAQs/>
    </div>
    
    </>
  )
}

export default Pricing