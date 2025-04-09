import React, { useRef } from 'react';
import HeroImage from '../assets/HeroImage.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom'

gsap.registerPlugin(useGSAP);

const Hero = () => {

  const container = useRef();

  useGSAP(() => {
      // Animate '.hero-element' with a fade-in and slide-up effect
      gsap.from('.hero-element', {
          opacity: 0,
          y: 50,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power3.out',
      });

      // Animate '.button-element' with a bounce effect
      gsap.from('.image-element', {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          ease: 'bounce.out',
          delay: 0.5,
      });

      // Animate '.text-element' with a staggered sliding effect
      gsap.from('.text-element', {
          y: 100,
          opacity: 0,
          duration: 1.3,
          stagger: 0.1,
          ease: 'power3.inOut',
      });
  }, { scope: container });



  return (
    <div ref={container} className='grid md:grid-cols-2 justify-center items-center md:pl-16 md:pr-16 pr-6 pl-6 pt-20 md:pb-16 pb-12 font-poppins'>
      <div>
        <h1 className=' md:text-5xl/16 text-3xl/12 font-bold hero-element'>Your Digital <br/>
          <span className='text-blue-800'>Hub for Student</span> <br /> Records</h1>
        <p className='mt-4 text-sm md:text-base text-element'>EduHive is a student record management platform that simplifies data organization, enhances accessibility, and ensures secure storage for academic institutions and students.</p>
        <div className='mt-4 flex text-element'>
          <button className="md:px-3 px-3 py-1 bg-blue-800 font-Roboto md:text-base text-xs font-medium rounded-lg  text-white hover:bg-white border-2 border-blue-800 hover:text-blue-800">
          <Link to="/Login">Login as a Student</Link>
                      </button>
          <button className="md:px-3 px-3 py-1 ml-2 bg-blue-100  font-Roboto md:text-base text-xs font-medium rounded-lg  text-black hover:bg-blue-800 border-2 border-blue-200 hover:text-white">
          <Link to="/Login">Login as Admin</Link>
                      </button>
        </div>
      </div>
      <div className='mt-6 md:mt-0 image-element'>
        <img className='w-[100%] object-cover ' src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero