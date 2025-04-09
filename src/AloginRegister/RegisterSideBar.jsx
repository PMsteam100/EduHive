import React from "react";
import logo from "../assets/EduHivelogoFooter.png";

import { Link } from 'react-router-dom'

const RegisterSideBar = () => {
  return (
    <aside className="h-full bg-blue-800 text-white p-6 absolute md:relative invisible md:visible">
      <Link to="/"><img className="w-24" src={logo} alt="EduHive Logo" /></Link>
    </aside>
  );
};

export default RegisterSideBar;
