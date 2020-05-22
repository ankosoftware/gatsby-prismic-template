import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { BootstrapNavbar } from "./common/bootstrap-navbar.component"
import { Slices } from "./slices.component"

const query = graphql`
    query headerQuery {
        prismic {
            allHeaders {
                edges {
                    node {
                        logo_light
                        primary_navigation {
                            link {
                                ... on PRISMIC__ExternalLink {
                                    _linkType
                                    url
                                }
                            }
                            link_style
                            link_text
                        }
                        body {
                            ... on PRISMIC_HeaderBodyCustom_script {
                                type
                                label
                                fields {
                                    script_html
                                    script_url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export const Header = () => (
  <StaticQuery query={query} render={withPreview((data)=>{
    const header = data.prismic.allHeaders.edges[0].node;
    return <div>
      <BootstrapNavbar
      className="navbar navbar-expand-lg navbar-light bg-light container"
      theme={'light'}
      logoLight={header.logo_light}
      logoDark={header.logo_light}
      menu={header.primary_navigation}>
    </BootstrapNavbar>
        <Slices body={header.body}/>
        </div>
  },query)}/>
)
