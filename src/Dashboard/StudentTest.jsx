// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";

// const StudentAttendance = () => {
//     const [students, setStudents] = useState([
//         { number: "01", name: "Sonia Doe", id: "2023/0162", progress: 100, faculty: "Pure and Applied Sciences", cgpa: 4.0, department: "Akinola Sonia Ruth", registration: "Not completed" },
//         { number: "02", name: "Fadare Gold", id: "2023/11032", progress: 90 },
//         { number: "03", name: "Akere Iyabo", id: "2023/1132", progress: 75 },
//         { number: "04", name: "Ngozi Efe", id: "2023/2132", progress: 99 },
//         { number: "05", name: "Janet Tony", id: "2023/0132", progress: 20 },
//         { number: "06", name: "Nneka Udoh", id: "2023/0330", progress: 75 },
//         { number: "07", name: "Princess Akinola", id: "2023/2102", progress: 90 },
//         { number: "08", name: "Edet Edu Yaaboh", id: "2023/0012", progress: 50 },
//     ]);
//     const [selectedStudent, setSelectedStudent] = useState(null);

//     const handleStudentClick = (student) => {
//         setSelectedStudent(student);
//     };

//     return (
//         <div className="relative">

//             <div >
//                 <div className="p-4 shadow-md rounded-lg">
//                     <h2 className="text-lg font-semibold mb-4">Student Attendance</h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full border-collapse">
//                             <thead>
//                                 <tr className="bg-blue-800 text-white rounded-lg">
//                                     <th className="p-3 rounded-l-lg text-left">Number</th>
//                                     <th className="p-3 text-left">Name</th>
//                                     <th className="p-3 text-left">ID</th>
//                                     <th className="p-3 rounded-r-lg text-left">Progress</th>
//                                 </tr>
//                             </thead>

//                             <div className="relative">
//                                 {selectedStudent && (
//                                     <div className="fixed inset-0 bg-white/5 bg-opacity-50 z-50">
//                                         <div className="bg-white p-6 rounded-lg shadow-lg w-full relative z-50 mt-30">
//                                             <button onClick={() => setSelectedStudent(null)} className="absolute top-2 right-4 text-lg font-bold">&times;</button>
//                                             <div className="flex gap-6">
//                                                 <img src="/mnt/data/image.png" alt="Student" className="w-32 h-32 rounded-lg object-cover" />
//                                                 <div>
//                                                     <h2 className="text-2xl font-semibold">{selectedStudent.name}</h2>
//                                                     <p><strong>Matric Number:</strong> {selectedStudent.id}</p>
//                                                     <p><strong>Faculty:</strong> {selectedStudent.faculty}</p>
//                                                     <p><strong>Department:</strong> {selectedStudent.department}</p>
//                                                     <p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>
//                                                     <p><strong>School Registration Progress:</strong> <span className="text-red-500">{selectedStudent.registration}</span></p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>


//                             <tbody className={selectedStudent ? "blur-sm" : ""}>
//                                 {students.map((student, index) => (
//                                     <tr
//                                         key={index}
//                                         className="border-b hover:bg-white hover:shadow rounded-lg cursor-pointer"
//                                         onClick={() => handleStudentClick(student)}
//                                     >
//                                         <td className="p-3 rounded-l-lg">{student.number}</td>
//                                         <td className="p-3 flex items-center gap-2">
//                                             <FaUser className="text-yellow-500" />
//                                             {student.name}
//                                         </td>
//                                         <td className="p-4">{student.id}</td>
//                                         <td className="p-3">
//                                             <div className="flex items-center gap-2">
//                                                 <div className="w-full rounded-full h-2.5 relative bg-gray-200">
//                                                     <div
//                                                         className="bg-blue-800 h-2.5 rounded-full transition-all duration-300"
//                                                         style={{ width: `${student.progress}%` }}
//                                                     ></div>
//                                                 </div>
//                                                 <span>{student.progress}%</span>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentAttendance;


// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";

// const StudentAttendance = () => {
//   const [students, setStudents] = useState([
//     { number: "01", name: "Sonia Doe", id: "2023/0162", progress: 100, faculty: "Pure and Applied Sciences", cgpa: 4.0, department: "Akinola Sonia Ruth", registration: "Not completed" },
//     { number: "02", name: "Fadare Gold", id: "2023/11032", progress: 90 },
//     { number: "03", name: "Akere Iyabo", id: "2023/1132", progress: 75 },
//     { number: "04", name: "Ngozi Efe", id: "2023/2132", progress: 99 },
//     { number: "05", name: "Janet Tony", id: "2023/0132", progress: 20 },
//     { number: "06", name: "Nneka Udoh", id: "2023/0330", progress: 75 },
//     { number: "07", name: "Princess Akinola", id: "2023/2102", progress: 90 },
//     { number: "08", name: "Edet Edu Yaaboh", id: "2023/0012", progress: 50 },
//   ]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleStudentClick = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleCloseModal = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <div className="relative">
      
