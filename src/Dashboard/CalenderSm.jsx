import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
// import { Link } from 'react-router-dom'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];

const CalendarSm = () => {

    // For the date
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedDay, setSelectedDay] = useState(null);
    const startOfMonth = selectedDate.startOf('month').startOf('week');
    const endOfMonth = selectedDate.endOf('month').endOf('week');
    const days = [];
    let day = startOfMonth;
    while (day.isBefore(endOfMonth, 'day')) {
        days.push(day);
        day = day.add(1, 'day');
    }

    const handleMonthChange = (event) => {
        const month = months.indexOf(event.target.value);
        setSelectedDate(selectedDate.month(month));
        setSelectedDay(null); // Reset selected day when month changes
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

 
    return (

                <div className=' md:pl-10 md:pr-10 p-4 pb-10 relative md:absolute md:invisible visible'>

                    <div class='rounded-lg w-full '>
                        <div className="flex justify-between ">
                            <select value={months[selectedDate.month()]} onChange={handleMonthChange} className="md:px-4 md:py-1 rounded font-bold hover:border-black hover:border-1 mb-2">
                                {months.map((month) => (
                                    <option key={month} value={month}> {month} {selectedDate.format('YYYY')} </option>
                                ))}
                            </select>
                            <div>
                                <button className="px-4 py-2 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}>
                                    <FaLessThan />
                                </button>
                                <button className="px-4 py-2 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}>
                                    <FaGreaterThan />
                                </button>
                            </div>
                        </div>
                        <button className="px-4 md:px-2 py-1 border-1 border-amber-48 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.add(1, 'year'))}>
                            Next year
                        </button>
                        <button className="ml-2 px-4 md:px-2 py-1 border-1 border-amber-48 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.subtract(1, 'year'))}>
                            Previous Year
                        </button>
                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-3">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
                                <div key={dayName} className="text-center font-bold">
                                    {dayName}
                                </div>
                            ))}
                            {days.map((day) => (
                                <div
                                    key={day.format('DDMMYYYY')}
                                    className={`text-center p-2 rounded-lg cursor-pointer ${day.isSame(selectedDate, 'month') ? 'bg-blue-100' : 'bg-gray-100 text-gray-400'} ${day.isSame(dayjs(), 'day') ? 'border-2 border-gray-400' : ''} ${selectedDay && day.isSame(selectedDay, 'day') ? 'border-2 border-orange-225' : ''}`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day.format('D')}
                                </div>
                            ))}
                        </div>
                    </div>

                   
                </div>

    );
};

export default CalendarSm;
