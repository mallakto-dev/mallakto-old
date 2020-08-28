module.exports = {
  siteMetadata: {
    title: `Mallakto`,
    description: `Mallakto - веган продукция в Москве`,
    author: `dimazawr`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './src/data'
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}