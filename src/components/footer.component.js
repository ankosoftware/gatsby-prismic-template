import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { RichText } from "prismic-reactjs"
import { Slices } from "./slices.component"

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
                        }
                    }
                }
            }
        }
    }

`

export const Footer = () => (
  <StaticQuery query={query} render={withPreview((data)=>{
    const footer = data.prismic.allFooters.edges[0].node;
    return (
        <footer style={{backgroundColor: footer.background_color}}>
        <div className="container container-copyright text-center text-white py-4 font-14 line-height-25">
          <RichText render={footer.copyright} />
        </div>
            <Slices body={footer.body}/>
        </footer>
    )
  },query)}/>
)