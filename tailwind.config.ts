import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "move-left": "move-left 1s linear infinite",
        "file-move": "file-move 4s ease-in-out forwards",
        "particle-float": "particle-float 3s linear infinite", // Added for particles
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "file-move": {
          "0%": {
            transform: "translateX(0%)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "particle-float": {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.2)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-40px) scale(0.8)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
