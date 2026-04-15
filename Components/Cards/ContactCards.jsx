import React from 'react'
const ContactCards = ({heading,icon,text}) => {
  return (
    <div data-aos="fade-up" className='p-10 w-full max-w-2xl bg-[#f2fcf7] rounded-lg  '>
        <span className='text-5xl text-[#936dff]'>{icon}</span>
        <h3 className='mt-5 mb-5 text-3xl '>{heading}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ContactCards