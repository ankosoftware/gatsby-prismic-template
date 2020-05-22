import React from 'react';
import { LinksRow } from "../common/links-row.component"

export const MenuSlice = ({slice}) => {
  return <LinksRow
    title={slice.primary.nav_text}
    links={slice.fields}
    className="menu-slice list-unstyled d-inline-block my-3 col-12 col-sm-6 col-md-4 px-4" />
}