import React from 'react'
import { IoMagnetOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { GiJourney } from "react-icons/gi";
import Image from 'next/image';
import BusinessUp from '@/Images/BusinessUpgrade/BusinessUp.webp'
const BusinessUpgrade = () => {
  return (
    <section className='py-20 mt-10'>
        <div className='min-h-screen max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-y-10 px-4'>
            {/* content */}
            <div className='w-full max-w-xl space-y-8'>
                    <h2 className='text-4xl lg:text-5xl font-bold leading-snug tracking-wider' data-aos="fade-down">Upgrade Your Business with Our CRM Solution</h2>
                    <div data-aos="fade-right">
                        <div className='flex flex-col lg:flex-row gap-x-8 items-baseline justify-end gap-y-4'>
                            <div className='bg-[#936dff] flex  items-center justify-center rounded-full p-3'>
                               <IoMagnetOutline className='text-4xl bg-[#936dff] text-white' />
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-3xl'>High-Quality Leads</h4>
                                <p className='text-gray-500'>Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right">
                        <div className='flex flex-col lg:flex-row gap-x-8  items-baseline justify-end gap-y-4'>
                            <div className='bg-[#936dff] flex items-center justify-center rounded-full p-3'>
                               <IoRocketOutline className='text-4xl bg-[#936dff] text-white' />
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-3xl'>High-Quality Leads</h4>
                                <p className='text-gray-500'>Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right">
                        <div className='flex flex-col lg:flex-row gap-x-8 items-baseline justify-end gap-y-4'>
                            <div className='bg-[#936dff] flex items-center justify-center rounded-full p-3'>
                               <GiJourney className='text-4xl bg-[#936dff] text-white' />
                            </div>
                            <div className='space-y-4'>
                                <h4 className='text-3xl'>High-Quality Leads</h4>
                                <p className='text-gray-500'>Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.</p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* image */}
            <div className='w-full max-w-2xl'>
                <div className='w-full lg:max-w-xl aspect-5/6 bg-[#42e08e] rounded-full overflow-hidden relative' data-aos="fade-left">
               <Image src={BusinessUp} alt="Business Upgrade" fill className='object-contain' sizes='(max-width:768px) 100vw
               (max-width:1200px) 50vw
               33vw'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessUpgrade