import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

export const Background = ({image, className, style, children}) => {
    if(style && style.backgroundColor) {
        style.backgroundBlendMode = "overlay";
    }
    if(!image) {
        return (<div className={className} style={style}>
            {children}
        </div>);
    }
    if (image.url) {
        return (<div className={`gatsby-image-wrapper ${className}`} style={{...style, backgroundImage: `url(${image.url})`}}>
            {children}
        </div>);
    }
    if (image.childImageSharp) {
        return (<BackgroundImage className={className} style={style} fluid={image.childImageSharp.fluid}>
            {children}
        </BackgroundImage>);
    }
    if (typeof image === 'string') {
        return (<div className={`gatsby-image-wrapper ${className}`} style={{...style, backgroundImage: `url(${image})`}}>
            {children}
        </div>)
    }
    return <div style={style} className={className}>{children}</div>;
};

