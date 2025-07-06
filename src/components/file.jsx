import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import For from "./For";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contact from "./Contact";
import { FaDownload } from "react-icons/fa";
import { FaInstagram, FaPinterestP, FaFacebookF } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";

const HomePage = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = ["home", "portfolio", "aboutme", "resume", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
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

  return (
    <section
      className="flex flex-col md:flex-row bg-cover bg-center bg-slate-700 w-full min-h-screen text-white"
      id="home"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/3 text-2xl font-bold flex justify-center items-center p-4">
        <div className="border-2 h-auto md:h-[700px] w-full max-w-[400px] bg-slate-500/50 rounded-[40px] flex flex-col items-center p-4">
          {/* Profile Name */}
          <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
            <div className="flex items-center justify-center h-20 w-14 rounded-[40px] border-2 border-white">
              <span className="text-6xl font-extrabold">A</span>
            </div>
            <div className="text-4xl font-bold text-white tracking-wider text-center md:text-left">
              Ali <br /> Husnain
            </div>
          </div>

          {/* Image */}
          <div
            className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] mt-6 bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px]"
            style={{
              backgroundImage: `url("https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/122899767_1539463159777352_5641944951789949152_n.jpg?...")`,
            }}
          ></div>

          {/* Info */}
          <div className="text-center mt-4">
            <p className="text-gray-400">Specialization:</p>
            <p className="-mt-2">Mern-Stack-Developer</p>
            <p className="text-gray-400 mt-2">Based in:</p>
            <p className="-mt-2">Lahore, Pakistan</p>
          </div>

          {/* Social Icons */}
          <div className="flex mt-4 gap-4 flex-wrap justify-center">
            {[FaFacebookF, FaPinterestP, FaInstagram, IoLogoGoogle].map(
              (Icon, index) => (
                <div key={index} className="py-3 px-3 border rounded-2xl">
                  <Icon className="w-6 h-6" />
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <div
            onClick={scrollToContact}
            className="py-4 px-6 mt-4 bg-red-500 rounded-4xl cursor-pointer hover:bg-red-600 transition text-center"
          >
            Let's Work Together!
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col  md:w-3/4 items-start gap-6 p-6 justify-between overflow-y-auto h-screen relative">
        {/* Navbar */}
        <div className="fixed z-50 top-0 right-0   md:w-auto px-4 py-4 flex gap-4 flex-wrap text-base md:text-xl font-medium bg-slate-700/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:absolute md:right-0">
          {["Home", "Portfolio", "About Me", "Resume", "Contact", "Let's talk"].map(
            (item, index) => {
              const trueId =
                item === "Contact" || item === "Let's talk"
                  ? "contact"
                  : item.replace(/\s+/g, "").toLowerCase();

              return (
                <a
                  key={index}
                  href={trueId === "home" ? "#" : `#${trueId}`}
                  onClick={(e) => {
                    if (trueId === "home") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-2 rounded-4xl transition duration-300 shadow-lg flex items-center gap-2 ${
                    item === "Let's talk"
                      ? "bg-red-500 text-white hover:bg-red-700"
                      : `bg-white/20 text-gray-300 hover:text-white ${
                          activeLink === trueId
                            ? "border-b-4 border-blue-500 text-white"
                            : ""
                        }`
                  }`}
                >
                  {item === "Let's talk" ? (
                    <>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
                        alt="Chat"
                        className="w-5 h-5"
                      />
                      {item}
                    </>
                  ) : (
                    item
                  )}
                </a>
              );
            }
          )}
        </div>

        {/* Header */}
        <div className="mt-40">
          <span className="bg-black text-white w-[185px] flex justify-center items-center py-3 px-8 text-lg rounded-2xl gap-2">
            <span>⭐</span>
            Let's meet!
          </span>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[90px]">
            I'm Ali Husnain
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[90px]">
            Mern Stack <br />
            <p className="bg-green-500 inline-block">Developer</p>
          </h2>
        </div>

        {/* Custom Component */}
        <div className="flex justify-end w-full h-[50px] mt-10">
          <For />
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-wrap gap-4">
          <button className="group relative overflow-hidden border border-white w-40 h-16 rounded-4xl text-lg font-medium">
            <div className="h-32 flex flex-col transition-transform duration-300 group-hover:-translate-y-16">
              <span className="h-16 flex items-center justify-center gap-2">👨‍💻 My Work</span>
              <span className="h-16 flex items-center justify-center gap-2">👨‍💻 My Work</span>
            </div>
          </button>

          <button className="group relative overflow-hidden w-40 h-12 rounded-lg text-lg font-medium">
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
        <div className="mt-20 w-full">
          <div id="portfolio" className="min-h-screen">
            <Portfolio />
          </div>
          <div id="aboutme" className="min-h-screen">
            <AboutMe />
          </div>
          <div id="resume" className="min-h-screen">
            <Resume />
          </div>
          <div id="contact" className="min-h-screen">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
