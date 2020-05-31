const { DEFAULT_LANG, LANGUAGES } = require("./propreties")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "anko-template",
        path: "/preview",
        previews: true,
        defaultLang: DEFAULT_LANG,
        langs: LANGUAGES,
        pages: [
          {
            type: "BlogCategory",
            match: "/:lang?/blog/:uid",
            path: "/",
            component: require.resolve("./src/templates/blog-category.js"),
            langs: LANGUAGES,
          },
          {
            type: "BlogPage",
            match: "/:lang?/blog",
            path: "/",
            component: require.resolve("./src/templates/blog.js"),
            langs: LANGUAGES,
          },
          {
            type: "BlogPost",
            match: "/:lang?/blog/:uid",
            path: "/",
            component: require.resolve("./src/templates/blog-post.js"),
            langs: LANGUAGES,
          },
          {
            type: "LandingPage",
            match: "/:lang?/landing/:uid",
            path: "/",
            component: require.resolve("./src/templates/landing-page.js"),
            langs: LANGUAGES,
          },
          {
            type: "ContentPage",
            match: "/:lang?/:uid",
            path: "/",
            component: require.resolve("./src/templates/content-page.js"),
            langs: LANGUAGES,
          },
          {
            type: "HomePage",
            match: "/:lang?/",
            path: "/",
            component: require.resolve("./src/templates/home-page.js"),
            langs: LANGUAGES,
          },
        ],
      },
    },
  ],
}
