/*
import React from "react"
import LayoutComponent from "../components/layout.component"
import { Header } from "../components/header.component"
import { graphql } from "gatsby"
import { linkFragment, linkResolver } from "../link-resolver"
import { isDark } from "../utils/styles"
import { RichText } from "prismic-reactjs"
import { Slices } from "../components/slices.component"
import { Section } from "../components/common/section.component"
import { AsideNavigation } from "../components/common/aside-navigation.component"
import StickyBox from "react-sticky-box"

const ContentPage = ({ uri, data }) => {
  const page = data.prismic.allContentPages.edges.find(item => {
    return uri === linkResolver(item.node._meta)
  })
  if (page) {
    const dark = isDark(page.node.background_color, page.node.background_image)
    return (
      <LayoutComponent>
        <Section backgroundImage={page.node.background_image} backgroundColor={page.node.background_color}>
          <Header theme={dark ? "dark" : "light"} />
          <div className="mt-10 pb-5 text-center">
            <RichText render={page.node.title} linkResolver={linkResolver} />
          </div>
          <div className="text-center">
            <RichText render={page.node.text} linkResolver={linkResolver} />
          </div>
        </Section>
        {page.node.aside_navigation ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-mb-12 text-lg-left text-center">
                <StickyBox offsetTop={100} offsetBottom={20}>
                  <AsideNavigation navigation={page.node.aside_navigation} />
                </StickyBox>
              </div>
              <div className="col-lg-8 col-mb-12">
                <Slices body={page.node.body} />
              </div>
            </div>
          </div>
        ) : (
          <Slices body={page.node.body} />
        )}
      </LayoutComponent>
    )
  }
  return null
}

ContentPage.fragments = [linkFragment]

export default ContentPage

export const query = graphql`
  query contentPageQuery {
    prismic {
      allContentPages {
        edges {
          node {
            _meta {
              uid
              type
              lang
            }
            bg_image
            bg_color
            text
            title
            aside_navigation {
              ... on PRISMIC_AsideNavigation {
                text
                _linkType
                body {
                  ... on PRISMIC_AsideNavigationBodyMenu {
                    type
                    label
                    fields {
                      link {
                        ...link
                      }
                      icon
                      link_style
                      link_text
                    }
                    primary {
                      nav_link {
                        ...link
                      }
                      nav_text
                    }
                  }
                }
              }
            }
            parent {
              ... on PRISMIC_ContentPage {
                _meta {
                  lang
                  type
                  uid
                }
                parent {
                  ... on PRISMIC_ContentPage {
                    _meta {
                      type
                      uid
                      lang
                    }
                    parent {
                      ... on PRISMIC_ContentPage {
                        _meta {
                          type
                          uid
                          lang
                        }
                      }
                    }
                  }
                }
              }
            }
            body {
              ... on PRISMIC_ContentPageBodyPricing_plans {
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
              ... on PRISMIC_ContentPageBodyItems_collection {
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
              ... on PRISMIC_ContentPageBodyText {
                type
                label
                primary {
                  text
                  bg_color
                  bg_image
                }
              }
              ... on PRISMIC_ContentPageBodyFeature {
                type
                label
                primary {
                  bg_color
                  bg_image
                  text
                  title
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
              ... on PRISMIC_ContentPageBodyBlock_with_text_and_image {
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
              ... on PRISMIC_ContentPageBodyForm {
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
