import React from "react"
import Layout from "../layout.component"
import SEO from "../common/seo.component"
import { Header } from "../header.component"
import { Link } from "gatsby"
import { getLangPrefix } from "../../utils/langs"
import { PlainStructuredText } from "../common/plain-structured-text.component"
import { RichText } from "../common/rich-text.component"
import { BannerCarousel } from "../banner-carousel.component"
import { isDark } from "../../utils/styles"
import { Image } from "../common/image.component"
import { linkResolver } from "../../link-resolver"
import { convertRichTextToPlain } from "../../utils/text"
import Moment from "react-moment"
import { Card } from "../common/card.blog.component"
import { Pagination } from "../common/pagination.component"
import { Slices } from "../slices.component"

export const BlogComponent = ({ blogPage, featured, posts, numPages, currentPage, categories }) => {
  if (blogPage) {
    const {
      _meta,
      title,
      text,
      bgImage,
      bgColor,
      pageTitle,
      pageDescription,
      pageKeywords,
      pagePreviewImage,
      body,
    } = blogPage
    return (
      <Layout>
        <SEO
          title={pageTitle || title}
          description={pageDescription || text}
          keywords={pageKeywords}
          image={pagePreviewImage || bgImage}
          lang={_meta.lang}
        />
        <div className="container">
          <Header theme="light" />
        </div>
        <div className="container mt-6 mt-md-8 mb-4 mb-md-5">
          <nav className="nav blog-category-nav mx-n3">
            <Link className="nav-link" activeClassName={"active"} to={`${getLangPrefix(_meta.lang)}/blog`}>
              Last Posts
            </Link>
            {categories.map(item => {
              const category = item.node
              return (
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to={`${getLangPrefix(category._meta.lang)}/blog/${category._meta.uid}`}
                >
                  <PlainStructuredText structuredText={category.title} />
                </Link>
              )
            })}
          </nav>
          <div className="my-5">
            <RichText className="text-dark-blue" render={title} />
            <RichText render={text} />
          </div>
          <div className="mb-5">
            <BannerCarousel
              id="featured-posts-carousel"
              slides={featured}
              render={slide => {
                const dark = isDark(slide.node.bgColor, slide.node.image)
                return (
                  <>
                    <Image image={slide.node.image} />
                    <div className={`carousel-caption d-none d-md-block ${dark ? "dark" : "light"}`}>
                      <Link to={linkResolver(slide.node._meta, slide.node.category)}>
                        <h3 className="featured-post-title">
                          {slide.node.pageTitle || convertRichTextToPlain(slide.node.title)}
                        </h3>
                        <span>
                          <Moment format="MMM Do YYYY">{slide.node._meta.lastPublicationDate}</Moment>
                        </span>
                      </Link>
                    </div>
                  </>
                )
              }}
            />
          </div>
          <div className="container-blog-list mx-auto">
            <div className="row mb-5">
              {(posts &&
                posts.map(item => {
                  return <Card item={item} />
                })) ||
                null}
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          path={`${getLangPrefix(_meta.lang)}/blog${_meta.type === "blog" ? "" : "/" + _meta.uid}`}
        />
        <Slices body={body} />
      </Layout>
    )
  }
  return null
}
