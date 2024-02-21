/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontSize: {
      xs: ".75rem", // Extra small
      sm: ".875rem", // Small
      base: "1rem", // Base
      lg: "1.125rem", // Large
      xl: "1.25rem", // Extra large
      "2xl": "1.5rem", // 2 Extra large
      "3xl": "1.875rem", // 3 Extra large
      "4xl": "2.25rem", // 4 Extra large
      "5xl": "3rem", // 5 Extra large
      "6xl": "4rem", // 6 Extra large
      "7xl": "5rem", // 7 Extra large
    },
  },
  plugins: [],
};
