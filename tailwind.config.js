/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas:[
          "Dancing Script","serif"
        ],
        cavet:[
          "Caveat", "serif"
        ],
        funky:[
          "Indie Flower", "serif",
        ]
      },
      backgroundImage:{
        b_img:"url('images/bg-image.jpeg')"
      }
    },
  },
  plugins: [],
}

