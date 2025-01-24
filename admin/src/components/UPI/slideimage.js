import React from "react";
import { Carousel } from "react-bootstrap"

const ImageCarousel = ({ images }) => {
  return (
    <Carousel interval={null} >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              height: "200px", 
              objectFit: "cover", 
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
