/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDC648",
        secondary: "#424141",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        hindSiliguri: ["Hind Siliguri", "sans-serif"],
        notoSansArabic: ["Noto Sans Arabic", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
