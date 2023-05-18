module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-neon': '#a0e50f',
        'green-neon-hover': '#90ce0d'
      },
      backgroundImage: {
        'game': "url('./assets/bgGame.png')",
        'KBB': "url('./assets/bgKBB.png')"
         },
      borderWidth : {
        20 : '20px'
      },
      fontFamily: {
        'pony': ['Pony'],
      },
      height : {
        200: '200px',
        400 : '400px',
        680 : '680px'
      },
      width: {
        200: '200px',
        300: '300px',
      }
    },
  },
  plugins: [],
}