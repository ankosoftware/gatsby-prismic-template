import React from "react"
import { isDark } from "../utils/styles"
import Layout from "../components/layout.component"
import SEO from "../components/common/seo.component"
import { Section } from "../components/common/section.component"
import { Header } from "../components/header.component"
import { RichText } from "prismic-reactjs"
import { linkFragment, linkResolver } from "../link-resolver"
import StickyBox from "react-sticky-box"
import { AsideNavigation } from "../components/common/aside-navigation.component"
import { Slices } from "../components/slices.component"
import ContentPage from "../templates/content-page"
import { graphql } from "gatsby"

const NotFoundPage = ({ data }) => {
  return (
    <>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

NotFoundPage.fragments = [linkFragment]

export default NotFoundPage
