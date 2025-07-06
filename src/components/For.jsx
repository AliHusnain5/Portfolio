// ScrollCircle.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const For = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex justify-center items-center  ">
      <div
        className="relative w-40 h-40 border-4 border-white rounded-full animate-spin-slow"
        data-aos="rotate"
      >
        {/* Circular Text */}
        <p className="absolute w-full h-full flex items-center justify-center text-center text-sm font-semibold animate-spin-text">
          <span className="w-[150px] text-[20px] text-white rotate-text">Scroll for More • Scroll for More •</span>
        </p>

        {/* Arrow */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          ↓
        </div>
      </div>
    </div>
  );
};

export default For;
