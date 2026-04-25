import BlogCard from '@/Components/Cards/BlogCard'
import blogArray from '@/Data/Blog'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const renderBlogs = blogArray?.map((item)=>{
        return <li key={item.id}><BlogCard  heading={item.heading} image={item.image} paragraph={item.paragraph} /></li>
    })
  return (
    <>
    <div className='h-20 bg-black lg:h-25'>page</div>
    <div className='text-center h-[40vh] flex flex-col items-center justify-center'>
        <h2 data-aos='fade-down' className='text-5xl font-bold'>Latest Insights & Updates</h2>
        <p data-aos='fade-down' className='max-w-xl mx-auto mt-4 text-gray-400'>Stay informed with our latest articles and updates, covering
trends, tips, and insights to help you grow.</p>
    </div>
    <div className='w-full sm:max-w-3xl lg:max-w-7xl mx-auto grid lg:grid-cols-[7fr_3fr] grid-cols-1 gap-x-10 px-6'>
       <ul data-aos='fade-right' className='space-y-8'>
        {renderBlogs}
       </ul>

        {/* links */}
        <div data-aos='fade-left' className=''>
           <div className='rounded-xl py-2 w-full border border-gray-400'>
            <input type='text' placeholder='Search' className='px-5 outline-0' />
           </div>
           <div className='border-b border-b-gray-400 py-8'>
           <h4 className='text-3xl font-semibold'>Categories</h4>
            <ul data-aos='fade-left' className='space-y-3 mt-6 text-gray-500 '>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Agency (0)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Business (2)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>SEO (2)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Corporate (5)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Artificial Intelligence (1)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Application (3)</Link></li>
            </ul>
           </div>
           <div className='py-6'>

            <h4 data-aos='fade-left' className='text-3xl font-semibold'>Popular tags</h4>
            <ul data-aos='fade-left' className='flex items-center flex-wrap text-gray-500 gap-x-4 gap-y-6 mt-10'>

                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Business</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Internet</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Startup</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Search Engine</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Mobile</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>UI/UX</Link></li>
                <li><Link className='py-2 px-3 rounded-2xl border border-gray-500 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out ' href={'/Blog'}>Corporate</Link></li>
            </ul>
           </div>
        </div>
    </div>
    </>
  )
}

export default page