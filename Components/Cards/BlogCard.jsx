import React from "react";
import Link from "next/link";
import Image from "next/image";
const BlogCard = ({heading,paragraph,image}) => {
  return (
    <article className="flex flex-col lg:flex-row items-center justify-center gap-x-12">
      <div className="w-full lg:max-w-sm aspect-square md:aspect-5/3 lg:aspect-3/4 bg-red-500 rounded-2xl relative">
      <Image src={image} alt="blogimage" fill className="object-cover" sizes="(max-width:768px):100vw 25vw "/>
      </div>
      <div className="w-full py-5">
        <div className="flex items-center gap-x-8 mb-3">
          <div data-aos='fade-right'>By Syful Khan</div>
          <div className='before:content-["Jun_25,_2025"]'></div>
          <div className='before:content-["0_Comments"]'></div>
        </div>
        <h3 data-aos='fade-right' className="text-4xl font-semibold">
         {heading}
        </h3>
        <p data-aos='fade-right' className="mt-5 ">
          {paragraph}
        </p>
        <div className="mt-6">
          <Link data-aos='fade-up'
            className="py-2 px-5 rounded-2xl font-bold text-white bg-[#936dff]"
            href={`/Blog/BlogDetails?heading=${encodeURIComponent(heading)}&image=${encodeURIComponent(image.src)}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
