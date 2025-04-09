import React, { useState, useEffect, useRef } from 'react';
import { LuSearch } from "react-icons/lu";
import Student1 from '../assets/Student1.jpg'
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import academicgrad from '../assets/Academigrad.png'
import { IoCloseSharp } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { gsap } from 'gsap';
import { RiHome2Fill, RiWifiFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import logo from "../assets/EduHivelogoFooter.png";

const StudentHeaderSmall = () => {
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
    <div className=" p-4 pt-2 rounded-lg md:invisible visible md:absolute relative  flex justify-between  items-center">
 {/* small screen */}

                <div className="text-3xl text-blue-800 visible md:invisible z-40 md:absolute relative">
                    <button onClick={toggleNavbar}>{isOpen ? <IoCloseSharp className=' text-white' /> : <LuSquareMenu />}</button>
                </div>

                {isOpen && (
                    <div ref={dropdownRef} className="top-0 left-0 absolute h-screen w-screen z-20 text-white bg-blue-800 text-center">

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

                 <div className='md:invisible visible md:absolute relative'>
                                    <div className="text-black flex md:justify-evenly ">
                                        <div className="flex items-center gap-2">
                                            <div><img className="md:h-10 md:w-10 h-6 w-6 object-cover rounded-full" src={Student1} alt="" /></div>
                                            <div >
                                                <h6 className="text-xs">Sonia Doe</h6>
                                                <span className="text-xs">300L</span>
                                            </div>
                                        </div>
                                        <div className=" flex items-center md:gap-4">
                                            <div className="relative">
                                                <IoNotificationsOutline className="md:text-3xl text-2xl" />
                                                <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs rounded-full p-1"></span>
                                            </div>
                                            <RiSettingsLine className="md:text-3xl text-2xl" />
                                        </div>
                                    </div>
                
                
                                </div>

    </div>
  )
}

export default StudentHeaderSmall