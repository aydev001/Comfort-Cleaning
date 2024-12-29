/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raly": `"Raleway", serif;`,
        "poppins": `"Poppins", serif`,
      },
      colors: {
        "primary": {
          '50': '#ecffff',
          '100': '#cefeff',
          '200': '#a3fbfe',
          '300': '#63f5fd',
          '400': '#1de4f3',
          '500': '#01c7d9',
          '600': '#04a2ba',
          '700': '#0b7e93',
          '800': '#136577',
          '900': '#145465',
          '950': '#073845',
        }
      },
      keyframes: {
        fadeIn: {
          "0%": {
            background: "linear-gradient(126deg, rgba(0,143,165,1) 0%, rgba(255,255,255,1) 0%, rgba(0,131,151,1) 100%)"
          },
          "100%": {
            background: "linear-gradient(126deg, rgba(0,143,165,1) 0%, rgba(255,255,255,1) 100%, rgba(0,131,151,1) 100%)"

          }
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    },
  },
  plugins: [],
}