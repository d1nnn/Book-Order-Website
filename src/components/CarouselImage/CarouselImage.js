import React from "react";

const CarouselImage = () => {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item className="book11">
          <img
            className="book1"
            src={require("../../assets/aColdSpell.jpeg")}
          />
          <Carousel.Caption>
            <h3>Welcome to BaBook!</h3>
            <p>This is where you can get all the books that you want</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="book11">
          <img className="book2" src={require("../../assets/Held.jpeg")} />
          <Carousel.Caption>
            <h3>Best books for you!</h3>
            <p>
              We guarrantee that you will have best quality books like no other
              before
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="book11">
          <img
            className="book3"
            src={require("../../assets/theRestIsHistory2.jpeg")}
          />
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

export default CarouselImage;
