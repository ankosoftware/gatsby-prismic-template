import React from "react"
import LayoutComponent from "../components/layout.component"
import { Header } from "../components/header.component"
import { Image } from "../components/common/image.component"
import { RichText } from "prismic-reactjs"
import { graphql } from "gatsby"
import { linkFragment, linkResolver } from "../link-resolver"
import { Slices } from "../components/slices.component"
import { isDark } from "../utils/styles"
import { Section } from "../components/common/section.component"

const BlogPost = ({ uri, data }) => {
  const post = data.prismic.allBlogPosts.edges.find(item => {
    return uri === linkResolver(item.node._meta)
  })
  if (post) {
    const { content, title, image } = post.node
    const dark = isDark(post.node.background_color, post.node.background_image)
    return (
      <LayoutComponent>
        <Section>
          <Header theme={dark ? "dark" : "light"} />
          <div className="container py-5 text-center">
            <RichText render={title} />
          </div>
          <article>
            <Image className="mb-5 blog-post-image" image={image} />
            <div className="mw-690 blog-post-content mx-auto">
              <RichText render={content} linkResolver={linkResolver} />
            </div>
          </article>
          <Slices body={post.node.body} />
        </Section>
      </LayoutComponent>
    )
  }
  return null
}

BlogPost.fragments = [linkFragment]

export default BlogPost

export const query = graphql`
  query postQuery {
    prismic {
      allBlogPosts {
        edges {
          node {
            _meta {
              type
              uid
              lang
              lastPublicationDate
            }
            title
            text
            image
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
    }
  }
`
