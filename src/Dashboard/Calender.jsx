import { useState } from "react";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectLabel } from "../Components/ui/select";

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState("Nov 26th 2024");
  
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
  return (
    <div className="p-4 pt-0 invisible md:visible absolute md:relative">
    <section >
          <div className="flex justify-between">
            <h2 className="text-lg text-blue-800 font-bold mb-2">Calendar</h2>
            <div>
              <Select onValueChange={setSelectedDate} defaultValue={selectedDate}>
                <SelectTrigger className="w-full">
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

          <div className=" bg-white p-4 pt-2 rounded-lg shadow flex justify-between">
            {schedules[selectedDate].map((event, index) => (
              <div key={index} className="border-b py-2">
                <p className="text-gray-700 font-medium">{event.time}</p>
                <p className="text-gray-500 text-sm">{event.subject}</p>
              </div>
            ))}
          </div>
        </section>

        

    </div>
  )
}

export default Calender