import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiUpwork } from "react-icons/si";

const AboutMe = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
    { name: "Express.js", icon: <SiExpress className="text-gray-800" />, level: 80 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 87 },
  ];

  return (
    <section id="aboutme" className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-500 rounded-full absolute -z-10 mt-4 ml-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <img
                  src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/69751898_1133899650333707_3597988021909061632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHKF7STgwwYAxmrwA5lFWqZxnaV9bc-HUPGdpX1tz4dQ5cSyn7kBMCl_DZ_n20YkJ_vBMIDhCNCpst-sxKsVudG&_nc_ohc=m3chnhS9JMMQ7kNvwFA-XcI&_nc_oc=AdlkydAaPXr7DemOW-ayZHfbmgLB1uaHczuvhy5scwtUwW5RrvFI--2Kd4pmGKdnh4g&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=KL18K0sOtOpKtM3A79CBZA&oh=00_AfWbCccz1PGfnNdchlwH5RnU8DuZ3acKVyZndc8muX9sgQ&oe=68D35162"
                  alt="Ali Husnain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              MERN Stack Developer & UI/UX Enthusiast
            </h3>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Ali Husnain, a passionate MERN Stack Developer based in Lahore, Pakistan. I hold a Bachelor's degree in Computer Science from Allama Iqbal Open University (AIOU) and completed my ICS from Lahore Board.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I started my freelance journey on Upwork in 2025 and have gained one year of experience in building dynamic, responsive web applications. With a strong foundation in JavaScript and modern web technologies, I create efficient and scalable solutions that combine technical expertise with an eye for design.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center">
                <div className="mr-3 text-purple-400">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-400">1+ Year Freelance</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 text-purple-400">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-400">Bachelors from AIOU</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-3 text-purple-400">
                  <SiUpwork className="text-xl text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Platform</h4>
                  <p className="text-gray-400">Upwork Freelancer</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 text-purple-400">
                  <FaCode className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-gray-400">15+ Completed</p>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Technical <span className="text-purple-400">Skills</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  <span className="ml-auto text-white">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience/Education Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg mr-3">
                <FaBriefcase />
              </span>
              Experience
            </h3>
            
            <div className="pl-10 border-l-2 border-purple-500/30">
              <div className="relative mb-8">
                <div className="absolute -left-12 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <h4 className="text-xl font-semibold text-white">MERN Stack Developer</h4>
                <p className="text-purple-400 flex items-center">
                  <SiUpwork className="mr-2 text-green-400" />
                  Upwork Freelance | 2025 - Present
                </p>
                <p className="text-gray-400 mt-2">
                  Working with various clients to build full-stack web applications using MongoDB, Express.js, React, and Node.js. Specializing in creating responsive and efficient solutions.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <h4 className="text-xl font-semibold text-white">Frontend Developer</h4>
                <p className="text-purple-400">Internship | 2024</p>
                <p className="text-gray-400 mt-2">
                  Developed user interfaces for web applications, implemented modern design principles, and collaborated with team members on project development.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg mr-3">
                <FaGraduationCap />
              </span>
              Education
            </h3>
            
            <div className="pl-10 border-l-2 border-purple-500/30">
              <div className="relative mb-8">
                <div className="absolute -left-12 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <h4 className="text-xl font-semibold text-white">Bachelor's in Computer Science</h4>
                <p className="text-purple-400">Allama Iqbal Open University (AIOU) | 2020 - 2024</p>
                <p className="text-gray-400 mt-2">
                  Specialized in software development and web technologies. Graduated with focus on programming fundamentals and computer systems.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <h4 className="text-xl font-semibold text-white">ICS (Intermediate in Computer Science)</h4>
                <p className="text-purple-400">Lahore Board | 2018 - 2020</p>
                <p className="text-gray-400 mt-2">
                  Completed with focus on programming fundamentals and computer systems. Built a strong foundation for further studies in computer science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;