module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#FF5C00",
        secondary: "#FFD0B6",
        tirtiary: "#CFDAFF",
        footerColor: "#CEB692",
        backgroundColor:"#FDF7EE",
        darkBackgroundColor:"#363636",
        mainPartTextColor:"#696969",
        darkTextColor:"#DEDEDE",
        selectedCard:"#FFD79B",
        yellowCard:"#FFCC80",
        purpleCard:"#A8BCFF",
        pinkCard:"#D2ACAC",
      },
      fontFamily:{
        body:["Montserrat"],
      }
    },
  },
  variants: {
    extend: {width: ["responsive", "hover", "focus"],display: ['dark']},
  },
  plugins: [],
}
