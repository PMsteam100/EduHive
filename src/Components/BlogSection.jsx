import React from "react";
import BlogPost1 from '../assets/Blogpost1.png'
import BlogPost2 from '../assets/Blogpost2.png'
import BlogPost3 from '../assets/Blogpost3.png'


const blogPosts = [
  {
    image: [BlogPost1],
    category: "About us",
    date: "25 Apr. 2024",
    title: "Unlock your potential at Eduhive.",
    description: "Eduhive is a digital ID system designed to efficiently manage student records and optimize school administration.",
  },
  {
    image: [BlogPost2],
    category: "Guide",
    date: "25 Apr. 2024",
    title: "Ready to elevate your journey with Eduhive.",
    description: "Explore advanced features like data analytics, customizable reporting, and integration capabilities.",
  },
  {
    image: [BlogPost3],
    category: "Testimonials",
    date: "25 Apr. 2024",
    title: "Eduhive, changed way I approach my goal",
    description: "Eduhive truly enhances efficiency and helps us focus more on delivering quality education.",
  },
];

const BlogCard = ({ image, category, date, title, description }) => {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg overflow-hidden max-w-sm">
      <div className=" overflow-hidden"><img src={image} alt={title} className="w-full h-48 object-cover hover:scale-[1.2] transition delay-150 duration-300 ease-in-out" /></div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-md mr-2 text-xs font-semibold">{category}</span>
          <span>{date}</span>
        </div>
        <h6 className="font-bold text-gray-900 mb-2 text-sm">{title}</h6>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:text-blue-800 border-2 border-blue-800 hover:bg-blue-800/5">Read more</button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="md:pl-12 md:pr-12 pl-6 pr-6 pb-12 md:pb-18 font-poppins">
      <div className="text-center">
        <h2 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4">Latest Blog Posts</h2>
        <p className="text-gray-600 mb-8 md:px-[20%]">Interactive group-based workshops for both individuals and organizations, available as single sessions or series.</p>
        
      </div>
      <div className="grid md:grid-cols-3 gap-10 justify-center">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
