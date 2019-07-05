module.exports = {
  base: "/",
  title: 'KyleBlankRollins.com',
  description: 'About and for Kyle Rollins.',
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'About', link: '/' },
      { text: 'Samples', link: '/samples/' },
      { text: 'Web projects', link: '/projects/' },
      { text: 'Resume', link: '/resume/' },
      { text: 'The Canney Valley (blog)', link: '/articles/' }
    ],
  },
  plugins: [
    ['@vuepress/plugin-google-analytics', {
      ga: 'UA-84528778-1'
    }]
  ]
}