module.exports = {
  siteMetadata: {
    title: `Mallakto`,
    description: `Mallakto - веган продукция в Москве`,
    siteUrl: "https://mallakto.ru",
    author: `dimazawr`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mallakto`,
        short_name: `Mallakto`,
        start_url: `/`,
        background_color: `#fffdfa`,
        display: `standalone`,
        icon: `src/data/images/mallakto-logo.jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "./src/data",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "dudbk6rk",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/cart/*`] },
    },
    `gatsby-plugin-image`,
  ],
}
