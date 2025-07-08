import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='mt-40 md:mt-80 px-4 overflow-hidden' id='Contact'>
      {/* Title Badge */}
      <span className="bg-black text-white w-fit flex justify-center items-center py-3 px-8  rounded-2xl gap-2">
        <span>⭐</span>
        Contact
      </span>

      {/* Heading */}
      <div className="mt-10 md:mt-20">
        <h1 className=" text-3xl md:text-5xl text-center md:text-left">
          Let's make something <br className='hidden md:block' /> awesome together!
        </h1>
      </div>

      {/* Form */}
      <div className='mt-10'>
        <ContactForm />
      </div>

      {/* Social Icons */}
      <div className='flex flex-wrap justify-center gap-6 mt-20'>
        {[IoLogoGoogle, FaInstagram, FaPinterestP, FaFacebookF].map((Icon, idx) => (
          <div
            key={idx}
            className='border py-6 px-6 w-32 sm:w-36 md:w-40 rounded-4xl flex flex-col items-center justify-center bg-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-700 cursor-pointer'
          >
            <Icon className='w-12 h-12 sm:w-16 sm:h-16' />
          </div>
        ))}
      </div>

      {/* Description Text */}
      <div className="mt-16">
        <h2 className="text-xl md:text-3xl  text-center leading-relaxed">
          Want to know more about me, tell me about your project or just to say hello?
          <br className='hidden md:block' />
          Drop me a line and I'll get back as soon as possible.
        </h2>
      </div>

      {/* Divider */}
      <hr className='mt-20 border-gray-500' />

      {/* Contact Info */}
      <div className='flex flex-col md:flex-row justify-between text-base sm:text-lg  mt-10 mb-40 gap-10 md:gap-0 text-center md:text-left'>
        <div className='flex-1'>
          <p>Location</p>
          <p className='text-gray-400'>Lahore</p>
        </div>
        <div className='flex-1'>
          <p>Phone</p>
          <p className='text-gray-400'>+923094946763</p>
        </div>
        <div className='flex-1'>
          <p>Email</p>
          <p className='text-gray-400 break-all'>alihusnain7630@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
