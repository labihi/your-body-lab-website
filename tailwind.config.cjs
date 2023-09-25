/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "#71db06",
        secondary: "#ffa403",
      },
      textColor: {
        primary: "#71db06",
        secondary: "#ffa403",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
