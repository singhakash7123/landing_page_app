import BlogCard from '@/Components/Cards/BlogCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='h-20 bg-black lg:h-25'>page</div>
    <div className='text-center h-[40vh] flex flex-col items-center justify-center'>
        <h2 className='text-5xl font-bold'>Latest Insights & Updates</h2>
        <p className='max-w-xl mx-auto mt-4 text-gray-400'>Stay informed with our latest articles and updates, covering
trends, tips, and insights to help you grow.</p>
    </div>
    <div className='w-full max-w-7xl mx-auto grid grid-cols-[7fr_3fr] gap-x-10 '>
       <ul className='space-y-8'>
        <li><BlogCard/></li>
        <li><BlogCard/></li>
        <li><BlogCard/></li>
        <li><BlogCard/></li>
       </ul>

        {/* links */}
        <div className=''>
           <div className='rounded-xl py-2 w-full border border-gray-400'>
            <input type='text' placeholder='Search' className='px-5 outline-0' />
           </div>
           <div className='border-b border-b-gray-400 py-8'>
           <h4 className='text-3xl font-semibold'>Categories</h4>
            <ul className='space-y-3 mt-6 text-gray-500 '>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Agency (0)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Business (2)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>SEO (2)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Corporate (5)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Artificial Intelligence (1)</Link></li>
                <li><Link className='hover:text-purple-400' href={'/Blog'}>Application (3)</Link></li>
            </ul>
           </div>
           <div className='py-6'>

            <h4 className='text-3xl font-semibold'>Popular tags</h4>
            <ul className='flex items-center flex-wrap text-gray-500 gap-x-4 gap-y-6 mt-10'>

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