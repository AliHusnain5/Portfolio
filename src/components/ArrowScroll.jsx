import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const ArrowScroll = () => {
  const [rotate, setRotate] = useState(false);

  const handleScroll = () => {
    // Rotate if user has scrolled more than 100px
    setRotate(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-1/8 transform -translate-x-1/2 z-50">
      <div
        className={`transition-transform duration-500 ${
          rotate ? "rotate-180" : "rotate-0"
        }`}
      >
        <FaArrowDown className="text-white text-5xl animate-bounce" />
      </div>
    </div>
  );
};

export default ArrowScroll;
