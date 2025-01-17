/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jockey: ["Jockey One", "sans-serif"],
        jose: ["Josefin Sans, sans-serif"],
      },
      colors: {
        "custom-thumb": "#A58FB9",
      },
    },
  },
  plugins: [],
};
