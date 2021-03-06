import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image';

export function LocalImage ({src, alt}) {
    if (!src) {
        return null;
    }
    return  (
        <StaticQuery
            query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ... GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
            render={data => {
                return (
                    <Img alt={alt} fluid={data.allImageSharp.edges.find((element) => {
                        return (element.node.fluid.src.split('/').pop() === src);
                    }).node.fluid} />
                )
            }}
        />
    )
}
