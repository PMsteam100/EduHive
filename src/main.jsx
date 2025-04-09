import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './AloginRegister/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode >
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Main_team" element={<Main_team />} />
      <Route path="/Main_support" element={<Main_support />} />
      <Route path="/Sign_in" element={<Sign_in />} />
      <Route path="*" element={<Error />} /> */}
    </Routes>
  </HashRouter>
</StrictMode>,
)
