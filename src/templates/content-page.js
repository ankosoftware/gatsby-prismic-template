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
            bgImage
            bgColor
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
              ... on PRISMIC_ContentPageBodyPricingPlans {
                type
                label
                fields {
                  priceUnits
                  planPrice
                  planName
                  planDetails
                  linkText
                  linkStyle
                  link {
                    ...link
                  }
                  isFreePlan
                }
                primary {
                  bgImage
                  bgColor
                  title
                  text
                }
              }
              ... on PRISMIC_ContentPageBodyItemsCollection {
                label
                type
                primary {
                  bgColor
                  bgImage
                  text
                  title
                  linkStyle
                  linkText
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
                  bgColor
                  bgImage
                }
              }
              ... on PRISMIC_ContentPageBodyFeature {
                type
                label
                primary {
                  bgColor
                  bgImage
                  text
                  title
                }
                fields {
                  image
                  linkStyle
                  linkText
                  text
                  title
                  link {
                    ...link
                  }
                }
              }
              ... on PRISMIC_ContentPageBodyBlockWithTextAndImage {
                label
                type
                primary {
                  bgColor
                  bgImage
                  minHeight
                  title
                  text
                  image
                  link {
                    ...link
                  }
                  linkStyle
                  linkText
                }
              }
              ... on PRISMIC_ContentPageBodyForm {
                type
                label
                primary {
                  bgColor
                  bgImage
                  formScript
                  formUrl
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
