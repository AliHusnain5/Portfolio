import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
// import For from "./For";
// import AboutMe from "./AboutMe";
// import Resume from "./Resume";
// import Contact from "./Contact";

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
    const sections = ["home", "portfolio", "aboutme", "resume", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );
          setActiveLink(mostVisible.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
{/*     
       <div className="w-full md:w-1/3 flex justify-center p-4 mt-15">
        <div className="w-full max-w-[400px] bg-slate-500/50 rounded-[40px] flex flex-col items-center overflow-y-auto max-h-[80vh] p-4">
          
          <div className="mt-4 flex flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center h-20 w-14 rounded-[40px] border-2 border-white">
              <span className="text-6xl font-extrabold">A</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white tracking-wider text-center md:text-left">
              Ali <br /> Husnain
            </div>
          </div>

          
          <div
            className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px] mt-4 bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px]"
            style={{
              backgroundImage: `url("https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/123007344_1540656889657979_2599613634740453774_n.jpg?stp=c0.112.1019.1019a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHLxkbk3iuZeyJorGlq0SwDv7QeeFYv1_u_tB54Vi_X-9qW4XQH3W9MNJZvocudKU6S2teW2SDOmBROlKFGKWo8&_nc_ohc=aqqE3ZQYpM0Q7kNvwFiiEUk&_nc_oc=Adm231JgPif47GzprUQAjLKpsip8qBWlsHr8CA-FzMtux1rlNAAaO_L_w7EHLjIfY5w&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=ypAHZwFGMlzP2lMpLj5mSg&oh=00_AfTqsqJqHXUBNuBpKoqJULAp-Z3BGFrRuYtt9WI3OyBglA&oe=689214B3")`,
            }}
          ></div>

          
          <div className="text-center mt-4 text-xl">
            <p className="text-gray-400">Specialization:</p>
            <p className="-mt-2">Mern-Stack-Developer</p>
            <p className="text-gray-400 mt-2">Based in:</p>
            <p className="-mt-2">Lahore, Pakistan</p>
          </div>

        
          <div className="flex mt-4 gap-4">
            {[FaFacebookF, FaPinterestP, FaInstagram, IoLogoGoogle].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="group relative py-3 px-3 border rounded-2xl cursor-pointer flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className="absolute top-[110%] opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-black text-white px-2 py-1 rounded-md mt-1 whitespace-nowrap z-10">
                    {Icon.name.replace("Fa", "")}
                  </span>
                </div>
              )
            )}
          </div>

        
          <div
            onClick={scrollToContact}
            className="py-3 px-4 mt-4 text-xl bg-red-500 rounded-2xl cursor-pointer hover:bg-red-600 transition text-center w-full"
          >
            Let's Work Together!
          </div>
        </div>
      </div>  */}

      {/* Right Content */}
      <div className="relative w-full md:w-3/4 flex flex-col px-4 pt-[72px] md:pt-[88px] overflow-y-auto max-h-screen">
        {/* Mobile Navbar */}
        {/* <div className="md:hidden fixed top-5 z-50 w-full px-1 py-3 bg-black/30 backdrop-blur-md">
          <div className="flex w-fit min-w-full justify-start gap-5 text-xs font-medium overflow-x-auto scrollbar-hide">
            {menuItems.map((item, index) => {
              const id = getId(item);
              return (
                <a
                  key={index}
                  href={id === "home" ? "#" : `#${id}`}
                  onClick={(e) => {
                    if (id === "home") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`flex-shrink-0 px-4 -mr-3 py-2 rounded-2xl transition-all duration-300 flex items-center gap-1 
                    ${
                      item === "Let's talk"
                        ? "bg-red-500 text-white hover:bg-red-700"
                        : `bg-white/20 text-gray-300 hover:text-white transition-opacity duration-500 ${
                            activeLink === id
                              ? "opacity-100 text-white shadow-md shadow-blue-500 scale-105 border-b-2 border-blue-400 bg-white/30"
                              : "opacity-50 hover:opacity-80"
                          }`
                    }`}
                >
                  <span className="text-base">
                    {item === "Let's talk" ? "📩" : icons[id]}
                  </span>
                </a>
              );
            })}
          </div>
        </div> */}

        {/* Desktop Navbar */}
        {/* <div className="hidden md:flex fixed top-5 z-50 w-full md:w-3/4 px-2 py-3 backdrop-blur-md justify-start gap-6 text-sm sm:text-base md:text-xl font-medium">
          {menuItems.map((item, index) => {
            const id = getId(item);
            return (
              <a
                key={index}
                href={id === "home" ? "#" : `#${id}`}
                onClick={(e) => {
                  if (id === "home") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`px-6 py-4 rounded-4xl transition-all duration-300 flex items-center gap-1 
                  ${
                    item === "Let's talk"
                      ? "bg-red-500 text-white hover:bg-red-700"
                      : `bg-white/20 text-gray-300 hover:text-white transition-opacity duration-500 ${
                          activeLink === id
                            ? "opacity-100 text-white shadow-md shadow-blue-500 scale-105 border-b-2 border-blue-400 bg-white/30"
                            : "opacity-50 hover:opacity-80"
                        }`
                  }`}
              >
                <span>{item}</span>
              </a>
            );
          })}
        </div> */}

        {/* Hero Section */}
        <div className="mt-[60px]">
          <span className="bg-black text-white inline-flex justify-center items-center py-2 px-6 text-sm sm:text-lg rounded-2xl gap-2">
            <span>⭐</span>
            Let's meet!
          </span>
        </div>

        <div className="mt-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            I'm Ali Husnain
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mt-2">
            Mern Stack <br />
            <span className="bg-green-500 inline-block px-2 rounded">
              Developer
            </span>
          </h1>
        </div>

        {/* For Component */}
         {/* <div className="flex justify-end w-full mt-10">
          <For />
        </div>  */}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="group relative overflow-hidden border border-white w-full sm:w-40 h-16 rounded-4xl text-lg font-medium">
            <div className="h-32 flex flex-col transition-transform duration-300 group-hover:-translate-y-16">
              <span className="h-16 flex items-center justify-center gap-2">
                👨‍💻 My Work
              </span>
              <span className="h-16 flex items-center justify-center gap-2">
                👨‍💻 My Work
              </span>
            </div>
          </button>

          <button className="group mt-2 relative overflow-hidden w-full sm:w-40 h-12 rounded-xl text-lg font-medium">
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

        {/* Sections */}
         {/* <div className="mt-20 space-y-20">
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
        </div>  */}
      </div>
    </section>
  );
};

export default HomePage;
