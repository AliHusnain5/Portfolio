import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { icon: <FaGithub className="w-5 h-5" />, link: "https://github.com/AliHusnain5", name: "GitHub" },
    { icon: <FaInstagram className="w-5 h-5" />, link: "https://instagram.com/yourusername", name: "Instagram" },
    { icon: <FaPinterestP className="w-5 h-5" />, link: "https://pinterest.com/yourusername", name: "Pinterest" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, link: "https://www.linkedin.com/in/ali-husnain-958320321/", name: "LinkedIn" },
    { icon: <SiUpwork className="w-5 h-5 text-green-400" />, link: "https://www.upwork.com/freelancers/~01b49b970f74de6174", name: "Upwork" },
  ];

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "About Me", link: "#aboutme" },
    { name: "Resume", link: "#resume" },
    { name: "Contact", link: "#contact" },
  ];

  const services = [
    "Web Development",
    "MERN Stack",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-purple-900 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-[40px] border-2 border-white/30 bg-purple-500/20 backdrop-blur-sm mr-4">
                <span className="text-2xl font-extrabold text-purple-200">A</span>
              </div>
              <h3 className="text-2xl font-bold">Ali Husnain</h3>
            </div>
            <p className="text-gray-300 mb-6">
              MERN Stack Developer specializing in creating modern, responsive web applications with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-purple-600 transition duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-300 hover:text-purple-400 transition duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-purple-500"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Lahore, Pakistan</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:ali.husnain@example.com" className="text-gray-300 hover:text-purple-400 transition duration-300">
                  ali.husnain@example.com
                </a>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Available: Mon - Fri, 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-800/50 backdrop-blur-md rounded-xl p-6 mb-12 border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to my newsletter for the latest updates and projects.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-r-lg font-semibold hover:opacity-90 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ali Husnain. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition duration-300">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition duration-300 z-50"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;