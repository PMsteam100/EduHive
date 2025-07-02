import React from "react";
import logo from "../assets/EduHivelogoFooter.png";
import { RiHome2Fill, RiWifiFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import useLogout from '../../src/Components/Logout'; // Adjust the import path as necessary


const SideBar = () => {
     const logout = useLogout();


  return (
    <aside className=" h-full z-20 flex flex-col bg-blue-800 text-white p-6 absolute md:relative invisible md:visible">
      <img className="w-24" src={logo} alt="EduHive Logo" />
      
      <nav className="mt-6">
        <ul className="space-y-8">
          <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
            <RiHome2Fill className="mr-2 text-sm" />
            Dashboard
          </li>
          <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
            <RiWifiFill className="mr-2 text-sm" />
            Grade
          </li>
          <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
            <FaRegFileAlt className="mr-2 text-sm" />
            Assignment
          </li>
          <li className="flex text-sm items-center rounded-md hover:text-yellow-400 cursor-pointer">
            <MdOutlineAnalytics className="mr-2 text-sm" />
            Analytics
          </li>
        </ul>
      </nav>

      <p onClick={logout} className="mt-auto cursor-pointer hover:text-yellow-400"> <TbLogout className='inline-block' /> Log out</p>
    </aside>
  );
};

export default SideBar;
