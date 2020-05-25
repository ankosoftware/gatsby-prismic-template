/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { getLangPrefix } = require("./src/utils/langs")

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const homePage = path.resolve("src/templates/home-page.js")
  const homePageQuery = await graphql(`
    {
      prismic {
        allHomePages {
          edges {
            node {
              __typename
              _meta {
                uid
                type
                lang
              }
            }
          }
        }
      }
    }
  `)
  if (homePageQuery.errors) {
    return reporter.panicOnBuild("Error while running GraphQL query")
  }
  homePageQuery.data.prismic.allHomePages.edges.forEach(({ node }) => {
    createPage({
      path: `${getLangPrefix(node._meta.lang)}/`,
      component: homePage,
      context: {
        lang: node._meta.lang,
        uid: node._meta.uid,
      },
    })
  })
}
