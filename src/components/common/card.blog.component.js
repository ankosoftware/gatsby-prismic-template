import React from "react"
import { Image } from "./image.component"
import { CustomLink } from "./custom-link.component"
import { PlainStructuredText } from "./plain-structured-text.component"
import Moment from "react-moment"

export const Card = ({ item }) => {
  return (
    <div className="col-lg-6 col-xl-4 col-12 mb-4">
      <div className="card card-blog p-0">
        <CustomLink
          link={{ _meta: item.node._meta, _linkType: "Link.document" }}
        >
          <Image image={item.node.image} className="card-img-top" />
          <div className="card-body">
            <div className="card-text">
              <div className="mb-2">
                <PlainStructuredText structuredText={item.node.title} />
              </div>
              <div>
                <small className="">
                  <Moment format="MMM Do YYYY">
                    {item.node._meta.lastPublicationDate}
                  </Moment>
                </small>
              </div>
            </div>
          </div>
        </CustomLink>
      </div>
    </div>
  )
}
