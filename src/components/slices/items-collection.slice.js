import React from "react"
import { RichText } from "prismic-reactjs"
import { Section } from "../common/section.component"
import { graphql, StaticQuery } from "gatsby"
import { convertRichTextToPlain, reduceHeaderSize } from "../../utils/text"
import { Collection } from "../common/collection.component"
import { withPreview } from "gatsby-source-prismic-graphql"

const query = graphql`
    query childPages {
        prismic {
            allContentPages {
                edges {
                    node {
                        _meta {
                            uid
                            type
                            lang
                            tags
                        }
                        parent {
                            ... on PRISMIC_ContentPage {
                                _meta {
                                    uid
                                    type
                                    lang
                                }
                            }
                        }
#                        description
                        bg_image
                        text
                        title
#                        preview_image
                    }
                }
            }
        }
    }
`

export const ItemsCollection = ({ slice }) => {
  const bgImage = slice.primary && slice.primary.bg_image
  const bgColor = slice.primary && slice.primary.bg_color
  return (
    <Section className="py-5" backgroundImage={bgImage} backgroundColor={bgColor}>
      <div className={`features-slice ${slice.label ? "features-slice-" + slice.label : ""}`}>
        <div className="container feature-container-header text-center mb-5">
          <RichText render={slice.primary.title}/>
          <RichText render={slice.primary.text}/>
        </div>

          <StaticQuery
            query={query}
            render={
              withPreview(data => {
                const pages = data.prismic.allContentPages.edges.filter(item => {
                  return item.node._meta.tags.find(tag => slice.fields.map(field => field.tag).indexOf(tag) > -1)
                }).map(page => {
                  const { link_style, link_text } = slice.primary
                  const { background_image, description, title, text, preview_image, _meta, parent } = page.node
                  return {
                    title: reduceHeaderSize(title, 3),
                    text: description || convertRichTextToPlain(text),
                    image: preview_image || background_image,
                    link_style,
                    link_text,
                    link: {
                      _linkType: "Link.document",
                      _meta,
                      parent,
                    },
                  }
                })
                return <Collection type={slice.label} items={pages}/>
              }, query)
            }
          />
        </div>

    </Section>
  )
}
