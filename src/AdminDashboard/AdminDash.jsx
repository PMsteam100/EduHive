import React, { useRef } from 'react';
import AdminHeader from '../AdminDashboard/AdminHeader'
import StudentAttendance from '../AdminDashboard/StudentAttendance'
import AdminSideBar from '../AdminDashboard/AdminSideBar'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const AdminDash = () => {

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
    <div ref={container} className="flex flex-row bg-gray-100 min-h-screen font-poppins">

      <div className='side-element w-[15%] absolute md:relative'>
        <AdminSideBar />
      </div>

      <div className="md:w-[85%] w-[100%]">

          {/* <AdminHeaderSmall /> */}
          
          <AdminHeader />

        <div className='text-element'>
          <StudentAttendance />
        </div>
      </div>

    </div>
  )
}

export default AdminDash