/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      colors:{
        'web-bg':{
          100:'#1A0B2E',
          200:'rgb(17,7,31)',
        },
        "grid-bg-col":{
          100:"#2C1250",
          200:"#4F228D"
        }
      },


      maxWidth:{
        "home-div-width": '600px',
        "section-div-width" : '900px',
      },

      backgroundImage: {
        "grid-img": "url('/dist/img/logos/grid-bg-img.svg')"
      }
    },
    fontFamily:{
      "text-font":["Preahvihear", "sans-serif"]
    },
    screens: {
      'mobile':'500px',
      'sm': '537px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },  
plugins: [],
}