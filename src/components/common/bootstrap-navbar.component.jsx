import React from 'react';
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs";
import { Image } from "./image.component"
import { CustomLink } from "./custom-link.component"
import { getLinkClass } from "../../utils/styles"

export const BootstrapNavbar = ({theme = 'dark', logoDark, logoLight, title, menu = [], className=''}) => {
    return (
        <header className="fixed-top shadow-sm bg-light">
            <nav className={`navbar navbar-${theme} ${className}`}>
                <div className="navbar-brand navbar-logo">
                    <Link to={'/'}>
                        {
                            title
                              ? <RichText render={title} />
                              : <Image image={theme === 'dark' ? logoLight : logoDark} />
                        }
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&nbsp;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menu.map((item, index) => (
                            <li className="nav-item" key={`nav-link-${index}`}>
                                <CustomLink
                                    link={item.link}
                                    activeClassName="active"
                                    className={getLinkClass(item.link_style, 'nav-link')}>
                                    {item.link_text}
                                </CustomLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
};
