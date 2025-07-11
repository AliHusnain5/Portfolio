// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  );
};


export default Loader;
