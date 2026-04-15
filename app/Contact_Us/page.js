import Banner from "@/Components/Banner/HomeBanner";
import ContactCards from "@/Components/Cards/ContactCards";
import React from "react";
import contactData from '@/Data/Contact.js'
import FooterCTABanner from "@/Components/Banner/FooterCTABanner";
import FAQs from "@/Components/FAQs";

const Contact = () => {
  
    const renderCards = contactData.map((item,index)=>{
     return <ContactCards key={index} heading={item.heading} icon={item.icon} text={item.text} />
    })
  return (
    <>
      <Banner
        heading="Get in Touch with Us"
        paragraph={`Have questions or need support? Reach out to us,
    and we ll be happy to assist you!`}
      />
      <div className="w-full max-w-7xl mx-auto py-8 px-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 place-items-center">
          {renderCards}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-x-16  gap-y-12 py-25">
          <div className="w-full text-center lg:text-left ">
            <p data-aos="fade-down" className="uppercase text-xl font-light text-gray-500">any query <span className=""></span></p>
            <h1 data-aos="fade-down" className="font-semibold text-4xl lg:text-5xl mt-6">Feel free to fill out this form & contact us.</h1>
          </div>
          <form data-aos="fade-up" className=" grid grid-cols-2 gap-x-8 gap-y-6 " >
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="name">Full Name*</label>
              <input type="text" name="name" id="name" className="w-full border border-gray-500 rounded-3xl py-2 px-2" ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" className="w-full border border-gray-500 rounded-3xl py-2 px-2" ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="Cname">Company Name*</label>
              <input type="text" name="Cname" id="Cname" className="w-full border border-gray-500 rounded-3xl py-2 px-2" ></input>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <label htmlFor="mob">Mobile*</label>
              <input type="tel" name="mob" id="mob" className="w-full border border-gray-500 rounded-3xl py-2 px-2" ></input>
            </div>
            <div className="col-span-2">
               <label htmlFor="comment">Write Your Query*</label>
              <textarea type="text" name="comment" id="comment" className="w-full border border-gray-500 rounded-3xl min-h-50 p-2" ></textarea>
            </div>
            <div className="col-span-2">
              <button className="text-white font-bold bg-green-400 py-2 px-6 rounded-3xl ">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <FAQs/>
      <div><FooterCTABanner/></div>
    </>
  );
};

export default Contact;
