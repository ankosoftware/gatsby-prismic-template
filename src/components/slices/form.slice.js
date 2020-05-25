import React from "react"
import { Section } from "../common/section.component"
import { Html } from "../common/html.component"
import { Script } from "../common/script.component"
import { RichText } from "../common/rich-text.component"

/**
 * Form Slice Object
 * @typedef {
 * {
 *  label: string,
 *  type: string,
 *  primary: {
 *    bgColor: string,
 *    bgImage: *,
 *    formScript: string,
 *    formUrl: string,
 *    title: string,
 *    text: string
 *  }
 *  }
 * } FormSlice
 */

/**
 * Form Slice Component
 * @param {FormSlice} slice
 * @return {null|*}
 * @constructor
 */
export const Form = ({ slice }) => {
  const { bgImage, bgColor, title, text, formScript, formUrl } = slice.primary
  switch (slice.label) {
    case "content-right":
      return (
        <Section className="section" backgroundImage={bgImage} backgroundColor={bgColor}>
          <div className="container">
            <div className="text-center">
              <RichText render={title} />
              <div className="separator" />
            </div>
            <div className="row">
              <div className="col-md-8 mt-3 form-group">
                <div className="form-content">
                  <Html html={formScript} />
                  <Script scriptUrl={formUrl} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-content-text">
                  <RichText render={text} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      )
    case "content-left":
      return (
        <Section className="section" backgroundImage={bgImage} backgroundColor={bgColor}>
          <div className="container">
            <div className="text-center">
              <RichText render={title} />
              <div className="separator" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-content-text">
                  <RichText render={text} />
                </div>
              </div>
              <div className="col-md-8 mt-3 form-group">
                <div className="form-content">
                  <Html html={formScript} />
                  <Script scriptUrl={formUrl} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      )
    case "content-top":
    default:
      return (
        <Section className="section" backgroundImage={bgImage} backgroundColor={bgColor}>
          <div className="block-with-image-block text-center">
            <div className="mb-5">
              <RichText render={title} />
              <RichText render={text} />
            </div>
            <div className="form-content">
              <Html html={formScript} />
              <Script scriptUrl={formUrl} />
            </div>
          </div>
        </Section>
      )
  }
}
