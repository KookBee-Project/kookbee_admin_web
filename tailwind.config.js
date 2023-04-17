/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        40: "40rem",
      },
      minWidth: {
        10: "10rem",
        40: "40rem",
      },
    },
  },
  plugins: [],
};
