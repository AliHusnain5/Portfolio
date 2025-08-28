/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        'scroll-slow': 'scroll 10s linear infinite', // 10s = slow, 5s = medium
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Continuous text scroll
        },
      },
    },
  },
  plugins: [],
};
