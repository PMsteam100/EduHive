import React from 'react'
import CornerTop from '../assets/CornerTop.svg'
import CornerRight from '../assets/CornerRight.svg'

const ChoosWorks = () => {
  return (
    <div className='md:pl-12 md:pr-12  pl-6 pr-6 pb-12 md:pb-16 font-poppins'>
      <div className="relative bg-blue-50 md:p-10 p-4 rounded-lg  mx-auto text-center">
        {/* Top Left Corner SVG */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <img src={CornerTop} alt="" />
        </div>

        {/* Bottom Right Corner SVG */}
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <img src={CornerRight} className='object-cover' alt="" />
        </div>

        <h2 className="md:text-4xl text-2xl font-bold text-blue-800 mb-4">Why choose us?</h2>
        <p className="md:text-lg font-semibold text-gray-700 mt-2">
          Secure, accessible, and reliable records with Eduhive platform
        </p>
        <p className="text-gray-600 md:text-base text-sm mt-4 md:px-[10%]">
          Eduhive is a platform that seeks to provide an efficient system to manage student records
          and improve overall administration to streamline operations and enhance educational outcomes.
          It’s a digital ID system created to help manage student records and improve school administration.
        </p>
        <button className="mt-6 bg-blue-800 text-white px-6 md:py-2 py-1 rounded-lg hover:bg-blue-800/5 border-2 border-blue-800 hover:text-blue-800 ">
          Read more
        </button>
      </div>
    </div>
  )
}

export default ChoosWorks