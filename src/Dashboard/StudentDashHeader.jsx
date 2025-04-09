import React, { useState, useEffect, useRef } from 'react';
import { LuSearch } from "react-icons/lu";
import Student1 from '../assets/Student1.jpg'
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import academicgrad from '../assets/Academigrad.png';

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return `${day}${getDaySuffix(day)}, ${month} ${year}`;
};


const StudentDashHeader = () => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        setCurrentDate(formatDate(new Date()));
    }, []);


    return (
        <div>
            <header className=" p-4 pt-2 md:p-4 md:pt-2 rounded-lg md:grid md:grid-cols-3  flex justify-between  items-center">
               
                <div className="col-span-2 invisible md:visible absolute md:relative">
                    <form className="relative flex text-gray-400 focus-within:text-gray-600 mr-10 items-center ">
                        <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
                        <input type="text"
                            id="search" name="search"
                            placeholder="Search" aria-labelledby="Search"
                            className="px-3 font-Roboto w-[150%] text-base font-medium py-1 border-none ring-2 pl-10 rounded-full ring-gray-300 focus:ring-grey-500 focus:ring-2" />
                    </form>
                </div>

                <div className='invisible md:visible absolute md:relative'>
                    <div className="text-black flex md:justify-evenly ">
                        <div className="flex items-center gap-2">
                            <div><img className="md:h-10 md:w-10 h-6 w-6 object-cover rounded-full" src={Student1} alt="" /></div>
                            <div className=' invisible md:visible absolute md:relative'>
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


            </header>



            <div className="p-4 pt-0 pb-0">

                <div className="bg-blue-800 text-white md:p-10 p-4 md:pt-1 md:pb-1 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-300 ">{currentDate}</p>
                        <h1 className="md:text-4xl text-2xl font-semibold md:pt-2 md:pb-2">Welcome Sonia!</h1>
                        <p className="text-xs text-gray-300 ">Explore, learn, and discover something new.</p>
                    </div>
                    <img src={academicgrad} className="md:w-30 w-18 object-cover" alt="" />
                </div>
            </div>
        </div>
    )
}

export default StudentDashHeader