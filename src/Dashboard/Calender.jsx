// import { useState } from "react";
// import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectLabel } from "../Components/ui/select";

// const Calender = () => {
//     const [selectedDate, setSelectedDate] = useState("Nov 26th 2024");
  
//     const schedules = {
//       "Nov 26th 2024": [
//         { time: "08:00am - 11:00am", subject: "Further Mathematics" },
//         { time: "11:00am - 12:00pm", subject: "Biology" },
//         { time: "12:00pm - 01:00pm", subject: "Break Period" },
//         { time: "01:00pm - 03:00pm", subject: "Economics" },
//         { time: "03:00pm - 04:00pm", subject: "Biology 2" },
//       ],
//       "Nov 27th 2024": [
//         { time: "09:00am - 10:00am", subject: "Physics" },
//         { time: "10:00am - 12:00pm", subject: "Chemistry" },
//         { time: "01:00pm - 02:00pm", subject: "History" },
//       ],
//       "Nov 28th 2024": [
//         { time: "08:30am - 10:30am", subject: "Mathematics" },
//         { time: "11:00am - 12:30pm", subject: "English" },
//         { time: "02:00pm - 04:00pm", subject: "Computer Science" },
//       ],
//     };
//   return (
//     <div className="p-4 pt-0 invisible md:visible absolute md:relative">
//     <section >
//           <div className="flex justify-between">
//             <h2 className="text-lg text-blue-800 font-bold mb-2">Calendar</h2>
//             <div>
//               <Select onValueChange={setSelectedDate} defaultValue={selectedDate}>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a date" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {Object.keys(schedules).map((date) => (
//                     <SelectItem key={date} value={date}>
//                       {date}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className=" bg-white p-4 pt-2 rounded-lg shadow flex justify-between">
//             {schedules[selectedDate].map((event, index) => (
//               <div key={index} className="border-b py-2">
//                 <p className="text-gray-700 font-medium">{event.time}</p>
//                 <p className="text-gray-500 text-sm">{event.subject}</p>
//               </div>
//             ))}
//           </div>
//         </section>

        

//     </div>
//   )
// }

// export default Calender

import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "../Components/ui/select";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("Nov 26th 2024");
  const [calendarDate, setCalendarDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);

  const schedules = {
    "Nov 26th 2024": [
      { time: "08:00am - 11:00am", subject: "Further Mathematics" },
      { time: "11:00am - 12:00pm", subject: "Biology" },
      { time: "12:00pm - 01:00pm", subject: "Break Period" },
      { time: "01:00pm - 03:00pm", subject: "Economics" },
      { time: "03:00pm - 04:00pm", subject: "Biology 2" },
    ],
    "Nov 27th 2024": [
      { time: "09:00am - 10:00am", subject: "Physics" },
      { time: "10:00am - 12:00pm", subject: "Chemistry" },
      { time: "01:00pm - 02:00pm", subject: "History" },
    ],
    "Nov 28th 2024": [
      { time: "08:30am - 10:30am", subject: "Mathematics" },
      { time: "11:00am - 12:30pm", subject: "English" },
      { time: "02:00pm - 04:00pm", subject: "Computer Science" },
    ],
  };

  const startOfMonth = calendarDate.startOf('month').startOf('week');
  const endOfMonth = calendarDate.endOf('month').endOf('week');
  const days = [];
  let day = startOfMonth;
  while (day.isBefore(endOfMonth, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const handleMonthChange = (event) => {
    const month = months.indexOf(event.target.value);
    setCalendarDate(calendarDate.month(month));
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="p-4 relative">
      {/* === DESKTOP VIEW === */}
      <div className="hidden md:block">
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg text-blue-800 font-bold">Calendar</h2>
            <div className="w-60">
              <Select onValueChange={setSelectedDate} defaultValue={selectedDate}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a date" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(schedules).map((date) => (
                    <SelectItem key={date} value={date}>
                      {date}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-white p-4 pt-2 rounded-lg shadow">
            {schedules[selectedDate].map((event, index) => (
              <div key={index} className="border-b py-2">
                <p className="text-gray-700 font-medium">{event.time}</p>
                <p className="text-gray-500 text-sm">{event.subject}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* === MOBILE VIEW === */}
      <div className="md:hidden block">
        <div className="rounded-lg w-full">
          <div className="flex justify-between items-center mb-2">
            <select
              value={months[calendarDate.month()]}
              onChange={handleMonthChange}
              className="px-4 py-1 rounded font-bold border border-gray-300"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month} {calendarDate.format('YYYY')}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <button onClick={() => setCalendarDate(calendarDate.subtract(1, 'month'))}>
                <FaLessThan />
              </button>
              <button onClick={() => setCalendarDate(calendarDate.add(1, 'month'))}>
                <FaGreaterThan />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <button onClick={() => setCalendarDate(calendarDate.add(1, 'year'))} className="mr-2 border p-1 text-sm">Next Year</button>
            <button onClick={() => setCalendarDate(calendarDate.subtract(1, 'year'))} className="border p-1 text-sm">Previous Year</button>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
              <div key={dayName} className="text-center font-bold">
                {dayName}
              </div>
            ))}
            {days.map((day) => (
              <div
                key={day.format('DDMMYYYY')}
                className={`text-center p-2 rounded-lg cursor-pointer ${
                  day.isSame(calendarDate, 'month') ? 'bg-blue-100' : 'bg-gray-100 text-gray-400'
                } ${day.isSame(dayjs(), 'day') ? 'border-2 border-gray-400' : ''} ${
                  selectedDay && day.isSame(selectedDay, 'day') ? 'border-2 border-orange-500' : ''
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day.format('D')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
