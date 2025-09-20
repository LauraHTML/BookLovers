// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-bricolage-grotesk)', ...fontFamily.sans],
        serif: ['var(--font-instrument-serif)', ...fontFamily.serif],
        sans: ['var(--font-host-grotesk)', ...fontFamily.sans],
      },
    },
  },
  // ...
};