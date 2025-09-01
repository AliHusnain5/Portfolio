import React, { useEffect, useState } from "react";
// import Portfolio from "./Portfolio";
// import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contact from "./Contact";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





import {
   FaProjectDiagram, FaLaptopCode,
  FaDownload,
  FaHome,
  FaSuitcase,
  FaUser,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa6";
import { IoLogoGoogle, IoMdSend } from "react-icons/io";
import ArrowScroll from "./ArrowScroll";

import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";



const icons = {
  home: <FaHome />,
  portfolio: <FaSuitcase />,
  aboutme: <FaUser />,
  resume: <FaFileAlt />,
  contact: <FaEnvelope />,
  letstalk: <IoMdSend />,
};
const socials = [
  { icon: FaGithub, link: "https://github.com/AliHusnain5" },
  { icon: FaInstagram, link: "https://instagram.com/yourusername" },
  { icon: FaPinterestP, link: "https://pinterest.com/yourusername" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ali-husnain-958320321/" },
];

const HomePage = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "portfolio", "aboutme", "resume", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );
          setActiveLink(mostVisible.target.id);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setActiveLink("contact"), 500);
    }
  };

  const menuItems = ["Home", "Portfolio", "About Me", "Resume", "Contact", "Let's talk"];
  const getId = (item) =>
    item === "Contact" || item === "Let's talk"
      ? "contact"
      : item.replace(/\s+/g, "").toLowerCase();

  return (
    <section id="home" className="flex flex-col md:flex-row w-full min-h-screen text-white bg-gradient-to-br  bg-cover bg-center bg-slate-900"
      // style={{
      //         backgroundImage: `url("https://t3.ftcdn.net/jpg/07/50/50/64/360_F_750506473_2PGpD4QBSslus1PE6AnYjdeJxhiZVdib.jpg")`,
      //       }}
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/4 flex justify-center  p-4 mt-3">
        <div className="w-full max-w-[270px] bg-gradient-to-b from-blue-900/30 to-slate-800/30 backdrop-blur-md rounded-[10px] flex flex-col items-center overflow-y-auto max-h-[95vh] p-4 border border-white/10 shadow-xl"
        // style={{
        //       backgroundImage: `url("https://thfvnext.bing.com/th/id/OIP.MFrXIyB_WmbCoFBp3noaYgHaER?w=277&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3")`,
        //     }}
        >
          <div className="mt-4 flex flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center h-16 w-12 rounded-[40px] border-2 border-white">
              <span className="text-5xl font-extrabold text-red-300">A</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-wider text-center md:text-left">
              Ali <br /> Husnain
            </div>
          </div>

          <div
            className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[180px] md:w-[230px] 
mt-4 bg-cover bg-no-repeat rounded-[10px] 
shadow-lg shadow-blue-400/30 ring-2 ring-blue-400/30 hover:ring-4 hover:ring-blue-400/50 hover:scale-105 transition duration-300 ease-in-out"


            style={{
              backgroundImage: `url("https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/69751898_1133899650333707_3597988021909061632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHKF7STgwwYAxmrwA5lFWqZxnaV9bc-HUPGdpX1tz4dQ5cSyn7kBMCl_DZ_n20YkJ_vBMIDhCNCpst-sxKsVudG&_nc_ohc=m3chnhS9JMMQ7kNvwFA-XcI&_nc_oc=AdlkydAaPXr7DemOW-ayZHfbmgLB1uaHczuvhy5scwtUwW5RrvFI--2Kd4pmGKdnh4g&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=KL18K0sOtOpKtM3A79CBZA&oh=00_AfWbCccz1PGfnNdchlwH5RnU8DuZ3acKVyZndc8muX9sgQ&oe=68D35162")`,
            }}
          ></div>

          <div className="text-center">
            <p className="text-gray-400">Specialization:</p>
            <p className="-mt-1">MERN Stack Developer</p>
            <p className="text-gray-400 -mt-1">Based in:</p>
            <p className="-mt-2">Lahore, Pakistan</p>
          </div>

          <div className="flex mt-1 gap-3">
            {socials.map(({ icon: Icon, link },idx) => (
              <a
                key={idx}
                    href={link}
      target="_blank"
      rel="noopener noreferrer"
                className="group relative w-10 h-10 overflow-hidden border rounded-2xl cursor-pointer bg-[#ebf0f7]"
              >
                <div className="h-20 flex flex-col transition-transform duration-300 group-hover:-translate-y-10 items-center">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            onClick={scrollToContact}
            className="py-2 px-2 mt-4 rounded-xl font-semibold text-white 
  bg-gradient-to-r from-red-500 to-orange-400 
  shadow-lg shadow-red-500/50 
  hover:from-red-600 hover:to-orange-500 
  hover:shadow-red-500/80 hover:scale-105 
  transition duration-300 ease-in-out text-center w-full"
          >
            Let's Work Together!
          </div>

 <button className="group relative overflow-hidden w-full h-10 rounded-2xl font-medium text-lg shadow-md mt-3 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,100,50,0.8)]">
  <a
    href="https://www.upwork.com/freelancers/~01b49b970f74de6174"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="h-20 flex flex-col transition-transform duration-500 group-hover:-translate-y-10">
      <span className="h-10 flex items-center justify-center">
        🚀 Find me on UpWork
      </span>
      <span className="h-10 flex items-center justify-center">
        🚀 Find me on UpWork
      </span>
    </div>
  </a>
</button>

          
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-3/4 flex mx-auto flex-col px-4 pt-[72px] md:pt-[88px] overflow-y-auto max-h-screen">

        {/* Mobile Navbar */}
        <div className="md:hidden fixed top-147 ml-5 rounded-4xl py-2 w-[80%] bg-black/30 backdrop-blur-md">
          <div className="flex w-fit min-w-full px-3 justify-around  items-center gap-5 text-xs font-medium overflow-x-auto scrollbar-hide">
            {menuItems.map((item, index) => {
              const id = getId(item);
              const isActive = activeLink === id;

              return (
                <a
                  key={index}
                  href={id === "home" ? "#" : `#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => setActiveLink(id), 500);
                    }
                  }}
                  className={`flex-shrink-0 px-2  -mr-4 py-1 rounded-2xl transition-all duration-300 flex items-center gap-1 text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-sm ${
                    item === "Let's talk"
                      ? "!bg-red-500 !text-white hover:bg-red-700"
                      : isActive
                      ? "scale-105 bg-white/30 shadow-md shadow-blue-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="text-base ">
                    {item === "Let's talk" ? "📩" : icons[id]}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex fixed top-5 z-50 w-full md:w-3/4 px-2 py-3 justify-start gap-6 text-sm sm:text-base md:text-base mx-auto">
          {menuItems.map((item, index) => {
            const id = getId(item);
            const isActive = activeLink === id;

            return (
              <a
                key={index}
                href={id === "home" ? "#" : `#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => setActiveLink(id), 500);
                  }
                }}
                className={`px-6 py-3 rounded-4xl flex items-center gap-1 transition-all duration-300 text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-sm ${
                  item === "Let's talk"
                    ? "!bg-red-500 !text-white shadow-amber-300 hover:bg-red-700"
                    : isActive
                    ? "scale-105 bg-white/30 shadow-md shadow-blue-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <span>{item}</span>
              </a>
            );
          })}
        </div>

        {/* Hero Section */}
       {/* Hero Section */}
<div className="mt-8 flex flex-col justify-center" id="home">
  <div className="transition-all duration-700 transform">
    <span className="bg-slate-800 text-white inline-flex justify-center items-center py-2 px-4 text-sm rounded-xl gap-2 border border-slate-700 shadow-md">
      <span className="text-amber-400">⭐</span>
      Let's collaborate!
    </span>
  </div>

  <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
    {/* Left Side Content */}
    <div className="flex-1">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
        I'm Ali Husnain
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-white">
        MERN Stack <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Developer
        </span>
      </h1>

      {/* Professional summary */}
      <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
        Passionate about creating efficient, scalable web applications with cutting-edge technologies. 
        Focused on delivering exceptional user experiences through clean code and innovative solutions.
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="#portfolio"
          className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 border border-slate-600 hover:border-slate-500"
        >
          👨‍💻 View My Work
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1vKycvL64Cc3Fbd7nBIODOpUt0r5mGhvK"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
        >
          <FaDownload className="text-sm" />
          Download CV
        </a>
      </div>
    </div>

    {/* Right Side Stats */}
    <div className="flex gap-6 mt-6 md:mt-0">
      {/* Major Projects */}
      <div className="flex flex-col items-center group cursor-pointer p-5 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-600">
        <div className="p-3 bg-slate-700/50 rounded-full mb-3 group-hover:bg-emerald-900/30 transition-colors duration-300">
          <FaProjectDiagram className="text-emerald-400 text-3xl group-hover:text-emerald-300 transition-colors duration-300" />
        </div>
        <p className="text-sm text-slate-300 mt-2">Major Projects</p>
        <p className="font-bold text-emerald-400 text-xl group-hover:scale-110 transition-transform duration-300">
          5+
        </p>
      </div>

      {/* Mini Projects */}
      <div className="flex flex-col items-center group cursor-pointer p-5 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-slate-600">
        <div className="p-3 bg-slate-700/50 rounded-full mb-3 group-hover:bg-blue-900/30 transition-colors duration-300">
          <FaLaptopCode className="text-blue-400 text-3xl group-hover:text-blue-300 transition-colors duration-300" />
        </div>
        <p className="text-sm text-slate-300 mt-2">Mini Projects</p>
        <p className="font-bold text-blue-400 text-xl group-hover:scale-110 transition-transform duration-300">
          10+
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Other Sections */}
        <div className="mt-20">
          <div id="portfolio" className="min-h-screen w-full scroll-mt-36">
            <ProjectsSection/>
          </div>
          <div id="aboutme" className="min-h-screen w-full scroll-mt-36">
            <AboutMe/>
          </div>
          <div id="resume" className="min-h-screen w-full scroll-mt-36">
            <Resume />
          </div>
          <div id="contact" className="min-h-screen w-full scroll-mt-36">
            <Contact />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HomePage;
