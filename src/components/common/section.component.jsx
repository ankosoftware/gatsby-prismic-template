import React from "react"
import { Background } from "./background-image.component"
import { isDark } from "../../utils/styles"

export const Section = ({backgroundImage, backgroundColor, className, children, minHeight}) => {
  const dark = isDark(backgroundColor, backgroundImage);
  return (
    <Background
      className={`section ${dark ? 'section-dark' : 'section-light'} ${className || ''}`}
      image={backgroundImage}
      style={{
        minHeight: (minHeight + "px"),
        backgroundColor: (backgroundColor
          ? backgroundColor
          : "transparent"),
      }}
    >
      <div className="container">
        {children}
      </div>
    </Background>
  )
}
