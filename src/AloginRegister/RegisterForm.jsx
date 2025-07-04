import { useState } from 'react';
import logo from "../assets/EduHivelogo.png";
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { apiRegister } from '../Components/authAPI';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState("");
 const navigate = useNavigate();


  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      errors.email = 'Invalid email address';
    }

    if (form.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (form.confirmPassword !== form.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!form.role) {
      errors.role = 'Role is required';
    }


    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

     try {
            await apiRegister(form);
            // setMessage('Registered successfully!');
            alert("Registration successful!");
            // closeModal();
            navigate('/');
        } catch (err) {
            console.error(err);
            const errorMessage =
                err?.response?.data?.message || err?.message || 'Registration failed';
            // setMessage(errorMessage);
            alert("Registration failed!");
        }

  };

  return (
    <div>
      <div className=" text-white p-6 pb-2 md:absolute relative  md:invisible visible">
        <Link to="/"><img className="w-24" src={logo} alt="EduHive Logo" /></Link>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className=" p-8 pt-4 rounded-2xl shadow w-96">
          <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
          <p className="text-gray-500 text-center mb-6">Please provide your details.</p>
          
          <form onSubmit={handleSubmit}>

            <div className="mb-4 Sign_up-element">
              <label className="block text-gray-700 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder='nath bassey'
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div className="mb-4 Sign_up-element">
              <label className="block text-gray-700 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder='nathbassey@gmail.com'
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>


            <div className="mb-4 relative Sign_up-element">
              <label className="block text-gray-700 text-sm">Password</label>

              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                placeholder='enoverlabIT&?'
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
              />

              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 p-2 text-gray-600">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>

              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className=" mb-4 relative Sign_up-element">
              <label className="block text-gray-700 text-sm">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                placeholder="Re-enter password"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 pt-6 p-2 text-gray-600">
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>

            <div className="relative mb-4 Sign_up-element">
              <label className="block text-gray-700 text-sm">Select Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
              >
                <option value="" disabled>Select a role</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
            </div>


            <div className="text-right mb-4">
              <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>

          </form>

          <p className="text-gray-500 text-center mt-6">Already have an account? <Link to='/Login' className="text-blue-500">Login here</Link></p>
          
        </div>
      </div>
    </div>
  );
}