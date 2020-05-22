import React from "react"

export const PlainStructuredText = ({ structuredText }) => {
  if(!structuredText) {
    return null;
  }
  return (<>
    {
      structuredText.map((item, index) => {
        if (index === 0) {
          return <span>{item.text}</span>
        }
        return <><br/><span>{item.text}</span></>
      })
    }
  </>)
}
