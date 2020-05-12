import React from "react"
import { Accordion } from "./accordion.component"
import { Image } from "./image.component"
import { CustomLink } from "./custom-link.component"
import { getLinkClass } from "../../utils/styles"
import { RichText } from "./rich-text.component"

export const Collection = ({ type, items }) => {
      switch (type) {
        case "accordion":
          return (
            <Accordion items={items} renderContent={item => {
              return (
                <div className="d-flex flex-wrap flex-md-nowrap">
                  <div className="features-accordion-image">
                    <Image width="200px" alt="img" image={item.image}/>
                  </div>
                  <div className="mx-0 mx-md-5 mt-3 mt-md-0">
                    <RichText render={item.text}/>
                    <div>
                      <CustomLink
                        link={item.link}
                        className={`btn-sm ${getLinkClass(item.link_style, "link")}`}>
                        {item.link_text}
                      </CustomLink>
                    </div>
                  </div>
                </div>
              )
            }}/>
          )
        case "gallery":
          return (
            <div className="container our-partner-wrapper">
              <div className="mx-auto w-90">
                <div className="row our-partner-item">
                  {items.map(item => {
                    return (
                      <div className="our-partner-col col-sm-6 col-md-3">
                        <Image image={item.image}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        case "list-numbered":
          return (
            <div>
              {items.map((item, index) => {
                return (
                  <div className="d-flex flex-wrap flex-md-nowrap mb-5">
                    <div className="list-numbered-number-block">
                      <div className="number">{index + 1}</div>
                    </div>
                    <div className="ml-0 ml-md-5 mw-737">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                      <div className="feature-list-btn">
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "list-image":
          return (
            <div className="feature-slice">
              {items.map((item) => {
                return (
                  <div className="d-flex flex-wrap flex-md-nowrap mb-4">
                    <div className="list-image-img mx-auto mx-md-0 mb-4 mb-md-0">
                      <Image image={item.image}/>
                    </div>
                    <div className="ml-0 ml-md-5 mb-3 mw-737">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                      <div className="feature-list-btn">
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "list-process":
          return (
            <div className="mw-737 mx-auto">
              {items.map((item, index) => {
                return (
                  <div className="d-flex mb-4 position-relative list-process-item">
                    <div className="process-circle"></div>
                    <div className="ml-5">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                      <div className="feature-list-btn">
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "col-1-detailed":
          return (
            <div>
              {items.map(item => {
                return (
              <div className="d-flex mb-5 col-1-mixed align-items-center">
                    <div className="col-1-image">
                      <Image image={item.image}/>
                    </div>
                    <div className="col-1-content">
                  <div className="text-content col-1-text">
                        <div className="mb-4">
                          <RichText render={item.title}/>
                        </div>
                        <RichText render={item.text}/>
                      </div>
                      <CustomLink
                        link={item.link}
                        className={getLinkClass(item.link_style, "link")}>
                        {item.link_text}
                      </CustomLink>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "col-2-detailed-small-image":
          return (
            <div className="row">
              {items.map(item => {
                return (
                  <div className="col-md-6 d-flex">
                    <div className="col-2-small-img">
                      <Image image={item.image}/>
                    </div>
                    <div className="ml-4 mb-3">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "col-3-detailed":
          return (
            <div className="row cols-items feature-slice">
              {items.map(item => {
                return (
                  <div className="col-12 col-md-4 mb-4">
                    <div className="mx-auto mb-4">
                      <Image image={item.image}/>
                    </div>
                    <div className="mb-5 text-content text-center">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                    <div>
                      <CustomLink
                        link={item.link}
                        className={getLinkClass(item.link_style, "link")}>
                        {item.link_text}
                      </CustomLink>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "col-4-detailed":
          return (
            <div className="row cols-items feature-slice">
              {items.map(item => {
                return (
                  <div className="col-6 col-md-3 mb-4">
                    <div className="mx-auto mb-4">
                      <Image image={item.image}/>
                    </div>
                    <div className="mb-5 text-content text-left">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                    <div>
                      <CustomLink
                        link={item.link}
                        className={getLinkClass(item.link_style, "link")}>
                        {item.link_text}
                      </CustomLink>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "col-4-detailed-small-image":
          return (
            <div className="row cols-items col-4-small-items feature-slice">
              {items.map(item => {
                return (
                  <div className="d-flex col-6 col-md-3 mb-4">
                    <div className="mx-auto mb-4">
                      <Image image={item.image}/>
                    </div>
                    <div>
                      <div className="mb-5 text-content text-left">
                        <RichText render={item.title}/>
                        <RichText render={item.text}/>
                      </div>
                      <div>
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "block-3-detailed":
          return (
            <div className="row cols-items feature-slice">
              {items.map(item => {
                return (
                  <div className="mx-auto">
                    <div className="col-12 col-md-4 mb-4 block-3-wrapper shadow-sm">
                      <div className="line bg-primary mb-4"></div>
                      <div className="mx-auto mb-4">
                        <Image image={item.image}/>
                      </div>
                      <div className="mb-5 text-content text-center">
                        <RichText render={item.title}/>
                        <RichText render={item.text}/>
                      </div>
                      <div>
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        case "carousel":
          return (
            <div className="features-carousel">
              <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  {items.map((item, index) => {
                    return (
                      <li data-target="#carouselIndicators" data-slide-to={index}
                          className={index === 0 ? "active" : ""}></li>
                    )
                  })}
                </ol>
                <div className="carousel-inner">
                  {items.map((item, index) => {
                    return (
                      <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <Image image={item.image}/>
                        <div className="carousel-caption position-static d-block mb-5 mw-737 mx-auto">
                          <RichText render={item.title}/>
                          <RichText render={item.text}/>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button"
                   data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button"
                   data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          )
        default:
          return null
      }
}
