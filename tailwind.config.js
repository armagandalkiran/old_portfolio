module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#FF5C00",
        secondary: "#FFD0B6",
        tirtiary: "#CFDAFF",
        footerColor: "#CEB692",
        backgroundColor:"#FDF7EE",
        mainPartTextColor:"#696969",
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
    extend: {width: ["responsive", "hover", "focus"],},
  },
  plugins: [],
}
