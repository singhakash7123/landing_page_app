import Link from 'next/link'
import React from 'react'
import SocialLinksFooter from './SocialLinksFooter';
const Footer = () => {
  return (
    <footer className='space-y-5'>
        <div className='w-full max-w-7xl text-lg lg:text-base  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] justify-between space-y-8 px-4'>
            <div className='space-y-4 max-w-sm'>
                <h4 className='text-2xl font-bold'><span className='text-green-500'>Go</span>Saas</h4>
                <p className=' text-gray-700'>Our analytics application turns raw data into actionable insights, empowering businesses to make data-driven decisions and enhance performance.</p>
            </div>
                <div>
                    <h3 className='text-xl text-black font-bold mb-6'>Quick Links</h3>
            <ul className='space-y-2 '>
                <li><Link className='hover:text-purple-500' href={'/'}>Home</Link></li>
                <li><Link className='hover:text-purple-500' href={'/Features'}>Fearture</Link></li>
                <li><Link className='hover:text-purple-500' href={'/Pricing'}>Pricing</Link></li>
                <li><Link className='hover:text-purple-500' href={'/Blog'}>Blog</Link></li>
                <li><Link aria-label='learn more about our services' className='hover:text-purple-500' href={'/Contact_Us'}>Contact_Us</Link></li>
            </ul>
                </div>
                <div>
                    <h3 className='text-xl text-black font-bold mb-6'>Support</h3>
            <ul className='space-y-2 '>
                <li><Link aria-label='learn more about our services' className='hover:text-purple-500' href={'/Contact_Us'}>Contact_Us</Link></li>
                <li><Link className='hover:text-purple-500' href={'/'}>Help</Link></li>
                <li><Link className='hover:text-purple-500' href={'/'}>Resources</Link></li>
                <li><Link className='hover:text-purple-500' href={'/'}>Terms & Conditions</Link></li>
               
            </ul>
                </div>
            <div className='space-y-2 text-gray-700 '>
                <h3 className='text-xl font-bold mb-6 text-black'>Contact Info</h3>
                <p><span>24/7 Support Center</span></p>
                <p><Link className='hover:text-purple-500' href={'/Contact_Us'}>contact@gosaas.com</Link></p>
                <p><Link className='hover:text-purple-500' href={'/Contact_Us'}>(55) 1234-56789</Link></p>
                <p><span>10 am - 12 pm, Everyday</span></p>
               
            </div>
        </div>
        {/* <div className='flex items-center flex-wrap justify-center lg:justify-between max-w-7xl mx-auto py-6 border-t border-t-gray-500 px-4 gap-y-4 gap-x-5'>
            <div className='flex items-center flex-wrap justify-center gap-x-8 gap-y-2'>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaFacebook /></span>Facebook</Link></div>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaYoutube /></span>Youtube</Link></div>
                <div><Link className='hover:text-purple-400 flex items-center gap-x-1 text-lg lg:text-base' href={'/'}><span className='text-xl text-purple-400'><FaInstagram /></span>Instagram</Link></div>
            </div>
            <div className='text-lg lg:text-base'>© Copyright 2026 GoSaas. All rights reserved.</div>
        </div> */}
        <SocialLinksFooter style='flex-row-reverse bg-pink-50 rounded-2xl'/>
    </footer>
  )
}

export default Footer