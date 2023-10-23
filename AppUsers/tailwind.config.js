/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gray: "#242424",
        yellow: "#FFC300",
        light: "#717171",
        dark: "#1B1B1B",
        card: "rgba(0, 0, 0, 0.30)"
      }
    },
  },
  plugins: [],
}

