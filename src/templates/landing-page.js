import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { linkFragment, linkResolver } from "../link-resolver"
import Layout from "../components/layout.component"
import { Section } from "../components/common/section.component"
import { Slices } from "../components/slices.component"
import { isDark } from "../utils/styles"
import { Html } from "../components/common/html.component"
import { Script } from "../components/common/script.component"
import { Header } from "../components/header.component"
import SEO from "../components/common/seo.component"

const Landing = ({ data }) => {
  const page = data.prismic.landingPage
  if (page) {
    const {
      _meta,
      title,
      text,
      bgImage,
      bgColor,
      formScript,
      formUri,
      pageTitle,
      pageDescription,
      pageKeywords,
      pagePreviewImage,
      body,
    } = page
    const dark = isDark(bgColor, bgImage)
    return (
      <Layout>
        <SEO
          title={pageTitle || title}
          description={pageDescription || text}
          keywords={pageKeywords}
          image={pagePreviewImage || bgImage}
          lang={_meta.lang}
        />
        <Section backgroundImage={bgImage} backgroundColor={bgColor}>
          <Header theme={dark ? "dark" : "light"} />
          <div className="py-5 text-center">
            <RichText render={title} linkResolver={linkResolver} />
          </div>
          <div className="row landing-page-body">
            <div className="col-md-6">
              <div className="landing-page-text">
                <RichText render={text} linkResolver={linkResolver} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card form-content">
                <div className="card-body text-dark">
                  <Html html={formScript} />
                  <Script scriptUrl={formUri} />
                </div>
              </div>
            </div>
          </div>
          <Slices body={body} />
        </Section>
      </Layout>
    )
  }
  return null
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
