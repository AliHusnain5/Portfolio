// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-text': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
