import React from "react"
import Layout from "../components/layout.component"
import { Header } from "../components/header.component"
import { graphql } from "gatsby"
import { linkFragment, linkResolver } from "../link-resolver"
import { isDark } from "../utils/styles"
import { RichText } from "prismic-reactjs"
import { Slices } from "../components/slices.component"
import { Section } from "../components/common/section.component"
import { AsideNavigation } from "../components/common/aside-navigation.component"
import StickyBox from "react-sticky-box"
import SEO from "../components/common/seo.component"

const ContentPage = ({ data }) => {
  const page = data.prismic.contentPage
  if (page) {
    const {
      _meta,
      title,
      text,
      bgImage,
      bgColor,
      asideNavigation,
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
          {title || text ? (
            <>
              <div className="content-page-title">
                <RichText render={title} linkResolver={linkResolver} />
              </div>
              <div className="content-page-text">
                <RichText render={text} linkResolver={linkResolver} />
              </div>
            </>
          ) : null}
        </Section>
        {asideNavigation ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-mb-12 text-lg-left text-center">
                <StickyBox offsetTop={100} offsetBottom={20}>
                  <AsideNavigation navigation={asideNavigation} />
                </StickyBox>
              </div>
              <div className="col-lg-8 col-mb-12">
                <Slices body={body} />
              </div>
            </div>
          </div>
        ) : (
          <Slices body={body} />
        )}
      </Layout>
    )
  }
  return null
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
