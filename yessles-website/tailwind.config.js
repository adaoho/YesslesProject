/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yl-10": "#10B981",
        "yl-20": "#1B1C57",
        "yl-30": "#F59E0B",
        "yl-40": "#888B97",
        "yl-50": "#D1FAE5",
        "yl-60": "#527773",
        "yl-70": "#888B97",
        "yl-80": "#D1FAE5",
        "yl-90": "#8A8CA5",
        "yl-100": "#545581",
      },
      fontFamily: {
        lexend: ["Lexend"],
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};
