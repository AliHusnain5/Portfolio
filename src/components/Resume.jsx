import React from "react";
import { FaGraduationCap, FaBriefcase, FaAward, FaDownload } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "Allama Iqbal Open University (AIOU)",
      field: "Computer Science",
      period: "2020 - 2024",
      description: "Specialized in software development and web technologies."
    },
    {
      degree: "ICS (Intermediate in Computer Science)",
      institution: "Lahore Board",
      period: "2018 - 2020",
      description: "Completed with focus on programming fundamentals and computer systems."
    }
  ];

  const experience = [
    {
      position: "MERN Stack Developer",
      company: "Upwork Freelance",
      period: "2025 - Present",
      description: "Working with various clients to build full-stack web applications using MongoDB, Express.js, React, and Node.js. Specializing in creating responsive and efficient solutions."
    },
    {
      position: "Frontend Developer",
      company: "Internship",
      period: "2024 - 2025",
      description: "Developed user interfaces for web applications, implemented modern design principles, and collaborated with team members on project development."
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "HTML/CSS", level: 92 },
    { name: "Tailwind CSS", level: 87 },
    { name: "Git/GitHub", level: 83 }
  ];

  return (
    <section id="resume" className="min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      {/* New Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A detailed overview of my education, experience, and skills as a MERN Stack Developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition duration-300">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.degree}</h4>
                    <p className="text-blue-400 mb-2">{item.institution}</p>
                    {item.field && <p className="text-gray-400 mb-2">{item.field}</p>}
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"></div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition duration-300">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full mb-3">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.position}</h4>
                    <p className="text-blue-400 mb-2 flex items-center">
                      {item.company.includes("Upwork") && <SiUpwork className="mr-2 text-green-400" />}
                      {item.company}
                    </p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-500 p-3 rounded-lg mr-4">
              <FaAward className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">My Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-16">
          <a 
            href="https://drive.google.com/uc?export=download&id=1vKycvL64Cc3Fbd7nBIODOpUt0r5mGhvK"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
          >
            <FaDownload className="mr-3" />
            Download CV
          </a>
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

export default Resume;