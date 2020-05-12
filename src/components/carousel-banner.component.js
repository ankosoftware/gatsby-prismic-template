import React from "react"
import { Image } from "./common/image.component"
import { RichText } from "prismic-reactjs"


export const Carousel = ({slides}) => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      {slides.map((slide, index) => {
        return <li className={(index === 0 ? 'active' : '')} data-target="#carouselExampleIndicators" data-slide-to={index}></li>
      })}
    </ol>
    <div className="carousel-inner">
      {slides.map((slide, index) => {
        return <div className={"carousel-item" + (index === 0 ? ' active' : '')}>
          <Image image={slide.background_image}/>
          <div className="slider-overlay">
            <div className="carousel-header text-white text-center">
              <RichText render={slide.content} />
            </div>
          </div>
        </div>
      })}
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <div className="carousel-control-bg prev">
      <span className="carousel-control-icon carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
      </div>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <div className="carousel-control-bg next">
      <span className="carousel-control-icon carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
      </div>
    </a>
  </div>
)