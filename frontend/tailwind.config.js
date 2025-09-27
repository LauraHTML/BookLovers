// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ADICIONE ESTA PROPRIEDADE 'CONTENT'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-bricolage-grotesk)', ...fontFamily.sans],
        serif: ['var(--font-instrument-serif)', ...fontFamily.serif],
        sans: ['var(--font-host-grotesk)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};