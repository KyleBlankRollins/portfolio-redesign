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
        'primary': '#082736',
        'primary-light': '#6290a4',
        'secondary': '#18151c',
        'secondary-light': '#756265',
        'callout': '#CC414F',
        'white': '#f8f8f8'

        // 'primary': '#294C5D',
        // 'callout': '#CC414F',
        // 'KR-white': '#f7f4f2',
        // 'secondary': '#201923',
        // 'secondary-light': '#aa86a2'

        // 'primary': '#294C5D',
        // 'KR-grey-darker': '#4a4a4a',
        // 'KR-grey-lighter': '#7D9099',
        // 'KR-grey-lightest': 'E6E6E6',
        // 'KR-cyan': '#6BFFE0',
        // 'KR-peach': '#FFB5AB',
        // 'callout': '#CC414F'
      }
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
