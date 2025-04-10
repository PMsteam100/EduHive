import React, { useState, useEffect, useRef } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../assets/EduHivelogo.png'
import { Link } from 'react-router-dom'

gsap.registerPlugin(useGSAP);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

 const container = useRef();

  useGSAP(() => {

      // Animate '.Header-element' with a slide-in from the left
      gsap.from('.Header-element', {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
      });

  }, { scope: container });


    return (
        <div ref={container} className="absolute w-full ">
            <nav className="Header-element h-16 p-4 pl-10 pr-10 md:pl-16 md:pr-16  w-full justify-between font-poppins  text-center flex ">
                <div className='flex items-center'>
                    <Link to="/"><img className='w-26' src={logo} alt="" /></Link>
                </div>


                {/* small screen */}

                <div className="text-3xl text-blue-900 visible md:invisible z-20 md:absolute">
                    <button onClick={toggleNavbar}>{isOpen ? <IoCloseSharp className='text-white' /> : <LuSquareMenu />}</button>
                </div>

                {isOpen && (
                    <div ref={dropdownRef} className="top-0 left-0 absolute h-screen w-screen z-10 bg-blue-800 text-center">
                        <ul className="grid grid-rows-5 gap-6 justify-center mt-35 items-center text-white text-md">
                            <li>
                                Product
                            </li>
                            <li>

                                Resource
                            </li>
                                <li>
                                    Support
                                </li>

                    <button className="px-6 py-1 hover:bg-blue-800 font-Roboto text-base font-medium rounded-lg  hover:text-white text-blue-800 bg-white border-2 border-blue-800 ">
                        Sign up
                    </button>
                        </ul>
                    </div>
                )}




                {/* medium and large screens */}

                <div className="invisible md:visible absolute md:relative flex gap-10 items-center ">
                    <ul className="flex gap-10  font-Roboto text-md font-semibold">
                        <li className='hover:text-blue-800'>
                            Product
                        </li>
                        <li className='hover:text-blue-800'>
                            Resource
                        </li>
                        <li className='hover:text-blue-800'>
                            Support
                        </li>
                    </ul>
                </div>

                <div className='invisible md:visible absolute md:relative'>
                    <button className="px-6 py-1 bg-blue-800 font-Roboto text-base font-medium rounded-lg  text-white hover:text-blue-800 hover:bg-blue-800/5 border-2 border-blue-800 hover:text-amber-48">
                        Sign up
                    </button>
                </div>
            </nav>


        </div>
    );
};

export default Header;