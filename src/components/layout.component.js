/**
 * LayoutComponent component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Footer } from "./footer.component"

const LayoutComponent = ({ children, className = "" }) => {
  return (
    <>
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
