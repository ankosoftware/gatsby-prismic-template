import React from "react"
import { Section } from "../common/section.component"
import { RichText } from "../common/rich-text.component"

/**
 * Text Slice Object
 * @typedef {
 * {
 *  label: string,
 *  type: string,
 *  primary: {
 *    bgColor: string,
 *    bgImage: *,
 *    title: string,
 *    text: string
 *  }
 *  }
 * } TextSlice
 */

/**
 *
 * @param {TextSlice} slice
 * @return {*}
 * @constructor
 */

export const TextSlice = ({ slice }) => {
  const { bgImage, bgColor, text, title } = slice.primary
  return (
    <Section className="py-5" backgroundImage={bgImage} backgroundColor={bgColor}>
      <div>
        <RichText render={title} />
        <RichText render={text} />
      </div>
    </Section>
  )
}
