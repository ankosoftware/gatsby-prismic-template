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
                  <div className="features-accordion-img">
                    <Image alt="img" image={item.image}/>
                  </div>
                  <div className="mx-0 mx-md-5 mt-3 mt-md-0 features-accordion-body">
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
        case "list-numbered":
          return (
            <div>
              {items.map((item, index) => {
                return (
                  <div className="d-flex flex-wrap flex-md-nowrap mb-5">
                    <div className="list-numbered-number-block">
                      <div className="number">{index + 1}</div>
                    </div>
                    <div className="ml-0 ml-md-5 feature-list-body">
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
            <div>
              {items.map((item) => {
                return (
                  <div className="d-flex flex-wrap flex-md-nowrap mb-4">
                    <div className="list-image-img mx-auto mx-md-0 mb-4 mb-md-0">
                      <Image image={item.image}/>
                    </div>
                    <div className="ml-0 ml-md-5 mb-3 feature-list-body">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                      <div className="">
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
                    <div className="ml-5 feature-list-body">
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
                    <div className="col-1-img mx-auto">
                      <Image image={item.image}/>
                    </div>
                    <div className="col-1-body">
                        <div className="mb-4">
                          <RichText render={item.title}/>
                        </div>
                        <RichText render={item.text}/>
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
                    <div className="col-2-small-body">
                    <div className="ml-4 mb-3">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                      <div className="mb-4 ml-4">
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
        case "col-3-detailed":
          return (
            <div className="row">
              {items.map(item => {
                return (
                  <div className="col-12 col-md-4 mb-4">
                    <div className="mx-auto mb-4 col-3-img">
                      <Image image={item.image}/>
                    </div>
                    <div className="col-3-body">
                    <div className="mb-5 text-content text-center">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                    <div className="text-center">
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
        case "col-4-detailed":
          return (
            <div className="row">
              {items.map(item => {
                return (
                  <div className="col-12 col-md-3 mb-4">
                    <div className="mx-auto mb-4 col-4-img">
                      <Image image={item.image}/>
                    </div>
                    <div className="col-4-body">
                    <div className="mb-5">
                      <RichText render={item.title}/>
                      <RichText render={item.text}/>
                    </div>
                    <div className="text-center">
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
        case "col-4-detailed-small-image":
          return (
            <div className="row">
              {items.map(item => {
                return (
                  <div className="d-flex col-12 col-md-3 mb-4">
                    <div className="mx-auto mb-4 col-4-small-img">
                      <Image image={item.image}/>
                    </div>
                    <div className="ml-3 col-4-small-body">
                      <div className="mb-5 text-content text-left">
                        <RichText render={item.title}/>
                        <RichText render={item.text}/>
                      </div>
                      <div className="text-center">
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
            <div className="row">
              {items.map(item => {
                return (
                    <div className="col-12 col-md-4 mb-4">
                      <div className="py-4 shadow">
                      <div className="mx-auto mb-4 block-3-img text-center">
                        <Image image={item.image}/>
                      </div>
                        <div className="block-3-body">
                      <div className="mb-5 text-content text-center">
                        <RichText render={item.title}/>
                        <RichText render={item.text}/>
                      </div>
                      <div className="text-center">
                        <CustomLink
                          link={item.link}
                          className={getLinkClass(item.link_style, "link")}>
                          {item.link_text}
                        </CustomLink>
                      </div>
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
                        <div className="text-center">
                        <Image image={item.image}/>
                        </div>
                        <div className="carousel-caption position-static d-block mx-auto">
                          <RichText render={item.title}/>
                          <RichText render={item.text}/>
                          <div className="text-center mb-5">
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
