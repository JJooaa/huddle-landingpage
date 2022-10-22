/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { desktop: "url(./src/images/bg-desktop.svg)" },
      colors: {
        purple: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
