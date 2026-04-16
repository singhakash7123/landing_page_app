import React from "react";
import Link from "next/link";
const BlogCard = () => {
  return (
    <article className="flex flex-col lg:flex-row items-center justify-center gap-x-12">
      <div className="w-full lg:max-w-sm aspect-square md:aspect-5/3 lg:aspect-3/4 bg-red-500 rounded-2xl"></div>
      <div className="w-full py-5">
        <div className="flex items-center gap-x-8 mb-3">
          <div data-aos='fade-right'>By Syful Khan</div>
          <div className='before:content-["Jun_25,_2025"]'></div>
          <div className='before:content-["0_Comments"]'></div>
        </div>
        <h3 data-aos='fade-right' className="text-4xl font-semibold">
          Enhancing User Experience with Custom Web Designs
        </h3>
        <p data-aos='fade-right' className="mt-5 ">
          Discover how custom web design can set your brand apart and create a
          more engaging user experience. This blog covers the benefits of
          personalized designs, from improving navigation to reinforcing brand
          identity.
        </p>
        <div className="mt-6">
          <Link data-aos='fade-up'
            className="py-2 px-5 rounded-2xl font-bold text-white bg-[#936dff]"
            href={"/Blog/BlogDetails"}
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
