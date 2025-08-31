import { useState } from 'react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('major');

  return (
    <section id="projects" className="py-16 relative">
      {/* Dark Fluid Mesh Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20"
             style={{
               backgroundImage: `radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
                                 radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
                                 radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)`,
               backgroundSize: '50% 50%, 50% 50%, 50% 50%',
               backgroundPosition: '0 0, 100% 0, 50% 100%'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my projects that demonstrate my skills and expertise
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg shadow-sm p-1 flex">
            <button
              onClick={() => setActiveTab('major')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'major' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              Major Projects
            </button>
            <button
              onClick={() => setActiveTab('mini')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'mini' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
            >
              Mini Projects
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'major' ? <MajorProjectsDark /> : <MiniProjectsDark />}
      </div>
    </section>
  );
};

// Dark version of MajorProjects
const MajorProjectsDark = () => {
  const [activeProject, setActiveProject] = useState(0);

  const majorProjects = [
    {
      title: "Ladies Tailor App",
      description: "A full-featured React.js application for connecting customers with professional tailors. Features user authentication, appointment booking, and a gallery of designs.",
      link: "https://ladies-tailor-uae.vercel.app",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://th.bing.com/th/id/OIP.1DDBZWOt9mYkB96252klFgHaE8?w=283&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
      title: "CRUD App (Integrity API)",
      description: "A complete CRUD application with user authentication and data management capabilities. Built with the MERN stack and integrated with a third-party API.",
      link: "#",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Amazon Clone",
      description: "A responsive front-end clone of the Amazon e-commerce platform. Built with HTML and CSS, featuring product listings and a shopping cart interface.",
      link: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "CarSwitch Clone",
      description: "A responsive clone of the CarSwitch platform for buying and selling cars. Implemented with HTML and CSS, featuring vehicle listings and search functionality.",
      link: "#",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://www.bing.com/th/id/OIP._31FEzGxfeqZ9OfQ221hGgHaEK?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      title: "Gym Management System",
      description: "A comprehensive MERN stack application for managing gym memberships, schedules, and payments. Includes admin dashboard and member portal.",
      link: "#",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Project Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 rounded-lg p-1 flex flex-wrap justify-center">
          {majorProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeProject === index 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'}`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Active Project Display */}
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto border border-gray-700 transform transition-transform duration-300 hover:scale-[1.02]">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2 relative overflow-hidden">
            <img 
              className="h-64 w-full object-cover md:h-full transition-transform duration-500 hover:scale-110" 
              src={majorProjects[activeProject].image} 
              alt={majorProjects[activeProject].title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">
              Featured Project
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {majorProjects[activeProject].title}
            </h3>
            <p className="mt-3 text-gray-300">
              {majorProjects[activeProject].description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {majorProjects[activeProject].technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-700 text-blue-300 text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a 
                href={majorProjects[activeProject].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
              >
                View Project 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Grid */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">All Major Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-700 transform hover:-translate-y-2 group"
              onClick={() => setActiveProject(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">View Details</span>
                  <svg className="w-4 h-4 text-blue-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dark version of MiniProjects
const MiniProjectsDark = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const miniProjects = [
    {
      title: "Image Gallery",
      description: "A responsive image gallery with filtering and lightbox features.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "To-Do List App",
      description: "A task management application with add, edit, delete and completion tracking.",
      category: "frontend",
      technologies: ["React", "LocalStorage"],
      link: "#",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Music Player",
      description: "A sleek music player interface with play, pause, skip and volume controls.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Memory Game",
      description: "A card matching game with timer and move counter to test your memory.",
      category: "game",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Calculator",
      description: "A functional calculator with basic arithmetic operations and a clean UI.",
      category: "frontend",
      technologies: ["React", "CSS"],
      link: "#",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "WebCam App",
      description: "An application that accesses the device camera for photos and videos.",
      category: "webapi",
      technologies: ["JavaScript", "WebRTC"],
      link: "#",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather App",
      description: "Displays current weather and forecast using a weather API.",
      category: "api",
      technologies: ["React", "API Integration"],
      link: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Recipe Finder",
      description: "Search for recipes based on ingredients you have available.",
      category: "api",
      technologies: ["React", "API Integration"],
      link: "#",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Drawing App",
      description: "A canvas-based drawing application with multiple tools and colors.",
      category: "webapi",
      technologies: ["HTML5 Canvas", "JavaScript"],
      link: "#",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'api', name: 'API Integration' },
    { id: 'webapi', name: 'Web APIs' },
    { id: 'game', name: 'Games' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? miniProjects 
    : miniProjects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 rounded-lg shadow-sm p-1 flex flex-wrap justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-700">
            <div className="relative overflow-hidden">
              <img 
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={project.image} 
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
              <span className="absolute top-3 right-3 px-2 py-1 bg-blue-900 text-blue-300 text-xs font-medium rounded-full">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors group/view"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-1 transform group-hover/view:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;