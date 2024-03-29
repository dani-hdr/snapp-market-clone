/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    rtl:true,
    themes: [
      {
        mytheme: {
          primary: "#2446F5",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#43CB4E",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      screens:{
        'xs':'370px'
      }
    },
    fontFamily: {
      sans: ["IRANSansWeb", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
