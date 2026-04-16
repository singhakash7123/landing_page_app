import React from 'react'
import Link from 'next/link'
import { FaQuoteLeft } from "react-icons/fa";
const page = () => {
  return (
    <>
    <div className='h-20 bg-black lg:h-25'>page</div>
   
    <div className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-x-10 mt-8 px-6'>
        <div>
        <div data-aos='fade-right' className='flex items-center gap-x-5  text-gray-500'>
            <span>By Shariful UK</span>
            <span>Aug 01, 2025</span>
            <span>0 Comments</span>
        </div>
        <h1 data-aos='fade-right' className='text-5xl font-bold mt-6'>The Importance of SEO in Growing Your Online Store</h1>
        <div className='w-full md:max-w-3xl aspect-square md:aspect-2/1 bg-red-400 mt-10 rounded-xl'></div>

        <div data-aos='fade-right' className='flex gap-x-3 mt-8'>
            <span className='text-5xl font-bold'>A</span>
            <p className='text-gray-500'>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
        </div>
        <article data-aos='fade-right' className='space-y-4 mt-8'>
            <h3 data-aos='fade-right' className='font-semibold text-4xl'>Tailored to Your Audience</h3>
            <p data-aos='fade-right' className='text-gray-500'>
                In today s digital landscape, user experience (UX) plays a crucial role in determining the success of a website. Custom web design is a powerful way to enhance UX, ensuring that your visitors enjoy seamless navigation, an intuitive interface, and a visually appealing environment. Here s how custom web designs can improve user experience and set your brand apart.
            </p>
            <p data-aos='fade-right' className='text-gray-500'>
                Custom web designs allow you to create a website that caters specifically to your target audience. By understanding their needs, preferences, and behaviors, you can craft a user experience that feels personalized and relevant. This level of customization not only attracts more visitors but also keeps them engaged longer. A custom design gives you the flexibility to structure your website s layout in a way that makes it easy for users to find what they re looking for. Streamlined menus, intuitive buttons, and logical page hierarchies guide users smoothly through your site, reducing frustration and improving retention.
            </p>
        </article >
        <div data-aos='fade-right' className='border-l-4 border-purple-600 px-6 mt-8 bg-gray-50 py-2'>
        <span className='text-4xl text-green-400'><FaQuoteLeft /></span>
        <blockquote className='text-xl mt-4 mb-4'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, who expound the actual teachings of the great explorer.</blockquote>
        <small className='text-gray-500 text-base'>Andrew Hobar</small>
        </div>
        <article data-aos='fade-right' className='text-gray-500 space-y-8 mt-12'>
            <h3 className='text-4xl font-semibold text-black'>Consistent Branding</h3>
            <p>
                Custom web design ensures that every aspect of your site reflects your brand identity. From the color scheme to typography and imagery, everything can be aligned with your brands voice and values. Consistent branding builds trust and recognition, helping visitors feel connected to your business. With more users browsing on mobile devices, its essential to have a website that looks and functions well across all screen sizes. A custom-designed site is optimized for responsiveness, ensuring that your content adjusts automatically, offering a flawless experience on desktops, tablets, and smartphones.
            </p>
            <p>Stand out from competitors with a visually distinctive design. Custom web design allows for creative freedom to make your site unique while aligning with the latest design trends and best practices. The result is a visually appealing website that leaves a lasting impression on users. With custom web design, you have the freedom to add tailored features and functionalities that meet the specific needs of your business. Whether its integrating custom forms, interactive elements, or third-party tools, you can provide users.</p>
            <p>
                A well-designed custom website not only enhances user experience but also drives conversions. By strategically placing call-to-action buttons, using compelling visuals, and designing forms that are easy to fill out, you can guide users toward desired actions, such as making a purchase or signing up for a newsletter.
            </p>
            <ul data-aos='fade-right' className='space-y-2 list-disc px-5'>
                <li>An intuitive and visually appealing website design.</li>
                <li>Seamless integration of a booking system, allowing customers to schedule appointments effortlessly.</li>
                <li>Responsive design for optimal user experiences across various devices.</li>
                <li>Rigorous testing to ensure the website and booking system perform flawlessly.</li>
                <li>A content management system for easy updates and maintenance.</li>
                <li>Search engine optimization strategies to enhance online visibility.</li>
            </ul>
        </article>
        </div>
        <div data-aos='fade-left' className=''>
           <div className='rounded-xl py-2 w-full border border-gray-400'>
            <input type='text' placeholder='Search' className='px-5 outline-0' />
           </div>
           <div className='border-b border-b-gray-400 py-8'>
           <h4 data-aos='fade-left' className='text-3xl font-semibold'>Categories</h4>
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