import React from "react"
import { CustomLink } from "./custom-link.component"
import { getLinkClass } from "../../utils/styles"

export const LinksRow = ({links, className}) => {
  return (
    <ul className={`row ${className}`}>
      {links.map(item => (
        <li className="nav-item mt-3">
          <CustomLink
            link={item.link}
            activeClassName="active"
            className={getLinkClass(item.link_style, 'nav-link')}>
            {item.link_text}
          </CustomLink>
        </li>
      ))}
    </ul>
  )
}
