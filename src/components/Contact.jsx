import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import ContactForm from './ContactForm';

const socials = [
  { 
    icon: FaGithub, 
    link: "https://github.com/AliHusnain5",
    name: "GitHub"
  },
  { 
    icon: FaInstagram, 
    link: "https://instagram.com/yourusername",
    name: "Instagram"
  },
  { 
    icon: FaPinterestP, 
    link: "https://pinterest.com/yourusername",
    name: "Pinterest"
  },
  { 
    icon: FaLinkedinIn, 
    link: "https://www.linkedin.com/in/ali-husnain-958320321/",
    name: "LinkedIn"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* New Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10% left-10% w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-60% left-70% w-52 h-52 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-30% left-40% w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center py-2 px-6 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium mb-4 backdrop-blur-md border border-white/10">
            <span className="text-yellow-400 mr-2">⭐</span>
            Get In Touch
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in working together or have a project in mind? 
            I'm currently available for freelance opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+92 309 4946763</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300 break-all">alihusnain7630@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socials.map(({ icon: Icon, link, name }, idx) => (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-blue-600 transition duration-300"
                      aria-label={name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-gray-300 mb-8">
                Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-indigo-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <p className="text-white font-medium">Currently available for projects</p>
            </div>
            <a 
              href="https://www.upwork.com/freelancers/~01b49b970f74de6174" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-blue-500/30 hover:scale-105 transition duration-300 flex items-center"
            >
              Hire Me on Upwork
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            I typically respond to emails within 24 hours. For urgent matters, please call or message directly.
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;