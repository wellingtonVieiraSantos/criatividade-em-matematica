/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0056b3',
        'secondary': '#6fa4e9',
        'terciary': '#002b4f',
        'light-gray': '#f2f2f2',
        'midle-gray': '#e6e6e6',
        'dark-gray': '#888888',
        'coral': '#FF6347',
      },
      fontFamily:{},
      screens:{},
      backgroundImage:{
        'logo': "url('./src/assets/logo.png')" ,
      },
      keyframes:{
        'link-animate':{
          '0%':{'width': 0},
          '100%':{'width': '100%'}
        }
      },
      animation:{
        'link-animate': 'link-animate .5s ease-in-out'
      }
    },
  },
  plugins: [],
}

