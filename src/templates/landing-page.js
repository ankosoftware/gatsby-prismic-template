import React from "react"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { LandingPageCompoonet } from "../components/pages/landing-page.component"

const Landing = ({ data }) => {
  const page = data.prismic.landingPage
  return <LandingPageCompoonet page={page} />
}

Landing.fragments = [linkFragment]

export default Landing

export const query = graphql`
  query landingQuery($lang: String!, $uid: String!) {
    prismic {
      landingPage(uid: $uid, lang: $lang) {
        title
        text
        formUri
        formScript
        bgColor
        bgImage
        _meta {
          uid
          type
          lang
        }
        body {
          ... on PRISMIC_LandingPageBodyPricingPlans {
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
          ... on PRISMIC_LandingPageBodyItemsCollection {
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
          ... on PRISMIC_LandingPageBodyText {
            type
            label
            primary {
              text
              bgColor
              bgImage
            }
          }
          ... on PRISMIC_LandingPageBodyFeature {
            type
            label
            primary {
              bgColor
              bgImage
              text
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
          ... on PRISMIC_LandingPageBodyBlockWithTextAndImage {
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
          ... on PRISMIC_LandingPageBodyForm {
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
