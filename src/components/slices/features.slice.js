import React from "react"
import { Section } from "../common/section.component"
import { Collection } from "../common/collection.component"
import { RichText } from "../common/rich-text.component"

export const Features = ({ slice }) => {

  const { primary, fields, label } = slice
  const backgroundColor = primary && primary.bg_color
  const backgroundImage = primary && primary.bg_image
  return (
    <Section className="section py-5" backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      <div className={`features-slice ${label ? "features-slice-" + label : ""}`}>
        <div className="text-center pb-5">
          <RichText render={primary.title}/>
          <RichText render={primary.text}/>
        </div>
        <Collection items={fields} type={label}/>
      </div>
    </Section>
  )
}



