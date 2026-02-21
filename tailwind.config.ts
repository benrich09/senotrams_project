/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // if using src/ folder
  ],
  theme: {
    extend: {
      // your customizations here (colors, fonts, etc.)
    },
  },
  plugins: [],
}