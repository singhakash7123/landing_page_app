import Image from 'next/image';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import FeaturesGraph from '@/Images/Features/FeaturesGraph.webp'
const DataAnalyticsHighLights = () => {
  return (
    <section>
        <div className='min-h-screen max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-y-8 px-4'>
           {/* content */}
            <div className='w-full max-w-2xl space-y-6'>
                <h2 data-aos="fade-down" className='text-4xl lg:text-5xl font-bold leading-snug tracking-wider'>Gain precise insights for your business</h2>
                <p data-aos="fade-up" className='text-gray-500'>Our fast response system helps you tackle tasks efficiently, enabling you to focus on what truly matters and achieve your goals with ease.</p>
                <ul data-aos="fade-up" className='space-y-5'>
                    <li className='flex gap-x-3'>
                        <span><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='text-lg'>Advanced Analytics Tools</span>
                    </li>
                    <li className='flex gap-x-3'>
                        <span><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='text-lg'>Real-time Data</span>
                    </li>
                    <li className='flex gap-x-3'>
                        <span><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='text-lg'>Accurate Predictions</span>
                    </li>
                </ul>
            </div>
            {/* image */}
            <div className='w-full max-w-2xl'>
                <div className='w-full lg:max-w-lg aspect-square bg-amber-800 mx-auto rounded-3xl overflow-hidden relative ' data-aos="fade-right">
                    <Image src={FeaturesGraph} alt='Analytics_graph' fill className='object-cover' sizes='(max-width:768px) 100vw
                    (max-width:1200px) 50vw
                    33vw' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DataAnalyticsHighLights