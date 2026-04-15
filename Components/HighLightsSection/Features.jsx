import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import HomeImage from '@/Images/Home/HomeImage.webp'
import GrowthBarGraph from '@/Images/Home/GrowthBarGraph.webp'

const Features = () => {
  return (
    <section className='py-10 overflow-hidden'>
        <div className='min-h-screen w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 gap-y-8'>
            {/* content */}
            <div className='w-full max-w-2xl space-y-6 lg:space-y-5'>
                <h2 className='text-4xl lg:text-5xl font-bold leading-snug tracking-wide' data-aos="fade-down">
                    Automate tasks to increase efficiency and reduce manual effort
                </h2>
                <p data-aos="fade-right" className='text-gray-500 lg:text-xl'>Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data</p>
                <ul className='space-y-4' data-aos="fade-right">
                    <li className='flex gap-x-3'>
                        <span ><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='lg:text-lg'>Actionable Insights</span>
                    </li>
                    <li className='flex gap-x-3'>
                        <span ><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='lg:text-lg'>Enhanced Decision-Making</span>
                    </li>
                    <li className='flex gap-x-3'>
                        <span ><FaCheckCircle className='text-green-500 bg-white text-2xl' /></span>
                        <span className='lg:text-lg'>Improved Efficiency</span>
                    </li>
                </ul>
                <div className='mt-8'>
                    <Link data-aos='fade-up' aria-label='learn more about our services' className='text-white bg-[#936dff] hover:bg-green-500 font-semibold py-2 lg:py-3 px-6 lg:px-8 w-fit flex items-center rounded-full' href={'/Contact_Us'}>Learn More <span aria-hidden="true"><MdOutlineArrowOutward /></span></Link>
                </div>
            </div >
            {/* image */}
            <div className='w-full max-w-2xl '>
                <div className='w-full lg:max-w-lg aspect-square bg-red-500 mx-auto relative' data-aos="fade-right">
                    <div className='w-30 sm:w-50  aspect-5/6 bg-yellow-500 absolute right-0 top-1/2 transform -translate-y-1/2 float-left z-10'>
                    <Image src={GrowthBarGraph} alt="image" fill  className="object-cover" sizes='(max-width:768px) 100vw
                    (max-width:1200) 50vw
                    33vw' />
                    </div>
                    <Image src={HomeImage} alt="image" fill  className="object-cover" sizes='33vw'/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Features