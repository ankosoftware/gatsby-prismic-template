import React from "react"
import { Section } from "../common/section.component"
import { Collection } from "../common/collection.component"
import { RichText } from "../common/rich-text.component"

/**
 * Feature Object
 * @typedef {{image, title, text, linkStyle, linkText, link}} Feature
 */

export const Features = ({ slice }) => {
  const { primary, fields, label } = slice
  const { bgColor, bgImage } = primary
  return (
    <Section className="section py-5" backgroundImage={bgImage} backgroundColor={bgColor}>
      <div className={`features-slice ${label ? "features-slice-" + label : ""}`}>
        <div className="text-center pb-5">
          <RichText render={primary.title} />
          <RichText render={primary.text} />
        </div>
        <Collection items={fields} type={label} />
      </div>
    </Section>
  )
}
