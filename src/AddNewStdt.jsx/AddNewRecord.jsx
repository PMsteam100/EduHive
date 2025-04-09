import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";


const AddNewRecord = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    grade: "",
    parentNumber: "",
    passport: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.phoneNumber.match(/^\d{10}$/)) newErrors.phoneNumber = "Valid phone number is required";
    if (!formData.grade) newErrors.grade = "Grade is required";
    if (!formData.parentNumber.match(/^\d{10}$/)) newErrors.parentNumber = "Valid parent number is required";
    if (!formData.passport) newErrors.passport = "Passport image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, passport: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className=" p-4 bg-white ">
      <h2 className="text-lg font-semibold mb-4">Add new record</h2>
      
      <div className="bg-blue-800 text-white p-3 rounded-lg mb-4 font-semibold">
        Student Details
      </div>

      <div className="bg-blue-50 p-4 rounded-md">
          <form onSubmit={handleSubmit} >
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4">
              <div>
              <label className="block text-gray-600">First Name*</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
              <label className="block text-gray-600">Email*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
              <div>
                <label className="block text-gray-600">Last Name*</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              
              </div>
              <div>
                <label className="block text-gray-600">Phone Number*</label>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Grade*</label>
                        <input type="text" name="grade" value={formData.grade} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Parent Number*</label>
                        <input type="text" name="parentNumber" value={formData.parentNumber} onChange={handleChange} className="w-full rounded p-2 text-gray-400 focus-within:text-gray-600 bg-white shadow" />
                        {errors.parentNumber && <p className="text-red-500 text-sm">{errors.parentNumber}</p>}
              </div>
            </div>
          
          <div className="mb-4">
            <label className="block text-gray-600">Passport*</label>
            <div className="text-gray-400 focus-within:text-gray-600 bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
              <FaCloudUploadAlt className="text-3xl text-blue-800 hover:text-blue-800/5" />
              <p className="text-gray-500 text-sm">Upload image here</p>
              <p className="text-gray-400 text-xs">OR</p>
              <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
              <label htmlFor="fileUpload" className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer border border-blue-800 hover:bg-blue-800/5 hover:text-blue-800">Browse files</label>
          {errors.passport && <p className="text-red-500 text-sm">{errors.passport}</p>}
           
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
        <button className="border px-4 py-2 rounded text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white">Save as draft</button>
        <button className="bg-blue-800 text-white px-4 py-2 rounded border border-blue-800 hover:bg-blue-800/5 hover:text-blue-800">Submit</button>
      </div>

          </form>
      </div>
      

    </div>
  );
};

export default AddNewRecord;
