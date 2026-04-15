import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const FeaturesCard = ({heading,icon,paragraph,color}) => {
  
  return (
    <div data-aos="fade-up" className='flex flex-col items-center p-6 lg:p-12 w-full text-white bg-black h-full'>
        <div style={{backgroundColor:color}} className='text-center text-3xl lg:text-5xl mb-4 bg-red-400 p-3 rounded-2xl text-black'><span>{icon}</span></div>
        <h3 className='text-center text-3xl'>{heading}</h3>
        <p className='text-center text-lg mt-3 mb-6 px-7 lg:px-3'>{paragraph}</p>
        <div className='mt-auto'>
        <Link aria-label='learn more about our services' href={'/Contact_Us'} className='flex items-center gap-x-1 hover:text-purple-500 font-semibold transition-all duration-300' >Learn More <span><MdArrowOutward /></span></Link>
        </div>
    </div>
  )
}

export default FeaturesCard