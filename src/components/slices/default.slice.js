import React from "react"
import { Image } from "../common/image.component"
import { Section } from "../common/section.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"
import { RichText } from "../common/rich-text.component"

/**
 * Slice Object
 * @typedef {
 * {
 *  label: string,
 *  type: string,
 *  primary: {
 *    bgColor,
 *    bgImage,
 *    title,
 *    text,
 *    image,
 *    link,
 *    linkStyle,
 *    linkText
 *  }
 *  fields: {
 *    title,
 *    text,
 *    image,
 *    link,
 *    linkStyle,
 *    linkText
 *  }[]
 *  }
 * } Slice
 */

/**
 *
 * @param {Slice} slice
 * @return {null|*}
 * @constructor
 */
export const DefaultSlice = ({ slice }) => {
  if (slice.primary || slice.fields) {
    const bgColor = slice.primary && slice.primary.bgColor
    const bgImage = slice.primary && slice.primary.bgImage
    return (
      <Section className="text-center" backgroundImage={bgImage} backgroundColor={bgColor}>
        <div className="default-slice">
          {slice.primary ? (
            <div className="slice-main">
              <Image image={slice.primary.image} />
              <RichText render={slice.primary.title} />
              <RichText render={slice.primary.text} />
              <CustomLink
                link={slice.primary.link}
                activeClassName="active"
                className={getLinkClass(slice.primary.linkStyle, "link")}
              >
                {slice.primary.linkText}
              </CustomLink>
            </div>
          ) : null}
          {slice.fields &&
            slice.fields.map(item => (
              <div>
                <Image image={item.image} />
                <RichText render={item.title} />
                <RichText render={item.text} />
                <CustomLink link={item.link} activeClassName="active" className={getLinkClass(item.linkStyle, "link")}>
                  {item.linkText}
                </CustomLink>
              </div>
            ))}
        </div>
      </Section>
    )
  }
  return null
}
