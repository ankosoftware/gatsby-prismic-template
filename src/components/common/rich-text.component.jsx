import React, { useEffect, useRef } from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { linkResolver } from "../../link-resolver"
import Prism from "prismjs"

export const RichText = ({ render, className }) => {
  const element = useRef(null)
  const highlightCode = () => {
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
  const applyImages = () => {
    const links = element.current.getElementsByTagName("a")
    Array.from(links).forEach(link => {
      const parent = link.parentNode
      if (link.textContent.trim() === "[image]") {
        const image = document.createElement("img")
        image.className = "rich-text-inline-image"
        image.src = link.href
        parent.insertBefore(image, link)
        parent.removeChild(link)
      } else if (link.textContent.trim().indexOf("[button") === 0) {
        const confStr = link.textContent
        const textContentMatch = confStr.match(/{([^}]+)}/)
        if (textContentMatch && textContentMatch.length > 1) {
          link.textContent = textContentMatch[1]
        }
        const classNameMatch = confStr.match(/\[button:([^\s}]+)/)
        let className = "btn"
        if (classNameMatch && classNameMatch.length > 1) {
          const btnProps = classNameMatch[1].split(":")
          btnProps.forEach(prop => {
            className += " btn-" + prop
          })
        }
        link.className = className
      }
    })
  }
  useEffect(() => {
    if (element && element.current && render) {
      highlightCode()
      applyImages()
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
