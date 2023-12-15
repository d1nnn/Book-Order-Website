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
        <Card.Img variant="top" src={require("../../assets/9bestbook.webp")} />
        <Card.Body>
          <Card.Title>
            9 best books about listening to improve your communication skills
          </Card.Title>
          <Card.Text>
            Listening is the underrated, overlooked stepchild to speaking, yet
            it’s paramount for excellent communication.
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../../assets/3benefit.webp")} />
        <Card.Body>
          <Card.Title>3 surprising benefits of rereading books</Card.Title>
          <Card.Text>
            Bibliophiles who reread books time and time again know the easy
            comfort of sinking into a familiar story.
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../../assets/14Ann.webp")} />
        <Card.Body>
          <Card.Title>14 best Ann Patchett books, ranked</Card.Title>
          <Card.Text>
            Trying to pick the best Ann Patchett book is like trying to choose
            your favorite Taylor Swift song — there are way too many good ones,
            which makes ranking almost impossible.
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCarousel;
