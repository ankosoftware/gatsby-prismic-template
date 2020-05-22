import React from "react"
import { RichText } from "prismic-reactjs"
import { Section } from "../common/section.component"
import { Html } from "../common/html.component"
import { Script } from "../common/script.component"

export const Form = ({ slice }) => {
  const bgImage = slice.primary && slice.primary.bg_image
  const bgColor = slice.primary && slice.primary.bg_color
  switch (slice.label) {
    case 'content-right':
      return null
    case 'content-left':
      return (
        <Section className="section" backgroundImage={bgImage} backgroundColor={bgColor}>
        <div className="container">
          <div className="text-center">
          <RichText render={slice.primary.title}/>
          <div className="separator"></div>
          </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-content-text">
              <RichText render={slice.primary.text}/>
            </div>
          </div>
          <div className="col-md-8 mt-3 form-group">
            <div className="form-content">
              <Html html={slice.primary.form_script} />
              <Script scriptUrl={slice.primary.form_url} />
            </div>
          </div>
        </div>
        </div>
        </Section>
      )
    case 'content-top':
    default:
      return (
        <Section className="section" backgroundImage={bgImage} backgroundColor={bgColor}>
          <div className="block-with-image-block text-center">
            <div className="mb-5">
              <RichText render={slice.primary.title}/>
              <RichText render={slice.primary.text}/>
            </div>
            <div className="form-content">
              <Html html={slice.primary.form_script} />
              <Script scriptUrl={slice.primary.form_url} />
            </div>
          </div>
        </Section>
      )
  }

}
