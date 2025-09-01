// import React, { useState, useEffect } from "react";

// export default function WelcomePopup() {
//   const [showPopup, setShowPopup] = useState(true);

//   useEffect(() => {
//     // Auto close after 1 second
//     const timer = setTimeout(() => {
//       setShowPopup(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
//       <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 w-96 text-center animate-fadeIn">
//         {/* Glow effect border */}
//         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 opacity-30 blur-2xl"></div>

//         {/* Content */}
//         <h2 className="text-2xl font-bold text-white relative z-10 mb-2 drop-shadow-lg">
//           🎉 Welcome to my Portfolio
//         </h2>
//         <p className="text-gray-200 relative z-10">
//           Thanks for visiting!
//         </p>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import Resume from "./Resume";
// import Contact from "./Contact";
// import AboutMe from "./AboutMe";
// import ProjectsSection from "./ProjectsSection";
// import ArrowScroll from "./ArrowScroll";
// import {
//   FaProjectDiagram,
//   FaLaptopCode,
//   FaDownload,
//   FaHome,
//   FaSuitcase,
//   FaUser,
//   FaFileAlt,
//   FaEnvelope,
//   FaLinkedinIn,
//   FaGithub
// } from "react-icons/fa";
// import {
//   FaInstagram,
//   FaPinterestP,
//   FaFacebookF,
// } from "react-icons/fa6";
// import { IoMdSend } from "react-icons/io";

// const icons = {
//   home: <FaHome />,
//   portfolio: <FaSuitcase />,
//   aboutme: <FaUser />,
//   resume: <FaFileAlt />,
//   contact: <FaEnvelope />,
//   letstalk: <IoMdSend />,
// };

// const socials = [
//   { icon: FaGithub, link: "https://github.com/AliHusnain5" },
//   { icon: FaInstagram, link: "https://instagram.com/yourusername" },
//   { icon: FaPinterestP, link: "https://pinterest.com/yourusername" },
//   { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ali-husnain-958320321/" },
// ];

// const HomePage = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const sectionIds = ["home", "portfolio", "aboutme", "resume", "contact"];
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleSections = entries.filter((entry) => entry.isIntersecting);
//         if (visibleSections.length > 0) {
//           const mostVisible = visibleSections.reduce((max, entry) =>
//             entry.intersectionRatio > max.intersectionRatio ? entry : max
//           );
//           setActiveLink(mostVisible.target.id);
//         }
//       },
//       {
//         threshold: 0.6,
//         rootMargin: "0px 0px -20% 0px",
//       }
//     );

//     sectionIds.forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) observer.observe(section);
//     });

//     // Handle scroll for navbar styling
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener("scroll", handleScroll);
    
//     return () => {
//       sectionIds.forEach((id) => {
//         const section = document.getElementById(id);
//         if (section) observer.unobserve(section);
//       });
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//       setTimeout(() => setActiveLink("contact"), 500);
//     }
//   };

//   const menuItems = ["Home", "Portfolio", "About Me", "Resume", "Contact", "Let's talk"];
//   const getId = (item) =>
//     item === "Contact" || item === "Let's talk"
//       ? "contact"
//       : item.replace(/\s+/g, "").toLowerCase();

//   return (
//     <section id="home" className="flex flex-col md:flex-row w-full min-h-screen text-white bg-gradient-to-br from-gray-900 to-slate-900">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/3 flex justify-center p-4 mt-3">
//         <div className="w-full max-w-[290px] bg-gradient-to-b from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-3xl flex flex-col items-center overflow-y-auto max-h-[95vh] p-6 border border-slate-600 shadow-2xl">
//           <div className="mt-4 flex flex-row items-center justify-center gap-4">
//             <div className="flex items-center justify-center h-16 w-12 rounded-2xl border-2 border-slate-400 bg-slate-700/30">
//               <span className="text-3xl font-extrabold text-amber-400">A</span>
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-white tracking-wider text-center md:text-left">
//               Ali <br /> Husnain
//             </div>
//           </div>

