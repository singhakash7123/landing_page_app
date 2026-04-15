import ServicesCard from "@/Components/Cards/ServicesCard";
import React from "react";
import ServicesData from '@/Data/Services.js'
import FAQs from "@/Components/FAQs";
import CustomerReviewSlider from "@/Components/Slider/CustomerReviewSlider";
const page = () => {
    const renderServices = ServicesData?.map((item)=>{
        return <ServicesCard key={item.id} icon={item.icon} heading={item.heading} paragraph={item.paragraph}/>
    })
  return (
    <main className="py-25 px-4">
      <div className=" max-w-2xl min-h-[60vh] mx-auto text-center flex flex-col items-center justify-center gap-y-4">
        <h2 data-aos="fade-down" className="text-4xl lg:text-5xl font-bold tracking-wide">GoSaas: Your All-in-One Solution for Business Success</h2>
        <p data-aos="fade-up" className="text-lg text-gray-500 max-w-xl tracking-wide">
          We offers a comprehensive platform with all the tools you need to
          streamline and grow your business efficiently.
        </p>
      </div> <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto gap-6 ">
        {renderServices}
      </div>
     
     <CustomerReviewSlider/>

      <FAQs/>
    </main>
  );
};

export default page;
