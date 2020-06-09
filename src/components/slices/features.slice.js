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
    <Section
      backgroundImage={bgImage}
      backgroundColor={bgColor}
      className={`features-slice ${label ? "features-slice-" + label : ""}`}
    >
      <RichText className="features-slice-title" render={primary.title} />
      <RichText className="features-slice-text" render={primary.text} />
      <Collection items={fields} type={label} />
    </Section>
  )
}
