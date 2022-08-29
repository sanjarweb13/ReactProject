/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "Cormorant Upright, serif",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backgroundColor: {
        projectBg: "./src/media/BG.jpg",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
