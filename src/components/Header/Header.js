import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            BaBook
          </Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-between me-auto">
            <Nav className="">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/promotions">
                Promotions
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                AboutUs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
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
