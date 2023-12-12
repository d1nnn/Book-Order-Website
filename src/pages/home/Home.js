import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";

function Home() {
  return (
    <div>
      <div className="otm">
        <h2>Also out this month</h2>
      </div>
      <ProductsCarousel />
      <h2>News</h2>
      <h2>Available in hardback</h2>
      <h2>The latest news </h2>
    </div>
  );
}

export default Home;
