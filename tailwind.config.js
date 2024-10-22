/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: "auto"
      },
      colors: {
        background: "var(--background)",
        light: "var(--light)",
        dark: "var(--dark)",

        primaryLight: "var(--primaryLight)",
        primaryDark: "var(--primaryDark)",

        secondaryLight: "var(--secondaryLight)",
        secondaryDark: "var(--secondaryDark)",
      }
    },
  },
  plugins: [],
}

