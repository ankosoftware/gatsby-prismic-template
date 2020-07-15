import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { BlogComponent } from "../components/pages/blog.compoonent"

const Blog = ({ data, pageContext }) => {
  const categories = data.prismic.allBlogCategorys.edges
  const blogItem = data.prismic.allBlogPages.edges[0]
  const { posts, currentPage, numPages, featured } = pageContext
  return (
    <BlogComponent
      numPages={numPages}
      blogPage={blogItem && blogItem.node}
      categories={categories}
      posts={posts}
      currentPage={currentPage}
      featured={featured}
    />
  )
}

Blog.fragments = [linkFragment]

export default Blog

export const query = graphql`
  query blogQuery($lang: String!) {
    prismic {
      allBlogPages(lang: $lang) {
        edges {
          node {
            bgColor
            bgImage
            pageTitle
            pageDescription
            text
            title
            pageKeywords {
              keyword
            }
            _meta {
              lang
              uid
              type
            }
            body {
              ... on PRISMIC_BlogPageBodyPricingPlans {
                type
                label
                primary {
                  bgColor
                  bgImage
                  title
                  text
                }
                fields {
                  priceUnits
                  planPrice
                  planName
                  planDetails
                  linkText
                  linkStyle
                  link {
                    ...link
                  }
                  isFreePlan
                }
                primary {
                  bgImage
                  bgColor
                  title
                  text
                }
              }
              ... on PRISMIC_BlogPageBodyItemsCollection {
                label
                type
                primary {
                  bgColor
                  bgImage
                  text
                  title
                  linkStyle
                  linkText
                }
                fields {
                  tag
                }
              }
              ... on PRISMIC_BlogPageBodyText {
                type
                label
                primary {
                  title
                  text
                  bgColor
                  bgImage
                }
              }
              ... on PRISMIC_BlogPageBodyFeature {
                type
                label
                primary {
                  bgColor
                  bgImage
                  title
                  text
                }
                fields {
                  image
                  linkStyle
                  linkText
                  title
                  text
                  link {
                    ...link
                  }
                }
              }
              ... on PRISMIC_BlogPageBodyBlockWithTextAndImage {
                label
                type
                primary {
                  bgColor
                  bgImage
                  minHeight
                  title
                  text
                  image
                  link {
                    ...link
                  }
                  linkStyle
                  linkText
                }
              }
              ... on PRISMIC_BlogPageBodyForm {
                type
                label
                primary {
                  bgColor
                  bgImage
                  formScript
                  formUrl
                  title
                  text
                }
              }
            }
          }
        }
      }
      allBlogCategorys(lang: $lang) {
        edges {
          node {
            title
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
`
