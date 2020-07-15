import React from "react"
import { isDark } from "../../utils/styles"
import Layout from "../layout.component"
import SEO from "../common/seo.component"
import { Section } from "../common/section.component"
import { Header } from "../header.component"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../link-resolver"
import { Html } from "../common/html.component"
import { Script } from "../common/script.component"
import { Slices } from "../slices.component"

export const LandingPageCompoonet = ({ page }) => {
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
