import React, { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Auto close after 1 second
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 w-96 text-center animate-fadeIn">
        {/* Glow effect border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 opacity-30 blur-2xl"></div>

        {/* Content */}
        <h2 className="text-2xl font-bold text-white relative z-10 mb-2 drop-shadow-lg">
          🎉 Welcome to my Portfolio
        </h2>
        <p className="text-gray-200 relative z-10">
          Thanks for visiting!
        </p>
      </div>
    </div>
  );
}
