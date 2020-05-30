import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export function LocalImage({ src, alt, style }) {
  if (!src) {
    return alt ? <span>{alt}</span> : null
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Img
            alt={alt}
            style={style}
            fluid={
              data.allImageSharp.edges.find(element => {
                return element.node.fluid.src.split("/").pop() === src
              }).node.fluid
            }
          />
        )
      }}
    />
  )
}
