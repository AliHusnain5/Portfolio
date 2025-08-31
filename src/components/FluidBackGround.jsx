import React, { useEffect } from 'react';

const FluidBackGround = () => {
  useEffect(() => {
    // This will ensure the animation runs after component mounts
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes fluid {
        0%, 100% { 
          transform: translate(0, 0) scale(1);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        25% { 
          transform: translate(100px, -50px) scale(1.2);
          border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
        }
        50% { 
          transform: translate(0, 100px) scale(1.1);
          border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
        }
        75% { 
          transform: translate(-100px, 50px) scale(1.2);
          border-radius: 39% 61% 64% 36% / 67% 33% 67% 33%;
        }
      }
      
      .bg-gradient-fluid {
        background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #a18cd1, #fbc2eb, #a6c1ee);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }
      
      .animate-fluid {
        animation: fluid 8s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative">
      {/* Fluid elements with blur effect */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-fluid filter blur-[100px] opacity-70 animate-fluid"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-300 filter blur-[80px] opacity-60 animate-fluid animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 filter blur-[70px] opacity-60 animate-fluid animation-delay-4000"></div>
      

    </div>
  );
};

export default FluidBackGround;