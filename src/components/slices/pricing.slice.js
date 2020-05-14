import React from "react"
import { Section } from "../common/section.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"
import { RichText } from "../common/rich-text.component"

export const Pricing = ({ slice }) => {
  const { primary, fields, label } = slice
  const backgroundColor = primary && primary.bg_color
  const backgroundImage = primary && primary.bg_image
  return (
    <Section className="py-5" backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      <div className={`features-slice ${label ? "features-slice-" + label : ""}`}>
        <div className="container feature-container-header text-center mb-5">
          <RichText render={primary.title}/>
          <RichText render={primary.text}/>
        </div>
        <div className="row">
        {
          fields.map(plan => {
            return (
              <div className="col-12 col-lg-4">
                <div className="card mb-4 shadow w-100">
                  <div className="card-header text-center bg-white">
                    <RichText render={plan.plan_name} className="py-3"/>
                  </div>
                  <div className="card-body pricing-slice-card-body pb-5">
                    <div className="text-center">
                      <h3 className="mb-4">
                        {plan.plan_price}
                        { plan.plan_free ? null : (
                          <small
                            className="text-secondary font-weight-light d-inline-block font-12 ml-2 mt-2 align-text-top">
                            {plan.price_units}
                          </small>
                        )
                        }
                      </h3>
                      <CustomLink
                        link={plan.link}
                        className={`btn btn-sm mb-4 ${getLinkClass(plan.link_style, "link")}`}>
                        {plan.link_text}
                      </CustomLink>
                      <h5 className="mb-4 text-secondary font-weight-normal">Included</h5>
                      <RichText render={plan.plan_features} className="text-center text-lg-left mx-4"/>
                    </div>
                  </div>
                </div>
              </div>
          )
          })
        }
        </div>
      </div>
    </Section>
        )
}
