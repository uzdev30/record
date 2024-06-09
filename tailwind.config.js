/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('/src/assets/images/bg.png')",
        imgLi: "url('/src/assets/images/light.png')",
      },
    },
  },
  plugins: [],
};
