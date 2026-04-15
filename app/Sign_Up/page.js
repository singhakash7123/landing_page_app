import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineGoogle } from "react-icons/ai";
import Link from 'next/link';
const page = () => {
  return (
    <>
    <div className='min-h-20 lg:min-h-25'></div>
    <section className='min-h-screen flex items-center justify-center'>
        <form className=' w-full max-w-110 flex flex-col items-center p-10 rounded-3xl shadow-2xl shadow-gray-700 gap-y-6'>
            <h3 data-aos="fade-down" className='text-3xl font-semibold text-center'>Create an account</h3>
            <p className='text-gray-600 text-center'>Use your credentials to access your account</p>
            <div className='w-full flex items-center py-2 px-4 border-2 rounded-full border-gray-400 text-gray-500 gap-x-2'>
                <label className='text-lg' htmlFor='UserName'><FaCircleUser /></label>
                <input className='w-full outline-0' type='text' placeholder='Full Name' name='UserName' id='UserName' required />
            </div>
            <div className='w-full flex items-center py-2 px-4 border-2 rounded-full border-gray-400 text-gray-500 gap-x-2'>
                <label className='text-lg' htmlFor='Email'><IoMail /></label>
                <input className='w-full outline-0' type='email' placeholder='Email Address' name='Email' id='Email' required/>
            </div>
            <div className='w-full flex items-center py-2 px-4 border-2 rounded-full border-gray-400 text-gray-500 gap-x-2'>
                 <label className='text-lg' htmlFor='Password'><FaLock /></label>
                <input className='w-full outline-0'
                 type='password' placeholder='Password' name='Password' id='Password' required/>
                 <span className='text-lg'><FaEye /></span>
            </div>
            <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-start gap-x-2 gap-y-1'>
                <input type='checkbox' id='terms_conditions' required/> 
                <label htmlFor='terms_conditions'>I accept the <span className='text-green-500'>Terms & Conditions</span></label>
            </div>
            <div className='w-full'>
                <button className='w-full font-semibold text-white bg-purple-500 py-2 rounded-full' type='submit'>Register Now</button>
            </div>

            <p>or sign up with</p>

            <div className='flex items-center justify-center gap-x-5'>
                <span className='border hover:bg-blue-700 hover:text-white p-1 rounded-full'><BiLogoLinkedin /></span>
                <span className='border hover:bg-blue-700 hover:text-white p-1 rounded-full'><RiTwitterXFill /></span>
                <span className='border hover:bg-blue-700 hover:text-white p-1 rounded-full'><TiSocialFacebook /></span>
                <span className='border hover:bg-blue-700 hover:text-white p-1 rounded-full'><AiOutlineGoogle /></span>
            </div>
            <p>Already have an account? <Link className='text-green-500' href={'/Login'}>Login here</Link> </p>
        </form>
    </section>
    </>
  )
}

export default page