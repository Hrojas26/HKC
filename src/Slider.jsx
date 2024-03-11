import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
  <div>

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/img1.jpg"
          alt="First slide"
          />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/img2.jpg"
          alt="Second slide"
          />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/img/img3.jpg"
          alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default DarkVariantExample;