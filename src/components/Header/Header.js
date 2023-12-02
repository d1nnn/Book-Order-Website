import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">BaBook</Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-around me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/promotions">Promotions</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/about-us">AboutUs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/contact">Login</Nav.Link>
            <Nav.Link href="/contact">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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

export default Header;
