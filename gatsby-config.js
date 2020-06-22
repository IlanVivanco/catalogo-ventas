module.exports = {
  siteMetadata: {
    title: `Familia Vivanco Haag`,
    description: `Nos estamos mudando, y vendemos la casa!`,
    more: `Encontrá el catálogo de cosas que aún tenemos disponibles abajo.`,
    author: `Ilán Vivanco`,
    whatsapp: `https://wa.me/5491157304817`,
    facebook: `http://m.me/ilanvivanco`,
    products: [
      {
        title: "Cafetera",
        description: "Este es el primer producto.",
        price: 123,
        images: [
          'https://i.picsum.photos/id/655/1280/800.jpg?hmac=TmZoc7kkkcFdZ4GaLFfsybCGuZx7JLbTkTanKLTSXto',
          'https://i.picsum.photos/id/991/1280/800.jpg?hmac=8soaH8eiZjefVdjdH1lo-SixGy0YQFEUL5VhrZ74tRw',
        ],
      },
      {
        title: "Cafetera 2",
        description: "Este es otro producto que también queda.",
        price: 200,
        images: [
          'https://i.picsum.photos/id/1032/1280/800.jpg?hmac=WX0rmwR4y2onsXCvokPTSkJ5cSnQf00NXtGXoboMk2s',
        ],
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
