import React, { useState, useCallback } from "react"
import { Section } from "../common/section.component"
import { RichText } from "../common/rich-text.component"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

export const GallerySlice = ({ slice }) => {
  const { primary, fields, label } = slice
  const { bgColor, bgImage, anchor } = primary
  const photos = fields.map(field => {
    console.log(field.image)
    return {
      src: field.image.url,
      width: field.image.dimensions.width,
      height: field.image.dimensions.height,
    }
  })
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <Section
      backgroundImage={bgImage}
      backgroundColor={bgColor}
      className={`gallery-slice ${label ? "gallery-slice-" + label : ""}`}
    >
      <div className="container gallery-container-header text-center mb-5">
        <RichText className="gallery-slice-title" render={primary.title} />
        <RichText className="gallery-slice-text" render={primary.text} />
      </div>
      <Gallery photos={photos} onClick={openLightbox} direction={label || "row"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Section>
  )
}
