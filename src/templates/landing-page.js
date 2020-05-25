/*
import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkFragment, linkResolver } from "../link-resolver"
import LayoutComponent from "../components/layout.component"
import { Section } from "../components/common/section.component"
import { Slices } from "../components/slices.component"
import { isDark } from "../utils/styles"
import { Html } from "../components/common/html.component"
import { Script } from "../components/common/script.component"
import { Header } from "../components/header.component"

const Landing = ({ uri, data }) => {
  const page = data.prismic.allLandingPages.edges.find(item => {
    return uri === linkResolver(item.node._meta)
  })
  if (page) {
    const dark = isDark(page.node.background_color, page.node.background_image)
    return (
      <LayoutComponent>
        <Section backgroundImage={page.node.background_image} backgroundColor={page.node.background_color}>
          <Header theme={dark ? "dark" : "light"} />
          <div className="py-5 text-center">
            <RichText render={page.node.title} linkResolver={linkResolver} />
          </div>
          <div className="row landing-page-body">
            <div className="col-md-6">
              <div className="landing-page-text">
                <RichText render={page.node.text} linkResolver={linkResolver} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card form-content">
                <div className="card-body text-dark">
                  <Html html={page.node.form_script} />
                  <Script scriptUrl={page.node.form_uri} />
                </div>
              </div>
            </div>
          </div>
          <Slices body={page.node.body} />
        </Section>
      </LayoutComponent>
    )
  }
  return null
}

Landing.fragments = [linkFragment]

export default Landing

export const query = graphql`
  query landingQuery {
    prismic {
      allLandingPages {
        edges {
          node {
            title
            text
            form_uri
            form_script
            bg_color
            bg_image
            _meta {
              uid
              type
              lang
            }
            body {
              ... on PRISMIC_LandingPageBodyPricing_plans {
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
              ... on PRISMIC_LandingPageBodyItems_collection {
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
              ... on PRISMIC_LandingPageBodyText {
                type
                label
                primary {
                  text
                  bg_color
                  bg_image
                }
              }
              ... on PRISMIC_LandingPageBodyFeature {
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
              ... on PRISMIC_LandingPageBodyBlock_with_text_and_image {
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
              ... on PRISMIC_LandingPageBodyForm {
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
      }
    }
  }
`
*/
