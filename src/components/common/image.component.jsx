import React from "react"
import { PrismicImage } from "./prismic-image.component"
import { LocalImage } from "./local-image.component"

const renderImage = (image, alt, className, style) => {
  if (typeof image === "string" && image.indexOf("/")) {
    return <LocalImage alt={alt} src={image} style={style} className={className} />
  }
  if (typeof image === "object") {
    if (image.childImageSharp) {
      return <PrismicImage image={image} style={style} className={className} />
    }
    if (image.url) {
      return (
        <div className={`gatsby-image-wrapper ${className}`}>
          <img style={style} src={image.url} alt={image.alt} />
        </div>
      )
    }
  }
  if (typeof image === "string") {
    return (
      <div className={`gatsby-image-wrapper ${className}`}>
        <img src={image} alt={alt} />
      </div>
    )
  }
  return null
}

export const Image = ({ image, alt, className = "", style }) => {
  if (!image) {
    return <span>{alt}</span>
  }
  return renderImage(image, alt, className, style)
}
