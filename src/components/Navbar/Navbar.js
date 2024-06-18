import React, { useState } from 'react';
// import logo from './../../Assets/Images/myspa.png';
import logo from './../../Assets/Images/WhatsApp Image 2024-06-08 at 10.16.08 AM.jpeg';
import './Navbar.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-navbar lg:px-16 px-4 bg-white flex flex-wrap items-center py-2 shadow-lg rounded-lg">
      <div className="flex-1 flex gap-3 items-center">
        <img src={logo} alt="Logo" className="w-10 h-12 imgg2" />
        <a className="text-xl outline-none text-black font-bold	hover:no-underline"> MY SPA AYURVEDIC HUB </a>
      </div>

      <button
        onClick={toggleMenu}
        className="pointer-cursor md:hidden block focus:outline-none"
      >
        <svg className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      <div className={`md:flex md:items-center md:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/">Home</Link></li>
            {/* <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/about-us">About Us</Link></li> */}
            <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/our-services">Our Services</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/enquiry">Enquiry</Link></li>
            <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/contactpage">Contact Us</Link></li>
            {/* Add a link to the contact us page if you have one */}
            {/* <li><Link className="md:p-4 py-3 px-0 block text-black hover:text-blue-300" to="/contact-us">Contact Us</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
