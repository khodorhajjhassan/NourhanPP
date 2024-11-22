/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 5px 15px 5px rgba(254, 82, 57, 0.8), 0 10px 30px 10px rgba(254, 82, 57, 0.6), 0 5px 45px 15px rgba(254, 82, 57, 0.4)",
        neon2: "0 5px 10px 5px rgba(254, 82, 57, 0.8), 0 10px 10px 5px rgba(254, 82, 57, 0.6), 0 5px 15px 5px rgba(254, 82, 57, 0.4)",
        orange: "0 0px  15px rgba(254, 82, 57, 0.8)",
      },

      colors: {
        primary: {
          500: "#fe5239,",
        },
        secondary: {
          500: "#67625E",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
