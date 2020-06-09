import React from "react"
import Layout from "../components/layout.component"
import { Header } from "../components/header.component"
import { graphql } from "gatsby"
import { linkFragment } from "../link-resolver"
import { isDark } from "../utils/styles"
import { Slices } from "../components/slices.component"
import { Section } from "../components/common/section.component"
import { RichText } from "../components/common/rich-text.component"
import SEO from "../components/common/seo.component"

const HomePage = ({ data }) => {
  const page = data.prismic.allHomePages.edges[0]
  if (page) {
    const {
      bgColor,
      bgImage,
      title,
      text,
      body,
      pageTitle,
      pageDescription,
      pageKeywords,
      pagePreviewImage,
      _meta,
    } = page.node
    const dark = isDark(bgColor, bgImage)
    return (
      <Layout className="home-page">
        <SEO
          title={pageTitle || title}
          description={pageDescription || text}
          keywords={pageKeywords}
          image={pagePreviewImage || bgImage}
          lang={_meta.lang}
        />
        <Section className="home-page-section" backgroundImage={bgImage} backgroundColor={bgColor}>
          <Header theme={dark ? "dark" : "light"} />
          <div className="home-page-title">
            <RichText render={title} />
          </div>
          <div className="home-page-text">
            <RichText render={text} />
          </div>
        </Section>
        <Slices body={body} />
      </Layout>
    )
  }
  return null
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
