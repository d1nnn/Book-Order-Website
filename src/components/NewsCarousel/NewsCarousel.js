import React from "react";
import ReactCardSlider from "react-card-slider-component";
// a slide object contains the image link, title and function/click event for when a user clicks on a card

// const NewsCarousel = () => {
//   const slides = [
//     {
//       image: "https://picsum.photos/200/300",
//       title: "This is a title",
//       description: "This is a description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/600/500",
//       title: "This is a second title",
//       description: "This is a second description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title",
//       description: "This is a third description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/500/400",
//       title: "This is a fourth title",
//       description: "This is a fourth description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/200/300",
//       title: "This is a fifth title",
//       description: "This is a fifth description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/800/700",
//       title: "This is a sixth title",
//       description: "This is a sixth description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/300/400",
//       title: "This is a seventh title",
//       description: "This is a seventh description",
//       clickEvent: sliderClick,
//     },
//   ];

//   return (
//     <div>
//       <ReactCardSlider slides={slides} />
//     </div>
//   );
// };
import Carousel from "react-bootstrap/Carousel";
import CardStyle from "../Card/Card";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./NewsCarousel.css";

const NewsCarousel = () => {
  return (
    <div className="news_carousel">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCarousel;
