// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import logo from "../assets/EduHivelogo.png";
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../Components/AuthContext';
// import { useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';


// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useContext(AuthContext);
//   // const navigate = useNavigate(); 

//   const location = useLocation();
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const userRole = params.get('role');
//     if (userRole) setRole(userRole);
//   }, [location]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Logging in as", role);
//     if (!userId || !password) {
//       setError("Email and Password are required");
//     } else {
//       setError("");
//       // Proceed with login logic
//       console.log("Logging in with", { userId, password });
//     }

//      try {
//             await login();
//             // setMessage('Login successful!');
//             alert('Login successful!');
//             // navigate('/Dashboard');
//         } catch (err) {
//             const errorMessage = err?.response?.data?.message || err?.message || 'Login failed';
//             // setMessage(errorMessage);
//             alert(errorMessage);
//         }
//   };

//   return (
//     <div>
//  <div className=" text-white p-6 absolute  md:invisible visible">
//        <Link to="/"><img className="w-24" src={logo} alt="EduHive Logo" /></Link>
//     </div>

//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           <div className=" p-8 rounded-2xl shadow w-96">
//             <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
//             <p className="text-gray-500 text-center mb-6">Please provide your login details  as {role} </p>
            
//             <form onSubmit={handleSubmit}>

//               <div className="mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 focus-within:text-gray-600 bg-white shadow"
//                   value={userId}
//                   onChange={(e) => setUserId(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-400 focus-within:text-gray-600 bg-white shadow"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//               <div className="text-right mb-4">
//                 <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Login
//               </button>
//             </form>
//               <p className="text-gray-500 text-center mt-6">No account yet, click <Link to='/Register'>Register here</Link></p>
//           </div>
//         </div>
//     </div>
//   );
// }

import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import logo from "../assets/EduHivelogo.png";
import { AuthContext } from '../Components/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const location = useLocation();
  const [role, setRole] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userRole = params.get('role');
    if (userRole) setRole(userRole);
  }, [location]);

  // ✅ Validation function
  const validateForm = () => {
    if (!email || !password) {
      setError("Email and Password are required");
      return false;
    }
    setError("");
    return true;
  };

  //  Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Logging in as", role);

    if (!validateForm()) return;

    try {
      await login({ email, password, role });
      alert('Login successful!');
      // Optionally navigate to dashboard here
    } catch (err) {
      const errorMessage = err?.response?.data?.message || err?.message || 'Login failed';
      alert(errorMessage);
    }
  };

  return (
    <div>
      <div className="text-white p-6 absolute md:invisible visible">
        <Link to="/"><img className="w-24" src={logo} alt="EduHive Logo" /></Link>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 rounded-2xl shadow w-96 bg-white">
          <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
          <p className="text-gray-500 text-center mb-6">
            Please provide your login details as <span className="font-medium">{role || "user"}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white shadow"
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

          <p className="text-gray-500 text-center mt-6">
            No account yet? <Link to='/Register' className="text-blue-500">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
