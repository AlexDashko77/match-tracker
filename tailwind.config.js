/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ongoing: "#43AD28",
        finished: "#EB0237",
        other: "#EB6402",
      },
    },
  },
  plugins: [],
}

