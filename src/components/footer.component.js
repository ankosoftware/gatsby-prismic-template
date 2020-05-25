import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { RichText } from "prismic-reactjs"
import { Slices } from "./slices.component"
import { Image } from "./common/image.component"

const query = graphql`
  query footerQuery {
    prismic {
      allFooters {
        edges {
          node {
            bgColor
            _meta {
              id
              type
              lang
            }
            logo
            copyright
            body {
              ... on PRISMIC_FooterBodyCustomScript {
                type
                label
                fields {
                  scriptHtml
                  scriptUrl
                }
              }
              ... on PRISMIC_FooterBodyMenu {
                type
                label
                primary {
                  navText
                  navLink {
                    ...link
                  }
                }
                fields {
                  icon
                  link {
                    ...link
                  }
                  linkStyle
                  linkText
                }
              }
            }
          }
        }
      }
    }
  }
`

export const Footer = () => (
  <StaticQuery
    query={query}
    render={withPreview(data => {
      const footer = data.prismic.allFooters.edges[0].node
      return (
        <footer style={{ backgroundColor: footer.bgColor }}>
          <div className="container py-3 mt-5">
            <div className="row">
              <div className="col-12 col-lg-2 col-md-3 col-xl-4 mb-2 mb-lg-0">
                <div className="mb-3 navbar-logo-footer">
                  <Image alt="logo" image={footer.logo} />
                </div>
                <div className="copyright">
                  <RichText render={footer.copyright} />
                </div>
              </div>
              <Slices body={footer.body} />
            </div>
          </div>
        </footer>
      )
    }, query)}
  />
)
