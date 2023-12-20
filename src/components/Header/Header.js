import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import BookDataService from "../../services/BookDataService";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = BookDataService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, [currentUser]);

  const handleLogout = () => {
    BookDataService.logOut();
    setCurrentUser(undefined);
  };

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
              <Nav.Link as={Link} to="/authors">
                Authors
              </Nav.Link>

              <Nav.Link as={Link} to="/promotions">
                Promotions
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About-us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                {" "}
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="cartShopping p-1"
                />
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                <FontAwesomeIcon icon={faList} />
              </Nav.Link>
              {currentUser ? (
                <Nav.Link as={Link} onClick={handleLogout}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
