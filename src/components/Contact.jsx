import React, { useState } from "react";
import { motion } from "framer-motion";
import emailJs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
 const [name,setName] = useState()
 const [email,setEmail] = useState()
 const [message,setMessage] = useState()

const handleSubmit = (e) => {
    e.preventDefault();
  //Your email service ID and template ID, and Template params
    const serviceID = "service_qszbw3e"
    const templateID ="template_npaowe7"
    const publicKey = "152MvA32UpLk_-7Bm"

  //create new object contains dynamic template params
  const templateParams ={
    from_name:name,
    from_email:email,
    to_name: "HariKara Prasadh",
    message:message,
  }

  //send the email using EmailJs
  emailJs.send(serviceID,templateID,templateParams,publicKey)
    .then((response)=>{
      console.log("Email sent successfully",response)
      setName('')
      setEmail('')
      setMessage('')
      alert("successfully send message")
    })
    .catch((error)=>{
      console.log("Error occur sending email :",error)
    })
};
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="Contact">
    <div className="text-neutral-50 px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl md:text-5xl font-bold text-purple-500"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="max-w-3xl mx-auto space-y-12"
      >
        {/* Contact Info */}
        <motion.div
          variants={itemVariant}
          className="text-center space-y-6 tracking-tight"
        >
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">Address</h3>
            <p className="mt-2 text-neutral-300">87c Samudrasanna Mawatta, Mount-Lavinia, Colombo</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">Phone</h3>
            <p className="mt-2 text-neutral-300">+94 788 840 339</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">Email</h3>
            <a
              href="mailto:example@email.com"
              className="mt-2 text-neutral-50 underline hover:text-purple-300"
            >
              prashathhari2002@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={containerVariant}
          onSubmit={handleSubmit}
          className="bg-neutral-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-50">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="mt-2 w-full p-3 rounded bg-neutral-700 text-neutral-50 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-50">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-2 w-full p-3 rounded bg-neutral-700 text-neutral-50 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-50">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="mt-2 w-full p-3 rounded bg-neutral-700 text-neutral-50 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded bg-purple-500 text-neutral-50 font-medium hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
    </section>
  );
};

export default Contact;
