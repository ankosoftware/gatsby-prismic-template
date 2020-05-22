import React from 'react';
import LayoutComponent from "../components/layout.component"
import { Header } from "../components/navbar.component"
import { graphql } from "gatsby"
import { linkFragment, linkResolver } from "../link-resolver"
import { isDark } from "../utils/styles"
import { Slices } from "../components/slices.component"
import { Section } from "../components/common/section.component"
import { RichText } from "../components/common/rich-text.component"


const HomePage = ({uri, data}) => {
  const page = data.prismic.allHomePages.edges.find(item => {
    return uri === linkResolver(item.node._meta);
  })
  if (page) {
    const dark = isDark(page.node.background_color, page.node.background_image);
    return (
      <LayoutComponent>
        <Section backgroundImage={page.node.background_image} backgroundColor={page.node.background_color}>
          <Header theme={dark ? 'dark' : 'light'}/>
          <div className="mt-10 text-center">
            <RichText render={page.node.title}/>
          </div>
          <div className="text-center">
            <RichText render={page.node.text}/>
          </div>
        </Section>
        <Slices body={page.node.body}/>
      </LayoutComponent>
    )
  }
  return null;
}

HomePage.fragments = [linkFragment]

export default HomePage;

export const query = graphql`
    query homePageQuery {
        prismic {
            allHomePages {
                edges {
                    node {
                        _meta {
                            uid
                            type
                            lang
                        }
                        bg_image
                        bg_color
                        text
                        title
                        body {
                            ... on PRISMIC_HomePageBodyPricing_plans {
                                type
                                label
                                fields {
                                    price_units
                                    plan_price
                                    plan_name
                                    plan_features
                                    link_text
                                    link_style
                                    link {
                                        ...link
                                    }
                                    is_free_plan
                                }
                                primary {
                                    bg_image
                                    bg_color
                                    title
                                    text
                                }
                            }
                            ... on PRISMIC_HomePageBodyItems_collection {
                                label
                                type
                                primary {
                                    bg_color
                                    bg_image
                                    text
                                    title
                                    link_style
                                    link_text
                                }
                                fields {
                                    tag
                                }
                            }
                            ... on PRISMIC_HomePageBodyText {
                                type
                                label
                                primary {
                                    text
                                    bg_color
                                    bg_image
                                }
                            }
                            ... on PRISMIC_HomePageBodyFeature {
                                type
                                label
                                primary {
                                    bg_color
                                    bg_image
                                    text
                                }
                                fields {
                                    image
                                    link_style
                                    link_text
                                    text
                                    title
                                    link {
                                        ...link
                                    }
                                }
                            }
                            ... on PRISMIC_HomePageBodyBlock_with_text_and_image {
                                label
                                type
                                primary  {
                                    bg_color
                                    bg_image
                                    min_height
                                    title
                                    text
                                    image
                                    link {
                                        ...link
                                    }
                                    link_style
                                    link_text
                                }
                            }
                            ... on PRISMIC_HomePageBodyForm {
                                type
                                label
                                primary {
                                    bg_color
                                    bg_image
                                    form_script
                                    form_url
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`
