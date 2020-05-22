import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { linkResolver } from "../../link-resolver"

export const RichText = ({render, className}) => {
  if(typeof render === 'string') {
    return <div className={className}>{render}</div>
  }
  return (
    <div className={className}>
      <PrismicRichText render={render} linkResolver={linkResolver}/>
    </div>
  )
}
