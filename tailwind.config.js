module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':['Inter'],
      },
      colors:{
        "brightRed":" #f95616",
        "darkBlue":"#26144c",
        "lightGray":"hsl(227, 12%, 61%)",
      },
      lineHeight: {
        '12': '1.2',
      },
      spacing:{
        "3":  ".75rem",
        "top":"-215px",
        "right":"-190px",
      },
      zIndex:{
        "minus-1": "-1",
      },
      screens:{
        'laptop': '810px',
  
      }
    },
  },
  plugins: [],
}