import FeaturesCard from '@/Components/Cards/FeaturesCard'
import React from 'react'
import featurearray from '@/Data/Features.js'
import DataAnalyticsHighLights from '@/Components/HighLightsSection/DataAnalyticsHighLights'
import Features from '@/Components/HighLightsSection/Features'
import BusinessUpgrade from '@/Components/HighLightsSection/BusinessUpgrade'
const FeaturesPage = () => {
  const renderFeatures = featurearray?.map((item)=>{
   return <FeaturesCard key={item.id} heading={item.heading} paragraph={item.paragraph} icon={item.icon} color={item.color}/>
  })
  return (
   <>
   <div className='h-20 lg:h-25'></div>
   <div className='max-w-xl mx-auto space-y-4 text-center py-24'>
    <h2 className='text-5xl font-bold  leading-tight'>Everything You Expect and More Features Beyond</h2>
    <p className='text-gray-500 max-w-lg'>GoSaas delivers all the key features, offering a versatile
platform to streamline your business operations.</p>
   </div>
   <DataAnalyticsHighLights/>
   <BusinessUpgrade/>
   <Features/>
    <section className='px-5'>
   
      <div data-aos="fade-up" className='mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black rounded-2xl overflow-hidden mt-10 gap-y-6 '>
    {renderFeatures}
      </div>
     
    </section>
   </>
  )
}

export default FeaturesPage