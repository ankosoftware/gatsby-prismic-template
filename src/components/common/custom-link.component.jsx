import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { linkResolver } from "../../link-resolver"

export const CustomLink = ({ children, link, className, activeClassName, style }) => {
  if (link) {
    switch (link._linkType) {
      case "Link.document":
        if (link._meta) {
          return (
            <Link
              to={linkResolver(link._meta)}
              className={className}
              partiallyActive={link._meta.uid !== "home-page"}
              activeClassName={activeClassName}
              style={style}
            >
              {children}
            </Link>
          )
        }
        return (
          <span className={className} style={style}>
            {children}
          </span>
        )
      case "Link.web":
        let { url } = link
        if (url) {
          url = url.replace(/^https?:\/\//, "")
        }
        return (
          <a href={url} style={style} className={className}>
            {children}
          </a>
        )
      default:
        return children || null
    }
  }
  return children || null
}

CustomLink.propTypes = {
  children: PropTypes.element,
  link: PropTypes.shape({
    url: PropTypes.string,
    _meta: PropTypes.shape({
      uid: PropTypes.string,
      lang: PropTypes.string,
    }),
    _linkType: PropTypes.oneOf(["Link.document", "Link.web"]),
  }),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}
