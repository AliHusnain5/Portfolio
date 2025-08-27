import React from "react";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="w-full py-10 px-4">
      {/* Center wrapper */}
      <div className="max-w-[1200px] mx-auto text-shadow-blue-300">
        {/* Title */}
        <div>
        <span className="bg-black text-white w-fit flex justify-center items-center py-1 px-3 rounded-2xl gap-2">
              <span>⭐</span>
              About me
            </span>
        </div>

        {/* Heading */}
        <div className="mt-5 sm:mt-7 ">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl ">
            Crafting user-friendly <br /> interfaces with Mern Stack
          </h1>
        </div>

        {/* Description + Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-base sm:text-lg md:text-base mt-10">
          <div className="leading-relaxed">
            I'm a Front-End Developer with a passion for creating user-friendly, visually appealing websites. I specialize in building responsive, accessible web interfaces using HTML, CSS, and JavaScript. My focus lies in crafting intuitive and engaging user experiences through a combination of design and functionality. I'm a dedicated problem-solver, and always eager to learn and explore new technologies to enhance my skills.
            <br /><br />
            I'm eager to contribute my skills to projects that make a positive impact, and I'm always looking for opportunities to collaborate with talented designers and developers. I'm particularly enthusiastic about collaborating on projects that push creative boundaries and embrace innovation in web development.
          </div>

          {/* Info Grid */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-gray-300">Name</span>
              Ali Husnain
            </div>
            <div className="flex flex-col">
              <span className="text-gray-300">Phone</span>
              +923094946763
            </div>
            <div className="flex flex-col">
              <span className="text-gray-300">Email</span>
              alihusnain7630@gmail.com
            </div>
            <div className="flex flex-col">
              <span className="text-gray-300">Location</span>
              Lahore
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10">
          <button className="group relative overflow-hidden border bg-gray-700 border-white  sm:w-80 h-14 rounded-4xl text-base sm:text-lg font-medium  block">
            <div className="h-28 flex flex-col transition-transform duration-300 group-hover:-translate-y-14">
              <span className="h-14 flex items-center justify-center gap-2">
                Download My Resume <FaDownload />
              </span>
              <span className="h-14 flex items-center justify-center gap-2">
                Download My Resume <FaDownload />
              </span>
            </div>
          </button>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col lg:flex-row gap-10 mt-12">
          {/* Card 1 */}
          <div className="border-2 h-[500px] w-full lg:w-1/2 bg-slate-800 rounded-[40px] flex flex-col items-center justify-between p-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wider text-center">
                Mern Stack Development
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {["React", "Express", "MongoDB"].map((tech, index) => (
                  <div key={index} className="border border-gray-400 text-white py-1 px-3 rounded-lg">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="text-white text-center px-6">
                I build dynamic and interactive websites using React, Express, and MongoDB.
              </div>
            </div>

            <div
              className="h-[300px] w-full bg-cover bg-center bg-no-repeat rounded-[30px]"
              style={{
                backgroundImage: `url("https://portfolio-fatimashehzadi.vercel.app/img/services/1200x900_s01.webp")`,
              }}
            ></div>
          </div>

          {/* Card 2 */}
          <div className="border-2 h-[500px] w-full lg:w-1/2 bg-white text-black rounded-[40px] flex flex-col items-center justify-between p-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center">
                Mern Stack Development
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                {["React", "Express", "MongoDB"].map((tech, index) => (
                  <div key={index} className="border border-gray-400 py-1 px-3 rounded-lg">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="text-center px-6">
                I build dynamic and interactive websites using React, Express, and MongoDB.
              </div>
            </div>

            <div
              className="h-[300px] w-full bg-cover bg-center bg-no-repeat rounded-[30px]"
              style={{
                backgroundImage: `url("https://wallpaperbat.com/img/820056-mern-stack-wallpaper.jpg")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
