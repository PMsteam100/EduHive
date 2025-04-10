import { useState } from "react";
import logo from "../assets/EduHivelogo.png";
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("User ID and Password are required");
    } else {
      setError("");
      // Proceed with login logic
      console.log("Logging in with", { userId, password });
    }
  };

  return (
    <div>
 <div className=" text-white p-6 absolute  md:invisible visible">
       <Link to="/"><img className="w-24" src={logo} alt="EduHive Logo" /></Link>
    </div>

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className=" p-8 rounded-2xl shadow w-96">
            <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
            <p className="text-gray-500 text-center mb-6">Please provide your login details</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="User ID"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-400 focus-within:text-gray-600 bg-white shadow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="text-right mb-4">
                <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}