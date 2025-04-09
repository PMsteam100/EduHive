import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Customer1 from '../assets/Customer1.jpg'
import Customer2 from '../assets/Customer2.jpg'
import Customer3 from '../assets/Customer3.jpg'


const testimonials = [
  {
    name: "Duke Emeka",
    role: "Student",
    image: [Customer1],
    rating: 5,
    feedback: "Using Eduhive has been a delightful experience. The platform is intuitive and helps us access our records with ease."
  },
  {
    name: "James Ali",
    role: "Parent",
    image: [Customer2],
    rating: 5,
    feedback: "The secure system ensures our children’s information is protected, while making record management a breeze for everyone involved."
  },
  {
    name: "Benson Mike",
    role: "Teacher",
    image: [Customer3],
    rating: 5,
    feedback: "We’ve seen remarkable improvements in how we handle student records with Eduhive. It’s dependable, easy to use."
  },
  {
    name: "Benson Mike",
    role: "Teacher",
    image: [Customer3],
    rating: 5,
    feedback: "We’ve seen remarkable improvements in how we handle student records with Eduhive. It’s dependable, easy to use."
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-2">
      {Array.from({ length: rating }, (_, index) => (
        <span key={index} className="text-yellow-500">★</span>
      ))}
    </div>
  );
};

const CustomerCard = ({ name, role, image, rating, feedback }) => {
  return (
    <div className="bg-blue-50 shadow-lg rounded-lg p-6  max-w-sm mx-auto">
      <StarRating rating={rating} />
      <p className="text-gray-700 mb-4">"{feedback}"</p>
      <div className="flex mt-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-3 object-cover" />
        <div>
          <h4 className="text-gray-900 font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  return (
    <div className="md:pl-8 md:pr-8 pl-6 pr-6 pb-10 font-poppins">
      <div className="text-center">
        <h2 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4">What our customers say</h2>
        <p className="text-gray-600 mb-8 md:px-[20%]">Eduhive transforms record management, ensuring efficiency, security, and seamless collaboration. Our customers trust and love it.</p>
        
      </div>
      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
       
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full max-w-6xl mx-auto md:h-70 h-80"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <CustomerCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
