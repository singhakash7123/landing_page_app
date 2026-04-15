import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
const PricingDetails = 
[
    {
        id:1,
        plan:"Free",
        for:"Free for small team",
        price:0,
       features:
       [
           {text:"Unlimited cards",id:1,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Up to 10 boards per", id:2,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited Power-Ups per board", id:3,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited storage (10MB/file)", id:4,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        {text:"Unlimited activity log", id:5,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        {text:"Assignee and due dates", id:6,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        {text:"Assignee and due dates", id:7,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        
       ]
        
    },
    {
        id:2,
        plan:"Standard",
        for:"Most popular deal",
        price:10,
       features:
       [
           {text:"Unlimited cards",id:1,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Up to 10 boards per", id:2,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited Power-Ups per board", id:3,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited storage (10MB/file)", id:4,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited activity log", id:5,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Assignee and due dates", id:6,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        {text:"Assignee and due dates", id:7,symbol:<IoMdCloseCircle className='text-green-500 bg-white text-2xl'/>},
        
       ]
        
    },
    {
        id:3,
        plan:"Premium",
        for:"For your large team",
        price:20,
       features:
       [
           {text:"Unlimited cards",id:1,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Up to 10 boards per", id:2,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited Power-Ups per board", id:3,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited storage (10MB/file)", id:4,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Unlimited activity log", id:5,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Assignee and due dates", id:6,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        {text:"Assignee and due dates", id:7,symbol:<FaCheckCircle className='text-green-500 bg-white text-2xl' />},
        
       ]
        
    },
] 
export default PricingDetails ;