// import React, { useRef } from 'react';
// import Grade from "./Grade";
// import Assignment from "./Assignment";
// import Calendar from "./Calender";
// import CalendarSm from "./CalenderSm";
// import SideBar from "./SideBar";
// import StudentDashHeader from './StudentDashHeader';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import StudentHeaderSmall from './StudentHeaderSmall';


// gsap.registerPlugin(useGSAP);

// const StudentDashboard = () => {

// const container = useRef();

//   useGSAP(() => {

//       // Animate '.button-element' with a bounce effect
//       gsap.from('.side-element', {
//         x: -100,
//         opacity: 0,
//         duration: 1.3,
//         stagger: 0.1,
//         ease: 'power3.inOut',
//       });

//       // Animate '.text-element' with a staggered sliding effect
//       gsap.from('.text-element', {
//           x: 100,
//           opacity: 0,
//           duration: 1.3,
//           stagger: 0.1,
//           ease: 'power3.inOut',
//       });
//   }, { scope: container });


//   return (
//     <div ref={container} className=" flex flex-row bg-gray-100 min-h-screen font-poppins ">
//       {/* Left Side bar */}
//       <div className='side-element w-[15%]'>
//           <SideBar />
//       </div>

//       {/* Right Main design */}
//       <div className="md:w-[85%] w-[100%] ">

//           <StudentHeaderSmall />
          
//           <div className='text-element -z-0 relative'>
//           <StudentDashHeader />
//           </div>

//         <div className='text-element -z-0 relative'>
//           <Assignment />
//         </div>
//         <div className='text-element z-0'>
//           <Grade />
//         </div>
        
//         {/* Show CalendarSm on large screens, hide on small screens */}
//         <div className="block md:hidden text-element">
//           <CalendarSm />
//         </div>

//         {/* Show Calendar only on small screens */}
//         <div className="hidden md:block text-element">
//           <Calendar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
