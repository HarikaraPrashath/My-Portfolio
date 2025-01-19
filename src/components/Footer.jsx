// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Footer = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="text-neutral-50 py-12 mt-16"
    >
      <hr className="text-white mb-5" />
      <div className="container mx-auto px-8 space-y-8 text-center">
        {/* Footer Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-400">Quick Links</h3>
          <div className="space-x-6 flex flex-wrap justify-center">
            <Link to="home" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer mb-2">
              Home
            </Link>
            <Link to="About" smooth={true} duration={1000} className="hover:text-purple-300 cursor-pointer mb-2">
              About
            </Link>
            <Link to="Technologies" className="hover:text-purple-300 cursor-pointer mb-2">
              Technologies
            </Link>
            <Link to="Project" className="hover:text-purple-300 cursor-pointer mb-2">
              Projects
            </Link>
            <Link to="Contact" className="hover:text-purple-300 cursor-pointer mb-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-400">Follow Me</h3>
          <div className="space-x-6 flex justify-center">
            <a href="https://www.linkedin.com/in/harikara-prasadh-b77b2b225" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 cursor-pointer">
              LinkedIn
            </a>
            <a href="https://github.com/HarikaraPrashath" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 cursor-pointer">
              GitHub
            </a>
            <a href="https://www.instagram.com/_itzhari_02_/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 cursor-pointer">
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Harikara Prasadh. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
