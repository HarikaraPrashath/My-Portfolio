import React from 'react'
import aboutImg from "../assets/about.gif"
import {ABOUT_TEXT} from "../constants"
import { motion } from "framer-motion";



function About() {
  return (
    <section id="About">
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 1.5 }}
        className='my-16 text-center text-5xl font-bold text-white'>
            About
            <span className='text-neutral-500'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 p-8'>
                <div className='flex items-center justify-center'> 
                    <img className='rounded-2xl' src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial ={{opacity :0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 p-8'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
    </section>
  )
}

export default About
