import React from 'react';
import { PlainStructuredText } from "./plain-structured-text.component"

export const Accordion = ({items, renderContent, className}) => (
  <ul className={`list-unstyled ${className}`}>
    {items.map((item, index) => (
      <div className="accordion-item" data-toggle="collapse" data-target={'#collapseItem' + index}
           aria-expanded="false" aria-controls={'collapseItem' + index}>
        <li className="mb-3">
          <div className="border-bottom d-flex">
            <p className="accordion-title font-20 mb-3 d-inline-block">
              <PlainStructuredText structuredText={item.title} />
            </p>
              <i className="accordion-icon ml-auto p-0">
                keyboard_arrow_down
              </i>
            </div>
          <div className="collapse p-4 mr-5 font-18" id={'collapseItem' + index}>
            {renderContent(item)}
          </div>
        </li>
      </div>
      ))}
  </ul>
)
