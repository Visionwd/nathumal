/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mn2jgcjeonqf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `TvZqr9I0vb1DNOo84R8Jrh44lc981-vgJtBuIeQghqc`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",
  
        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://www.heydemo.ml/test.php`,
  
        method: "post",
  
        headers: {
          "Content-Type": "application/json"
        },
  
        // Request body
        data: {
          myvalue:"hello"
        },
      },}  
  ],
}
