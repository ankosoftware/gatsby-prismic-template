import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { BlogPostComponent } from "../components/pages/blog-post.compoonent"

const BlogPost = ({ data }) => {
  const post = data.prismic.blogPost
  return <BlogPostComponent post={post} />
}

BlogPost.fragments = [linkFragment]

export default BlogPost

export const query = graphql`
  query postQuery($lang: String!, $uid: String!) {
    prismic {
      blogPost(uid: $uid, lang: $lang) {
        _meta {
          type
          uid
          lang
          lastPublicationDate
        }
        title
        text
        image
        isFeaturedArticle
        bgColor
        pageDescription
        pageKeywords {
          keyword
        }
        pagePreviewImage
        pageTitle
        body {
          ... on PRISMIC_BlogPostBodyPricingPlans {
            type
            label
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
          ... on PRISMIC_BlogPostBodyItemsCollection {
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
          ... on PRISMIC_BlogPostBodyText {
            type
            label
            primary {
              text
              bgColor
              bgImage
            }
          }
          ... on PRISMIC_BlogPostBodyFeature {
            type
            label
            primary {
              bgColor
              bgImage
              text
            }
            fields {
              image
              linkStyle
              linkText
              text
              title
              link {
                ...link
              }
            }
          }
          ... on PRISMIC_BlogPostBodyBlockWithTextAndImage {
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
          ... on PRISMIC_BlogPostBodyForm {
            type
            label
            primary {
              bgColor
              bgImage
              formScript
              formUrl
              text
            }
          }
          ... on PRISMIC_BlogPostBodyText {
            type
            label
            primary {
              text
            }
          }
        }
      }
    }
  }
`
