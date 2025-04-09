import React from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import logo from '../assets/EduHivelogoFooter.png'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white pt-20 pb-10 font-poppins">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 pb-10">
        <div>
           <Link to="/"><img className='w-20' src={logo} alt="" /></Link> 
          <p className="mt-2 text-sm">
            Enhances accessibility, and ensures secure storage for academic institutions
          </p>
          <div className="flex space-x-4 mt-4 text-yellow-400">
            <FaApple className="text-2xl cursor-pointer hover:text-white" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-white" />
            <FaGoogle className="text-2xl cursor-pointer hover:text-white" />
          </div>
        </div>

        <div className="col-span-2 flex flex-wrap gap-10 md:justify-center md:gap-16">
            <div>
              <h3 className="md:text-lg text-md font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
                <li><a href="#" className="hover:underline">App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="md:text-lg text-md font-semibold">Why Choose Us?</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Channels</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="md:text-lg text-md font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Solutions</a></li>
              </ul>
            </div>
                  </div>
        </div>
      <div className="text-center text-xs mt-8">
        &copy; {new Date().getFullYear()} Eduhiveproject. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
