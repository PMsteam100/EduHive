// import React from 'react'

// const AddNewHeader = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default AddNewHeader

import React, { useState, useEffect, useRef } from 'react';
import { LuSearch } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { gsap } from 'gsap';
import { RiHome2Fill, RiWifiFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import logo from "../assets/EduHivelogoFooter.png";



const AddNewHeader = () => {

    const [isOpen, setIsOpen] = useState(false);
    //   const [isHovered, setIsHovered] = useState(false);
    const dropdownRef = useRef(null);
    //   const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };


    

    return (
        <div className='md:absolute relative'>
            <header className=" p-4 pt-2 rounded-lg md:grid md:grid-cols-3  flex justify-between  items-center">
                {/* small screen */}

                <div className="text-3xl text-blue-900 visible md:invisible z-20 md:absolute">
                    <button onClick={toggleNavbar}>{isOpen ? <IoCloseSharp className='text-white' /> : <LuSquareMenu />}</button>
                </div>

                {isOpen && (
                    <div ref={dropdownRef} className="top-0 left-0 absolute h-screen w-screen z-10 bg-blue-800 text-white text-center">

                    <nav>
                    <ul className="grid grid-rows-5 gap-6 justify-center mt-24 items-center font-Roboto text-md">

                              <li>
                               <img className="w-24" src={logo} alt="EduHive Logo" />
                              </li>

                              <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
                                <RiHome2Fill className="mr-2 text-sm" />
                                Dashboard
                              </li>
                              <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
                                <RiWifiFill className="mr-2 text-sm" />
                                New Record
                              </li>
                              <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
                                <FaRegFileAlt className="mr-2 text-sm" />
                                Existing Record
                              </li>
                              <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
                                <MdOutlineAnalytics className="mr-2 text-sm" />
                                List of student
                              </li>
                              <p className="mt-auto cursor-pointer hover:text-yellow-400"> <TbLogout className='inline-block' /> Log out</p>
                            </ul>
                          </nav>
                        
                    </div>
                )}

            


            </header>

          

            
        </div>
    )
}

export default AddNewHeader




