module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      width: {
        112: '28rem',
        130: '35rem'
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh'
      },
      maxWidth: {
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
