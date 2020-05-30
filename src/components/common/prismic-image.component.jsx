import React from "react"
import Img from "gatsby-image"

export const PrismicImage = ({ image, className, style }) => {
  if (image && image.childImageSharp) {
    return <Img alt={image.alt} fluid={image.childImageSharp.fluid} style={style} className={className} />
  }
  return null
}
