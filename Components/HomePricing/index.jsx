import React from 'react'
import HomePricingDetails from '@/Data/HomePricingDetails.js'
import HomePricingCard from '../Cards/HomePricingCard'
const HomePricing = () => {
   const renderPricingDetails = HomePricingDetails?.map((item)=>{
    return  <HomePricingCard key={item.id} id={item.id} plan={item.plan} used={item.for} price={item.price} features={item.features}/>
   })
  return (
    <section>
        <h2 data-aos="fade-down" className=' max-w-2xl text-4xl lg:text-5xl text-center mx-auto font-bold'>Transparent pricing plans, find the perfect fit for your needs</h2>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8 mt-12'>
           {renderPricingDetails}
        </div>
    </section>
  )
}

export default HomePricing