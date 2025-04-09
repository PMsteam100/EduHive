import React from 'react'
import AdminImage from '../assets/Empower.png'

const Administrator = () => {
   return (
      <div className='md:pl-12 md:pr-12 pl-6 pr-6 pb-12 md:pb-18 font-poppins'>
      <div className='text-center'>
          <h1 className='md:text-4xl text-2xl font-bold text-blue-800 mb-4'>Meet the Administrator</h1>
      </div>
          <div className='grid md:grid-cols-2 justify-center items-center md:mt-8 mt-4'>
            <div>
              <h1 className='md:text-4xl text-xl font-semibold'>Empowering School</h1>
              <p className='mt-4 md:pr-[16%] md:text-base text-sm'>The administrators ensure smooth school operations, foster growth, support educators, manage resources, and create opportunities for student success.</p>
              <div className='mt-4'>
                <button className="px-6 py-1 bg-blue-800 font-Roboto text-base font-medium rounded-lg  text-white   hover:bg-blue-800/5 border-2 border-blue-800 hover:text-blue-800">
                Contact
                            </button>
              </div>
            </div>
            <div className='flex justify-center md:mt-0 mt-4'>
              <img className='w-100  object-cover ' src={AdminImage} alt="" />
            </div>
          </div>
      </div>
    );
  };

export default Administrator