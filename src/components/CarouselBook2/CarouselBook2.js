import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./CarouselBook2.css";

const items = [
  {
    src: "./assets/aColdSpell.jpeg",
    altText: "Image alt Text",
    header: "A Cold Spell",
    caption:
      "Ice has confounded, delighted and fascinated us since the first sparks of art and culture in Europe and it now underpins the modern world. Without ice, we would not feed ourselves or heal our sick as we do, and our towns and cities, countryside and oceans would look very different. Science would not have progressed along the avenues it did and our galleries and libraries would be missing many masterpieces.",
  },
  {
    src: "./assets/Held.jpeg",
    altText: "Image alt Text",
    header: "Held",
    caption:
      "1917. On a battlefield near the River Escaut, John lies in the aftermath of a blast, unable to move or feel his legs. Struggling to focus his thoughts, he is lost to memory – a chance encounter in a pub by a railway, a hot bath with his lover on a winter night, his childhood on a faraway coast – as the snow falls.",
  },
  {
    src: "./assets/theRestIsHistory2.jpeg",
    altText: "Image alt Text",
    header: "The Rest is History",
    caption:
      "From the chart-topping podcast The Rest is History, a whistle-stop tour through the past – from Alexander the Great to Tolkien, the Wars of the Roses to Watergate. The nation's favourite historians Tom Holland and Dominic Sandbrook take on the most curious moments in history, answering the questions we didn't even think to ask:",
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
    const slides = items.map((item, i) => {
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
                src={require(`${item.src}`)}
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
