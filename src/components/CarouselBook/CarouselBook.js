import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./CarouselBook.css";

const items = [
  {
    src: "../../assets/aColdSpell.jpeg",
    altText: "Image alt Text",
    header: "Heading",
    caption: "Content here",
  },
  {
    src: "../../assets/Held.jpeg",
    altText: "Image alt Text",
    header: "Heading",
    caption: "Content here",
  },
  {
    src: "../../assets/theRestIsHistory2.jpeg",
    altText: "Image alt Text",
    header: "Heading",
    caption: "Content here",
  },
];

class CarouselBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="carouselCont">
            <div className="ImgCont">
              <img
                width="100%"
                src={require("../../assets/theRestIsHistory2.jpeg")}
                alt={item.altText}
              />
            </div>
            <div className="TextCont">
              <CarouselCaption
                captionHeader={item.header}
                captionText={item.caption}
              />
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          className="trustedMechCarousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

//   export default CarouselExample ;

// const CarouselBook = () => {
//   return <div></div>;
// };

export default CarouselBook;
