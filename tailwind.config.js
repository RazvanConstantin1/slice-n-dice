/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#006491",
        btn: "#e31837",
        btnHover: "#b6132c",
      },
    },
  },
  plugins: [],
};