//           <div
//             className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[180px] md:w-[230px] 
//             mt-6 bg-cover bg-center bg-no-repeat rounded-2xl 
//             shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/30 hover:ring-4 hover:ring-blue-400/50 
//             hover:scale-105 transition-all duration-500 ease-out"
//             style={{
//               backgroundImage: `url("https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/69751898_1133899650333707_3597988021909061632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHKF7STgwwYAxmrwA5lFWqZxnaV9bc-HUPGdpX1tz4dQ5cSyn7kBMCl_DZ_n20YkJ_vBMIDhCNCpst-sxKsVudG&_nc_ohc=m3chnhS9JMMQ7kNvwFA-XcI&_nc_oc=AdlkydAaPXr7DemOW-ayZHfbmgLB1uaHczuvhy5scwtUwW5RrvFI--2Kd4pmGKdnh4g&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=KL18K0sOtOpKtM3A79CBZA&oh=00_AfWbCccz1PGfnNdchlwH5RnU8DuZ3acKVyZndc8muX9sgQ&oe=68D35162")`,
//             }}
//           ></div>

//           <div className="text-center mt-6">
//             <p className="text-slate-400 text-sm">Specialization:</p>
//             <p className="text-white font-medium">MERN Stack Developer</p>
//             <p className="text-slate-400 text-sm mt-2">Based in:</p>
//             <p className="text-white font-medium">Lahore, Pakistan</p>
//           </div>

//           <div className="flex mt-6 gap-3">
//             {socials.map(({ icon: Icon, link }, idx) => (
//               <a
//                 key={idx}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative w-10 h-10 overflow-hidden rounded-xl cursor-pointer bg-slate-700/50 border border-slate-600 hover:bg-slate-600/70 transition-colors duration-300"
//               >
//                 <div className="h-20 flex flex-col transition-transform duration-300 group-hover:-translate-y-10 items-center">
//                   <div className="w-10 h-10 flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-slate-200 group-hover:text-white" />
//                   </div>
//                   <div className="w-10 h-10 flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-slate-200 group-hover:text-white" />
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>

//           <button
//             onClick={scrollToContact}
//             className="py-3 px-6 mt-6 rounded-xl font-semibold text-white 
//             bg-gradient-to-r from-blue-600 to-indigo-600 
//             shadow-lg shadow-blue-500/30 
//             hover:from-blue-700 hover:to-indigo-700 
//             hover:shadow-blue-500/50 hover:scale-105 
//             transition-all duration-300 ease-out text-center w-full"
//           >
//             Let's Work Together!
//           </button>

//           <button className="group relative overflow-hidden w-full h-12 rounded-xl font-medium text-base shadow-md mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-amber-500/30">
//             <a
//               href="https://www.upwork.com/freelancers/~01b49b970f74de6174"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-full h-full"
//             >
//               <div className="h-24 flex flex-col transition-transform duration-500 group-hover:-translate-y-12">
//                 <span className="h-12 flex items-center justify-center gap-2">
//                   🚀 Find me on UpWork
//                 </span>
//                 <span className="h-12 flex items-center justify-center gap-2">
//                   🚀 Find me on UpWork
//                 </span>
//               </div>
//             </a>
//           </button>
//         </div>
//       </div>

//       {/* Right Content */}
//       <div className="relative w-full md:w-2/3 flex mx-auto flex-col px-4 pt-24 md:pt-28 overflow-y-auto max-h-screen">

//         {/* Mobile Navbar */}
//         <div className={`md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 rounded-2xl py-2 w-[90%] bg-slate-800/80 backdrop-blur-md border border-slate-700 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''} z-50`}>
//           <div className="flex w-full px-2 justify-around items-center gap-1 text-xs font-medium overflow-x-auto scrollbar-hide">
//             {menuItems.map((item, index) => {
//               const id = getId(item);
//               const isActive = activeLink === id;

//               return (
//                 <a
//                   key={index}
//                   href={id === "home" ? "#" : `#${id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     const section = document.getElementById(id);
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                       setTimeout(() => setActiveLink(id), 500);
//                     }
//                   }}
//                   className={`flex-shrink-0 px-3 py-2 rounded-xl transition-all duration-300 flex items-center gap-1 text-white ${
//                     item === "Let's talk"
//                       ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
//                       : isActive
//                       ? "bg-slate-700/70 text-white shadow-md"
//                       : "bg-slate-600/30 text-slate-300 hover:bg-slate-600/50"
//                   }`}
//                 >
//                   <span className="text-sm">
//                     {item === "Let's talk" ? "📩" : icons[id]}
//                   </span>
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Desktop Navbar */}
//         <div className={`hidden md:flex fixed top-6 z-50 w-full md:w-2/3 px-4 py-3 justify-center gap-4 text-sm mx-auto transition-all duration-300 ${isScrolled ? 'bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl' : ''}`}>
//           {menuItems.map((item, index) => {
//             const id = getId(item);
//             const isActive = activeLink === id;

