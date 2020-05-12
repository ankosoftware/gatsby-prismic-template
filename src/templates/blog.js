import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.component"
import {Header} from "../components/navbar.component"
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
          <Header theme="light"/>
        </div>
        <div className="container">
          <nav className="nav blog-list-nav">
            <Link className="nav-link" activeClassName={"active"} to={"/blog"}>Last Posts</Link>
            {categories.map(item => {
              const category = item.node
              return (
                <Link className="nav-link" to={`/blog/${category._meta.uid}`}>
                  <PlainStructuredText structuredText={category.title}/>
                </Link>
              )
            })}
          </nav>
          <div className="my-5 mt-1">
            <RichText className="text-dark-blue" render={page.node.text_content}/>
          </div>
          <div className="container-blog-list mx-auto">
            <div className="row mb-5">
              {posts.map(item => {
                return (
                  <Card item={item}/>
                )
              })}
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} path={'/blog'}/>
        <Slices body={page.node.body}/>
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
                        text_content
                        body {
                            ... on PRISMIC_BlogPageBodyPricing_plans {
                                type
                                label
                                fields {
                                    price_units
                                    plan_price
                                    plan_name
                                    plan_features
                                    link_text
                                    link_style
                                    link {
                                        ...link
                                    }
                                    is_free_plan
                                }
                                primary {
                                    bg_image
                                    bg_color
                                    title
                                    text
                                }
                            }
                            ... on PRISMIC_BlogPageBodyItems_collection {
                                label
                                type
                                primary {
                                    bg_color
                                    bg_image
                                    text
                                    title
                                    link_style
                                    link_text
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
                                    bg_color
                                    bg_image
                                }
                            }
                            ... on PRISMIC_BlogPageBodyFeature {
                                type
                                label
                                primary {
                                    bg_color
                                    bg_image
                                    text
                                }
                                fields {
                                    image
                                    link_style
                                    link_text
                                    text
                                    title
                                    link {
                                        ...link
                                    }
                                }
                            }
                            ...on PRISMIC_BlogPageBodyBlock_with_text_and_image {
                                label
                                type
                                primary  {
                                    bg_color
                                    bg_image
                                    min_height
                                    title
                                    text
                                    image
                                    link {
                                        ...link
                                    }
                                    link_style
                                    link_text
                                }
                            }
                            ... on PRISMIC_BlogPageBodyForm {
                                type
                                label
                                primary {
                                    bg_color
                                    bg_image
                                    form_script
                                    form_url
                                    text
                                }
                            }
                        }
                    }
                }
            },
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
            },
        }
    }
`
