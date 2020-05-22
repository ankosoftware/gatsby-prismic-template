import { graphql } from "gatsby"

export const linkResolver = (doc, parent) => {
  switch (doc.type) {
    case "home-page":
      return "/";
    case "blog-page":
      return "/blog"
    case "blog-post":
      return `/blog/${doc.uid}`
    case "landing-page":
      return `/landing/${doc.uid}`
    case "content-page":
      if (parent) {
        if (parent.parent) {
          return `/${parent.parent._meta.uid}/${parent._meta.uid}/${doc.uid}`
        }
        return `/${parent._meta.uid}/${doc.uid}`
      }
      return `/${doc.uid}`
  }
}


export const linkFragment = graphql`  
    fragment link on PRISMIC__Linkable {
        __typename
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
                                type
                                uid
                                lang
                            }
                            parent {
                                ... on PRISMIC_ContentPage {
                                    _meta {
                                        type
                                        uid
                                        lang
                                    }
                                }
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
