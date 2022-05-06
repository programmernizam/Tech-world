import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="home-banner"> 
      <Carousel fade>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/MSX4syC/asset-11.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-flex h-100 justify-content-center align-items-center text-center">
            <div className="text-dark banner-content">
              <h5>Latest Collections</h5>
              <h2 className="display-4 fw-bolder">GRAVE YOUR GADGET</h2>
              <button className="btn btn-danger rounded-0 px-4">SHOP NOW</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/BwzPnc1/asset-12.png"
            alt="Second slide"
          />

          <Carousel.Caption className="d-flex h-100 justify-content-center align-items-center text-center">
          <div className="text-dark banner-content">
              <h5  className="text-white">Latest Collections</h5>
              <h2 className="text-white display-4 fw-bolder">SESSIONAL SALE</h2>
              <button className="btn btn-danger rounded-0 px-4 ">SHOP NOW</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
