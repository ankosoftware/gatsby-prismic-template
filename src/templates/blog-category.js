import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { BlogComponent } from "../components/pages/blog.compoonent"

const BlogCategory = ({ data, pageContext }) => {
  const categories = data.prismic.allBlogCategorys.edges
  const category = data.prismic.blogCategory
  const { posts, currentPage, numPages, featured } = pageContext
  return (
    <BlogComponent
      featured={featured}
      currentPage={currentPage}
      posts={posts}
      numPages={numPages}
      categories={categories}
      blogPage={category}
    />
  )
}

BlogCategory.fragments = [linkFragment]

export default BlogCategory

export const query = graphql`
  query blogCategoryQuery($lang: String!, $uid: String!) {
    prismic {
      blogCategory(lang: $lang, uid: $uid) {
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
          ... on PRISMIC_BlogCategoryBodyPricingPlans {
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
          ... on PRISMIC_BlogCategoryBodyItemsCollection {
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
          ... on PRISMIC_BlogCategoryBodyText {
            type
            label
            primary {
              title
              text
              bgColor
              bgImage
            }
          }
          ... on PRISMIC_BlogCategoryBodyFeature {
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
          ... on PRISMIC_BlogCategoryBodyBlockWithTextAndImage {
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
          ... on PRISMIC_BlogCategoryBodyForm {
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
