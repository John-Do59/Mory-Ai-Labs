import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mory: {
          bg: "#051610", // Vert sombre saphir forêt
          surface: "#082018",
          text: "#F0FDF4",
          accent: "#00FF94", // Vert néon émeraude
          highlight: "#FF7F3F", // Ambre néon
          secondary: "#A7F3D0", // Menthe saphir doux
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        integral: ["var(--font-integral)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
