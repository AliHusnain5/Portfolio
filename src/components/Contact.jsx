import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import ContactForm from './ContactForm';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const socials = [
  { icon: FaGithub, link: "https://github.com/AliHusnain5" },
  { icon: FaInstagram, link: "https://instagram.com/yourusername" },
  { icon: FaPinterestP, link: "https://pinterest.com/yourusername" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ali-husnain-958320321/" },
];



const Contact = () => {
  return (
    <div className='mt-40 md:mt-40 px-4 overflow-hidden' id='Contact'>
      {/* Title Badge */}
      <span className="bg-black text-white w-fit flex justify-center items-center py-1 px-3  rounded-4xl gap-2">
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
        {socials.map(({ icon: Icon, link }, idx) => (
          <a
             key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
            className='border py-6 px-2 w-20 sm:w-36 md:w-40 rounded-3xl flex flex-col items-center justify-center bg-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-700 cursor-pointer'
          >
            <Icon className='w-3 h-2 sm:w-10 sm:h-10' />
          </a>
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
