import React from "react"
import { RichText } from "prismic-reactjs"
import { Section } from "../common/section.component"
import { Image } from "../common/image.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"
import { Background } from "../common/background-image.component"

export const BlockWithImage = ({ slice }) => {
  const bgImage = slice.primary && slice.primary.bg_image
  const bgColor = slice.primary && slice.primary.bg_color
  const minHeight = slice.primary && slice.primary.min_height
  return (
    <Section className="d-flex align-items-center py-5" backgroundImage={bgImage} backgroundColor={bgColor} minHeight={minHeight}>
      {
        (() => {
      switch (slice.label) {
        case 'content-right':
          return  (
            <div className="row align-items-center">
              <div className="col-12 col-md-6 block-content-right-img">
                <Image image={slice.primary.image}/>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 block-content-right-body">
                <div className="mb-4">
                  <RichText render={slice.primary.title}/>
                </div>
                <RichText render={slice.primary.text}/>
                <CustomLink
                  link={slice.primary.link}
                  className={getLinkClass(slice.primary.link_style, "link")}>
                  {slice.primary.link_text}
                </CustomLink>
              </div>
            </div>
          )
        case 'content-right-bg':
          return (
            <div className="row">
              <Background
                image={slice.primary.image} className="block-content-right-bg-img col-12 col-md-6 mb-3 mb-md-0">
              </Background>
              <div className="col-12 col-md-6 block-content-right-bg-body">
                <div className="mb-4">
                  <RichText render={slice.primary.title}/>
                </div>
                <RichText render={slice.primary.text}/>
                <CustomLink
                  link={slice.primary.link}
                  className={getLinkClass(slice.primary.link_style, "link")}>
                  {slice.primary.link_text}
                </CustomLink>
              </div>
            </div>
          )
        case 'content-left':
          return (
            <div className="row align-items-center">
              <div className="col-12 col-md-6 block-content-left-body">
                <div className="mb-4">
                  <RichText render={slice.primary.title}/>
                </div>
                <RichText render={slice.primary.text}/>
                <CustomLink
                  link={slice.primary.link}
                  className={getLinkClass(slice.primary.link_style, "link")}>
                  {slice.primary.link_text}
                </CustomLink>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 block-content-left-img">
                <Image image={slice.primary.image}/>
              </div>
            </div>
          )
        case 'content-left-bg':
          return (
            <div className="row">
              <div className="col-12 col-md-6 block-content-left-bg-body">
                  <div className="mb-4">
                    <RichText render={slice.primary.title}/>
                  </div>
                <RichText render={slice.primary.text}/>
                <CustomLink
                  link={slice.primary.link}
                  className={getLinkClass(slice.primary.link_style, "link")}>
                  {slice.primary.link_text}
                </CustomLink>
              </div>
              <Background
                image={slice.primary.image} className="block-content-left-bg-img col-12 col-md-6 mt-3 mb-mt-0">
              </Background>
            </div>
          )
        default:
        return (
          <div className="text-center block-content-top-body">
              <div className="mb-4">
              <RichText render={slice.primary.title}/>
              </div>
              <div className="block-with-image-text">
                <RichText render={slice.primary.text}/>
              </div>
            <div className="block-content-top-img">
              <Image image={slice.primary.image}/>
            </div>
              <CustomLink
                link={slice.primary.link}
                className={getLinkClass(slice.primary.link_style, "link")}>
                {slice.primary.link_text}
              </CustomLink>
          </div>
        )
      }
      })()}
    </Section>
  )
}
