
import React from 'react'
import content from '@/Data/FAQs.js'
import FAQComponent from './FAQComponent'
const FAQs = () => { 
   const renderFAQs = content?.map((item)=>{
 return <FAQComponent key={item.id} question={item.question} answer={item.answer} />
   }
)
  return (
    <section className='py-32'>
 
      <h2 data-aos="fade-down" className='text-center text-4xl lg:text-5xl font-semibold max-w-2xl mx-auto mb-15'>Answers to Your Frequently Asked Questions</h2>
        <div data-aos='fade-up' className='columns-1 md:columns-2 max-w-7xl mx-auto py-10 px-5 bg-gray-100'>
            {renderFAQs}
        </div>
    </section>
  )
}

export default FAQs