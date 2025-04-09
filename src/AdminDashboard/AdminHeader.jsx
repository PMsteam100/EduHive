import React, { useState, useEffect, useRef } from 'react';
import { LuSearch } from "react-icons/lu";

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


const AdminHeader = () => {

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        setCurrentDate(formatDate(new Date()));
    }, []);




    const cards = [
        { title: "School Year", value: "2024/2025", bg: "bg-orange-400" },
        { title: "Semester", value: "Harmattan", bg: "bg-yellow-400" },
        { title: "Day remaining", value: "Period: 90 Days", bg: "bg-cyan-400" },
        { title: "Days remaining", value: "Year: 27 Days", bg: "bg-green-400" },
    ];


    return (
        <div>
           
            <div className='md:p-4 pl-4  '>
                 <form className="relative flex text-gray-400 focus-within:text-gray-600 mr-10 items-center ">
                     <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
                     <input type="text"
                        id="search" name="search"
                        placeholder="Search for student names" aria-labelledby="Search"
                        className="px-3 shadow-md font-Roboto w-[100%] text-base font-medium py-1 border-none ring-2 pl-10 rounded-full ring-gray-300 focus:ring-grey-500 focus:ring-2" />
                </form>
            </div>


            <div className=" grid grid-cols-2 md:grid-cols-4 justify-between gap-4 p-4 ">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.bg} md:p-4 md:pt-6 md:pb-6 p-4 rounded-lg shadow-md text-black`}
                    >
                        <p className="text-sm">{card.title}</p>
                        <p className="md:text-lg mt-4 text-sm font-bold">{card.value}</p>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default AdminHeader

