
// src/components/Skills.jsx
import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white px-4 py-2 rounded shadow">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;