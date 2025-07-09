import React from 'react';

const Resume = () => {
  const entries = [
    {
      year: "2021–2025",
      title: "Bachelor Degree",
      university: "AIOU University of Pakistan",
      description:
        "I'm pursuing a BA in Arts at AIOU University, developing a strong foundation in humanities, communication, critical thinking, and creative expression to prepare for a versatile and impactful career.",
    },
    {
      year: "2018-2019",
      title: "ICS",
      university: "Lahore Board ",
      description:
        "Studying Computer Science with a focus on building problem-solving abilities and gaining practical experience in software engineering and development methodologies.",
    },
  ];

  const entrie = [
    {
      year: "2025",
      title: "Freelancing",
      university: " ",
      description:
        "Certified in freelancing from DigiSkills, proficient in client handling and project management..",
    },
    {
      year: "2025",
      title: "MS Office",
      university: " ",
      description:
        "Certified in MS Office from DigiSkills, proficient in client handling and project management..",
    },
  ];

  return (
    <div className="w-full py-10 px-4 text-white" id="Resume">
      {/* Center wrapper */}
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mt-10">
          <div>
            <span className="bg-black text-white w-fit flex justify-center items-center py-3 px-8 rounded-2xl gap-2">
              <span>⭐</span>
              Resume
            </span>
          </div>
          <div className="mt-7 ml-1 md:ml-3">
            <h1 className="text-4xl md:text-5xl">
              Education and Practical <br /> Experience
            </h1>
          </div>
          <div className="mt-10 ml-2 md:ml-5 text-base md:text-base">
            I have pursued a path of learning that is, perhaps, best described as both deliberate and <br />
            intuitive—anchored in the principle of appearing not merely as learned, but as one truly <br />
            embodying the essence of knowledge. My academic journey reflects not only what I have studied but also what I have become, ensuring that what I seem to know is not otherwise <br />
            than what I truly know, and what I aspire to learn is no less than what I endeavor to share.
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl">Education</h2>
          <hr className="mt-6 border-gray-600" />
          {entries.map((entry, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between mt-10 text-base md:text-base gap-5 md:gap-10">
              <p className="w-full md:w-[15%]">{entry.year}</p>
              <p className="w-full md:w-[25%]">
                {entry.title}
                <br />
                {entry.university}
              </p>
              <p className="w-full md:w-[60%]">{entry.description}</p>
            </div>
          ))}
        </div>

        {/* Course Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl">Courses</h2>
          <hr className="mt-6 border-gray-600" />
          {entrie.map((entry, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between mt-10 text-base md:text-base gap-5 md:gap-10">
              <p className="w-full md:w-[15%]">{entry.year}</p>
              <p className="w-full md:w-[25%]">
                {entry.title}
                <br />
                {entry.university}
              </p>
              <p className="w-full md:w-[60%]">{entry.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl">Experience</h2>
          <hr className="mt-6 border-gray-600" />
          {entries.map((entry, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between mt-10 text-base md:text-base gap-5 md:gap-10">
              <p className="w-full md:w-[15%]">{entry.year}</p>
              <p className="w-full md:w-[25%]">
                {entry.title}
                <br />
                {entry.university}
              </p>
              <p className="w-full md:w-[60%]">{entry.description}</p>
            </div>
          ))}
        </div>

        {/* Favorite Tools */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl">My Favourite Tools</h2>
          <hr className="mt-6 border-gray-600" />
          <div className="mt-10 text-xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {[
                { name: 'VS Code', url: 'visual-studio.svg' },
                { name: 'Figma', url: 'icon-figma.svg' },
                { name: 'Canva', url: 'Canva.svg' },
                { name: 'MS oFFice', url: 'ms-office.svg' },
                { name: 'Javascript', url: 'javascript.svg' },
                { name: 'Git Hub', url: 'https://www.bing.com/th/id/OIP.7MTPJSqWfwQ7fMIpVgSGrAHaHa?w=170&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', isFullUrl: true },
                { name: 'Filmora', url: 'filmora.svg' },
                { name: 'HTML5', url: 'icon-html.svg' },
                { name: 'CSS', url: 'icon-css.svg' },
                { name: 'Jira', url: 'https://www.bing.com/th/id/OIP.HCAT9MbHn-QmTAwUfaUQ2QHaHa?w=206&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', isFullUrl: true },
              ].map((tool, index) => (
                <div key={index} className="border py-6 px-5 w-full rounded-3xl flex flex-col items-center justify-center bg-slate-800">
                  <div
                    className="w-[80px] h-[80px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${tool.isFullUrl ? tool.url : `https://portfolio-fatimashehzadi.vercel.app/img/icons/${tool.url}`})`
                    }}
                  ></div>
                  <div className="mt-2 text-center">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
