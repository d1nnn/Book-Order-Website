import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsList from "./pages/productsList/ProductsList";
import News from "./pages/news/News";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Promotions from "./pages/promotions/Promotions";
import Banner from "./components/Banner/Banner";
import ProductsCarousel from "./components/ProductsCarousel/ProductsCarousel";
import CarouselBook from "./components/CarouselBook/CarouselBook";
import AuthorsList from "./pages/authorsList/AuthorsList";
import Cart from "./pages/cart/Cart";
import Page404 from "./pages/page404/Page404";
import WishList from "./pages/wishlist/WishList";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";
import Authors from "./pages/authors/Authors";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <div>
      <Header />
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
