module.exports = {
  purge: {
    content: ['./src/**/*.vue', './public/*.html'],
    options: {
      safelist: [
        'popUpCard-enter-active',
        'popUpCard-leave-active',
        'popUpCard-enter-from',
        'popUpCard-leave-to',
        'Weather-enter-active',
        'Weather-leave-active',
        'Weather-enter-from',
        'Weather-leave-to'
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      width: {
        112: '28rem',
        130: '35rem',
        cardImage: '360px',
        minCardImage: '324px',
        weatherWidth: '800px'
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
