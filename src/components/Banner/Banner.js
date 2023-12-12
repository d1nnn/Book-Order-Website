import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel_img"
            src={require("../../assets/book-banner111.jpg")}
          />
          <Carousel.Caption>
            <h3>Welcome to BaBook!</h3>
            <p>This is where you can get all the books that you want</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={require("../../assets/book-banner22.jpg")} />
          <Carousel.Caption>
            <h3>Best books for you!</h3>
            <p>
              We guarrantee that you will have best quality books like no other
              before
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={require("../../assets/book-banner33.jpg")} />
          <Carousel.Caption>
            <h3>Lots of books!</h3>
            <p>
              BaBook's library contains all the world's most famous for you to
              choose!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
