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
          bg: "#022C22",          // Fond Émeraude sombre
          deep: "#064E3B",        // Conteneurs
          emerald: "#059669",     // Émeraude
          accent: "#00FF94",      // Émeraude vert néon d'avant
          highlight: "#FF7F3F",   // Ambre orange d'avant
          secondary: "#A7F3D0",   // Vert pâle d'avant
          white: "#FFFFFF",       // Blanc pur
          pale: "#D1FAE5",        // Vert doux
          text: "#FFFFFF",
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
