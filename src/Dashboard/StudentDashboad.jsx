import React, { useRef } from 'react';
import Grade from "./Grade";
import Assignment from "./Assignment";
import Calendar from "./Calender";
import SideBar from "./SideBar";
import StudentDashHeader from './StudentDashHeader';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

const StudentDashboard = () => {

const container = useRef();

  useGSAP(() => {

      // Animate '.button-element' with a bounce effect
      gsap.from('.side-element', {
        x: -100,
        opacity: 0,
        duration: 1.3,
        stagger: 0.1,
        ease: 'power3.inOut',
      });

      // Animate '.text-element' with a staggered sliding effect
      gsap.from('.text-element', {
          x: 100,
          opacity: 0,
          duration: 1.3,
          stagger: 0.1,
          ease: 'power3.inOut',
      });
  }, { scope: container });


  return (
    <div ref={container} className=" flex flex-row bg-gray-100 min-h-screen font-poppins ">
      {/* Left Side bar */}
      <div className='side-element w-[15%]'>
          <SideBar />
      </div>

      {/* Right Main design */}
      <div className="md:w-[85%] w-[100%] ">
          
          <div>
          <StudentDashHeader />
          </div>

        <div className='text-element -z-0 relative'>
          <Assignment />
        </div>
        <div className='text-element z-0'>
          <Grade />
        </div>
       
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
