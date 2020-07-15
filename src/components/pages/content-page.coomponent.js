import React from "react"
import { isDark } from "../../utils/styles"
import Layout from "../layout.component"
import SEO from "../common/seo.component"
import { Section } from "../common/section.component"
import { Header } from "../header.component"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../link-resolver"
import StickyBox from "react-sticky-box"
import { AsideNavigation } from "../common/aside-navigation.component"
import { Slices } from "../slices.component"

export const ContentPageComponent = ({ page }) => {
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
