import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import CarouselBook2 from "../../components/CarouselBook2/CarouselBook2";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
import BookDataService from "../../services/BookDataService";
import CarouselBook from "../../components/CarouselBook/CarouselBook";

const Home = () => {
  return (
    <div>
      <section class="aboutUs">
        <div class="aboutUs_content">
          <div class="about_left">
            <img src={require("../../assets/intro2.jpg")} alt="" />
          </div>
          <div class="about_right">
            <h1>Introduction</h1>
            <p>
              Books is your one-stop shop for all your bookish needs. We are an
              online bookstore dedicated to providing our customers with a wide
              selection of books at affordable prices. Whether you're looking
              for the latest bestsellers, classic novels, or hidden gems, we
              have something for everyone. We are passionate about books and
              believe that everyone should have access to great reading
              material.
            </p>
          </div>
        </div>
      </section>
      <section class="mission">
        <div class="mission_content">
          <div class="mission_left">
            <h1>Mission</h1>
            <p>
              BaBooks is committed to fostering a love of reading by providing
              everyone with accessible, diverse, and enriching literature. We
              are committed to providing our customers with a positive and
              friendly shopping experience.
            </p>
          </div>
          <div class="mission_right">
            <img src={require("../../assets/mission.jpg")} alt="" />
          </div>
        </div>
      </section>
      <div className="otm">
        <h2>Also out this month</h2>
      </div>
      <CarouselBook />
      <div class="news">
        <h2>News</h2>
      </div>
      <NewsCarousel />
    </div>
  );
};

export default Home;
