import React from 'react';
import { RichText } from "prismic-reactjs";
import { Background } from "./background-image.component"
import { CustomLink } from "./custom-link.component"

export const BannerWithButtons = ({text, buttons, className, children, backgroundImage, navbar}) => (
  <Background image={backgroundImage} className={className}>
    {navbar}
    <RichText render={text}/>
    <div className='banner-buttons'>
      {buttons.map(button => (
        <CustomLink className="btn btn-primary" link={button.link}>{button.link_text}</CustomLink>
      ))}
    </div>
    {children}
  </Background>
);
