/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/link-resolver")
registerLinkResolver(linkResolver)

window.$ = window.jQuery = require("jquery")
require("bootstrap")
require("./src/style/main.scss")
