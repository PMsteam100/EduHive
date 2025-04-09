import React from 'react'
import CornerTop from '../assets/CornerTop.svg'
import CornerRight from '../assets/CornerRight.svg'
import Partner1 from '../assets/Partner1.svg'
import Partner2 from '../assets/Partner2.svg'

export default function Partner() {
    return (
        <div className='md:pl-12 md:pr-12 pl-6 pr-6 pb-12 md:pb-18 font-poppins'>
            <h1 className='text-center md:text-4xl text-2xl font-bold text-blue-800 mb-4'>Partners</h1>

            <div >
                <div className="relative bg-blue-50  p-2 rounded-lg  mx-auto text-center">
                    {/* Top Left Corner SVG */}
                    <div className="absolute top-0 left-0 w-16 h-16">
                        <img src={CornerTop} alt="" />
                    </div>

                    {/* Bottom Right Corner SVG */}
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                        <img src={CornerRight} className='object-cover' alt="" />
                    </div>

                    <div className='flex justify-evenly'>
                        <img src={Partner1} className='md:w-[14%] w-[30%]' alt="" />
                        <img src={Partner2} className='md:w-[14%] w-[30%]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

