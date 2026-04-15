import React from 'react'
import Link from 'next/link'
import HeroImage from '@/Images/HeroImages/Hero.webp'
import BarGraph from '@/Images/HeroImages/BarGraph.webp'
import LineGraph from '@/Images/HeroImages/LineGraph.webp'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
    {/* <div className='h-30 lg:h-20'></div> */}
    <section className='overflow-hidden pt-32 pb-15 lg:py-20'>
      
     
       <div className='max-w-7xl min-h-screen mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-end lg:justify-between gap-y-20 px-4 lg:px-0'>
        {/* content */}
        <div className='w-full max-w-2xl'>
         <h1 className='text-4xl lg:text-6xl font-bold leading-tight tracking-wider' data-aos='fade-right'> Elevate Ur Customer Relationships with Our CRM</h1>
         <p className='leading-relaxed mt-8' data-aos='fade-right'>Enhance your customer interactions and streamline your sales processes with our powerful and intuitive CRM solution.</p>
         <div className='flex flex-col md:flex-row lg:items-center gap-x-6 mt-10 gap-y-4' >
         <Link data-aos='fade-right' className='w-fit py-2 px-4 lg:px-6 lg:text-lg text-white bg-[#936dff] rounded-full overflow-hidden relative before:w-full before:h-full before:absolute before:bg-black before:-top-full before:left-0 before:rounded-full hover:before:translate-y-full before:transition-all before:duration-300 before:ease-in-out' href={'/Login'}> <span className='relative z-10'>Get a Demo</span> </Link>
         <Link data-aos='fade-left' className='w-fit py-2 px-4 lg:px-6 lg:text-lg text-black hover:text-white font-semibold border rounded-full overflow-hidden relative before:w-full before:h-full before:absolute before:bg-black before:-top-full before:left-0 before:rounded-full hover:before:translate-y-full before:transition-all before:duration-300 before:ease-in-out' href={'/Login'}> <span className='relative z-10'>Get Started Free</span> </Link>
         </div>
        </div>
        {/* Image */}
        <div className='w-full max-w-2xl '>
        <div className=' w-full  lg:max-w-xl aspect-square mx-auto bg-red-500 relative' data-aos='fade-left'>
          <Image src={HeroImage} priority alt='HeroImage' fill className='object-cover' 
          sizes='(max-width:768px) 100vw
          (max-width:1200px) 50vw
          33vw' 
          />
          <div className='h-30 sm:h-40 w-40 sm:w-50 absolute left-0 -top-12 float-right '>
          <Image src={BarGraph} alt='HeroImage' fill className='object-cover ' sizes='33vw' />

          </div>
          <div className='h-30 sm:h-40 w-40 sm:w-50 absolute right-0 -bottom-12 float-left' >

          <Image src={LineGraph} alt='HeroImage' fill className='object-cover' sizes='33vw' />
          </div>
        </div>
        </div>
      </div>
     
    </section>
    </>
  )
}

export default Hero