import React from "react"
import { Section } from "../common/section.component"
import { Image } from "../common/image.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"
import { Background } from "../common/background-image.component"
import { RichText } from "../common/rich-text.component"

/**
 * BlockWithImage Object
 * @typedef {
 * {
 *  label: string,
 *  type: string,
 *  primary: {
 *    bgColor,
 *    bgImage,
 *    minHeight,
 *    title,
 *    text,
 *    image,
 *    link,
 *    linkStyle,
 *    linkText
 *  }
 *  }
 * } BlockWithImageSlice
 */

/**
 *
 * @param {BlockWithImageSlice} slice
 * @return {*}
 * @constructor
 */
export const BlockWithImage = ({ slice }) => {
  const { bgImage, bgColor, minHeight, image, link, text, title, linkStyle, linkText } = slice.primary
  return (
    <Section
      className="d-flex align-items-center py-5"
      backgroundImage={bgImage}
      backgroundColor={bgColor}
      minHeight={minHeight}
    >
      {(() => {
        switch (slice.label) {
          case "content-right":
            return (
              <div className="row align-items-center">
                <div className="col-12 col-md-6 block-content-right-img">
                  <Image image={image} />
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0 block-content-right-body">
                  <div className="mb-4">
                    <RichText render={title} />
                  </div>
                  <RichText render={text} />
                  <CustomLink link={link} className={getLinkClass(linkStyle, "link")}>
                    {linkText}
                  </CustomLink>
                </div>
              </div>
            )
          case "content-right-bg":
            return (
              <div className="row">
                <Background image={image} className="block-content-right-bg-img col-12 col-md-6 mb-3 mb-md-0" />
                <div className="col-12 col-md-6 block-content-right-bg-body">
                  <div className="mb-4">
                    <RichText render={title} />
                  </div>
                  <RichText render={text} />
                  <CustomLink link={link} className={getLinkClass(linkStyle, "link")}>
                    {linkText}
                  </CustomLink>
                </div>
              </div>
            )
          case "content-left":
            return (
              <div className="row align-items-center">
                <div className="col-12 col-md-6 block-content-left-body">
                  <div className="mb-4">
                    <RichText render={title} />
                  </div>
                  <RichText render={text} />
                  <CustomLink link={link} className={getLinkClass(linkStyle, "link")}>
                    {linkText}
                  </CustomLink>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0 block-content-left-img">
                  <Image image={image} />
                </div>
              </div>
            )
          case "content-left-bg":
            return (
              <div className="row">
                <div className="col-12 col-md-6 block-content-left-bg-body">
                  <div className="mb-4">
                    <RichText render={title} />
                  </div>
                  <RichText render={text} />
                  <CustomLink link={link} className={getLinkClass(linkStyle, "link")}>
                    {linkText}
                  </CustomLink>
                </div>
                <Background image={image} className="block-content-left-bg-img col-12 col-md-6 mt-3 mb-mt-0" />
              </div>
            )
          default:
            return (
              <div className="text-center block-content-top-body">
                <div className="mb-4">
                  <RichText render={title} />
                </div>
                <div className="block-with-image-text">
                  <RichText render={text} />
                </div>
                <div className={`block-content-top-img ${!image ? "no-image" : ""}`}>
                  <Image image={image} />
                </div>
                <CustomLink link={link} className={getLinkClass(linkStyle, "link")}>
                  {linkText}
                </CustomLink>
              </div>
            )
        }
      })()}
    </Section>
  )
}
