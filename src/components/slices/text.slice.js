import React from "react"
import {RichText} from "prismic-reactjs"
import { Section } from "../common/section.component"

export const TextSlice = ({ slice }) => {
  const bgImage = slice.primary && slice.primary.bg_image
  const bgColor = slice.primary && slice.primary.bg_color
  return (
    <Section className="py-5" backgroundImage={bgImage} backgroundColor={bgColor}>
      <div>
        <RichText render={slice.primary.text}/>
      </div>
    </Section>
  )
}
