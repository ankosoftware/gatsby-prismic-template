import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.component"
import { Header } from "../components/header.component"
import { Slices } from "../components/slices.component"
import { Card } from "../components/card.blog.component"
import { linkFragment } from "../link-resolver"
import { RichText } from "../components/common/rich-text.component"
import { PlainStructuredText } from "../components/common/plain-structured-text.component"
import { Pagination } from "../components/common/pagination.component"

const Blog = ({ data, pageContext }) => {
  const page = data.prismic.allBlogPages.edges[0]
  const categories = data.prismic.allBlogCategorys.edges
  const { posts, numPages, currentPage } = pageContext
  if (page) {
    return (
      <Layout>
        <div className="container">
          <Header theme="light" />
        </div>
        <div className="container">
          <nav className="nav blog-list-nav">
            <Link className="nav-link" activeClassName={"active"} to={"/blog"}>
              Last Posts
            </Link>
            {categories.map(item => {
              const category = item.node
              return (
                <Link className="nav-link" to={`/blog/${category._meta.uid}`}>
                  <PlainStructuredText structuredText={category.title} />
                </Link>
              )
            })}
          </nav>
          <div className="my-5 mt-1">
            <RichText className="text-dark-blue" render={page.node.text_content} />
          </div>
          <div className="container-blog-list mx-auto">
            <div className="row mb-5">
              {posts.map(item => {
                return <Card item={item} />
              })}
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} path={"/blog"} />
        <Slices body={page.node.body} />
      </Layout>
    )
  }
  return null
}

Blog.fragments = [linkFragment]

export default Blog

export const query = graphql`
  query blogQuery {
    prismic {
      allBlogPages {
        edges {
          node {
            text
            body {
              ... on PRISMIC_BlogPageBodyPricingPlans {
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
                  text
                }
              }
            }
          }
        }
      }
      allBlogCategorys {
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
