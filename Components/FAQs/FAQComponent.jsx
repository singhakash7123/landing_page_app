'use client'
import React ,{useState} from 'react'
const FAQComponent = ({question,answer}) => {

     const[isOpen,setIsOpen] = useState(false)
  return (
    <div data-aos="fade-up" className='px-5 py-4 space-y-2 bg-white rounded-xl h-fit w-full md:max-w-3xl max-w-2xl lg:max-w-148 mx-auto break-inside-avoid mb-5'>
        <div className='flex items-center justify-between w-full '>
            <p className='text-xl font-semibold'>{question}</p>
            <button className='text-2xl' onClick={()=>{setIsOpen(!isOpen)}}>{isOpen?'-':'+'}</button>
        </div>
        {isOpen?<div>{answer}</div>:null}
    </div>
  )
}

export default FAQComponent