/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTint: "rgb(var(--color-primary-tint))",
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        text: "rgb(var(--color-text))",
        action: "rgb(var(--color-action))"
      }
    },
  },
  plugins: [],
}

