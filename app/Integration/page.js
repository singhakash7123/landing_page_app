import React from 'react'
import integration from '@/Data/Integration.js'
import IntegrationCards from '@/Components/Cards/IntegrationCards'
const page = () => {
  const renderPartners = integration?.map((item)=>{
    return <IntegrationCards 
    key={item.id} 
    logo={item.logo} 
    company={item.company} 
    paragraph={item.paragraph} />
  })
  return (
    <main className='py-25'>
      <div className='min-h-[60vh] flex flex-col items-center justify-center gap-y-4 text-center'>
        <h2 data-aos="fade-down" className='w-full max-w-2xl text-4xl lg:text-5xl font-bold tracking-wider'>Seamless App Integration
for Effortless Connectivity</h2>
        <p data-aos="fade-up" className='w-full max-w-xl text-gray-500 text-lg tracking-wide'>Effortlessly connect and integrate your favorite apps to enhance
functionality and streamline your workflows.</p>
      </div>

      <div data-aos="fade-up" className='bg-[#f2fcf7] py-20'>
        <div className='flex flex-col items-center justify-center gap-y-4 text-center'>
        <h2 data-aos="fade-down" className='w-full max-w-2xl text-4xl lg:text-5xl font-bold tracking-wider'>Essential Tools Integration</h2>
        <p data-aos="fade-up" className='w-full max-w-3xl text-gray-500 text-xl tracking-wide'>Unlock the full potential of your data with our comprehensive analytics solutions. we
provide the tools you need to make informed decisions & drive business growth.</p>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12'>
      {renderPartners}
      </div>

      </div>
      
    </main>
  )
}

export default page