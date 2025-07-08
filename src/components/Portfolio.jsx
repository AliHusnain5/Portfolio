import React from "react";

const Portfolio = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1400px] mx-auto " id="Portfolio">
      {/* Title Badge */}
      <span className="bg-black text-white w-fit flex justify-center items-center py-2 sm:py-3 px-6 sm:px-8  sm:text-lg rounded-2xl gap-2">
        <span>⭐</span>
        Portfolio
      </span>

      {/* Heading */}
      <div className="mt-6 sm:mt-8">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          Check out my Latest <br />
          Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 mt-12">
        {/* Reusable Card Component */}
        {[
          {
            title: "Ladies Tailor Uae",
            tech: "React JS",
            bg: "https://th.bing.com/th/id/R.99d93e6dce34937a223d7b151997e337?rik=bveX3UdmiDC5zg&pid=ImgRaw&r=0",
            darkText: true,
          },
          {
            title: "Gym Management",
            tech: null,
            bg: "https://tse4.mm.bing.net/th/id/OIP.T71XY5zkBx0xtfI5JsyK-wHaE7?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
          },
          {
            title: "Front End Development",
            tech: null,
            bg: "https://portfolio-fatimashehzadi.vercel.app/img/works/LI.png",
          },
          {
            title: "Front End Development",
            tech: null,
            bg: "https://portfolio-fatimashehzadi.vercel.app/img/works/Calculator.png",
            darkText: true,
          },
        ].map((project, i) => (
          <div
            key={i}
            className="h-[350px] sm:h-[400px] lg:h-[450px] w-full bg-cover bg-center bg-no-repeat rounded-[30px] flex justify-center items-end transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url("${project.bg}")`,
            }}
          >
            <div className="flex flex-col items-center mb-5 sm:mb-6 gap-2">
              <div
                className={`px-4 py-2 rounded-2xl text-sm sm:text-base font-semibold ${
                  project.darkText ? "text-black bg-white" : "text-white bg-black"
                }`}
              >
                {project.title}
              </div>
              {project.tech && (
                <div className="text-white bg-black rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold">
                  {project.tech}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
