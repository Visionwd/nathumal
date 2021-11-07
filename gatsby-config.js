/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `mn2jgcjeonqf`,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: `TvZqr9I0vb1DNOo84R8Jrh44lc981-vgJtBuIeQghqc`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "854340988611860",
      },
    },

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-211783669-1",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    

  
  ],
}
