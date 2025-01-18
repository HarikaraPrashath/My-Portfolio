import React from 'react'
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";




const iconsVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
});

const Technologies = () => {
  return (
    <section id="Technologies">
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 1.5 }}
         className='my-16 text-center text-5xl font-bold text-white'>
        Technologies
      </motion.h2>

      <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1.5 }}
         className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div 
           variants={iconsVariants(2.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(3)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-600'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssFill className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(4)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <DiMongodb className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(4)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(6)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaFigma className='text-7xl text-purple-500'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(1.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-green-700'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(4)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <GrMysql className='text-7xl text-blue-400'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(3.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaPython className='text-7xl text-blue-800'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(2.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoSpringBoot className='text-7xl text-green-500'/>
        </motion.div>

        <motion.div 
           variants={iconsVariants(2.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiNextjsFill className='text-7xl text-white'/>
        </motion.div> 
      </motion.div>
    </div>
    </section>
  )
}

export default Technologies
