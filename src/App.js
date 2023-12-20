import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import AboutUs from "./pages/about-us/AboutUs";
import Authors from "./pages/authors/Authors";
import AuthorsList from "./pages/authorsList/AuthorsList";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Page404 from "./pages/page404/Page404";
import Products from "./pages/products/Products";
import ProductsList from "./pages/productsList/ProductsList";
import Promotions from "./pages/promotions/Promotions";
import WishList from "./pages/wishlist/WishList";
import BookDataService from "./services/BookDataService";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function App() {
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
      {/* <Header /> */}
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
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/authors/:id" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route path="loading" element={<Loading />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
