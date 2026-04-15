
import FeaturesCard from "../Cards/FeaturesCard";
import data from "@/Data/Features.js"
import React from 'react'

const index = () => {
 return(
        <div className="grid grid-flow-col gap-4 overflow-x-auto 
                auto-cols-[100%] 
                md:auto-cols-[50%] 
                lg:auto-cols-[33.33%] 
                max-w-7xl mx-auto px-5 items-stretch mt-10 scrollbar-hide " >
           {data?.map((item)=>{
            return <FeaturesCard key={item.id} heading={item.heading} paragraph={item.paragraph} icon={item.icon} color={item.color}/>
           })}
        </div>
    )
}

export default index



