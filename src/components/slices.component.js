import React from "react"
import { DefaultSlice } from "./slices/default.slice"
import { Features } from "./slices/features.slice"
import { BlockWithImage } from "./slices/block-with-image.slice"
import { Form } from "./slices/form.slice"
import { ScriptSlice } from "./slices/script.slice"
import { TextSlice } from "./slices/text.slice"
import { ItemsCollection } from "./slices/items-collection.slice"
import { Pricing } from "./slices/pricing.slice"
import { MenuSlice } from "./slices/menu.slice"
import { GallerySlice } from "./slices/gallery.slice"

export const Slices = ({ body }) => {
  if (body) {
    return body.map(slice => {
      if (slice.primary || slice.fields) {
        switch (slice.type) {
          case "feature":
            return <Features slice={slice} />
          case "block-with-text-and-image":
            return <BlockWithImage slice={slice} />
          case "form":
            return <Form slice={slice} />
          case "custom-script":
            return <ScriptSlice slice={slice} />
          case "items-collection":
            return <ItemsCollection slice={slice} />
          case "text":
            return <TextSlice slice={slice} />
          case "pricing-plans":
            return <Pricing slice={slice} />
          case "menu":
            return <MenuSlice slice={slice} />
          case "gallery":
            return <GallerySlice slice={slice}/>
          default:
            return <DefaultSlice slice={slice} />
        }
      }
      return null
    })
  }
  return null
}
