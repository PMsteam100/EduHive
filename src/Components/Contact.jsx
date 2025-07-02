import React, { useState, useEffect, useRef, useContext  } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { AuthContext } from '../../src/Components/AuthContext.jsx';
import { apiSendGuestMessage } from './authAPI.jsx'; // adjust path as needed

const Contact_us = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      message: '',
      isAgree: false,
    });
    const { isLoggedIn, user, logout, loading } = useContext(AuthContext);
  
    const modalRef = useRef(null);
  
   
    useEffect(() => {
      if (isModalOpen) {
        gsap.fromTo(modalRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
      }
    }, [isModalOpen]);
  
    const validate = () => {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email address';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
 
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  


const handleSubmit = async (e) => {
  e.preventDefault();

  const wordCount = formData.message.trim().split(/\s+/).length;
  if (wordCount < 5) {
    alert("Please write at least 5 words.");
    return;
  }

  if (!formData.isAgree) {
    alert("You must agree to the terms.");
    return;
  }

  try {

    {
      // ✅ Guest user: POST to contact API with their details
      await apiSendGuestMessage({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email,
        message: formData.message,
      });
    }

    alert("Message sent!");
    setFormData((prev) => ({
      ...prev,
      message: '',
      isAgree: false,
    }));
    setEmail('');
    setIsModalOpen(false);
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.error || 'Something went wrong');
  }
};

const closeModal = () => {
  setIsModalOpen(!isModalOpen);
    };

  return (
   <div>
  <div
    onClick={() => setIsModalOpen(true)}
    className="hover:text-orange-225 font-Roboto text-base font-medium relative"
  >
    Contact Us
  </div>

  {isModalOpen && (
    <div
      ref={modalRef}
      className="fixed h-dvh w-dvw inset-0 bg-gray-500/70 flex md:justify-center md:items-center z-60"
    >
      <div className="bg-white md:p-12 p-5 md:pt-20 opacity-100 shadow-md md:w-[50%] w-full h-screen relative z-60">
        <h2 className="text-3xl font-bold text-amber-48 font-Roboto">Get In Touch</h2>
        <p className="text-xs font-medium mt-2">Get in touch with our team</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLoggedIn && (
            <>
              <div className="flex space-x-4">
                <div>
                  <label className="text-gray-700 text-sm">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm">Email Address</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address6@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
            </>
          )}

          <div>
            <label className="text-gray-700 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message (at least 5 words)"
              rows="3"
              required
             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
            />
          </div>

          <div>
            <label className="inline text-xs">
              <input
                type="checkbox"
                name="isAgree"
                checked={formData.isAgree}
                onChange={(e) =>
                  setFormData({ ...formData, isAgree: e.target.checked })
                }
                className="mr-3 inline"
              />
              You agree to receive our notification via email
            </label>
          </div>

          <div className="flex justify-end">
            <button type="submit" 
                // onClick={closeModal}
                className="px-8 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-blue-800 hover:bg-green-200 border-blue-800 border-2 hover:text-amber-48">
              
                Send
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={closeModal}
          className="absolute invisible md:visible md:right-5 md:top-6 right-3 top-5 text-2xl text-red-950 z-40"
        >
          <IoCloseSharp />
        </button>
      </div>
    </div>
  )}
</div>

  )
}

export default Contact_us