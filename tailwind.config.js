/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(to right,hsl(236, 72%, 79%),hsl(237, 63%, 64%))",
        none: "none",
      },
    },
  },
  plugins: [],
};
