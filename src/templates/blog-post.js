import React from "react"
import LayoutComponent from "../components/layout.component"
import { Header } from "../components/navbar.component"
import { Image } from "../components/common/image.component"
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby"
import { linkFragment, linkResolver } from "../link-resolver"
import { Slices } from "../components/slices.component"
import { isDark } from "../utils/styles"
import { Section } from "../components/common/section.component"



const BlogPost = ({uri, data}) => {
  const post = data.prismic.allBlogPosts.edges
    .find(item => {
      return uri === linkResolver(item.node._meta);
    })
  if(post) {
    const { content, title, image } = post.node;
    const dark = isDark(post.node.background_color, post.node.background_image);
    return (
      <LayoutComponent>
          <Section>
          <Header theme={dark ? 'dark' : 'light'}/>
          <div className="container py-5 text-center">
          <RichText render={title} />
        </div>
        <article>
          <Image className="mb-5 blog-post-image" image={image}/>
          <div className="mw-690 blog-post-content mx-auto">
            <RichText render={content} linkResolver={linkResolver}/>
          </div>
        </article>
        <Slices body={post.node.body} />
          </Section>
      </LayoutComponent>
    )
  }
  return null;
};

BlogPost.fragments = [linkFragment]

export default BlogPost;

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
                        text_content
                        image
                        body {
                            ... on PRISMIC_BlogPostBodyPricing_plans {
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
                            ... on PRISMIC_BlogPostBodyItems_collection {
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
                            ... on PRISMIC_BlogPostBodyText {
                                type
                                label
                                primary {
                                    text
                                    bg_color
                                    bg_image
                                }
                            }
                            ... on PRISMIC_BlogPostBodyFeature {
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
                            ... on PRISMIC_BlogPostBodyBlock_with_text_and_image {
                                label
                                type
                                primary {
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
                            ... on PRISMIC_BlogPostBodyForm {
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
