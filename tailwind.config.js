/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
};
