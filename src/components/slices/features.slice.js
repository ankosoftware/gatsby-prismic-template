import React from "react"
import { RichText } from "prismic-reactjs"
import { Section } from "../common/section.component"
import { Collection } from "../common/collection.component"

export const Features = ({ slice }) => {

  const { primary, fields, label } = slice
  const backgroundColor = primary && primary.bg_color
  const backgroundImage = primary && primary.bg_image
  return (
    <Section className="section" backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      <div className={`features-slice ${label ? "features-slice-" + label : ""}`}>
        <div className="text-center mb-5">
          <RichText render={primary.text}/>
          <div className="separator"></div>
        </div>
        <Collection items={fields} type={label}/>
      </div>
    </Section>
  )
}



