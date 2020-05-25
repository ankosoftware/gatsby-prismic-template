import React from "react"
import { Section } from "../common/section.component"
import { getLinkClass } from "../../utils/styles"
import { CustomLink } from "../common/custom-link.component"
import { RichText } from "../common/rich-text.component"

/**
 * Pricing Slice Object
 *
 * @typedef {{
 *  label: string,
 *  type: string,
 *  primary: {
 *    bgColor: string,
 *    bgImage: string,
 *    title: string,
 *    text: string,
 *  },
 *  fields: {
 *    priceUnits: string,
 *    planPrice: string,
 *    planName: string,
 *    planDetails: string,
 *    linkText: string,
 *    linkStyle: string,
 *    link: *,
 *    isFreePlan: boolean
 *  }[]
 *  }
 * } PricingSlice
 */

/**
 * @param {PricingSlice} slice
 * @return {*}
 * @constructor
 */
export const Pricing = ({ slice }) => {
  const { primary, fields, label } = slice
  const { bgColor, bgImage, text, title } = primary
  return (
    <Section className="py-5" backgroundImage={bgImage} backgroundColor={bgColor}>
      <div className={`features-slice ${label ? "features-slice-" + label : ""}`}>
        <div className="container feature-container-header text-center mb-5">
          <RichText render={title} />
          <RichText render={text} />
        </div>
        <div className="row">
          {fields.map(plan => {
            return (
              <div className="col-12 col-lg-4">
                <div className="card mb-4 shadow w-100">
                  <div className="card-header text-center bg-white">
                    <RichText render={plan.planName} className="py-3" />
                  </div>
                  <div className="card-body pricing-slice-card-body pb-5">
                    <div className="text-center">
                      <h3 className="mb-4">
                        {plan.planPrice}
                        {plan.isFreePlan ? null : (
                          <small className="text-secondary font-weight-light d-inline-block font-12 ml-2 mt-2 align-text-top">
                            {plan.priceUnits}
                          </small>
                        )}
                      </h3>
                      <CustomLink
                        link={plan.link}
                        className={`btn btn-sm mb-4 ${getLinkClass(plan.linkStyle, "link")}`}
                      >
                        {plan.linkText}
                      </CustomLink>
                      <RichText render={plan.planDetails} className="text-center text-lg-left mx-4" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
