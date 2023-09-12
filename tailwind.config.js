/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blackOps: ['"Black Ops One"'],
        rubik: ['"Rubik Iso"'],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-1250px)", opacity: "0" },
          // "25%" : {transform : "translateX(300px)"},
          // "75%" : {transform : "translateX(300px)"},
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slide: "slide 750ms linear 1",
      },
    },
  },
  plugins: [],
};
