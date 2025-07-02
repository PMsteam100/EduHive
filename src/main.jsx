import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from '../src/Components/AuthContext.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './AloginRegister/Login';
import Register from './AloginRegister/Register';
import AdminDash from './AdminDashboard/AdminDash';
import StudentDashboard from './Dashboard/StudentDashboad';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  </StrictMode>
);
