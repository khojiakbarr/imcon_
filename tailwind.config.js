/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'infinityWay': 'leftWay 10s linear infinite'
      },
      keyframes: {
        rightWay: {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(50%, 0px)' },
        },
        leftWay: {
          '0%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(100%, 0px)' },
        },
      }
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "540px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
