import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
export default config;
