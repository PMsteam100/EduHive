import React, { useState, useEffect, useRef,useContext } from 'react';
import { LuSearch, LuSquareMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { RiHome2Fill, RiWifiFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { gsap } from 'gsap';
import logo from "../assets/EduHivelogoFooter.png";
import logo2 from "../assets/EduHivelogo.png";
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

const AdminHeader = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
     const logout = useLogout();

  useEffect(() => {
    setCurrentDate(formatDate(new Date()));
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const cards = [
    { title: "School Year", value: "2024/2025", bg: "bg-orange-400" },
    { title: "Semester", value: "Harmattan", bg: "bg-yellow-400" },
    { title: "Day remaining", value: "Period: 90 Days", bg: "bg-cyan-400" },
    { title: "Days remaining", value: "Year: 27 Days", bg: "bg-green-400" },
  ];



  return (
    <div className="p-4 relative">
      {/* === MOBILE NAV TOGGLER === */}
      <div className='visible md:invisible relative z-30 flex items-center justify-between'>
        <div className="text-3xl text-blue-900 ">
          <button onClick={toggleNavbar}>
            {isOpen ? <IoCloseSharp className='text-white' /> : <LuSquareMenu />}
          </button>
        </div>
        {!isOpen && (
          <div>
            <img className="w-15 mx-auto" src={logo2} alt="EduHive Logo" />
          </div>
        )}
      </div>

      {/* === MOBILE NAV MENU === */}
      {isOpen && (
        <div ref={dropdownRef} className="fixed top-0 left-0 w-screen h-screen z-20 bg-blue-800 text-white text-center p-4">
          <nav>
            <ul className="grid gap-6 mt-24 font-Roboto text-md items-center">
              <li><img className="w-24 mx-auto" src={logo} alt="EduHive Logo" /></li>
              <li className="flex items-center justify-center hover:text-yellow-400 cursor-pointer">
                <RiHome2Fill className="mr-2" /> Dashboard
              </li>
              <li className="flex items-center justify-center hover:text-yellow-400 cursor-pointer">
                <RiWifiFill className="mr-2" /> New Record
              </li>
              <li className="flex items-center justify-center hover:text-yellow-400 cursor-pointer">
                <FaRegFileAlt className="mr-2" /> Existing Record
              </li>
              <li className="flex items-center justify-center hover:text-yellow-400 cursor-pointer">
                <MdOutlineAnalytics className="mr-2" /> List of student
              </li>
              <li onClick={logout} className="mt-8 hover:text-yellow-400 cursor-pointer">
                <TbLogout className='inline-block' /> Log out
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* === DESKTOP SEARCH === */}
      <div className="hidden md:block">
        <form className="relative flex text-gray-400 focus-within:text-gray-600 items-center mb-4">
          <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for student names"
            className="px-3 shadow-md font-Roboto w-full text-base font-medium py-1 border-none ring-2 pl-10 rounded-full ring-gray-300 focus:ring-gray-500"
          />
        </form>
      </div>

      {/* === STAT CARDS === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} p-4 md:pt-6 md:pb-6 rounded-lg shadow-md text-black`}
          >
            <p className="text-sm">{card.title}</p>
            <p className="md:text-lg mt-4 text-sm font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHeader;
