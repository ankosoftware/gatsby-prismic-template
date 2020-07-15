import React from "react"
import Layout from "../layout.component"
import SEO from "../common/seo.component"
import { Section } from "../common/section.component"
import { Header } from "../header.component"
import { RichText } from "prismic-reactjs"
import { Image } from "../common/image.component"
import { linkResolver } from "../../link-resolver"
import { Slices } from "../slices.component"
import { isDark } from "../../utils/styles"

export const BlogPostComponent = ({ post }) => {
  if (post) {
    const {
      text,
      title,
      image,
      bgColor,
      pageTitle,
      pageDescription,
      pageKeywords,
      pagePreviewImage,
      body,
      _meta,
    } = post
    const dark = isDark(bgColor, image)
    return (
      <Layout>
        <SEO
          title={pageTitle || title}
          description={pageDescription || text}
          keywords={pageKeywords}
          image={pagePreviewImage || image}
          lang={_meta.lang}
        />
        <Section>
          <Header theme={dark ? "dark" : "light"} />
          <div className="container py-5 text-center">
            <RichText render={title} />
          </div>
          <article>
            <Image className="mb-5 blog-post-image" image={image} />
            <div className="mw-690 blog-post-content mx-auto">
              <RichText render={text} linkResolver={linkResolver} />
            </div>
          </article>
          <Slices body={body} />
        </Section>
      </Layout>
    )
  }
  return null
}
