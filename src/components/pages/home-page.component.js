import React from "react"
import { isDark } from "../../utils/styles"
import Layout from "../layout.component"
import SEO from "../common/seo.component"
import { Section } from "../common/section.component"
import { Header } from "../header.component"
import { RichText } from "../common/rich-text.component"
import { Slices } from "../slices.component"

export const HomePageComponent = ({ page }) => {
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
