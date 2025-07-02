import React, { useState, useEffect, useRef } from 'react';
import { LuSearch, LuSquareMenu } from "react-icons/lu";
import { IoNotificationsOutline, IoCloseSharp } from "react-icons/io5";
import { RiSettingsLine, RiHome2Fill, RiWifiFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { gsap } from 'gsap';
import Student1 from '../assets/Student1.jpg';
import academicgrad from '../assets/Academigrad.png';
import logo from "../assets/EduHivelogoFooter.png";
import useLogout from '../Components/Logout';


const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    return `${day}${getDaySuffix(day)}, ${month} ${year}`;
};

const StudentDashHeader = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
     const logout = useLogout();

    useEffect(() => {
        setCurrentDate(formatDate(new Date()));
    }, []);

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
    }, [isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Header */}
            <header className="p-4 pt-2 rounded-lg flex justify-between items-center relative z-50">
                {/* Search Bar (Desktop Only) */}
                <div className="hidden md:block w-1/2">
                    <form className="relative flex text-gray-400 focus-within:text-gray-600">
                        <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
                        <input type="text"
                            placeholder="Search"
                            className="w-full font-Roboto text-base font-medium py-1 border-none ring-2 pl-10 rounded-full ring-gray-300 focus:ring-gray-500" />
                    </form>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-3xl text-blue-800 z-50">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <IoCloseSharp className='text-white' /> : <LuSquareMenu />}
                    </button>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-4 text-black">
                    <div className="flex items-center gap-2">
                        <img className="h-10 w-10 object-cover rounded-full" src={Student1} alt="Student" />
                        <div className="hidden md:block">
                            <h6 className="text-xs">Sonia Doe</h6>
                            <span className="text-xs">300L</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <IoNotificationsOutline className="text-2xl md:text-3xl" />
                            <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs rounded-full p-1"></span>
                        </div>
                        <RiSettingsLine className="text-2xl md:text-3xl" />
                    </div>
                </div>
            </header>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div ref={dropdownRef} className="fixed inset-0 bg-blue-800 text-white z-40 text-center h-screen p-4">
                    <ul className="grid gap-6 mt-24 font-Roboto text-md">
                        <li><img className="w-24 mx-auto" src={logo} alt="EduHive Logo" /></li>
                        <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer"><RiHome2Fill /> Dashboard</li>
                        <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer"><RiWifiFill /> New Record</li>
                        <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer"><FaRegFileAlt /> Existing Record</li>
                        <li className="flex justify-center items-center gap-2 hover:text-yellow-400 cursor-pointer"><MdOutlineAnalytics /> List of student</li>
                        <li onClick={logout} className="mt-10 hover:text-yellow-400 cursor-pointer"><TbLogout className="inline-block" /> Log out</li>
                    </ul>
                </div>
            )}

            {/* Welcome Banner */}
            <div className="p-4 pt-0 pb-0">
                <div className="bg-blue-800 text-white p-4 md:p-10 md:pt-1 md:pb-1 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-300">{currentDate}</p>
                        <h1 className="text-2xl md:text-4xl font-semibold py-2">Welcome Sonia!</h1>
                        <p className="text-xs text-gray-300">Explore, learn, and discover something new.</p>
                    </div>
                    <img src={academicgrad} className="w-20 md:w-32 object-cover" alt="Academic" />
                </div>
            </div>
        </div>
    );
};

export default StudentDashHeader;
