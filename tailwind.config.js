const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C73A0F",
        green: "#1EA475",
        "rose-50": "#FCF9F7",
        "rose-100": "#F4EDEB",
        "rose-300": "#C9AEA6",
        "rose-400": "#AD8985",
        "rose-500": "#87635A",
        "rose-900": "#260F08",
      },
      fontFamily: {
        sans: ['"Red Hat Text"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
