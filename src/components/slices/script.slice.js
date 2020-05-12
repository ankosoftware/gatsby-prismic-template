import React from "react"
import { Script } from "../common/script.component"
import { Html } from "../common/html.component"


export const ScriptSlice = ({ slice }) => {
  return (<>
    {slice.fields.map(item => (
      <>
        <Html html={item.script_html}/>
        <Script scriptUrl={item.script_url}/>
      </>
    ))}
    </>)
}

