module.exports = {
  theme: {
    fontFamily: {
      'display': ['Oswald', 'sans-serif'],
      'displayB': ['Playfair Display', 'sans-serif'],
      'body': ['IBM Plex Sans', 'sans-serif'],
      'bodyB': ['Montserrat', 'sans-serif'],
      'mono': ['IBM Plex Mono', 'sans-serif']
    },
    extend: {
      colors: {
        'KR-blue': '#294C5D',
        'KR-red': '#CC414F',
        'KR-white': '#f7f4f2',
        'KR-dark-purple': '#201923',
        'KR-light-purple': '#aa86a2'

        // 'KR-blue': '#294C5D',
        // 'KR-grey-darker': '#4a4a4a',
        // 'KR-grey-lighter': '#7D9099',
        // 'KR-grey-lightest': 'E6E6E6',
        // 'KR-cyan': '#6BFFE0',
        // 'KR-peach': '#FFB5AB',
        // 'KR-red': '#CC414F'
      }
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
