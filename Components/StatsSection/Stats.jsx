import React from 'react'

const Stats = ({number,text}) => {
  return (
     <div className="flex flex-col items-center ">
          <span className="text-5xl lg:text-7xl font-bold">{number}K</span>
          <span className="text-2xl lg:text-3xl font-semibold">{text}</span>
        </div>
  )
}

export default Stats