/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        "sm":"450px",
      },

      colors: {
        '--color-white' : 'hsl(252,30%,100%)',
        '--color-light' : 'hsl(252,30%,95%)',
        '--color-gray' : 'hsl(252,15%,65%)',
        '--color-primary' : 'hsl(252,75%,60%)',  
        '--color-primary-hover' : 'hsl(252,55%,20%)',  
        '--color-primary-hover2' : 'hsl(252,55%,30%)',  
        '--color-secondary' : 'hsl(252,100%,90%)',
        '--color-danger' : 'hsl(0, 96%, 65%)',
        '--color-success' : 'hsl(120,95%,65%)',
        '--color-warning' : 'hsl(46, 96%, 65%)',
        '--color-sky' : 'hsl(197, 96%, 65%)',
        '--color-dark' : 'hsl(255,30%,17%)',
        '--color-black' : 'hsl(252,30%,10%)',    
        '--color-bgrgba' : 'hsla(252,30%,17%, 0.81)', 
        '--color-orange' : 'hsl(36,100%,50%)',
        '--color-amber' : 'hsl(32,100%,50%)'


      }
    },
  },
  plugins: [],
}