//       <div >
//         <div className="p-4 shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold mb-4">Student Attendance</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-800 text-white rounded-lg">
//                   <th className="p-3 rounded-l-lg text-left">Number</th>
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">ID</th>
//                   <th className="p-3 rounded-r-lg text-left">Progress</th>
//                 </tr>
//               </thead>
//               {selectedStudent && (
//         <div 
//           className="fixed inset-0 bg-white/5 bg-opacity-50 z-50"
//           onClick={handleCloseModal}
//         >
//           <div 
//             className="bg-white p-6 rounded-lg shadow-lg w-full relative z-50 mt-30"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             <button onClick={handleCloseModal} className="absolute top-2 right-4 text-lg font-bold">&times;</button>
//             <div className="flex gap-6">
//               <img src="/mnt/data/image.png" alt="Student" className="w-32 h-32 rounded-lg object-cover" />
//               <div>
//                 <h2 className="text-2xl font-semibold">{selectedStudent.name}</h2>
//                 <p><strong>Matric Number:</strong> {selectedStudent.id}</p>
//                 <p><strong>Faculty:</strong> {selectedStudent.faculty}</p>
//                 <p><strong>Department:</strong> {selectedStudent.department}</p>
//                 <p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>
//                 <p><strong>School Registration Progress:</strong> <span className="text-red-500">{selectedStudent.registration}</span></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//               <tbody className={selectedStudent ? "blur-sm" : ""}>
//                 {students.map((student, index) => (
//                   <tr
//                     key={index}
//                     className="border-b hover:bg-white hover:shadow rounded-lg cursor-pointer"
//                     onClick={() => handleStudentClick(student)}
//                   >
//                     <td className="p-3 rounded-l-lg">{student.number}</td>
//                     <td className="p-3 flex items-center gap-2">
//                       <FaUser className="text-yellow-500" />
//                       {student.name}
//                     </td>
//                     <td className="p-4">{student.id}</td>
//                     <td className="p-3">
//                       <div className="flex items-center gap-2">
//                         <div className="w-full rounded-full h-2.5 relative bg-gray-200">
//                           <div
//                             className="bg-blue-800 h-2.5 rounded-full transition-all duration-300"
//                             style={{ width: `${student.progress}%` }}
//                           ></div>
//                         </div>
//                         <span>{student.progress}%</span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentAttendance;



import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const StudentAttendance = () => {
  const [students, setStudents] = useState([
    { number: "01", name: "Sonia Doe", id: "2023/0162", progress: 100, faculty: "Pure and Applied Sciences", cgpa: 4.0, department: "Akinola Sonia Ruth", registration: "Not completed" },
    { number: "02", name: "Fadare Gold", id: "2023/11032", progress: 90 },
    { number: "03", name: "Akere Iyabo", id: "2023/1132", progress: 75 },
    { number: "04", name: "Ngozi Efe", id: "2023/2132", progress: 99 },
    { number: "05", name: "Janet Tony", id: "2023/0132", progress: 20 },
    { number: "06", name: "Nneka Udoh", id: "2023/0330", progress: 75 },
    { number: "07", name: "Princess Akinola", id: "2023/2102", progress: 90 },
    { number: "08", name: "Edet Edu Yaaboh", id: "2023/0012", progress: 50 },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);

  const handleStudentClick = (student, index) => {
    setSelectedStudent(student);
    setModalPosition(index);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setModalPosition(null);
  };

  return (
    <div className="relative">
      <div className="p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Student Attendance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white rounded-lg">
                <th className="p-3 rounded-l-lg text-left">Number</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 rounded-r-lg text-left">Progress</th>
              </tr>
            </thead>
            <tbody >
              {students.map((student, index) => (
                <React.Fragment key={index} >
                  <tr
                    className="border-b hover:bg-white hover:shadow rounded-lg cursor-pointer"
                    onClick={() => handleStudentClick(student, index)}
                  >
                  
                    <td className="p-3 rounded-l-lg">{student.number}</td>
                    <td className="p-3 flex items-center gap-2">
                      <FaUser className="text-yellow-500" />
                      {student.name}
                    </td>
                    <td className="p-4">{student.id}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-full rounded-full h-2.5 relative bg-gray-200">
                          <div
                            className="bg-blue-800 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span>{student.progress}%</span>
                      </div>
                    </td>
                  </tr>
                  {selectedStudent && modalPosition === index && (
                    <tr >
                      <td colSpan="4">
                        <div className="relative p-6 bg-white shadow-lg rounded-lg mt-2">
                          <button onClick={handleCloseModal} className="absolute top-2 right-4 text-lg font-bold">&times;</button>
                          <div className="flex gap-6">
                            <img src="/mnt/data/image.png" alt="Student" className="w-32 h-32 rounded-lg object-cover" />
                            <div>
                              <h2 className="text-2xl font-semibold">{selectedStudent.name}</h2>
                              <p><strong>Matric Number:</strong> {selectedStudent.id}</p>
                              <p><strong>Faculty:</strong> {selectedStudent.faculty}</p>
                              <p><strong>Department:</strong> {selectedStudent.department}</p>
                              <p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>
                              <p><strong>School Registration Progress:</strong> <span className="text-red-500">{selectedStudent.registration}</span></p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;

