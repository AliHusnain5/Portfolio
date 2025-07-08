// ScrollCircle.jsx
import React from 'react';

const ScrollCircle = () => {
  return (
    <div className="flex justify-center  w-3/4 items-center ">
      <div className="relative w-40 h-40 border-4 border-white rounded-full animate-spin">
        {/* Circular Text */}
        <p className="absolute w-full h-full flex items-center justify-center text-center text-sm font-semibold">
          <span className="w-[150px] text-[14px] text-white">
            Scroll for More • Scroll for More •
          </span>
        </p>

        {/* Arrow */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white">
          ↓
        </div>
      </div>
    </div>
  );
};

export default ScrollCircle;
