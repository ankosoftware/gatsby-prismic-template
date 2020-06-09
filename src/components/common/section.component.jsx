import React from "react"
import { Background } from "./background-image.component"
import { isDark } from "../../utils/styles"

/**
 *
 * @param {{url: string}} backgroundImage - prismic image
 * @param {string} backgroundColor - color string
 * @param {string} className
 * @param {*} children
 * @param {number} minHeight
 * @return {Section}
 * @constructor
 */
export const Section = ({ backgroundImage, backgroundColor, className = "", children, minHeight }) => {
  const dark = isDark(backgroundColor, backgroundImage)
  return (
    <section>
      <Background
        className={`section ${dark ? "section-dark" : "section-light"} ${className}`}
        image={backgroundImage}
        style={{
          minHeight: minHeight + "px",
          backgroundColor: backgroundColor ? backgroundColor : "transparent",
        }}
      >
        <div className="container">{children}</div>
      </Background>
    </section>
  )
}
