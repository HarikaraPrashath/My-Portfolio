import React, { useState } from 'react';
import logo from "../assets/HarikaraPrasadh.png";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt='logo' />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FaBars className="text-3xl cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 p-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Close Icon (X) */}
          <button onClick={toggleMenu} className="text-white">
            <FaTimes className="text-2xl cursor-pointer" />
          </button>
        </div>
        {/* Menu Links */}
        <ul className="space-y-4 text-white mt-6 ">
          <li>
            <Link to="home" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="Technologies" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="Project" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 text-2xl mt-6">
          <a href="https://www.linkedin.com/in/harikara-prasadh-b77b2b225/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="https://github.com/HarikaraPrashath" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_itzhari_02_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:flex-row lg:space-x-6">
        <ul className="flex space-x-6">
          <li>
            <Link to="home" smooth={true} duration={1000} className="text-white hover:text-purple-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={1000} className="text-white hover:text-purple-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="Technologies" smooth={true} duration={1000} className="text-white hover:text-purple-300 cursor-pointer">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="Project" smooth={true} duration={1000} className="text-white hover:text-purple-300 cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={1000} className="text-white hover:text-purple-300 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons for Desktop */}
        <div className="flex items-center space-x-4 text-2xl">
          <a href="https://www.linkedin.com/in/harikara-prasadh-b77b2b225/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="https://github.com/HarikaraPrashath" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_itzhari_02_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-purple-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
