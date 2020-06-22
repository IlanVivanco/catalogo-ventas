module.exports = {
  siteMetadata: {
    title: `Familia Vivanco Haag`,
    description: `Nos estamos mudando, y vendemos la casa!`,
    more: `Encontrá el catálogo de cosas que aún tenemos disponibles abajo.`,
    author: `@zlidev`,
    products: [
      {
        title: "Cafetera",
        description: "Descripción lorem ipsum.",
        price: 123,
        images: ['https://via.placeholder.com/1280x960', 'https://via.placeholder.com/1280x960'],
      },
      {
        title: "Cafetera 2",
        description: "Descripción lorem ipsum.",
        price: 200,
        images: ['https://via.placeholder.com/1280x960'],
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
