import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import nature from '../../img/gallery/_DSC6149.jpg';
import nature_0 from '../../img/gallery/_DSC6150.jpg';
import nature_1 from '../../img/gallery/_DSC6153.jpg';
import nature_2 from '../../img/gallery/_DSC6155.jpg';
import nature_3 from '../../img/gallery/_DSC6156.jpg';
import nature_4 from '../../img/gallery/_DSC6157.jpg';
import nature_5 from '../../img/gallery/_DSC6158.jpg';


function GallerySummary() {
    const photos = [
        {
          src: nature,
          width: 4,
          height: 3
        },
        {
          src: nature_1,
          width: 4,
          height: 3
        },
        {
          src: nature_2,
          width: 4,
          height: 3
        },
        {
          src: nature_3,
          width: 4,
          height: 3
        },
        {
          src: nature_4,
          width: 4,
          height: 3
        },
        {
          src: nature_5,
          width: 4,
          height: 3
        },
      ];
      



  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default GallerySummary