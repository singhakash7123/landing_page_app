import React from 'react'
import CustomerReview from '../Cards/CustomerReview'
import customerpics from '@/Data/CustomerReview'
const CustomerReviewSlider = () => {
 
  const renderpics = customerpics?.map((item)=>{
    return  <CustomerReview key={item.id} image={item.image} Name={item.Name} Role={item.Role}/>
  })
  
  return (
    <section className='space-y-16 py-20 px-4'>
        <h3 data-aos="fade-down" className='text-4xl lg:text-5xl font-bold max-w-xl mx-auto text-center'>Customer Reviews and
Success Stories</h3>
        <div className='w-full max-w-7xl mx-auto grid grid-flow-col auto-cols-[100%] md:auto-cols-[50%] lg:auto-cols-[33.33%] gap-x-5 overflow-x-auto scrollbar-hide'>
       {renderpics}
    </div>
    </section>
    
  )
}

export default CustomerReviewSlider