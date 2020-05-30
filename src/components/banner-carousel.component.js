import React from "react"

export const BannerCarousel = ({ id = "", slides = [], render = () => null }) => (
  <div id={id} className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {(slides.length > 1 &&
        slides.map((slide, index) => {
          return <li className={index === 0 ? "active" : ""} data-target={`#${id}`} data-slide-to={index} />
        })) ||
        null}
    </ol>
    <div className="carousel-inner">
      {slides.map((slide, index) => {
        return <div className={"carousel-item" + (index === 0 ? " active" : "")}>{render(slide)}</div>
      })}
    </div>
    {slides.length > 1 ? (
      <>
        <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
          <div className="carousel-control-bg prev">
            <span className="carousel-control-icon carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </div>
        </a>
        <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
          <div className="carousel-control-bg next">
            <span className="carousel-control-icon carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </div>
        </a>
      </>
    ) : null}
  </div>
)
