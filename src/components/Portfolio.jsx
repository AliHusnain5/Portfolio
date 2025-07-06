import React from "react";

const Portfolio = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-10" id="Portfolio">
      {/* Portfolio Title Badge */}
      <span className="bg-black text-white w-[185px] flex justify-center items-center py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg rounded-2xl gap-2">
        <span>⭐</span>
        Portfolio
      </span>

      {/* Heading */}
      <div className="mt-5 sm:mt-7">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
          Check out my Latest <br />
          Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mt-10">
        {/* Project 1 */}
        <div
          className="h-[400px] sm:h-[450px] md:h-[500px] w-full bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px] flex justify-center items-end 
          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url("https://th.bing.com/th/id/R.99d93e6dce34937a223d7b151997e337?rik=bveX3UdmiDC5zg&pid=ImgRaw&r=0")`,
          }}
        >
          <div className="flex flex-col items-center mb-6 sm:mb-[30px]">
            <div className="text-black bg-white rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold mb-2">
              Ladies Tailor Uae
            </div>
            <div className="text-white bg-black rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold">
              React JS
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="h-[400px] sm:h-[450px] md:h-[500px] w-full bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px] flex justify-center items-end 
          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url("https://tse4.mm.bing.net/th/id/OIP.T71XY5zkBx0xtfI5JsyK-wHaE7?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3")`,
          }}
        >
          <div className="text-white bg-black rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold mb-6 sm:mb-[30px]">
            Gym Management
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="h-[400px] sm:h-[450px] md:h-[500px] w-full bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px] flex justify-center items-end 
          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url("https://portfolio-fatimashehzadi.vercel.app/img/works/LI.png")`,
          }}
        >
          <div className="text-white bg-black rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold mb-6 sm:mb-[30px]">
            Front End Development
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="h-[400px] sm:h-[450px] md:h-[500px] w-full bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px] flex justify-center items-end 
          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: `url("https://portfolio-fatimashehzadi.vercel.app/img/works/Calculator.png")`,
          }}
        >
          <div className="text-black bg-white rounded-2xl px-4 py-1 sm:py-2 text-sm sm:text-lg font-semibold mb-6 sm:mb-[30px]">
            Front End Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
