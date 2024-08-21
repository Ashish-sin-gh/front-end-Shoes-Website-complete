/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'shoeBG' : "url('/assets/images/thumbnail-background.svg')",
      },
    },
  },
  

  plugins: [],
}

