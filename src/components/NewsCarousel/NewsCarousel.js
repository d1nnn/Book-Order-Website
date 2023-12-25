import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
