import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.component"
import { Header } from "../components/header.component"
import { Slices } from "../components/slices.component"
import { Card } from "../components/common/card.blog.component"
import { linkFragment, linkResolver } from "../link-resolver"
import { RichText } from "../components/common/rich-text.component"
import { PlainStructuredText } from "../components/common/plain-structured-text.component"
import { Pagination } from "../components/common/pagination.component"
import { getLangPrefix } from "../utils/langs"
import { Carousel } from "../components/carousel-banner.component"
import { Background } from "../components/common/background-image.component"
import { CustomLink } from "../components/common/custom-link.component"

const BlogCategory = ({ data, pageContext }) => {
  const categories = data.prismic.allBlogCategorys.edges
  const category = data.prismic.blogCategory
  const { posts, currentPage, numPages, featured } = pageContext
  const featuredPost = featured[0]
  if (category) {
    return (
      <Layout>
        <div className="container">
          <Header theme="light" />
        </div>
        <div className="container">
          <nav className="nav blog-category-nav">
            <Link className="nav-link" activeClassName={"active"} to={`${getLangPrefix(category._meta.lang)}/blog`}>
              Last Posts
            </Link>
            {categories.map(item => {
              const category = item.node
              return (
                <Link className="nav-link" to={`${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}`}>
                  <PlainStructuredText structuredText={category.title} />
                </Link>
              )
            })}
          </nav>
          <div className="my-5 mt-1">
            <RichText className="text-dark-blue" render={category.title} />
          </div>
          <div>
            {featuredPost ? (
              <Background image={featuredPost.node.image}>
                <Link to={linkResolver(featuredPost.node._meta)}>
                  <RichText render={featuredPost.node.title} />
                </Link>
              </Background>
            ) : null}
          </div>
          <div className="container-blog-list mx-auto">
            <div className="row mb-5">
              {posts.map(item => {
                return <Card item={item} />
              })}
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          path={`${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}`}
        />
        <Slices body={category.body} />
      </Layout>
    )
  }
  return null
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
