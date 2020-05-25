import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { BootstrapNavbar } from "./common/bootstrap-navbar.component"
import { Slices } from "./slices.component"
import { linkFragment } from "../link-resolver"

/**
 *
 * @typedef {{
 *  link: *,
 *  icon: *,
 *  linkStyle: string,
 *  linkText: string
 * }} NavigationItem
 *
 * Header Data Object
 * @typedef {
 * {
 *  logoLight: *,
 *  logoDark: *,
 *  primaryNavigation: NavigationItem[],
 *  secondaryNavigation: NavigationItem[]
 *  }
 * } HeaderData
 */

const query = graphql`
  query headerQuery {
    prismic {
      allHeaders {
        edges {
          node {
            logoLight
            logoDark
            primaryNavigation {
              icon
              link {
                ...link
              }
              linkStyle
              linkText
            }
            secondaryNavigation {
              icon
              link {
                ...link
              }
              linkStyle
              linkText
            }
            body {
              ... on PRISMIC_HeaderBodyCustomScript {
                type
                label
                fields {
                  scriptHtml
                  scriptUrl
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
  <StaticQuery
    query={query}
    render={withPreview(
      data => {
        const { node: header } = data.prismic.allHeaders.edges[0]
        return (
          <div>
            <BootstrapNavbar
              className="navbar navbar-expand-lg navbar-light bg-light container"
              theme={"light"}
              logoLight={header.logoLight}
              logoDark={header.logoDark}
              menu={header.primaryNavigation}
            />
            <Slices body={header.body} />
          </div>
        )
      },
      query,
      [linkFragment]
    )}
  />
)