//             return (
//               <a
//                 key={index}
//                 href={id === "home" ? "#" : `#${id}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   const section = document.getElementById(id);
//                   if (section) {
//                     section.scrollIntoView({ behavior: "smooth" });
//                     setTimeout(() => setActiveLink(id), 500);
//                   }
//                 }}
//                 className={`px-5 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
//                   item === "Let's talk"
//                     ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 hover:scale-105"
//                     : isActive
//                     ? "bg-slate-700/70 text-white shadow-md scale-105"
//                     : "bg-slate-600/30 text-slate-300 hover:bg-slate-600/50 hover:text-white"
//                 }`}
//               >
//                 <span className="text-sm font-medium">{item}</span>
//               </a>
//             );
//           })}
//         </div>

//         {/* Hero Section */}
//         <div className="mt-8 flex flex-col justify-center" id="home">
//           <div className="transition-all duration-700 transform">
//             <span className="bg-slate-800 text-white inline-flex justify-center items-center py-2 px-4 text-sm rounded-xl gap-2 border border-slate-700 shadow-md">
//               <span className="text-amber-400">⭐</span>
//               Let's collaborate!
//             </span>
//           </div>

//           <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
//             <div className="flex-1">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
//                 I'm Ali Husnain
//               </h1>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-white">
//                 MERN Stack <br />
//                 <span className="bg-gradient-to-r from-emerald-500 to-green-600 inline-block px-4 py-1 rounded-md mt-2 shadow-lg">
//                   Developer
//                 </span>
//               </h1>
              
//               {/* Professional summary */}
//               <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
//                 Passionate about creating efficient, scalable web applications with cutting-edge technologies. 
//                 Focused on delivering exceptional user experiences through clean code and innovative solutions.
//               </p>
              
//               {/* Call to action buttons */}
//               <div className="flex flex-wrap gap-4 mt-8">
//                 <a href="#portfolio" className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 border border-slate-600 hover:border-slate-500">
//                   👨‍💻 View My Work
//                 </a>
//                 <a 
//                   href="https://drive.google.com/uc?export=download&id=1vKycvL64Cc3Fbd7nBIODOpUt0r5mGhvK"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
//                 >
//                   <FaDownload className="text-sm" />
//                   Download CV
//                 </a>
//               </div>
//             </div>
            
//             {/* Stats section */}
//             <div className="flex gap-6 mt-6 md:mt-0">
//               {/* Major Projects */}
//               <div className="flex flex-col items-center group cursor-pointer p-5 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-600">
//                 <div className="p-3 bg-slate-700/50 rounded-full mb-3 group-hover:bg-emerald-900/30 transition-colors duration-300">
//                   <FaProjectDiagram className="text-emerald-400 text-3xl group-hover:text-emerald-300 transition-colors duration-300" />
//                 </div>
//                 <p className="text-sm text-slate-300 mt-2">Major Projects</p>
//                 <p className="font-bold text-emerald-400 text-xl group-hover:scale-110 transition-transform duration-300">
//                   5+
//                 </p>
//               </div>

//               {/* Mini Projects */}
//               <div className="flex flex-col items-center group cursor-pointer p-5 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-600">
//                 <div className="p-3 bg-slate-700/50 rounded-full mb-3 group-hover:bg-blue-900/30 transition-colors duration-300">
//                   <FaLaptopCode className="text-blue-400 text-3xl group-hover:text-blue-300 transition-colors duration-300" />
//                 </div>
//                 <p className="text-sm text-slate-300 mt-2">Mini Projects</p>
//                 <p className="font-bold text-blue-400 text-xl group-hover:scale-110 transition-transform duration-300">
//                   10+
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Other Sections */}
//         <div className="mt-32">
//           <div id="portfolio" className="min-h-screen w-full scroll-mt-36">
//             <ProjectsSection/>
//           </div>
//           <div id="aboutme" className="min-h-screen w-full scroll-mt-36">
//             <AboutMe/>
//           </div>
//           <div id="resume" className="min-h-screen w-full scroll-mt-36">
//             <Resume />
//           </div>
//           <div id="contact" className="min-h-screen w-full scroll-mt-36">
//             <Contact />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePage;