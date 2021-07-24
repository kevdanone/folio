module.exports = {
  siteMetadata: {
    title: `My folio`,
    description: `Hi, i'm Kevin Lauro`,
    subDescription:`Frontend Developer / Programming lover`,
    aboutTitle: `About Me`,
    folioTitle: `My projects`,
    aboutMe: `Programming lover with a preference for javascript,
    I've started my journey with a programming graduation.
    Then I began to start web and especially frontend.
    Finally advanced frontend technology like React and Redux became my world.`,
    aboutMe2:`To develop my frontend and backend communication knowledge,
    I learned nodeJs and PostgreSQL.`,
    aboutMe3:`Now I do my best to learn deeply React and other frontend technologies.`,
    author: `@kevin`,
    mail: `mailto:kevin.lauro@yahoo.com`,
    twitter: `https://twitter.com/kevdanone`,
    linkedin: `https://www.linkedin.com/in/k%C3%A9vin-lauro-06b5a7122/`,
    github:`https://github.com/kevdanone`,

  },

  

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
