import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { RichText } from "prismic-reactjs"
import { Slices } from "./slices.component"
import { Image } from "./common/image.component"
import { LinksRow } from "./common/links-row.component"

const query = graphql`
    query footerQuery {
        prismic {
            allFooters {
                edges {
                    node {
                        bg_color
                        _meta {
                            id
                        }
                        logo
                        copyright
                        body {
                            ... on PRISMIC_FooterBodyCustom_script {
                                type
                                label
                                fields {
                                    script_html
                                    script_url
                                }
                            }
                            ... on PRISMIC_FooterBodyMenu {
                                type
                                label
                                primary {
                                    nav_text
                                    nav_link {
                                        ...link
                                    }
                                }
                                fields {
                                    icon
                                    link {
                                        ...link
                                    }
                                    link_style
                                    link_text
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
  <StaticQuery query={query} render={withPreview((data) => {
    const footer = data.prismic.allFooters.edges[0].node
    return (
      <footer style={{ backgroundColor: footer.bg_color }}>
        <div className="container py-3 mt-5">
          <div className="row">
            <div className="col-12 col-lg-2 col-md-3 col-xl-4 mb-2 mb-lg-0">
              <div className="mb-3 navbar-logo-footer">
                <Image alt="logo" image={footer.logo}/>
              </div>
                <div className="copyright">
                    <RichText render={footer.copyright}/>
                </div>
            </div>
            <Slices body={footer.body}/>
          </div>
        </div>
      </footer>
    )
  }, query)}/>
)