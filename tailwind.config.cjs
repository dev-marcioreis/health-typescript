/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa6a3",
        "primary-500": "#ff6b66",
        "secondary-400": "#ffcd58",
        "secondary-500": "ffc132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #ff616a0%, #ffc837 100%)",
        "mobile-home": "url('./assets/homeImg.png)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-sefif"],
        montserrat: ["Montserrat", "sans-sefif"]
      },
      content: {
        evolvetex: "url('./assets/text.png')",
        abstractwaves: "url('./assets/waves.png')",
        sparkles: "url('./assets/sparkles.png')",
        circles: "url('./assets/circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
    }
  },
  plugins: [],
}
