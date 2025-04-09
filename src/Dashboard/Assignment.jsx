import React from 'react'
import { Card, CardContent } from "../Components/ui/card";
import { FaCalculator, FaBook, FaFlask, FaAtom } from "react-icons/fa";
import { PiAtom } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";
import { PiFediverseLogoDuotone } from "react-icons/pi";

const Assignment = () => {

  const assignmentSubjects = [
    { name: "Mathematics", icon: <FaCalculator />, percent: "59" },
    { name: "English Lesson", icon: <PiFediverseLogoDuotone />, percent: "10" },
    { name: "Physics", icon: <PiAtom />, percent: "59" },
    { name: "Chemistry", icon: <SiMoleculer />, percent: "89" },
  ];


  return (
    <div className='-z-0 relative'>
<section className="my-2 px-4 font-poppins ">
            <div className="flex justify-between">
              <h2 className="text-lg text-blue-800 font-bold mb-2">Your Assignments</h2>
              <p className='text-blue-800'>view more</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 z-0 relative">
              {assignmentSubjects.map((subject, index) => (
                <Card key={index}>
                  <CardContent >
                    <div className="text-5xl mb-2 text-yellow-500/50 pb-2">{subject.icon}</div>
                    <h3 className="text-sm font-semibold">{subject.name}</h3>
                    <p className="text-gray-400">Questions & answers </p>
                    <div className="flex justify-center gap-2 items-center">
                      <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
                        <div
                          className="bg-blue-800 h-1 rounded-full"
                          style={{ width: `${Math.floor(Math.random() * 5) + 50}%` }}
                        ></div>
                      </div>
                      <h3 className="text-xs font-semibold inline-block text-blue-800">{subject.percent}%</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
    </div>
  )
}

export default Assignment