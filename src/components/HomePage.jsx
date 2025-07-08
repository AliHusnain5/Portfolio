import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contact from "./Contact";

import {
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

const icons = {
  home: <FaHome />,
  portfolio: <FaSuitcase />,
  aboutme: <FaUser />,
  resume: <FaFileAlt />,
  contact: <FaEnvelope />,
  letstalk: <IoMdSend />,
};

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

  const menuItems = [
    "Home",
    "Portfolio",
    "About Me",
    "Resume",
    "Contact",
    "Let's talk",
  ];

  const getId = (item) =>
    item === "Contact" || item === "Let's talk"
      ? "contact"
      : item.replace(/\s+/g, "").toLowerCase();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row w-full min-h-screen text-white bg-slate-700 bg-cover bg-center"
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/3 flex justify-center p-4 mt-3">
        <div className="w-full max-w-[290px] bg-blue-300/10 rounded-[40px] flex flex-col items-center overflow-y-auto max-h-[95vh] p-4">
          <div className="mt-4 flex flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center h-16 w-12 rounded-[40px] border-2 border-white">
              <span className="text-5xl font-extrabold text-red-300">A</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-wider text-center md:text-left">
              Ali <br /> Husnain
            </div>
          </div>

          <div
            className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[180px] md:w-[230px] mt-4 bg-cover bg-no-repeat bg-amber-300 rounded-[27px]"
            style={{
              backgroundImage: `url("https://scontent.fkhi17-2.fna.fbcdn.net/v/t1.6435-9/123007344_1540656889657979_2599613634740453774_n.jpg?stp=c0.112.1019.1019a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHLxkbk3iuZeyJorGlq0SwDv7QeeFYv1_u_tB54Vi_X-9qW4XQH3W9MNJZvocudKU6S2teW2SDOmBROlKFGKWo8&_nc_ohc=aqqE3ZQYpM0Q7kNvwFiiEUk&_nc_oc=Adm231JgPif47GzprUQAjLKpsip8qBWlsHr8CA-FzMtux1rlNAAaO_L_w7EHLjIfY5w&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=MC6tK6PJJjDCmd-14nqgNA&oh=00_AfTrO6jr7R821DXxCL4rARAVlcGs7Oz0R4Jpo77Lf3-Rwg&oe=68947F73")`,
            }}
          ></div>

          <div className="text-center">
            <p className="text-gray-400">Specialization:</p>
            <p className="-mt-1">Mern-Stack-Developer</p>
            <p className="text-gray-400 -mt-1">Based in:</p>
            <p className="-mt-2">Lahore, Pakistan</p>
          </div>
<div className="flex mt-1 gap-3">
  {[FaFacebookF, FaPinterestP, FaInstagram, IoLogoGoogle].map((Icon, i) => (
    <div
      key={i}
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
    </div>
  ))}
</div>


          <div
            onClick={scrollToContact}
            className="py-2 px-2 mt-4 bg-red-500 rounded-2xl cursor-pointer hover:bg-red-600 transition text-center w-full"
          >
            Let's Work Together!
          </div>

          <button className="group relative overflow-hidden bg-red-500 hover:bg-red-600 mt-3 text-white w-full h-10 rounded-2xl font-medium text-lg shadow-md transition-all">
            <div className="h-20 flex flex-col transition-transform duration-300 group-hover:-translate-y-10">
              <span className="h-10 flex items-center justify-center">
                Find me on Fiverr
              </span>
              <span className="h-10 flex items-center justify-center">
                Find me on Fiverr
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-3/4 flex flex-col px-4 pt-[72px] md:pt-[88px] overflow-y-auto max-h-screen">
        {/* Mobile Navbar */}
        <div className="md:hidden fixed top-5 z-50 w-full px-1 py-3 bg-black/30 backdrop-blur-md">
          <div className="flex w-fit min-w-full justify-start gap-5 text-xs font-medium overflow-x-auto scrollbar-hide">
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
                  className={`flex-shrink-0 px-4 -mr-3 py-2 rounded-2xl transition-all duration-300 flex items-center gap-1 text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-sm ${
                    item === "Let's talk"
                      ? "!bg-red-500 !text-white hover:bg-red-700"
                      : isActive
                      ? "scale-105 bg-white/30 shadow-md shadow-blue-500"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="text-base">
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
                    ? "!bg-red-500 !text-white hover:bg-red-700"
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
        <div className="mt-[90px]" id="home">
          <span className="bg-black text-white inline-flex justify-center items-center py-2 px-6 text-sm sm:text-lg rounded-2xl gap-2">
            <span>⭐</span>
            Let's meet!
          </span>

          <div className="mt-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
              I'm Ali Husnain
            </h1>
            <h1 className="text-4xl sm:text-4xl md:text-6xl font-medium mt-2">
              Mern Stack <br />
              <span className="bg-green-500 inline-block px-2 rounded">
                Developer
              </span>
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-20">
            <button className="group relative overflow-hidden border border-white w-full sm:w-40 h-12 rounded-4xl text-lg font-medium">
              <div className="h-24 flex flex-col transition-transform duration-300 group-hover:-translate-y-12">
                <span className="h-12 flex items-center justify-center gap-2">
                  👨‍💻 My Work
                </span>
                <span className="h-12 flex items-center justify-center gap-2">
                  👨‍💻 My Work
                </span>
              </div>
            </button>

            <button className="group relative overflow-hidden w-full sm:w-40 h-12 rounded-xl text-lg font-medium">
              <div className="h-24 flex flex-col transition-transform duration-300 group-hover:-translate-y-12">
                <span className="h-12 flex items-center justify-center gap-2">
                  Download CV <FaDownload />
                </span>
                <span className="h-12 flex items-center justify-center gap-2">
                  Download CV <FaDownload />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Sections with IDs outside */}
        <div className="mt-20 ">
          <div id="portfolio" className="min-h-screen w-full scroll-mt-36">
            <Portfolio />
          </div>
          <div id="aboutme" className="min-h-screen w-full scroll-mt-36">
            <AboutMe />
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
