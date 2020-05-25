import React from "react"
import { Script } from "../common/script.component"
import { Html } from "../common/html.component"

/**
 * @typedef {{
 *   fields: {
 *    scriptHtml: string,
 *    scriptUrl: string
 *   }[]
 * }} ScriptSlice
 */

/**
 *
 * @param  {ScriptSlice} slice
 * @return {*}
 * @constructor
 */

export const ScriptSlice = ({ slice }) => {
  return (
    <>
      {slice.fields.map(item => (
        <>
          <Html html={item.scriptHtml} />
          <Script scriptUrl={item.scriptUrl} />
        </>
      ))}
    </>
  )
}
