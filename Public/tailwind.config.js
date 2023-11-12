/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./Assets/bg1.jpg')",
        'bg1i': "url('./Assets/bg1i.jpg')",
        'bg1is': "url('./Assets/bg1is.jpg')",
        'bg1s': "url('./Assets/bg1s.jpg')"
      },
  },
  plugins: [],
}
}
