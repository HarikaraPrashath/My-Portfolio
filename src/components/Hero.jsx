import React from 'react';
import { HERO_CONTENT } from "../constants";
import profile_Pic from '../assets/Harigara.jpg';
import { motion } from "framer-motion";

const PDF_FILE_URL = `${window.location.origin}/Resume.pdf`;

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const buttonVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};

function Hero() {
  const downloadFile = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("File not found");
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Unable to download the file. Please try again later.");
    }
  };
  

  return (
   <section id="home">
    <div className="lg:mb-35 -mt-6 text-white">
      <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between px-8">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 lg:pr-8">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Harikara Prasadh
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent block mb-6"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="font-light leading-relaxed max-w-xl mb-6"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.button
            onClick={() => downloadFile(PDF_FILE_URL)}
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            className="px-6 py-3 bg-gradient-to-r  from-purple-600 to-blue-500 text-white font-medium rounded-md shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </motion.button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4">
          <motion.img
            className="rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 max-w-full lg:max-w-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={profile_Pic}
            alt="Harikara Prasadh"
          />
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
