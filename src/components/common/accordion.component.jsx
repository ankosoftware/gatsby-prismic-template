import React from "react"
import { PlainStructuredText } from "./plain-structured-text.component"

/**
 *
 * @param  {Feature[]} items
 * @param {function(Feature)} renderContent
 * @param {string} className
 * @return {*}
 * @constructor
 */
export const Accordion = ({ items, renderContent, className }) => (
  <ul className={`list-unstyled ${className}`}>
    {items.map((item, index) => (
      <div
        className="accordion-item"
        data-toggle="collapse"
        data-target={"#collapseItem" + index}
        aria-expanded="false"
        aria-controls={"collapseItem" + index}
      >
        <li className="mb-3">
          <div className="border-bottom d-flex">
            <p className="mb-3 d-inline-block">
              <PlainStructuredText structuredText={item.title} />
            </p>
            <i className="accordion-icon ml-auto p-0">keyboard_arrow_down</i>
          </div>
          <div className="collapse p-4 mr-5" id={"collapseItem" + index}>
            {renderContent(item)}
          </div>
        </li>
      </div>
    ))}
  </ul>
)
