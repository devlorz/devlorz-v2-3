module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@leelorz6`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nutti Saelor Portfolio Web`,
        short_name: `DevLorz`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#4dc0b5`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `src/assets/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
