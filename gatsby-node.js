/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { POSTS_PER_PAGE } = require("./propreties")

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

  const blogCategory = path.resolve("src/templates/blog-category.js")
  const blogCategoryQuery = await graphql(`
    {
      prismic {
        allBlogCategorys {
          edges {
            node {
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
  if (blogCategoryQuery.errors) {
    return reporter.panicOnBuild("Error while running GraphQL query")
  }
  const blogPostQuery = await graphql(`
    {
      prismic {
        allBlogPosts(sortBy: meta_firstPublicationDate_DESC) {
          edges {
            node {
              __typename
              _meta {
                uid
                type
                lang
              }
              category {
                ... on PRISMIC_BlogCategory {
                  title
                  _meta {
                    uid
                    type
                    lang
                  }
                }
              }
              image
              title
              pageTitle
              pageDescription
              pagePreviewImage
              isFeaturedArticle
            }
          }
        }
      }
    }
  `)
  if (blogPostQuery.errors) {
    return reporter.panicOnBuild("Error while running GraphQL query")
  }
  blogCategoryQuery.data.prismic.allBlogCategorys.edges.forEach(({ node }) => {
    const category = node
    const posts = blogPostQuery.data.prismic.allBlogPosts.edges.filter(({ node }) => {
      return (
        node.category &&
        node.category._meta.uid === category._meta.uid &&
        node._meta.lang === category._meta.lang &&
        !node.isFeaturedArticle
      )
    })
    const featured = blogPostQuery.data.prismic.allBlogPosts.edges.filter(({ node }) => {
      return (
        node.category &&
        node.category._meta.uid === category._meta.uid &&
        node._meta.lang === category._meta.lang &&
        node.isFeaturedArticle
      )
    })
    const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path:
          index === 0
            ? `${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}`
            : `${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}/${index + 1}`,
        component: blogCategory,
        context: {
          uid: node._meta.uid,
          lang: node._meta.lang,
          posts: posts.slice(index * POSTS_PER_PAGE, index * POSTS_PER_PAGE + POSTS_PER_PAGE),
          featured,
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          numPages,
          currentPage: index,
        },
      })
    })
  })
  const blogPage = path.resolve("src/templates/blog.js")
  const blogPageQuery = await graphql(`
    {
      prismic {
        allBlogPages {
          edges {
            node {
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
  blogPageQuery.data.prismic.allBlogPages.edges.forEach(({ node }) => {
    const blog = node
    const posts = blogPostQuery.data.prismic.allBlogPosts.edges.filter(({ node }) => {
      return node._meta.lang === blog._meta.lang && !node.isFeaturedArticle
    })
    const featured = blogPostQuery.data.prismic.allBlogPosts.edges.filter(({ node }) => {
      return !node.category && node._meta.lang === blog._meta.lang && node.isFeaturedArticle
    })
    const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path:
          index === 0
            ? `${getLangPrefix(blog._meta.lang)}/blog`
            : `${getLangPrefix(blog._meta.lang)}/blog/${index + 1}`,
        component: blogPage,
        context: {
          lang: node._meta.lang,
          posts: posts.slice(index * POSTS_PER_PAGE, index * POSTS_PER_PAGE + POSTS_PER_PAGE),
          featured,
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          numPages,
          currentPage: index,
        },
      })
    })
  })
}
