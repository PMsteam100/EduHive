import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import AdminImage from '../assets/AdminImage.jpg'

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

  // Function to update the progress for a student
  const handleProgressChange = (index, newProgress) => {
    const updatedStudents = [...students];
    updatedStudents[index].progress = parseInt(newProgress, 10);
    setStudents(updatedStudents);
  };

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [progress, setProgress] = useState("");
  const [number, setNumber] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [registration, setRegistration] = useState("");


  const handleStudentClick = (student, index) => {
    setSelectedStudent(student);
    setModalPosition(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setModalPosition(null);
  };

  return (

    <div className="relative">

      <div className="p-4 bg-gray-100 rounded-lg mb-6 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newStudent = {
              number,
              name,
              id,
              progress: parseInt(progress),
              faculty,
              department,
              cgpa: parseFloat(cgpa),
              registration,
            };
            setStudents([...students, newStudent]);
            // Clear fields after submit
            setName(""); setId(""); setProgress(""); setNumber(""); setFaculty(""); setDepartment(""); setCgpa(""); setRegistration("");
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number" className="p-2 border rounded" required />
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="p-2 border rounded" required />
          <input value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" className="p-2 border rounded" required />
          <input value={progress} onChange={(e) => setProgress(e.target.value)} placeholder="Progress" className="p-2 border rounded" type="number" min="0" max="100" required />
          <input value={faculty} onChange={(e) => setFaculty(e.target.value)} placeholder="Faculty" className="p-2 border rounded" />
          <input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" className="p-2 border rounded" />
          <input value={cgpa} onChange={(e) => setCgpa(e.target.value)} placeholder="CGPA" className="p-2 border rounded" type="number" step="0.01" min="0" max="5" />
          <input value={registration} onChange={(e) => setRegistration(e.target.value)} placeholder="Registration Status" className="p-2 border rounded" />
          <button type="submit" className="md:col-span-2 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700">Add Student</button>
        </form>
      </div>


      {/* Big screen */}

      <div className="hidden md:block font-poppins">
        <div className="p-4  shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Student Attendance</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Rounded Header Row */}
              <thead>
                <tr className="bg-blue-800 text-white rounded-lg">
                  <th className="p-3 rounded-l-lg text-left">Number</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Progress</th>
                  <th className="p-3 rounded-r-lg  text-left">Action</th>
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
                            <div className="flex gap-12">
                              <img src={AdminImage} alt="Admin-Student" className="w-60 h-60 rounded-lg object-cover" />

                              <div className="flex space-x-20">
                                <div className="space-y-3">
                                  <h2 className="text-2xl font-semibold">Name</h2>
                                  <p>{selectedStudent.name}</p>
                                  <h1 className="text-2xl font-semibold">Matric Number</h1>
                                  <p>{selectedStudent.id}</p>
                                  <h1 className="text-2xl font-semibold">Department</h1>
                                  <p>{selectedStudent.department}</p>
                                </div>

                                <div className="space-y-3">
                                  <h1 className="text-2xl font-semibold">Faculty</h1>
                                  <p>{selectedStudent.faculty}</p>

                                  <h1 className="text-2xl font-semibold">CGPA</h1>
                                  <p>{selectedStudent.cgpa}</p>

                                  <h1 className="text-2xl font-semibold">School Registration Progress</h1>
                                  <p className="text-red-500">{selectedStudent.registration}</p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // prevent triggering student modal
                              handleDeleteStudent(index);
                            }}
                            className="text-red-600 hover:underline"
                          >
                            Delete
                          </button>
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



      {/* Small screen */}

      <div className="block md:hidden">
        <div className="p-4 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4 ">Student Attendance</h2>
          <div className="bg-blue-800 text-white p-3 rounded-lg flex justify-between font-semibold">
            <span>Number</span>
            <span>Name</span>
            <span>ID</span>
          </div>

          {selectedStudent && (
            <div
              className="fixed inset-0 bg-white/5 bg-opacity-50 z-50"
              onClick={handleCloseModal}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg w-full relative z-50 mt-30"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={handleCloseModal} className="absolute top-2 right-4 text-lg font-bold">&times;</button>
                <div className="md:flex gap-12">
                  <div className="flex justify-center"><img src={AdminImage} alt="Admin-Student" className="w-50 h-50 rounded-lg object-cover" /></div>

                  <div className="md:flex space-x-20">
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold">Name</h2>
                      <p>{selectedStudent.name}</p>
                      <h1 className="text-xl font-semibold">Matric Number</h1>
                      <p>{selectedStudent.id}</p>
                      <h1 className="text-xl font-semibold">Department</h1>
                      <p>{selectedStudent.department}</p>
                    </div>

                    <div className="space-y-3">
                      <h1 className="text-xl font-semibold">Faculty</h1>
                      <p>{selectedStudent.faculty}</p>

                      <h1 className="text-xl font-semibold">CGPA</h1>
                      <p>{selectedStudent.cgpa}</p>

                      <h1 className="text-xl font-semibold">School Registration Progress</h1>
                      <p className="text-red-500">{selectedStudent.registration}</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          <div className={selectedStudent ? "blur-sm" : ""}>
            {students.map((student, index) => (
              <div key={index} onClick={() => handleStudentClick(student)} className="bg-white p-4 shadow-md rounded-lg mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">{student.number}</span>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-yellow-500 text-xl" />
                    <span className="font-semibold">{student.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{student.id}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                  <div
                    className="bg-blue-800 h-2.5 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1 text-sm">
                  <span className="font-medium text-gray-700">{student.progress}%</span>
                  <select
                    className=" p-1 text-sm cursor-pointer focus:outline-none"
                    value={student.progress}
                    onChange={(e) => {
                      const newProgress = parseInt(e.target.value, 10);
                      setStudents((prev) => {
                        const updated = [...prev];
                        updated[index].progress = newProgress;
                        return updated;
                      });
                    }}
                  >
                    <option value="0">0%</option>
                    <option value="25">25%</option>
                    <option value="50">50%</option>
                    <option value="75">75%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                  </select>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent modal opening
                        handleDeleteStudent(index);
                      }}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default StudentAttendance;




