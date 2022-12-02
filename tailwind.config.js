/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./views/*.ejs",
  "./views/users/index.ejs",
  "./views/posts/index.ejs",
  "./views/posts/show.ejs",
  "./views/profiles/index.ejs",
  "./views/partials/header.ejs"
],
  theme: {
    extend: {
      keyframes: {

        slideRight: {
          '0%': { transform: 'translateX(-90rem)' },
          '10%': { transform: 'translateX(-80rem)' },
          '20%': { transform: 'translateX(-70rem)' },
          '30%': { transform: 'translateX(-60rem)' },
          '40%': { transform: 'translateX(-50rem)' },
          '50%': { transform: 'translateX(-40rem)' },
          '60%': { transform: 'translateX(-30rem)' },
          '70%': { transform: 'translateX(-20rem)' },
          '80%': { transform: 'translateX(-10rem)' },
          '90%': { transform: 'translateX(-5rem)' },
          '100%': { transform: 'translateX(-1rem)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(90rem)' },
          '10%': { transform: 'translateX(80rem)' },
          '20%': { transform: 'translateX(70rem)' },
          '30%': { transform: 'translateX(60rem)' },
          '40%': { transform: 'translateX(50rem)' },
          '50%': { transform: 'translateX(40rem)' },
          '60%': { transform: 'translateX(30rem)' },
          '70%': { transform: 'translateX(20rem)' },
          '80%': { transform: 'translateX(10rem)' },
          '90%': { transform: 'translateX(5rem)' },
          '100%': { transform: 'translateX(1rem)' },
        },
        slideBackground: {
          '0%': { opacity: '0' },
          '10%': { opacity: '0.1' },
          '20%': { opacity: '0.2' },
          '30%': { opacity: '0.3' },
          '40%': { opacity: '0.4' },
          '50%': { opacity: '0.5' },
          '60%': { opacity: '0.6' },
          '70%': { opacity: '0.7' },
          '80%': { opacity: '0.8' },
          '90%': { opacity: '0.9' },
          '100%': { opacity: '1.0' },
        },
      },
      animation: {
        'slideRight': 'slideRight 2s linear',
        'slideLeft': 'slideLeft 2s linear',
        'slideBackground': 'slideBackground 4s linear'
      },
    },
  },
  plugins: [],
}
