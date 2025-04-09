import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { HashRouter, Routes, Route } from 'react-router-dom';

import Login from './AloginRegister/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode >
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </HashRouter>
</StrictMode>,
)
