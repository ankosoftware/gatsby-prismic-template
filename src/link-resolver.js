import { graphql } from "gatsby"
import { DEFAULT_LANG } from "../propreties"

export const linkResolver = (doc, parent) => {
  const langPrefix = doc.lang && doc.lang !== DEFAULT_LANG ? `/${doc.lang}` : ""
  switch (doc.type) {
    case "home-page":
      return `${langPrefix}/`
    case "blog-page":
      return `${langPrefix}/blog`
    case "blog-category":
      return `${langPrefix}/blog/${doc.uid}`
    case "blog-post":
      if (parent) {
        return `${langPrefix}/blog/${parent._meta.uid}/${doc.uid}`
      }
      return `${langPrefix}/blog/${doc.uid}`
    case "landing-page":
      return `${langPrefix}/landing/${doc.uid}`
    case "content-page":
      if (parent) {
        if (parent.parent) {
          return `${langPrefix}/${parent.parent._meta.uid}/${parent._meta.uid}/${doc.uid}`
        }
        return `${langPrefix}/${parent._meta.uid}/${doc.uid}`
      }
      return `${langPrefix}/${doc.uid}`
    default:
      return `/404`
  }
}

export const linkFragment = graphql`
  fragment link on PRISMIC__Linkable {
    _linkType
    ... on PRISMIC_ContentPage {
      _linkType
      _meta {
        uid
        type
        lang
      }
      parent {
        ... on PRISMIC_ContentPage {
          _meta {
            lang
            type
            uid
          }
          parent {
            ... on PRISMIC_ContentPage {
              _meta {
                lang
                type
                uid
              }
            }
          }
        }
      }
    }
    ... on PRISMIC_HomePage {
      _linkType
      _meta {
        uid
        type
        lang
      }
    }
    ... on PRISMIC_BlogPost {
      _linkType
      _meta {
        uid
        lang
        type
      }
    }
    ... on PRISMIC_BlogCategory {
      _linkType
      _meta {
        uid
        lang
        type
      }
    }
    ... on PRISMIC_BlogPage {
      _linkType
      _meta {
        uid
        lang
        type
      }
    }
    ... on PRISMIC__ExternalLink {
      _linkType
      url
    }
  }
`
