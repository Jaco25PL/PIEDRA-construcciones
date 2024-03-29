/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 35s linear infinite",
        "infinite-scroll-v2": "infinite-scroll 80s linear infinite",
        "infinite-scroll-slow": "infinite-scroll 100s 1s linear infinite",
        "bounce-loading": "bounce-loading 1s linear infinite" ,
        "bounce-loading-1": "bounce-loading 1s linear 0.3s infinite",
        "bounce-loading-2": "bounce-loading 1s linear 0.6s infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
        "bounce-loading": {
          "0%, 50%, 100%": { transform: "translateY(0)"},
          "25%": { transform:  "translateY(-10px)"},
          "75%": { transform: "translateY(10px)"},
        }
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none" : {
          scrollbarWidth : "0",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            display : "none" 
          },
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

