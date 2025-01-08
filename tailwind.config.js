/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',   // Chemin vers les fichiers EJS
  ],
  theme: {
    extend: {
      colors: {
        'main-yellow':'#C69C29',
        'main-blue':'#3A4874'
      }
    },
  },
  plugins: [],
};

