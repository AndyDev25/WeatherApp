module.exports = {
  purge: ['./src/**/*.vue', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      width: {
        112: '28rem',
        130: '35rem',
        cardImage: '360px'
      },
      height: {
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        cardImage: '480px',
        extendedCardImage: '520px'
      },
      maxWidth: {
        '9/10': '90%'
      },
      transitionDuration: {
        250: '250ms'
      },
      inset: {
        midX: 'calc(50% - 101.615px)',
        minmidX: 'calc(50% - 67.74px)',
        midY: 'calc(50% - 40px)'
      }
    }
  },
  variants: {
    extend: {
      height: ['hover']
    }
  },
  plugins: []
}
