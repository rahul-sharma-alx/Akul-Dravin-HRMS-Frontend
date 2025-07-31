// tailwind.config.js
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1B2B3A",  // Dark Navy from logo
          secondary: "#D4B483", // Gold/Beige accent
          light: "#F7F6F3",     // Soft background
        },
        fontFamily: {
          sans: ['"Open Sans"', "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  