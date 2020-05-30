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
import { BannerCarousel } from "../components/banner-carousel.component"
import { Image } from "../components/common/image.component"
import { convertRichTextToPlain } from "../utils/text"
import { isDark } from "../utils/styles"
import Moment from "react-moment"
import SEO from "../components/common/seo.component"

const Blog = ({ data, pageContext }) => {
  const categories = data.prismic.allBlogCategorys.edges
  const blogItem = data.prismic.allBlogPages.edges[0]
  const { posts, currentPage, numPages, featured } = pageContext
  if (blogItem) {
    const {
      _meta,
      title,
      text,
      bgImage,
      bgColor,
      pageTitle,
      pageDescription,
      pageKeywords,
      pagePreviewImage,
      body,
    } = blogItem.node
    return (
      <Layout>
        <SEO
          title={pageTitle || title}
          description={pageDescription || text}
          keywords={pageKeywords}
          image={pagePreviewImage || bgImage}
          lang={_meta.lang}
        />
        <div className="container">
          <Header theme="light" />
        </div>
        <div className="container mt-6 mt-md-8 mb-4 mb-md-5">
          <nav className="nav blog-category-nav mx-n3">
            <Link className="nav-link" activeClassName={"active"} to={`${getLangPrefix(_meta.lang)}/blog`}>
              Last Posts
            </Link>
            {categories.map(item => {
              const category = item.node
              return (
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to={`${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}`}
                >
                  <PlainStructuredText structuredText={category.title} />
                </Link>
              )
            })}
          </nav>
          <div className="my-5">
            <RichText className="text-dark-blue" render={title} />
            <RichText render={text} />
          </div>
          <div className="mb-5">
            <BannerCarousel
              id="featured-posts-carousel"
              slides={featured}
              render={slide => {
                const dark = isDark(slide.node.bgColor, slide.node.image)
                return (
                  <>
                    <Image image={slide.node.image} />
                    <div className={`carousel-caption d-none d-md-block ${dark ? "dark" : "light"}`}>
                      <Link to={linkResolver(slide.node._meta, slide.node.category)}>
                        <h3 className="featured-post-title">
                          {slide.node.pageTitle || convertRichTextToPlain(slide.node.title)}
                        </h3>
                        <span>
                          <Moment format="MMM Do YYYY">{slide.node._meta.lastPublicationDate}</Moment>
                        </span>
                      </Link>
                    </div>
                  </>
                )
              }}
            />
          </div>
          <div className="container-blog-list mx-auto">
            <div className="row mb-5">
              {(posts &&
                posts.map(item => {
                  return <Card item={item} />
                })) ||
                null}
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} path={`${getLangPrefix(_meta.lang)}/blog`} />
        <Slices body={body} />
      </Layout>
    )
  }
  return null
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
