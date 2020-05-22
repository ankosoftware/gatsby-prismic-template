import React from 'react';
import Img from 'gatsby-image';

export const PrismicImage = ({image, className}) => {
    if(image && image.childImageSharp) {
        return (
            <Img alt={image.alt} fluid={image.childImageSharp.fluid} className={className} />
        )
    }
    return null;
};


