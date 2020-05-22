import React from "react"
import { Image } from "../common/image.component"
import {RichText} from "prismic-reactjs";
import { Section } from "../common/section.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"

export const DefaultSlice = ({ slice }) => {
  const backgroundColor = slice.primary && slice.primary.bg_color;
  const backgroundImage = slice.primary && slice.primary.bg_image;
  if(slice.primary || slice.fields) {
    return (
      <Section className="text-center" backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
        <div className="default-slice">
          {slice.primary ? (<div className="slice-main">
            <Image image={slice.primary && slice.primary.image}/>
                <RichText render={slice.primary.title}/>
                <RichText render={slice.primary && slice.primary.text}/>
            <CustomLink
              link={slice.primary.link}
              activeClassName="active"
              className={getLinkClass(slice.primary.link_style, 'link')}>
              {slice.primary.link_text}
            </CustomLink>
          </div>) : null}
          {slice.fields && slice.fields.map(item => (
            <div>
              <Image image={item.image}/>
              <RichText render={item.title}/>
              <RichText render={item.text}/>
              <CustomLink
                link={item.link}
                activeClassName="active"
                className={getLinkClass(item.link_style, 'link')}>
                {item.link_text}
              </CustomLink>
            </div>
          ))}
        </div>
      </Section>
    )
  }
  return null;
}
