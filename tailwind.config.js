/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    'public/agregar_evento.html',
    'public/index.html',
    'public/landing.html',
    'src/estilos.css',
  ],
  theme: {
    extend: {
      colors:{
        cprimary: '#7e894e',
        csecondary: '#000',
        cthird: '#cfd1b4',
        cfourth: '#cfd1b4',
      }
    },
  },
  plugins: [],
}
