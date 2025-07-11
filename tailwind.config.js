module.exports = {
  theme: {
    extend: {
      animation: {
        'scroll-slow': 'scroll 10s linear infinite', // 10s = धीमा, 5s = मध्यम
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Text को लगातार स्क्रॉल करेगा
        },
      },
    },
  },
  plugins: [],
};