import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { ContentPageComponent } from "../components/pages/content-page.coomponent"

const ContentPage = ({ data }) => {
  const page = data.prismic.contentPage
  return <ContentPageComponent page={page} />
}

ContentPage.fragments = [linkFragment]

export default ContentPage

export const query = graphql`
  query contentPageQuery($lang: String!, $uid: String!) {
    prismic {
      contentPage(lang: $lang, uid: $uid) {
        _meta {
          uid
          type
          lang
        }
        bgImage
        bgColor
        text
        title
        pageTitle
        pageDescription
        pageKeywords {
          keyword
        }
        pagePreviewImage
        asideNavigation {
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
                  linkStyle
                  linkText
                }
                primary {
                  navLink {
                    ...link
                  }
                  navText
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
              title
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
`
