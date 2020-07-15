import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { HomePageComponent } from "../components/pages/home-page.component"

const HomePage = ({ data }) => {
  const page = data.prismic.allHomePages.edges[0]
  return <HomePageComponent page={page} />
}

HomePage.fragments = [linkFragment]

export default HomePage

export const query = graphql`
  query homePageQuery($lang: String) {
    prismic {
      allHomePages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              type
              lang
            }
            bgColor
            bgImage
            text
            title
            pageTitle
            pageDescription
            pageKeywords {
              keyword
            }
            pagePreviewImage
            body {
              ... on PRISMIC_HomePageBodyPricingPlans {
                type
                label
                primary {
                  bgColor
                  bgImage
                  title
                  text
                }
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
              ... on PRISMIC_HomePageBodyItemsCollection {
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
              ... on PRISMIC_HomePageBodyText {
                type
                label
                primary {
                  title
                  text
                  bgColor
                  bgImage
                }
              }
              ... on PRISMIC_HomePageBodyFeature {
                type
                label
                primary {
                  bgColor
                  bgImage
                  title
                  text
                }
                fields {
                  image
                  linkStyle
                  linkText
                  title
                  text
                  link {
                    ...link
                  }
                }
              }
              ... on PRISMIC_HomePageBodyBlockWithTextAndImage {
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
              ... on PRISMIC_HomePageBodyForm {
                type
                label
                primary {
                  bgColor
                  bgImage
                  formScript
                  formUrl
                  title
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
