// // Updated Navbar.js
// import React from 'react';
// import {
//   FaHome,
//   FaSuitcase,
//   FaUser,
//   FaFileAlt,
//   FaEnvelope,
// } from 'react-icons/fa';
// import { IoMdSend } from 'react-icons/io';

// const icons = {
//   home: <FaHome />,
//   portfolio: <FaSuitcase />,
//   aboutme: <FaUser />,
//   resume: <FaFileAlt />,
//   contact: <FaEnvelope />,
//   letstalk: <IoMdSend />,
// };

// const Navbar = ({ activeLink }) => {
//   const menuItems = [
//     'Home',
//     'Portfolio',
//     'About Me',
//     'Resume',
//     'Contact',
//     "Let's talk",
//   ];

//   const getId = (item) =>
//     item === 'Contact' || item === "Let's talk"
//       ? 'contact'
//       : item.replace(/\s+/g, '').toLowerCase();

//   return (
//     <>
//       {/* Mobile Navbar */}
//       <div className="md:hidden fixed top-5 z-50 w-full px-2 py-3 bg-black/30 backdrop-blur-md">
//         <div className="flex w-fit min-w-full justify-start gap-5 text-xs font-medium overflow-x-auto scrollbar-hide">
//           {menuItems.map((item, index) => {
//             const id = getId(item);

//             return (
//               <a
//                 key={index}
//                 href={id === 'home' ? '#' : `#${id}`}
//                 onClick={(e) => {
//                   if (id === 'home') {
//                     e.preventDefault();
//                     window.scrollTo({ top: 0, behavior: 'smooth' });
//                   }
//                 }}
//                 className={`flex-shrink-0 px-4 -mr-3 py-2 rounded-2xl transition-all duration-300 flex items-center gap-1 
//                   ${
//                     item === "Let's talk"
//                       ? 'bg-red-500 text-white hover:bg-red-700'
//                       : `bg-white/20 text-gray-300 hover:text-white transition-opacity duration-500 ${
//                           activeLink === id
//                             ? 'border-b-2 border-blue-500 text-white opacity-100 shadow-md shadow-blue-400'
//                             : 'opacity-60'
//                         }`
//                   }`}
//               >
//                 <span className="text-base">
//                   {item === "Let's talk" ? '📩' : icons[id]}
//                 </span>
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       {/* Desktop/Tablet Navbar */}
//       <div className="hidden md:flex fixed top-5 z-50 w-full md:w-3/4 px-4 py-3  backdrop-blur-md scrollbar-hide justify-start gap-6 text-sm sm:text-base md:text-xl font-medium">
//         {menuItems.map((item, index) => {
//           const id = getId(item);

//           return (
//             <a
//               key={index}
//               href={id === 'home' ? '#' : `#${id}`}
//               onClick={(e) => {
//                 if (id === 'home') {
//                   e.preventDefault();
//                   window.scrollTo({ top: 0, behavior: 'smooth' });
//                 }
//               }}
//               className={`px-6 py-4 rounded-4xl transition-all duration-300 flex items-center gap-1 
//                 ${
//                   item === "Let's talk"
//                     ? 'bg-red-500 text-white hover:bg-red-700'
//                     : `bg-white/20 text-gray-300 hover:text-white transition-opacity duration-500 ${
//                         activeLink === id
//                           ? 'border-b-2 border-blue-500 text-white opacity-100 shadow-md shadow-blue-400'
//                           : 'opacity-60'
//                       }`
//                 }`}
//             >
//               <span>{item}</span>
//             </a>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Navbar;