import React, { useEffect, useRef } from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { linkResolver } from "../../link-resolver"
import Prism from "prismjs"

export const RichText = ({ render, className }) => {
  const element = useRef(null)
  useEffect(() => {
    if (element && element.current && render) {
      const codeBlocks = render.filter(item => {
        return item.type === "preformatted" && item.text.indexOf("```") === 0
      })
      codeBlocks.forEach(codeBlock => {
        const index = render.indexOf(codeBlock)
        const match = codeBlock.text.match(/```([^\s\f\r\n]+)/)
        let lang = "clike"
        if (match && match.length) {
          lang = match[1]
        }
        const text = codeBlock.text.replace(/```([^\s\f\r\n]+)?/gim, "")
        const html = Prism.highlight(text, Prism.languages[lang], lang)
        const code = document.createElement("code")
        code.innerHTML = html
        const parent = element.current.childNodes[index]
        parent.innerHTML = ""
        parent.appendChild(code)
      })
    }
  })
  if (typeof render === "string") {
    return <div className={className}>{render}</div>
  }
  return (
    <div className={className} ref={element}>
      <PrismicRichText render={render} linkResolver={linkResolver} />
    </div>
  )
}
