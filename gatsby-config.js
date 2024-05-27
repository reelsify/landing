// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://reelsify.app",
    title: "Reelsify | AI powered short video creation and distribution",
    author: `Aravind Karnam`,
    description: `Reelsify AI helps product and marketing teams to create bite-sized videos
     with just text prompt and screen recordings, publish on social media platforms and your 
     own web and mobile apps with plug and play widgets like stories, Play in Picture and Reels.`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Reelsify | AI powered short video creation and distribution",
        short_name: "Reelsify",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-99W12FVYSP", // Google Analytics / GA
        ],
      },
    },
  ],
}
