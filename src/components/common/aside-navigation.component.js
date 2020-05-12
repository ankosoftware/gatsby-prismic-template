import React from "react"
import { RichText } from "./rich-text.component"
import { CustomLink } from "./custom-link.component"
import { getLinkClass } from "../../utils/styles"

export const AsideNavigation = ({navigation}) => {
  return (
    <div>
    <div className="aside-navigation-header">
      <RichText render={navigation.text}/>
    </div>
      <ul className="accordion list-unstyled text-lg-left text-center ml-0 ml-lg-n4" id="accordionExample">
        {navigation.body.map((menu, index) => {
          return (
            <li id="headingOne">
              <div className="btn btn-link collapsed font-bold" itemType="button" data-toggle="collapse"
                   data-target={"#collapseItem"+index} aria-expanded="false" aria-controls={'collapseItem' + index}>
                {menu.primary.nav_text}
              </div>
            <ul id={'collapseItem' + index} className="collapse list-unstyled pl-0 pl-lg-3">
            {menu.fields.map(menuItem => {
              return (
                <li className="mb-2">
                  <CustomLink
                    link={menuItem.link}
                    className={`btn-sm ${getLinkClass(menuItem.link_style, "link")}`}>
                    {menuItem.link_text}
                  </CustomLink>
                </li>
              )
            })}
            </ul>
          </li>)
        })}
      </ul>
    </div>
  )
}

